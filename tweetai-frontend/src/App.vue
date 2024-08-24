<template>
  <div id="app">
    <AutobotList />
  </div>
</template>

<script>
import AutobotList from './components/AutobotList.vue';

export default {
  name: 'App',
  components: {
    AutobotList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
}
</style>
