<template>
    <div id="home">
        <div class="box wow bounceInUp" style="margin-top:1000px;">wow</div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            wow:null
        }
    },
    mounted(){
        this.init();
    },
    methods:{
        init(){
            this.wow = new WOW();
            this.wow.init();
            alert(process.env.NODE_ENV);
        }
    }
}
</script>

