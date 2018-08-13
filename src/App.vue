<template>
  <div id="app">
    <div id='calcOut'>
    <h1>Online Calculator</h1>
      <div id='calcTop' >
        <h1 id='numArea'>{{ numberDisplay }}</h1>
      </div>

      <div id='calRow'>
      <button @click="cPressed">C</button> 
      <button>()</button> 
      <button>%</button> 
      <button>/</button> 
      </div>

      <div id='calRow'>
      <button @click="num7Pressed">7</button>
      <button @click="num8Pressed">8</button>
      <button @click="num9Pressed">9</button> 
      <button>X</button> 
      </div>
      <div id='calRow'>
      <button @click="num4Pressed">4</button>
      <button @click="num5Pressed">5</button>
      <button @click="num6Pressed">6</button> 
      <button>-</button> 
      </div>
      <div id='calRow'>
      <button @click="num1Pressed" >1</button> 
      <button @click='num2Pressed' >2</button>
      <button @click="num3Pressed">3</button>
      <button>+</button>
      </div>
      <div id='calRow'>
      <button>.</button>
      <button @click="num0Pressed">0</button>
      <button>+/-</button>
      <button>=</button>
      </div>
    </div>
    
    
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Hey Buddy!!",
      numberDisplay: 0
    };
  },
  methods: {
    num0Pressed() {
      if( this.numberDisplay === 0 ){
        this.numberDisplay = 0;
      } else { 
        this.numberDisplay += '0';
      }
    },
    num1Pressed() {
      if (this.numberDisplay === 0) {
        this.numberDisplay = "1";
      } else {
        this.numberDisplay += "1";
      }
    },
    num2Pressed() {
      if (this.numberDisplay === 0) {
        this.numberDisplay = "2";
      } else {
        this.numberDisplay += "2";
      }
    },
    num3Pressed() {
      if (this.numberDisplay === 0) {
        this.numberDisplay = "3";
      } else {
        this.numberDisplay += "3";
      }
    },
    num4Pressed() {
      if (this.numberDisplay === 0) {
        this.numberDisplay = "4";
      } else {
        this.numberDisplay += "4";
      }
    },
    num5Pressed() {
      if (this.numberDisplay === 0) {
        this.numberDisplay = "5";
      } else {
        this.numberDisplay += "5";
      }
    },
    num6Pressed() {
      if ((this.numberDisplay === 0)) {
        this.numberDisplay = "6";
      } else {
        this.numberDisplay += "6";
      }
    },
    num7Pressed() {
      if ((this.numberDisplay === 0)) {
        this.numberDisplay = "7";
      } else {
        this.numberDisplay += "7";
      }
    },
    num8Pressed() {
      if ((this.numberDisplay === 0)) {
        this.numberDisplay = "8";
      } else {
        this.numberDisplay += "8";
      }
    },
    num9Pressed() {
      if( this.numberDisplay === 0 ) {
        this.numberDisplay = '9';
      } else { 
        this.numberDisplay += '9';
      }
    },
    cPressed() {
      this.numberDisplay = 0;
    }
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
