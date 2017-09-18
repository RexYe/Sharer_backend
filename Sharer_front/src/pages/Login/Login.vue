<template>
  <div class="login">
    <div class="sharer-log">
        <img src="../../img/logo.png">
        <span>进入书二</span>
    </div>
    <div class="login-container">
        <mt-field label="手机号" placeholder="请输入手机号" type="tel" :attr="{ maxlength: 11 }" v-model="phone" state=""></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
        <mt-button type="primary" size="large" @click="login_btn">登录</mt-button>
        <div class="go-login-div">
          <span>还没账号？</span>
          <a href="#/register">马上注册</a>
        </div>
    </div>
  </div>
</template>

<script>
import './Login.css'
export default {
  name:'Login',
  data(){
    return {
      phone:'',
      password:'',
      username:'',
      captcha:'',
      state:'success'
    }
  },
  methods:{
    login_btn(){
      console.log(this);
    }
  }
}
</script>

<style lang="css">
</style>
