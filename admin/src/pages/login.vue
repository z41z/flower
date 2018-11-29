<template>
  <div class="login">
    <el-row class="form">
      <el-col>
        <!-- <el-col
        :xs="{span:24,offset:0}"
        :sm="{span:12,offset:6}"
        :md="{span:8,offset:8}"
        :lg="{span:6,offset:9}"
      > -->
        <div>
          用户名：
          <el-input
            placeholder="用户名"
            prefix-icon="el-icon-service"
            v-model="userName"
            size="small"
          >
          </el-input>
        </div>
        <div class="password">
          密&emsp;码：
          <el-input
            placeholder="密码"
            prefix-icon="el-icon-edit-outline"
            v-model="password"
            type="password"
            size="small"
          >
          </el-input>
        </div>
        <div>
          <el-button
            size="small"
            type="primary"
            @click="login"
          >登录</el-button>
        </div>
      </el-col>
    </el-row>

    <div
      class="loading"
      v-if="loadingIsShow"
    >
      <div class="el-icon-loading"></div>
    </div>
    <div
      class="tips"
      v-if="errorIsShow"
    >
      <div class="msg"><span class="el-icon-error"></span>登录失败@{{errMsg}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: '',
      password: '',
      errMsg: '',
      errorIsShow: false,
      loadingIsShow: false
    }
  },
  mounted() {
  },
  methods: {
    login() {
      let _this = this
      this.loadingIsShow = true
      this.axios({
        method: 'get',
        url: '/',
        params: { username: this.userName, password: this.password }
      }).then(res => {
        this.loadingIsShow = false
        this.$router.push('/')
      }).catch((err) => {
        this.loadingIsShow = false
        this.errorIsShow = true
        this.errMsg = err.response.status
        setTimeout(() => {
          _this.errorIsShow = false
        }, 1000)
      })
    }
  },
  watch: {
    errorIsShow() {
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(top left, #78cdff 20%, #7effe7 50%, #f6c3ff 80%);
}
.form {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  height: 300px;
  width: 400px;
  color: #ff79bc;
}
.password {
  margin-top: 20px;
}
.el-input {
  margin-top: 8px;
}
.el-button {
  width: 100%;
  margin-top: 20px;
  border-radius: 4px;
  background: linear-gradient(top left, #89d3ff 20%, #a5dcfd 50%, #9ae5f7 80%);
  border: 0;
}
.loading {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  line-height: 100vh;
  text-align: center;
  .el-icon-loading {
    font-size: 30px;
    color: #00ffd2;
  }
}
.tips {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 55vw;
  height: 36px;
  background: rgba(0, 0, 0, 0.6);
  line-height: 36px;
  font-size: 14px;
  border-radius: 5px;
  text-align: center;
  .msg {
    color: #00ffd2;
  }
  .el-icon-error {
    display: inline-block;
    color: #f6c3ff;
    margin-right: 8px;
  }
}
@media screen and (max-width: 768px) {
  .form {
    width: 90%;
    height: 300px;
  }
}
</style>


