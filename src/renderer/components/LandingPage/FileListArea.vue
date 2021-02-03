<template>
  <div class="file-list-area-content">
    <el-card class="file-list-box">
      <div slot="header">
        <span class="file-list-title">正面图</span>
      </div>
      <el-table :data="tableData" :show-header="false" max-height="260"
                  :row-style="{height: '20px'}" :cell-style="{padding: '5px'}">
        <el-table-column min-width="65" prop="filename"></el-table-column>
        <el-table-column min-width="35" align="right" fixed="right">
          <i class="fa fa-close file-close-btn"></i>
        </el-table-column>
      </el-table>
    </el-card>
    <el-card class="file-list-box">
      <div slot="header">
        <span class="file-list-title">侧面图</span>
      </div>
      <el-table :data="tableData" :show-header="false" max-height="260"
                  :row-style="{height: '20px'}" :cell-style="{padding: '5px'}">
        <el-table-column min-width="65" prop="filename"></el-table-column>
        <el-table-column min-width="35" align="right" fixed="right">
          <i class="fa fa-close file-close-btn"></i>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        {
          filename: 'ssss.jpg'
        },
        {
          filename: 'ssss.jpg'
        },
        {
          filename: 'ssss.jpg'
        },
        {
          filename: 'ssss.jpg'
        },
        {
          filename: 'ssss.jpg'
        },
        {
          filename: 'ssss.jpg'
        },
        {
          filename: 'ssss.jpg'
        },
        {
          filename: 'ssss.jpg'
        },
        {
          filename: 'ssss.jpg'
        },
        {
          filename: 'ssss.jpg'
        },
        {
          filename: 'ssss.jpg'
        },
        {
          filename: 'ssss.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="less">
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
    flex: 1 1 auto;
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
</style>