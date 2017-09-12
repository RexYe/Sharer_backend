<template>
  <div class="me">
    <div class="user-photo-div">
      <div class="user-photo">
        <img src="../../img/b89188fdfa75a7207972cb081f33aae6.jpg" >
      </div>
      <div class="user-name">
          <span>七肖</span>
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
    <bottomMenu1 />
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui';
import Vue from 'vue'
import bottomMenu1 from '../../components/bottomMenu/bottomMenu'
import './Me.css'
import gerenziliao from '../../img/gerenziliao.png'
import bangding from '../../img/bangding.png'
import aboutus from '../../img/info.png'
import gopng from '../../img/go.png'

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
      },]
    }
  },
  methods:{
    click_func(item){
      if(item.name==='关于我们'){
        this.toOther(item.to)
      }
      if(item.name==='绑定手机'){
        MessageBox.prompt('请输入手机号').then(({ value, action }) => {
                  
  });
      }
    },
    toOther(to,run) {
      if(this.$route.path!==`/${to}`){
        location.hash = to;
      }

    },
  },
  components:{
    bottomMenu1
  }
}
</script>

<style lang="css">
</style>
