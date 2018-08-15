<template>
  <div id="app">
    <basecalc></basecalc>
    </div>
</template>

<script>
import BaseCalculator from './Components/BaseCalculator.vue';
export default {
  components: {
    basecalc: BaseCalculator,
  },
  data() {
    return {
      msg: "Hey Buddy!!",
    };
  },
  methods: {
    
  },
  computed: {}
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin-top: 60px; */
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
