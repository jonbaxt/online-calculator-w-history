<template>
    <div id='solutionMain'>
        <h3>Stored Solutions</h3>
        {{this.getData()}}
    </div>    
</template>

<script>
import axios from 'axios';
export default {
    components: {

    },
    data() {
        return {
            calculations: [],
        }
    },
    methods: {
        getData() {
            console.log('getdata ran');
            axios.get('http://localhost:3013/api/getCalculations').then( res => this.calculations = res.data).catch( err => console.log(err));
            // axios.get('http://localhost:3013/api/getCalculations').then( res => this.calculations = res.data).catch( err => console.log(err));
            console.log(this.calculations);
        },
    }
}
</script>

<style lang="scss">
    #solutionMain {
        width: 400px;
        height: 560px;
        background: pink;
    }
</style>
