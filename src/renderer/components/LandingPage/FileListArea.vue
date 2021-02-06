<template>
  <div class="file-list-area-content">
    <el-card class="file-list-box">
      <div slot="header">
        <span class="file-list-title">正面图</span>
      </div>
      <el-table ref="table1" :data="listData1" :show-header="false" max-height="260" @row-click="SelectFrontImg"
                style="cursor: pointer;" tooltip-effect="light"
                :row-style="{height: '20px'}" :cell-style="{padding: '5px'}"
                :highlight-current-row="true">
        <el-table-column min-width="65" :show-overflow-tooltip="true">
          <template slot-scope="scope">
            <el-tooltip :content="scope.row.path" placement="top-start" :open-delay=700 effect="light">
              <span>{{ scope.row.filename }}</span>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column prop="oper" min-width="35" align="right" fixed="right">
          <template slot-scope="scope">
            <i class="fa fa-close file-close-btn" @click.stop="DeleteFrontFile(scope.row.filename)"></i>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-card class="file-list-box">
      <div slot="header">
        <span class="file-list-title">侧面图</span>
      </div>
      <el-table ref="table2" :data="listData2" :show-header="false" max-height="260" @row-click="SelectSideImg"
                style="cursor: pointer;" tooltip-effect="light"
                :row-style="{height: '20px'}" :cell-style="{padding: '5px'}"
                :highlight-current-row="true">
        <el-table-column min-width="65" :show-overflow-tooltip="true">
          <template slot-scope="scope">
            <el-tooltip :content="scope.row.path" placement="top-start" :open-delay=700 effect="light">
              <span>{{ scope.row.filename }}</span>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column min-width="35" align="right" fixed="right">
          <template slot-scope="scope">
            <i class="fa fa-close file-close-btn" @click.stop="DeleteSideFile(scope.row.filename)"></i>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  computed: {
    listData1 () {
      let fileList = this.$store.state.File.params1.fileList
      let listData = []
      for (let key in fileList) {
        listData.push({
          'filename': key,
          'path': fileList[key].path
        })
      }
      this.$nextTick(() => { // 设置表格中当前选中行
        if (this.listData1.length > 0) {
          this.$refs.table1.setCurrentRow(this.listData1[0])
        }
      })
      return listData
    },
    listData2 () {
      var fileList = this.$store.state.File.params2.fileList
      var listData = []
      for (let key in fileList) {
        listData.push({
          'filename': key,
          'path': fileList[key].path
        })
      }
      this.$nextTick(() => {
        if (this.listData2.length > 0) {
          this.$refs.table2.setCurrentRow(this.listData2[0])
        }
      })
      return listData
    }
  },
  methods: {
    SelectFrontImg (row) {
      this.$store.commit('ChangeCurFilePath', {
        flag: 1,
        curFilePath: row.path
      })
    },
    SelectSideImg (row) {
      this.$store.commit('ChangeCurFilePath', {
        flag: 2,
        curFilePath: row.path
      })
    },
    DeleteFrontFile (filename) {
      this.$store.commit('DeleteFile', {
        flag: 1,
        filename: filename
      })
    },
    DeleteSideFile (filename) {
      this.$store.commit('DeleteFile', {
        flag: 2,
        filename: filename
      })
    }
  }
}
</script>

<style lang="less">
  .success-row {
    background: #f0f9eb;
  }
  // 文件列表栏
  @file_list_area_height_ratio: 45%;
  .file-list-area-content{
    display: flex;    
    flex-direction: row;
    justify-content: space-around;
    margin: 8px 4px 8px 4px;
    height: @file_list_area_height_ratio;
  }
  .file-list-box{
    flex: 1 0 40%;
    margin: 0px 4px 0px 4px;
  }
  .file-list-title{
    font-size: 1.1rem;
    font-weight: bold;
    color: black;
  }
  .el-table__body-wrapper::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }
  .el-table__body-wrapper::-webkit-scrollbar-thumb {
    background-color: #c4c4c4;
    border-radius: 3px;
  }
  .file-close-btn{
    zoom: 1.4;
    cursor: pointer;
    color: rgb(255, 79, 79);
  }
  .file-close-btn:hover{
    color:  rgb(255, 122, 122);
  }
  .file-selected{
    
  }
</style>