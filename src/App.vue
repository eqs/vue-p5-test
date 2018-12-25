<template>
    <div id="app">
        <div class="container border">
            <div class="d-flex justify-content-center" id="p5Canvas"></div>
        </div>
    </div>
</template>

<script>
import P5Sketch from './P5Sketch'

export default {
    name: 'app',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }, 

    mounted() {
        this.p = P5Sketch();
        this.p.testFunction();
    }
}
</script>

