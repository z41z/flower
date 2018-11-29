<template>
  <div class="menu">
    <router-link
      to="/home"
      class="el-icon-menu"
    >花首</router-link>
    <router-link
      to="/flower"
      class="el-icon-star-off"
    >花册</router-link>
    <router-link
      to="/user"
      class="el-icon-service"
    >花粉</router-link>
    <router-link
      to="/shop"
      class="el-icon-goods"
    >花店</router-link>
    <router-link
      to="/search"
      class="el-icon-search"
    >花词</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.menu {
  width: 150px;
  margin: 20px 0;
  padding: 10px;
  background: #fff;
  height: 100%;
  // background: linear-gradient(top, #f6c3ff 20%, #7effe7 50%, #78cdff 80%);
  a {
    display: block;
    padding: 12px;
    font-size: 15px;
    text-decoration: none;
    color: #333;
    margin-bottom: 15px;
    &:before {
      margin-right: 10px;
    }
    &.router-link-exact-active {
      color: #fff;
      // background: #9300ff;
      background: linear-gradient(left, #9300ff 20%, #ff02fa 100%);
    }
  }
}
</style>
