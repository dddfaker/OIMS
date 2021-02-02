<template>
  <div class="main-container">
    <div class="tool-header">
      <div id="menuBtn" class="tool-btn" @click="isDrawerShow = true">
        <i class="fa fa-bars"></i>
        <span>菜单</span>
      </div>
      <div class="tool-btn-center-group">
        <el-tooltip content="选择正面图文件夹" placement="bottom-start" :open-delay=700>
          <div id="frontDirSelectBtn" class="tool-btn">
              <i class="fa fa-folder-open"></i>
              <span>正面</span>
          </div>
        </el-tooltip>
        <el-tooltip content="选择侧面图文件夹" placement="bottom-start" :open-delay=700>
          <div id="sideDirSelectBtn" class="tool-btn">
            <i class="fa fa-folder-open"></i>
            <span>侧面</span>
          </div>
        </el-tooltip>
        <div id="measureBtn" class="tool-btn">
          <i class="fa fa-play"></i>
          <span>量测</span>
        </div>
        <div id="printBtn" class="tool-btn">
          <i class="fa fa-print"></i>
          <span>打印</span>
        </div>
      </div>
      <el-drawer direction="ltr" size="18%" :show-close="false" :visible.sync="isDrawerShow">
        <el-menu :unique-opened=true>
          <el-submenu index="1">
            <div class="drawer-title-box" slot="title">
              <i class="fa fa-clipboard"></i>
              <span>文件</span>
            </div>
            <el-menu-item index="1-1">选择正面图文件夹</el-menu-item>
            <el-menu-item index="1-2">选择侧面图文件夹</el-menu-item>
            <el-divider></el-divider>
            <el-menu-item index="1-3">打印（导出为PDF）</el-menu-item>
            <el-menu-item index="1-3">使用说明</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <div class="drawer-title-box" slot="title">
              <i class="fa fa-desktop"></i>
              <span>显示</span>
            </div>
            <el-menu-item index="2-1">单栏</el-menu-item>
            <el-menu-item index="2-2">双栏</el-menu-item>
            <el-divider></el-divider>
            <el-menu-item index="2-3">全屏</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <div class="drawer-title-box" slot="title">
              <i class="fa fa-camera"></i>
              <span>量测</span>
            </div>
            <el-menu-item index="3-1">正侧脊柱</el-menu-item>
            <el-menu-item index="3-2">...</el-menu-item>
          </el-submenu>
          <el-menu-item index="4" class="drawer-title-box">
            <i class="fa fa-cogs"></i>
            <span slot="title">设置</span>
          </el-menu-item>
        </el-menu>
      </el-drawer>
    </div>
    <div class="main-content">
      <div class="main-panel">
        <div class="sub-tool-header">
          <el-tooltip content="撤销" placement="bottom-start" :open-delay=700 effect="light">
            <div id="undoBtn" class="sub-tool-btn">
              <img src="../assets/btn-icon/undo.svg">
            </div>
          </el-tooltip>
          <el-tooltip content="放大" placement="bottom-start" :open-delay=700 effect="light">
            <div id="zoomInBtn" class="sub-tool-btn">
              <img src="../assets/btn-icon/zoom-in.svg">
            </div>
          </el-tooltip>
          <el-tooltip content="缩小" placement="bottom-start" :open-delay=700 effect="light">
            <div id="zoomOutBtn" class="sub-tool-btn">
              <img src="../assets/btn-icon/zoom-out.svg">
            </div>
          </el-tooltip>
          <el-tooltip content="绘制直线" placement="bottom-start" :open-delay=700 effect="light">
            <div id="drawLineBtn" class="sub-tool-btn">
              <img src="../assets/btn-icon/line.svg">
            </div>
          </el-tooltip>
          <el-tooltip content="绘制曲线" placement="bottom-start" :open-delay=700 effect="light">
            <div id="drawCurvedLineBtn" class="sub-tool-btn">
              <img src="../assets/btn-icon/curved-line.svg">
            </div>
          </el-tooltip>
          <el-tooltip content="绘制矩形" placement="bottom-start" :open-delay=700 effect="light">
            <div id="drawRectangleBtn" class="sub-tool-btn">
              <img src="../assets/btn-icon/rectangle.svg">
            </div>
          </el-tooltip>
          <el-tooltip content="绘制圆" placement="bottom-start" :open-delay=700 effect="light">
            <div id="drawCircleBtn" class="sub-tool-btn">
              <img src="../assets/btn-icon/circle.svg">
            </div>
          </el-tooltip>
          <el-tooltip content="亮度调节" placement="bottom-start" :open-delay=700 effect="light">
            <div id="brightnessAdjustBtn" class="sub-tool-btn">
              <img src="../assets/btn-icon/brightness.svg">
            </div>
          </el-tooltip>
        </div>
        <div class="img-area">
          <div class="img-box">

          </div>
          <div class="img-box">

          </div>
        </div>
      </div>
      <div class="side-panel">
        <el-card class="result-box">
          <div slot="header">
            <span class="result-title">量测结果</span>
          </div>
          <div v-for="o in 4" :key="o">
            {{'量测项目 ' + o }}
          </div>
        </el-card>
        <div class="file-list-area">
          <el-card class="file-list-box">
            <div slot="header">
              <span class="file-list-title">正面图</span>
            </div>
            <div v-for="o in 4" :key="o">
              {{'图片 ' + o }}
            </div>
          </el-card>
          <el-card class="file-list-box">
            <div slot="header">
              <span class="file-list-title">侧面图</span>
            </div>
            <div v-for="o in 4" :key="o">
              {{'图片 ' + o }}
            </div>
          </el-card>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
  export default {
    data () {
      return {
        isDrawerShow: false
      }
    }
  }
