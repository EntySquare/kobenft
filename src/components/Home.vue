<template>
  <el-main>
    <div style="width: 100%;height: 40.76vw;">
      <img src="@/assets/home_background.png" style="height: auto;width: 100%;z-index: -1;position:absolute;">
      <div style="color: violet">2222222222222</div>
    </div>
    31231232432
    <div style="color: green">---------------------------分割线-------------------------</div>
  </el-main>

</template>

<script>
import jpg from '@/assets/home_background.png'

export default {
  name: 'Home',
  data: function () {
    return {
      imgUrl: jpg
    }
  }
}
</script>

<style scoped>
/* 背景图片*/
.login {
  background: url("../assets/home_background.png");
  width: 100%;
  height: 100%;
  position: fixed;
  margin-top: -65px; /*上边距*/
  background-size: 100% 100%;
  z-index: -1;
}
</style>
