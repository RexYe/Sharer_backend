<template>
    <div class="register">
        <div class="sharer-log">
            <img src="../../img/logo.png">
            <span>注册书二</span>
        </div>
        <div class="register-container">
            <mt-field label="手机号" placeholder="请输入手机号" type="tel" :attr="{ maxlength: 11 }" v-model="phone" state=""></mt-field>
            <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
            <mt-field label="用户名" placeholder="请输入用户名" v-model="nickname"></mt-field>
            <mt-field label="验证码" id="code-div" v-model="captcha">
                <div class="code" id="code" @click="createCode"></div>
            </mt-field>
            <mt-button type="primary" size="large" class="register-btn" @click="register_btn">注册</mt-button>
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
            state:''
        }
    },
    methods:{
        register_btn() {
            const t = this
            if(t.phone.length !== 11) {
                MessageBox('提示', '手机号不正确')
            }
            if(t.password.length < 6) {
                MessageBox('提示', '密码不得少于6位')
            }
            if(t.nickname.length < 1) {
                MessageBox('提示', '用户名不得为空')
            }
            if(t.captcha === t.code) {
                t.state='success'
                t.createCode()
                if(t.phone.length === 11 && t.password.length >= 6 && t.nickname.length !== 0) {
                    t._fetch_account_register()
                }
            }
            if(t.captcha !== t.code) {
                t.state='error'
                MessageBox('提示', '验证码错误')
                t.captcha = ''
                t.createCode()
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
                        window.sessionStorage.tel = t.phone
                        t.toOther('me',t.phone)
                          // t.toOther('/#')
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
        toOther(to,tel) {
             this.$router.push({ path: `${to}?tel=`+tel })
        },
        //生成验证码
        createCode() {
           const t = this
           var code = ''
           var codeLength = 4; //验证码的长度
           var checkCode = document.getElementById("code")
           var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
           for (var i = 0; i < codeLength; i++) {
               var charNum = Math.floor(Math.random() * 10)
               code += codeChars[charNum]
           }
           t.code = code
           if (checkCode) {
               checkCode.innerHTML = t.code
           }
        }
    },
    // mounted: function () {
    //     this.createCode()
    // },
}
</script>

<style lang="css">
</style>