</script>

<style lang="less">
  @tool_header_height: 52px;
  @sub_tool_header_height: 36px;
  .main-container{
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .tool-header{
    flex: 0 1 @tool_header_height;
    background: #1a1b21;
    display: flex;
    align-items: center;
  }
  .sub-tool-header{
    flex: 0 1 @sub_tool_header_height;
    background: #e5e7e8;
    display: flex;
    align-items: center;
    box-shadow: 0px 5px 10px 0px #bababa;
    justify-content:flex-end;
    padding: 0px 3%;
  }
  .main-content{
    flex: 1 1 auto;
    flex-direction: row;
    display: flex;

  }
  .main-panel{
    display: flex;
    flex-direction: column;
    width: 72%;
    background: #c8c8c8;
  }
  .img-area{
    flex: 1 1 auto;
  }
  .side-panel{
    display: flex;
    flex-direction: column;
    width: 28%;
    background: #f0f2f3;
    box-shadow: -4px 80px 10px #bcbcbc;
  }

  // 顶部工具栏
  @tool_header_height: 52px;
  .tool-btn{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    cursor: pointer;
    height: @tool_header_height;
    width: @tool_header_height + 30;
  }
  .tool-btn:hover{
    background: #5b5c61;
  }
  .tool-btn>i{
    zoom: 1.5;
    margin-bottom: 1px;
  }
  .tool-btn>span{
    font-size: 0.75rem;
    font-weight: lighter;
  }
  .tool-btn-center-group{
    margin-left: 20%;
    display: flex;
  }

  // 二级顶部工具栏
  @sub_tool_header_height: 36px;
  .sub-tool-header{
    flex: 0 1 @sub_tool_header_height;
    background: #e5e7e8;
    display: flex;
    align-items: center;
    box-shadow: 0px 5px 10px 0px #bababa;
  }
  .sub-tool-btn{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #535353;
    cursor: pointer;
    height: @sub_tool_header_height;
    width: @sub_tool_header_height + 10;
  }
  .sub-tool-btn:hover{
    background: #c4c5c5;
  }
  .sub-tool-btn>i{
    zoom: 1.3;
  }
  .sub-tool-btn>img{
    height: @sub_tool_header_height - 10;
  }

  // 侧边栏
  .el-card__header {
    padding: 15px 20px !important;
  }
  .result-box{
    margin: 8px 8px 0px 8px;
    height: 55%;
  }
  .result-title{
    font-size: 1.1rem;
    font-weight: bold;
    color: black;
  }
  .file-list-area{
    display: flex;    
    flex-direction: row;
    justify-content: space-around;
    margin: 8px 4px 8px 4px;
    height: 45%;
  }
  .file-list-box{
    flex: 1 0 auto;
    margin: 0px 4px 0px 4px;
  }
  .file-list-title{
    font-size: 1.1rem;
    font-weight: bold;
    color: black;
  }

  // 抽屉导航栏
  .drawer-title-box>span{
    font-size: 1.1rem;
    font-weight: bold;
  }
  .drawer-title-box>i{
    zoom: 1.2;
    margin-right: 5px;
  }
  .el-divider{
    width: auto !important;
    margin: 8px 16px !important;
  }
  
  


</style>
