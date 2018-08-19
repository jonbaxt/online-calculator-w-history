<template>
  <div id="app">
    <div id='calcOut'>
    <h1>Online Calculator</h1>
    <arithscreen :num1Store='num1Store' :num2Store='num2Store' :operatorStore='operatorStore' :finalSolutionStore='finalSolutionStore' ></arithscreen>
      <div id='calcTop' >
        <div>
        <h1 id='opArea'>{{ operatorDisplay }}</h1>
        </div>
        <div>
        <h1 id='numArea'>{{ numberDisplay }}</h1>
        </div>
      </div>

      <div id='calRow'>
      <button @click="cPressed">C</button> 
      <button>()</button> 
      <button @click="remainderPressed">%</button> 
      <button @click="dividePressed">/</button> 
      </div>

      <div id='calRow'>
      <button @click="num7Pressed">7</button>
      <button @click="num8Pressed">8</button>
      <button @click="num9Pressed">9</button> 
      <button @click="timesPressed">X</button> 
      </div>
      <div id='calRow'>
      <button @click="num4Pressed">4</button>
      <button @click="num5Pressed">5</button>
      <button @click="num6Pressed">6</button> 
      <button @click="minusPressed">-</button> 
      </div>
      <div id='calRow'>
      <button @click="num1Pressed" >1</button> 
      <button @click='num2Pressed' >2</button>
      <button @click="num3Pressed">3</button>
      <button @click="plusPressed" >+</button>
      </div>
      <div id='calRow'>
      <button @click="dotPressed">.</button>
      <button @click="num0Pressed">0</button>
      <button @click="plusMinusPressed" >+/-</button>
      <button @click='equalPressed'>=</button>
      </div>
    </div>
  </div>
</template>

<script>
import ArithmeticScreen from './ArithmeticScreen.vue';
export default {
  components: {
    arithscreen: ArithmeticScreen,
  },
  data() {
    return {
      msg: "Hey Buddy!!",
      numberDisplay: 0,
      operatorDisplay: '',
      num1Store: 0,
      operatorStore: '',
      num2Store: 0,
      finalSolutionStore: 0,
      solutionsArray: ['2 + 2 = 4', '1 + 1 = 2' ],
    
    };
  },
  methods: {
    dotPressed() {
      if( this.numberDisplay === 0){
        this.numberDisplay = '0.';
      } else {
        this.numberDisplay += '.';
      }
    },
    num0Pressed() {
      if( this.numberDisplay === 0){
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
      this.num1Store = 0;
      this.num2Store = 0;
      this.operatorDisplay = '';
      this.operatorStore = '';
      this.finalSolutionStore = 0;
    },
    plusPressed() {
        this.operatorDisplay = '+';
        this.operatorStore = '+';
        if(this.num1Store === 0){
        this.num1Store = Number(this.numberDisplay);
        this.numberDisplay = 0;
        // this.numberDisplay = 0;
        }

    },
    minusPressed() {
      this.operatorDisplay = '-';
      this.operatorStore = '-';
      if(this.num1Store === 0) {
        this.num1Store = Number(this.numberDisplay);
        this.numberDisplay = 0;
      }
    },
    plusMinusPressed() {
      let tempStore = this.numberDisplay;
      if(tempStore.charAt(0) === '-'){
        this.numberDisplay = tempStore.slice(1);
      } else {
        this.numberDisplay = '-' + tempStore;
      }
    },
    timesPressed() {
      this.operatorDisplay = 'X';
      this.operatorStore = 'X';
      if(this.num1Store === 0){
        this.num1Store = Number(this.numberDisplay);
        this.numberDisplay = 0;
      }
    },
    dividePressed() {
      this.operatorDisplay = '/';
      this.operatorStore = '/';
      if(this.num1Store === 0){
        this.num1Store = Number(this.numberDisplay);
        this.numberDisplay = 0;
      }
    },
    remainderPressed() {
      this.operatorDisplay = '%';
      this.operatorStore = '%';
      if( this.num1Store === 0 ){
        this.num1Store = Number(this.numberDisplay);
        this.numberDisplay = 0;
      }
    },

    equalPressed() {
      this.num2Store = Number(this.numberDisplay);
      if(this.operatorStore === '+'){
        this.finalSolutionStore = this.num1Store + this.num2Store;
        // this.operatorStore = '';
      } else if( this.operatorStore === '-') {
        this.finalSolutionStore = this.num1Store - this.num2Store;
      } else if( this.operatorStore === 'X') {
        this.finalSolutionStore = this.num1Store * this.num2Store;
      } else if( this.operatorStore === '/') {
        this.finalSolutionStore = this.num1Store / this.num2Store;
      } else if( this.operatorStore === '%' ) {
        this.finalSolutionStore = this.num1Store % this.num2Store;
      }


      this.numberDisplay = 0;
      this.operatorDisplay = '';
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
#numArea {
  text-align: right;
  font-size: 30px;
  font-weight: bold;
  margin-top: 10px;
  margin-right: 15px;
}
#opArea {
    text-align: left;
  font-size: 30px;
  font-weight: bold;
  margin-top: 10px;
  margin-left: 15px;
}
</style>
