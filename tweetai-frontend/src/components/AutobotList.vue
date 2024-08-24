<template>
    <div>
      <h1>Autobots</h1>
      <p>Current Count: {{ autobots.length }}</p>
      <button @click="loadAutobots">Load Autobots</button>
      <ul v-if="autobots.length">
        <li v-for="autobot in autobots" :key="autobot.id">
          {{ autobot.username }} ({{ autobot.email }})
        </li>
      </ul>
      <p v-else>No Autobots found.</p>
      <p v-if="error">{{ error }}</p>
    </div>
  </template>
  
  <script>
  import apiService from '@/services/apiService.js';
  
  export default {
    data() {
      return {
        autobots: [],
        error: null,
      };
    },
    methods: {
      async loadAutobots() {
        this.error = null;
        try {
          const response = await apiService.getAutobots();
          return this.autobots = response?.data?.rows.slice(0, 10); // Display first 10 Autobots
        } catch (error) {
          if (error.response && error.response.status === 429) {
            this.error = 'Too many requests. Please try again later.';
          } else {
            console.log(error)
            this.error = 'An error occurred while fetching Autobots.';
          }
        }
      },
    },
  };
  </script>
  
  <style scoped>
  h1 {
    color: #333;
  }
  button {
    margin-bottom: 10px;
  }
  </style>
  