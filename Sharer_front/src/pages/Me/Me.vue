<template>
    <div class="me">
        <div class="user-photo-div">
            <div class="user-photo">
                <img src="../../img/avatar_man.png" >
            </div>
            <div class="user-name">
                <span>{{this.info.nickname}}</span>
            </div>
        </div>
        <div class="user-fun-div">
            <div v-for="item in list" class="myinfo" :class='{on:$route.path === `/${item.to}`}' @click='click_func(item)'>
                <div class="img">
                    <img id="myinfo" :src="item.imgsrc" >
                </div>
                <div class="menu-text">
                    <span>{{item.name}}</span>
                </div>
                <div class="img">
                    <img :src="item.imggo">
                </div>
            </div>
        </div>
        <div class="logout">
            <mt-button type="danger" size="large" @click="logout_btn">退出登录</mt-button>
        </div>
        <bottomMenu1 />
    </div>
</template>

<script>
import { MessageBox,Button } from 'mint-ui';
import Vue from 'vue'
import bottomMenu1 from '../../components/bottomMenu/bottomMenu'
import './Me.css'
import gerenziliao from '../../img/gerenziliao.png'
import bangding from '../../img/bangding.png'
import aboutus from '../../img/info.png'
import gopng from '../../img/go.png'
import DB from '../../app/db'

Vue.component(Button.name, Button);
Vue.component(MessageBox.name, MessageBox);
export default {
  name:'me',
  data () {
    return {
      list:[{
        name:'个人资料',
        imgsrc:gerenziliao,
        imggo:gopng,

      },{
        name:'绑定手机',
        imgsrc:bangding,
        imggo:gopng
      },{
        name:'关于我们',
        imgsrc:aboutus,
        imggo:gopng,
        to:'aboutus'
      },],
      info:{}
    }
  },
  methods:{
    click_func(item){
        if(item.name==='关于我们'){
            this.toOther(item.to)
        }
        if(item.name==='绑定手机'){
            MessageBox.prompt('请输入手机号').then(({ value, action }) => {
                console.log(value);
            });
        }
    },
    _fetch_get_user_info(tel) {
        const t = this
        DB.Choose.getUserInfo({
          telphone: tel,
        }).then(result=>{
              let { list = [] } = result
              t.info = list[0]
              window.sessionStorage.nickname = t.info.nickname
        })
    },
    //退出登录
    logout_btn() {
        this.toOther('login')
        window.sessionStorage.clear()
    },
    toOther(to) {
         this.$router.push({ path: `${to}`})
    }
  },
  created: function () {
      const t = this
      this._fetch_get_user_info(this.$route.query.tel)
  },
  components:{
      bottomMenu1
  }
}
</script>

<style lang="css">
</style>
