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
import { Field,Button,MessageBox} from 'mint-ui';
import Vue from 'vue';
import './Login.css';
Vue.component(Field.name, Field);
Vue.component(Button.name, Button);
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
        login_btn() {
            const that = this
            if(that.phone.length !== 11) {
                MessageBox('提示', '手机号不正确')
            }
            if(that.password.length < 6) {
                MessageBox('提示', '密码不得少于6位')
            }
            if(that.phone.length === 11 && that.password.length >= 6) {
                this._fetch_account_login()
            }
        },
        _fetch_account_login() {
            const t = this
            fetch(`http://101.132.71.185/api/account_login`, {
                 method: 'post',
                 body: 'telphone=' + t.phone + '&password=' + t.password,
                 headers: {
                     "Accept": "application/json",
                     "Content-Type": "application/x-www-form-urlencoded"
                 },
             })
             .then(re => re.json())
             .then(re => {
                  if(re.msg == 'success') {
                      window.sessionStorage.tel = t.phone;
                      MessageBox.alert('登录成功！').then(action => {
                          t.toOther('me',t.phone)
                      })
                  }
                  else if(re.msg == 'passwordError') {
                      MessageBox.confirm('密码错误，请重新输入').then(action => {
                          t.toOther('login')
                      })
                  }
                  else if(re.msg == 'notRegisterd') {
                      MessageBox.confirm('手机号未注册，前往注册?').then(action => {
                          t.toOther('register')
                      })
                  }
                }
              )
        },
        toOther(to,tel) {
             this.$router.push({ path: `${to}?tel=`+tel })
        }
    },
    mounted(){
    //  console.log(this);
   },

}
</script>

<style lang="css">
</style>
