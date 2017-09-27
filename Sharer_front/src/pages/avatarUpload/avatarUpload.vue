<template>
  <div class='avatarupload'>
  	   <div class='avatarupload-div'>
       	   <div v-for='(item ,index ) in imgs' class='room_img'>
       	   	  <img :src="item">
       	   </div>
           <div class='room_add_btn'>
           	    <span>上传图片</span>
           	    <input @change='add_img'  type="file">
           </div>
       </div>
  </div>
</template>

<script >
import './avatarUpload.css'
export default {
    data:function() {
        return{
            imgs:[],
        }
    },
    props:{},
    methods:{
        add_img(event) {
            var reader = new FileReader()
            var img1 = event.target.files[0]
            reader.readAsDataURL(img1)
            var that = this
            reader.onloadend = function() {
                that.imgs.push(reader.result)
            }
        }
    }
}

</script>

<style lang="css">
</style>
