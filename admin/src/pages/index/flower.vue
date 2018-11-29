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
            placeholder="名字、拉丁文、序号"
            suffix-icon="el-icon-search"
            v-model="form.keyword"
            size="small"
            style="width:220px;"
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
            width="55"
          >
          </el-table-column>
          <el-table-column
            label="添加时间"
            width="150"
          >
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="花名"
            width="120"
          >
          </el-table-column>
          <el-table-column
            prop="enName"
            label="拉丁文"
            width="150"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="openDate"
            label="开花时间"
            width="150"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            label="花色"
            width="50"
            show-overflow-tooltip
          >
            <template slot-scope="scope"><span
                class="color"
                :style="'background:'+scope.row.color"
              ></span></template>
          </el-table-column>
          <el-table-column
            prop="content"
            label="花语"
            show-overflow-tooltip
          >

          </el-table-column>
          <el-table-column
            prop="area"
            label="分布区域"
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
        date: '2016-05-03 11:11:11',
        name: '郁金香',
        color: '#f00',
        enName: 'YuJinXiang',
        openDate: '每年4月',
        content: '预约此时还，花开遍天。',
        area: '地中海沿岸及中亚细亚、和土耳其等地。'
      }, {
        date: '2016-05-03 11:11:11',
        name: '郁金香',
        color: '#f50',
        enName: 'YuJinXiang',
        openDate: '每年4月每年4月每年4月每年4月',
        content: '预约此时还，花开遍天。预约此时还，花开遍天。预约此时还，花开遍天。',
        area: '地中海沿岸及中亚细亚、和土耳其等地。'
      }, {
        date: '2016-05-03 11:11:11',
        name: '郁金香',
        color: '#f80',
        enName: 'YuJinXiang',
        openDate: '每年4月',
        content: '预约此时还，花开遍天。',
        area: '地中海沿岸及中亚细亚、和土耳其等地。'
      }, {
        date: '2016-05-03 11:11:11',
        name: '郁金香',
        color: '#cd01fd',
        enName: 'YuJinXiang',
        openDate: '每年4月',
        content: '预约此时还，花开遍天。',
        area: '地中海沿岸及中亚细亚、和土耳其等地。'
      }],
      multipleSelection: []
    }
  },

  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleEdit() { },
    handleDelete() { },
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
  .color {
    width: 15px;
    height: 15px;
    display: block;
    border-radius: 100%;
  }
}
</style>
