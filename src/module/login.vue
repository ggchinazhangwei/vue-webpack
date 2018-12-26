<template>
    <section>
        <div class="login">
            <el-input v-model="username" placeholder="用户名"></el-input>
            <el-input type="password" v-model="password" placeholder="密码"></el-input>
            <el-button type="primary" class="login-button" @click="login">登陆</el-button>
        </div>
    </section>        
</template>
<script>
import Axios from 'axios';

export default {
    data(){
        return {
            username: '',
            password: ''
        }
    },
    mounted(){
        this.init();
    },
    methods:{
        init(){ 
        },
        login(){
            let params = {
                username: this.username,
                password: this.password 
            };
            Axios.post('http://localhost:3001/login',{
                params
            }).then(res => {
                console.log(res.data);
                if(!res.data.success){
                    alert(res.data.message)
                }else{
                    window.localStorage.setItem('token',res.data.token);
                    this.$router.push({
                        name: 'home'
                    })
                }
            })
        }
    }
}
</script>
<style lang="scss">
    .login{
        margin: 50px auto;
        input{
            margin-bottom:10px; 
        }
        .login-button{
            display: block;
            margin: 10px auto;
        }
    }
</style>


