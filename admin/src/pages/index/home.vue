<template>
  <div class="home">
    <div class="items">
      <div class="item">
        <div class="name">总计</div>
        <div class="total">34354</div>
      </div>
      <div class="item">
        <div class="name">用户</div>
        <div class="total">21132</div>
      </div>
      <div class="item">
        <div class="name">店铺</div>
        <div class="total">239</div>
      </div>
      <div class="item">
        <div class="name">搜索次数</div>
        <div class="total">232</div>
      </div>
      <div class="item">
        <div class="name">运行天数</div>
        <div class="total">212</div>
      </div>
    </div>

    <div class="search">
      <el-button
        icon="el-icon-plus"
        type="primary"
        plain
      ></el-button>
      <el-input
        style="width:80%"
        placeholder="名字、拉丁文、序号"
        clearable
      ></el-input>
      <el-button
        type="success"
        icon="el-icon-search"
      >搜索</el-button>
    </div>
    <div class="result">
      <div class="table">
        <template>
          <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            size="small"
            @selection-change="handleSelectionChange"
            stripe
            highlight-current-row
          >
            <el-table-column
              type="selection"
              width="55"
            >
            </el-table-column>
            <el-table-column
              label="日期"
              width="120"
            >
              <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="120"
            >
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              label="操作"
              width="160px"
              show-overflow-tooltip
            >
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)"
                  icon="el-icon-edit"
                  circle
                ></el-button>
                <el-button
                  size="mini"
                  type="danger"
                  plain
                  circle
                  @click="handleDelete(scope.$index, scope.row)"
                  icon="el-icon-delete"
                ></el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        keyword: ''
      },
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      multipleSelection: []
    }
  },

  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleEdit() { },
    handleDelete() { }
  }
}
</script>

<style lang="less" scoped>
.home {
  .items {
    width: 100%;
    display: flex;
    .item {
      flex: 1;
      background: linear-gradient(top left, #01cbf9 20%, #00e0d3 100%);
      color: #fff;
      margin: 15px 15px 15px 0;
      padding: 8px 15px;
      border-radius: 5px;
      line-height: 30px;
      font-size: 20px;
      font-weight: bold;
      &:first-child {
        margin-left: 15px;
      }
      .name {
        font-size: 15px;
        font-weight: normal;
      }
    }
  }
  .search {
    width: 80%;
    margin: 80px auto 50px;
  }
}
</style>
