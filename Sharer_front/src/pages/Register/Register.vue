<template>
    <div class="register">
        <div class="sharer-log">
            <img src="../../img/logo.png">
            <span>进入书二</span>
        </div>
        <div class="register-container">
            <mt-field label="手机号" placeholder="请输入手机号" type="tel" :attr="{ maxlength: 11 }" v-model="phone" state=""></mt-field>
            <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
            <mt-field label="用户名" placeholder="请输入用户名" v-model="nickname"></mt-field>
            <mt-field label="验证码" v-model="captcha">
                <img src="../../img/info.png" height="20px" width="20px">
            </mt-field>
            <mt-button type="primary" size="large" @click="register_btn">注册</mt-button>
            <div class="go-login-div">
                <span>已有账号？</span>
                <a href="#/login">直接登录</a>
            </div>
        </div>
    </div>
</template>

<script>
import { Field,Button,MessageBox} from 'mint-ui';
import Vue from 'vue';
import './Register.css'
import DB from '../../app/db'

Vue.component(Field.name, Field);
Vue.component(Button.name, Button);
export default {
    name:'Register',
    data() {
        return {
            phone:'',
            password:'',
            nickname:'',
            captcha:'',
            state:'success'
        }
    },
    methods:{
        register_btn() {
            const that = this
            if(that.phone.length !== 11) {
                MessageBox('提示', '手机号不正确')
            }
            if(that.password.length < 6) {
                MessageBox('提示', '密码不得少于6位')
            }
            if(that.nickname.length < 1) {
                MessageBox('提示', '用户名不得为空')
            }
            if(that.phone.length === 11 && that.password.length >= 6 && that.nickname.length !== 0) {
                this._fetch_account_register()
            }
        },
        _fetch_account_register() {
            const t = this
            fetch(`http://101.132.71.185/api/account_register`, {
                 method: 'post',
                 body: 'telphone=' + t.phone + '&password=' + t.password + '&nickname=' + t.nickname,
                 headers: {
                     "Accept": "application/json",
                     "Content-Type": "application/x-www-form-urlencoded"
                 },
             })
             .then(re => re.json())
             .then(re => {
                  if(re.msg == 'success') {
                      MessageBox.alert('注册成功！').then(action => {
                          t.toOther('/#')
                      })
                  }
                  else if(re.msg == 'registerd telphone') {
                      MessageBox.confirm('该手机已被注册,前往登录?').then(action => {
                          t.toOther('login')
                      })
                  }
                }
              )
        },
        toOther(to) {
             this.$router.push({ path: `${to}` })
        }
    }
}
</script>

<style lang="css">
</style>
