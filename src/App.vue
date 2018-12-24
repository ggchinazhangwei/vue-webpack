<template>
    <div class="website-view" layout="column" layout-align="center center">
        <div>导航栏</div>
        <router-view></router-view>
        <div>尾部</div>
    </div>
</template>
<script>
import Axios from 'axios';
export default {
    data(){
        return {

        }
    },
    methods: {  
        init(){
            console.log(Axios);
            Axios.post('http://localhost:3000',{
                params: {
                    userName: 'password'
                }
            }).then(res => {
                console.log(res.data);
            })
        }
    },
    mounted () {
        this.init();
    }
}
</script>