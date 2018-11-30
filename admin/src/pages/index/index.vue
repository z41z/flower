<template>
  <div class="index">
    <header></header>
    <div class="content">
      <i-menu></i-menu>
      <keep-alive>
        <router-view class="view" />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import iMenu from '@components/index/menu'
export default {
  data() {
    return {

    }
  },
  mounted() {
    if (this.$route.name === 'Index') {
      this.$router.push('/home')
    }
  },
  components: {
    iMenu
  }
}
</script>
<style lang="less" scoped>
.index {
  // width: 1200px;
  margin: 0 auto;
  height: 100%;
  header {
    height: 80px;
    line-height: 80px;
    background: #fff url(../../images/logo.png) no-repeat 30px center;
  }
  .content {
    width: 100%;
    height: calc(100% - 150px);
    display: flex;
    .view {
      margin: 20px 0 20px 20px;
      padding: 10px;
      background: #fff;
      height: 100%;
      flex: 1;
      overflow: scroll;
    }
  }
}
</style>

