<template>
	<div class="index">
		<div class="search-div">
			<input type="text" name="" value="" placeholder="搜索">
			<a href="#"><img src="../../img/search.png" alt=""></a>
			<!-- <mt-search
		  v-model="value"
		  cancel-text="取消"
		  placeholder="搜索">
		</mt-search> -->
		</div>
		<div class="choose-school" >
			<mt-popup
			v-model="popupVisible"
			popup-transition="popup-fade"
			position="right">
			<div class="school-list" >
				<div class="shcool-detail"  @click="show_more_college1(item)" v-for="(item,index) in school_list">
					<span>{{item.name}}</span>
					<div class="college-list-container" >
						<div class="college-list" v-for="(i,index) in item.college" v-if="show_more_college==item.name" @click="choose_college(i,item)">
							{{i.college}}
						</div>
					</div>
				</div>
			</div>
		</mt-popup>
		</div>
		<div class="jiaocaiandfenlei">
			<div class="top-mt-navbar">
				<mt-navbar v-model="selected">
				  <mt-tab-item id="jiaocai" >教材</mt-tab-item>
				  <mt-tab-item id="fenlei">其他</mt-tab-item>
				</mt-navbar>
				<div class="school-choose-div" v-model="popupVisible" @click="change_popupVisible()">
					∨{{this.choose_school_college}}
				</div>
			</div>
<!-- tab-container -->
<div class="course-container">
	<mt-tab-container v-model="selected"  swipeable>
	  <mt-tab-container-item id="jiaocai">
				<mt-cell v-for="item in material" :title="item.name" @click.native="changepage(item.key)">
			</mt-cell>
	  </mt-tab-container-item>
	  <mt-tab-container-item id="fenlei">
	    <mt-cell v-for="n in 14" :title="'测试 ' + n" />
	  </mt-tab-container-item>
	</mt-tab-container>
	<div class="course-selected">
		<div class="book-detail" v-for="(item,index) in book_datail[0][this.book_datail_flag]"  :class='{on:$route.path === `/${item.to}/`}' @click='toOther(item.to,item)'>
			<img :src="item.imgsrc" alt="">
			<div class="book-name">
				{{item.name}}
			</div>
		</div>
	</div>
</div>
		</div>
		<bottomMenu1 type="1"/>
	</div>
</template>

<script>
import Vue from 'vue'

import './Index.css'
import 'mint-ui/lib/style.css'
import bottomMenu1 from '../../components/bottomMenu/bottomMenu'
import { TabContainer, TabContainerItem,Navbar, TabItem,Popup,Picker,Search,Indicator } from 'mint-ui';
import DB from '../../app/db'


Vue.component(Picker.name, Picker);
Vue.component(Popup.name, Popup);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Search.name, Search);

export default {
	name: 'hello',
	data () {
		return {
			choose_school_college:'    请选择专业',
			show_more_college:false,
			selected:'jiaocai',
			popupVisible:false,
			school_filter:'',
			college_filter:'',
			major_key_filter:'',
			//教材分类
			material:[],
			book_datail_flag:'',
			book_datail:[{}],
			school_list:[
				{
					name:'浙江工业大学',
					college:[
						{
							college:'计算机学院',
						},
						{
							college:'经贸管理学院'
						}
					]
				},
				{
					name:'浙江大学',
					college:[
						{
							college:'机械工程学院'
						}
					]
				},
				{
					name:'浙江理工大学',
					college:[
						{
							college:'机械工程学院'
						}
					]
				}
			]
		}
	},
	components: {
		bottomMenu1
	},
	methods: {
		changepage(key){
			const t = this
			t.major_key_filter = key;
			this.book_datail_flag = key;
			this._fetch_choose_book();
			Indicator.open('加载中...');
		},
		change_popupVisible(){
			this.popupVisible = true;
			//更改学院时，清空book_datail中的值
			this.book_datail=[{}];
		},
		show_more_college1(index){
			this.show_more_college = index.name;
		},
		choose_college(i,item){
			const t = this
			t.school_filter = item.name
			t.college_filter = i.college
			this.choose_school_college = item.name+'-'+i.college
			this.popupVisible = false;
			this.material.length=0;
			this._fetch_choose_school_college(i,item)
			//打开加载图标
			Indicator.open('加载中...');
		},
		//选择学校学院以及专业后发送请求
		_fetch_choose_book() {
				const t = this;
				DB.Choose.getBookType({
					school: t.school_filter,
					college: t.college_filter,
					major_key:t.major_key_filter,
				}).then(result=>{
							//解构赋值，拿出list
							let { list = [] } = result
							//做一个拷贝，避免因为对象值改变不引起重新渲染的情况
							let book_datail_copy = [{}]
							book_datail_copy[0][t.major_key_filter]=[]
								for (var i = 0; i < list.length; i++) {
									book_datail_copy[0][t.major_key_filter].push({
										name:list[i].book_name,
										key:list[i].book_key,
										imgsrc:list[i].book_img,
										to:'bookdetail',
										major_key:list[0].major_key,
										college:list[0].college,
										school:list[0].school
									})
								}
								t.book_datail = book_datail_copy
								Indicator.close();
				})
		},
		//选择学校专业发送请求
		_fetch_choose_school_college(i,item) {
				const t = this;
				DB.Choose.getSchoolCollege({
					school: t.school_filter,
					college: t.college_filter,
				}).then(result=>{
							let { list = [] } = result
							let new_list = list
							// var new_list = list.filter((itema)=>{
							// 	//过滤选中具体学院后返回的数据
							// 	return itema.school == item.name && itema.college == i.college
							// })
							for (var k = 0; k < new_list.length; k++) {
								t.material.push({
									name:new_list[k].major,
									key:new_list[k].major_key
								})
							}
							//关闭加载图标
							Indicator.close();
				})
		},
		_fetch_book_detail() {
				const t = this;
				DB.Choose.getBookDetail({
					school_key: t.school_filter,
					college_key: t.college_filter,
					major_key: t.college_filter,
					book_key: t.college_filter,
				}).then(result=>{
							let { list = [] } = result
							//关闭加载图标
							Indicator.close();
				})
		},
		toOther(to,run) {
	      if(this.$route.path!==`/${to}`) {
	         location.hash = to+'?'+'book_key='+run.key+'&'+'major_key='+run.major_key+'&'+'school='+run.school;
	      }
    },
	},
	created:{

	},
	mounted(){

			},
	computed:{
	},
	watch:{
	}
}
</script>

<style scoped>

</style>
