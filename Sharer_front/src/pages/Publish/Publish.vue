<template>
    <div class="Publish">
        <div class="text">
            <mt-field label="书名" placeholder="请输入书名" v-model="bookname"></mt-field>
            <mt-field label="作者" placeholder="请输入作者" type="email" v-model="author"></mt-field>
            <mt-field label="ISBN" placeholder="请输入ISBN" type="tel" v-model="ISBN"></mt-field>
            <mt-field  placeholder="描述一下你的书" type="textarea" rows="4" v-modal="introduction"></mt-field>
        </div>
        <div class="upload-img">
            <div v-for='(item ,index ) in imgs' class='img-show'>
                <img :src="item">
                <div class="delete" @click="delete_img(index)">
                    <img src="../../img/delete.png" class="delete">
                </div>
            </div>
            <div class='img_upload_btn'>
                <img src="../../img/add.png">
                <span>添加</span>
                <input @change='add_img'  type="file">
            </div>
        </div>
        <div class="college">
            <li>浙江工业大学-计算机-物联网</li>
        </div>
        <div class="publish-bottom-div">
            <div class="made-price">
                <span>书价</span>
                <mt-field  placeholder="¥0.00" v-model="bookprice"></mt-field>
            </div>
            <div class="sure-to-publish">
                <mt-button type="danger">确定发布</mt-button>
            </div>
        </div>
    </div>
</template>

<script>

import { Field } from 'mint-ui';
import Vue from 'vue'
import './Publish.css'
import { Button } from 'mint-ui';

Vue.component(Button.name, Button);

Vue.component(Field.name, Field);
export default {
  name:"publish",
  data () {
    return {
        imgs:[]
    }
  },
  methods:{
      //  添加图片
      add_img(event) {
          const t = this
          var reader = new FileReader()
          var img1 = event.target.files[0]
          reader.readAsDataURL(img1)
          reader.onloadend = function() {
              t.imgs.push(reader.result)
          }
          // console.log(t.imgs);
      },
      //删除图片
      delete_img(index) {
          const t = this
          t.imgs.splice(index,1)
      }
  },
  components:{

  }
}
</script>

<style lang="css">
</style>
