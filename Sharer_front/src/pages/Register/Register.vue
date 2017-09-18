<template>
  <div class="register">
    <div class="sharer-log">
      <img src="../../img/logo.png">
      <span>进入书二</span>
    </div>
    <div class="register-container">
        <mt-field label="手机号" placeholder="请输入手机号" type="tel" :attr="{ maxlength: 10 }" v-model="phone"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
        <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
        <mt-field label="验证码" v-model="captcha">
        <img src="../../img/info.png" height="20px" width="20px">
        </mt-field>
        <mt-button type="primary" size="large" @click="register_btn">注册</mt-button>
        <span>已有账号</span>
    </div>
  </div>
</template>

<script>
import { Field,Button} from 'mint-ui';
import Vue from 'vue';
import './Register.css'

Vue.component(Field.name, Field);
Vue.component(Button.name, Button);
export default {
  name:'Register',
  data(){
    return {
      phone:'',
      password:'',
      username:'',
      captcha:''
    }
  },
  methods:{
    register_btn(){
      console.log(this.phone);
    }
  }

}
</script>

<style lang="css">
</style>
