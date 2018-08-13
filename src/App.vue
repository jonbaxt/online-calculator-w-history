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

#calcOut {
  width: 600px;
  height: 700px;
  background: gray;
  border: solid gray 1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px;
  /* padding: 0px; */
}
#calRow {
  display: flex;
  flex-direction: row;
}

#calcOut { 
 div { 
   button {
  width: 75px;
  height: 75px;
  font-size: 30px;
 }
 }
}
#calcTop {
  width: 300px;
  height: 50px;
  background: lightblue;
}
#numArea {
  text-align: right;
  font-size: 30px;
  font-weight: bold;
  margin-top: 10px;
  margin-right: 15px;
}
</style>
