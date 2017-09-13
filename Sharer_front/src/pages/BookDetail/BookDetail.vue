<template>
  <div class="BookDetail">
    <div class="top-div">
      <mt-header title="书二">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    </div>
    <div class="book-intro">
      <div class="book-img">
        <img :src="this.book_info[0].book_img">
      </div>
      <div class="book-info">

        <li >作者：{{this.book_info[0].author}}</li>
        <li >出版社：{{this.book_info[0].publish_house}}</li>
        <li id="book-info-price">原价：¥{{this.book_info[0].original_price}}</li>
      </div>
    </div>
    <div class="book-seller-list">
      <div class="book-seller-list-detail" v-for="item in book_seller" :class='{on:$route.path === `/${item.to}`}' @click='toOther(item.to)'>
        <img :src="item.head_img">
        <li>{{item.name}}</li>
        <li id="book-seller-price">¥：{{item.price}}</li>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Header } from 'mint-ui';
import  './BookDetail.css'
import DB from '../../app/db'
import { Indicator } from 'mint-ui';
Vue.component(Header.name, Header);
export default {
  name:'bookedetail',
  data () {
    return {
      query_obj:'',
      book_info:[{}],
      book_seller:[{
        name:'许见阳',
        head_img:'http://www.dayila.net/_static/kh_book_cover/2012_07/13929643555306f303521bb0.96867513.jpg',
        price:'10',
        type:'orderdetail',
        to:'orderdetail'
      },
    {
      name:'吴家成',
      head_img:'',
      price:'11',
    },
    {
      name:'王家伟',
      head_img:'',
      price:'13',
    }]
    }
  },
  methods:{
    toOther(to,run) {
      if(this.$route.path!==`/${to}`){
        location.hash = to;
      }
    },
    _fetch_book_detail() {
				const t = this;
        t.query_obj = this.$route.query
        console.log(t.query_obj);
				DB.Choose.getBookDetail({
          school: t.query_obj.school,
          major_key: t.query_obj.major_key,
          book_key: t.query_obj.book_key,
				}).then(result=>{
							let { list = [] } = result
			        t.book_info.length = 0
              t.book_info.push({
                author:list[0].author,
                publish_house:list[0].publish_house,
                original_price:list[0].original_price,
                book_img:list[0].book_img
              })
              Indicator.close();
				})
		},
  },
    created: function () {
      Indicator.open('加载中...');
      this._fetch_book_detail()
    },
}
</script>

<style lang="css">
</style>
