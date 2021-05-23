<template>
  <el-main>
    <div style="width: 100%;height: 40.76vw;">
<!--      <img src="@/assets/home_background.png" style="height: auto;width: 100%;z-index: -1;position:absolute;">-->
      <el-image :src="require('../assets/home_background.png')"
                style="z-index: -1;position:absolute;"></el-image>
      <div style="color: violet">2222222222222</div>
      <div style="color: violet;padding: 10px">3333333333333</div>
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

</style>
