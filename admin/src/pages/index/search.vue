<template>
  <div class="search">
    <el-form
      ref="form"
      :model="form"
      label-width="80px"
    >
      <el-form-item label="关键字">
        <el-input
          placeholder="关键字"
          suffix-icon="el-icon-search"
          v-model="form.keyword"
          size="small"
          clearable
          style="width:220px;"
        >
        </el-input>
        <span style="margin-left:20px">时间</span>
        <el-date-picker
          v-model="dateRange"
          type="datetimerange"
          :picker-options="pickerOptions"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          align="right"
          size="small"
        >
        </el-date-picker>
        <el-button
          type="primary"
          icon="el-icon-search"
          size="small"
        >查找</el-button>
      </el-form-item>
    </el-form>
    <div class="tags">
      <template v-for="(tag,index) in tags">
        <el-tooltip
          class="item"
          effect="dark"
          :content="tag.time"
          placement="top"
        >
          <el-tag
            :type="tagType[Math.floor(Math.random()*5)]"
            disable-transitions
            hit
            closable
            @close="delTag"
            :data-id="tag.id"
            style="margin:0 10px 10px 0;"
          >{{tag.keyword}}</el-tag>
        </el-tooltip>
      </template>
    </div>

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
      tagType: ["success", "info", "warning", "danger"],
      tags: [{ id: 12, keyword: '郁金香英文', time: '2018-11-11 11:11:11' }, { id: 12, keyword: '郁金香种植', time: '2018-11-11 11:11:11' }, { id: 12, keyword: '郁金香代表什么', time: '2018-11-11 11:11:11' }, { id: 12, keyword: '郁金香花语', time: '2018-11-11 11:11:11' }, { id: 12, keyword: '郁金香的故事', time: '2018-11-11 11:11:11' }, { id: 12, keyword: '郁金香花期', time: '2018-11-11 11:11:11' }, { id: 12, keyword: '郁金香品种', time: '2018-11-11 11:11:11' }, { id: 12, keyword: '郁金香有毒吗', time: '2018-11-11 11:11:11' }, { id: 12, keyword: '郁金香运动', time: '2018-11-11 11:11:11' }, { id: 12, keyword: '郁金香导航', time: '2018-11-11 11:11:11' }],
      dateRange: [],
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      }
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    delTag() { 
      let id = event.currentTarget.parentNode.getAttribute('data-id')
    }
  }
}
</script>

<style lang="less" scoped>
.search {
  padding-top: 30px !important;
}
.tags {
  padding: 0 20px;
}
.el-pagination {
  text-align: center;
  margin: 30px auto;
}
</style>


