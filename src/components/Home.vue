<template>
  <el-container>
    <el-main class="login">
          <el-image :src="require('@/assets/logo.png')" style="height: auto">
          </el-image>
    <div style="color: white">---------------------------分割线-------------------------</div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'Home'
  // data: function () {
  //   return {
  //     src: ('@/assets/logo.png')
  //   }
  // }
}
</script>

<style scoped>
/* 背景图片*/
.login{
  background:url("../assets/home_background.png");
  width: 100%;
  height: 100%;
  position:fixed;
  margin-top: -65px;/*上边距*/
  margin-left: -8px;/*左边距*/
  z-index: -1;
}
</style>
