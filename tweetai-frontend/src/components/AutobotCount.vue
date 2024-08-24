<template>
  <div>
    <h1>Autobots Created: {{ autobotCount }}</h1>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      autobotCount: 0,
    };
  },
  created() {
    this.fetchAutobotCount();
    setInterval(this.fetchAutobotCount, 10000); // Update every 10 seconds
  },
  methods: {
    async fetchAutobotCount() {
      const response = await axios.get("http://localhost:3006/api/autobots");
      this.autobotCount = response.data.count;
    },
  },
};
</script>
