<template>
  <div class="register-container">
    <div class="telphone">
      <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
    </div>
    <div class="password">
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    </div>
    <div class="name">
      <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
    </div>
  </div>
</template>

<script>
import { Field } from 'mint-ui';
import Vue from 'vue';

Vue.component(Field.name, Field);
export default {
  name:'Register',

}
</script>

<style lang="css">
</style>
