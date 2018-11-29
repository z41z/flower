<template>
  <div class="list">
    <div class="search">
      <el-form
        ref="form"
        :model="form"
        label-width="80px"
      >
        <el-form-item label="关键字">
          <el-input
            placeholder="昵称、电话、性别、地区、注册时间"
            suffix-icon="el-icon-search"
            v-model="form.keyword"
            size="small"
            style="width:280px;"
            clearable
          >
          </el-input>
          <el-button
            type="primary"
            icon="el-icon-search"
            size="small"
          >查找</el-button>
        </el-form-item>
      </el-form>
    </div>
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
            width="40"
          ></el-table-column>
          <el-table-column
            label="头像"
            show-overflow-tooltip
            width="50px"
          >
            <template slot-scope="scope">
              <img
                :src="scope.row.head"
                alt=""
                class="head"
              ></template>

          </el-table-column>
          <el-table-column
            label="注册时间"
            width="150"
          >
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="昵称"
            width="100"
          >
          </el-table-column>
          <el-table-column
            prop="tel"
            label="电话"
            width="100"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="address"
            label="地区"
            show-overflow-tooltip
          > </el-table-column>
          <el-table-column
            label="性别"
            width="100"
            show-overflow-tooltip
          >
            <template slot-scope="scope">{{scope.row.gender?'男':'女'}}</template>
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
              >编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                plain
                @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        >
        </el-pagination>
      </template>

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
      currentPage: 1,
      tableData: [{
        head: 'http://thumb10.jfcdns.com/2018-06/bce5b10ae530f530.png',
        date: '2016-05-03 11:11:11',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        tel: '13629120020',
        gender: 1
      }, {
        head: 'http://thumb10.jfcdns.com/2018-06/bce5b10ae530f530.png',
        date: '2016-05-03 2:11:11',
        name: '王小丫',
        address: '上海市普陀区金沙江路 1518 弄',
        tel: '13629120020',
        gender: 0
      }],
      multipleSelection: []
    }
  },

  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleEdit() { },
    handleDelete() {
      // points.push(
      //   new BMap.Point(
      //     x1 + Math.sin(i * Math.PI / 180),
      //     y1 + Math.sin(
      //       x1 + (Math.cos(i * Math.PI / 180))
      //     )
      //   )
      // );
      // // 椭圆 
      // // 500m
      // points.push(
      //   new BMap.Point(
      //     x1 + 0.005 * Math.cos(i * Math.PI / 180),
      //     y1 + 0.005 * Math.sin(
      //       i * Math.PI / 180)
      //   )
      // );
      // // 1000m
      // path {
      // transform：matrix(cosθ，-sinθ,sinθ,cosθ,0,0)
      //   transform: matrix(0.866, 0.5, -0.5, 0.866, 0,0);
      // }
      // points2.push(
      //   new BMap.Point(
      //     x1 + 0.01 * Math.cos(i * Math.PI / 180),
      //     y1 + 0.01 * Math.sin(
      //       i * Math.PI / 180)
      //   )
      // );
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
}
</script>


<style lang="less" scoped>
.list {
  .search {
    margin-top: 20px;
  }
  .el-pagination {
    text-align: center;
    margin-top: 30px;
  }
  .head {
    width: 30px;
    border-radius: 100%;
    float: left;
  }
}
</style>
