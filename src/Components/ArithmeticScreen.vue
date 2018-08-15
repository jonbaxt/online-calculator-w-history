<template>
    <div id='topBoard' >
        <div id='topBoard-currcalc'>
        <p id='topBoard-pTag'>{{ displayMessage() }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['num1Store', 'num2Store', 'operatorStore', 'finalSolutionStore'],
    data() {
        return {
            num1Item: this.num1Store,
            num2Item: this.num2Store,
        }
    },
    methods: {
        displayMessage() {
            if(this.operatorStore === ''){
                return '';
            } else if(this.num2Store === 0 && this.finalSolutionStore === 0){
                return this.num1Store + ' ' + this.operatorStore;
            } else {
                return this.num1Store + ' ' + this.operatorStore + ' ' + this.num2Store + ' = ' + this.finalSolutionStore;
            }
        }
    }
}
</script>

<style lang="scss">
    #topBoard {
        width: 300px;
        height: 55px;
        overflow: auto;
        /* border: 1px solid black; */
        background: lightblue;
        // box-shadow: 1px 1px 1px lightgray;

        &-pTag {
            text-align: right;
            margin-right: 25px;
        }

        &-currcalc {
            width: 99%;
            // border: 1px solid black;
        }
    }

</style>
