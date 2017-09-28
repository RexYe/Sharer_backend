<template>
  <div class='avatarupload'>
  	   <div class='avatarupload-div'>
       	   <div v-for='(item ,index ) in imgs' class='img-show'>
       	   	    <img :src="item">
       	   </div>
           <div class='img_upload_btn'>
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
            const t = this
            var reader = new FileReader()
            var img1 = event.target.files[0]
            reader.readAsDataURL(img1)
            reader.onloadend = function() {
                t.imgs.push(reader.result)
            }
            console.log(t.imgs);
        }
    }
}

</script>

<style lang="css">
</style>
