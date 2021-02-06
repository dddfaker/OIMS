const fs = require('fs')

const state = {
  // 正面图的相关变量
  params1: {
    'dirPath': '', // 文件夹路径
    'contrastDirPath': '/tmp/img/front_contrast/', // 对比度调整后的保存路径
    'cutDirPath': '/tmp/img/front_cut/', // 裁剪后保存路径
    'fileList': {}, // 文件列表
    'curFilePath': '' // 当前打开的文件文件名
  },
  // 侧面图的相关变量
  params2: {
    'dirPath': '',
    'contrastDirPath': '/tmp/img/side_contrast/',
    'cutDirPath': '/tmp/img/side_cut/',
    'fileList': {},
    'curFilePath': ''
  }
}

const mutations = {
  // 修改图片目录的路径。flag=1：正面图，flag=2：侧面图
  ChangeDirPath (state, payload) {
    var params = payload.flag === 1 ? state.params1 : state.params2
    params.dirPath = payload.path + '\\'
  },
  // 修改文件列表
  ChangeFileList (state, payload) {
    var params = payload.flag === 1 ? state.params1 : state.params2
    params.fileList = payload.fileList
  },
  // 修改当前打开的图片
  ChangeCurFilePath (state, payload) {
    var params = payload.flag === 1 ? state.params1 : state.params2
    params.curFilePath = payload.curFilePath
  },
  // 删除文件
  DeleteFile (state, payload) {
    var params = payload.flag === 1 ? state.params1 : state.params2
    var temp = JSON.parse(JSON.stringify(params.fileList))
    delete temp[payload.filename]
    params.fileList = temp
    if (Object.keys(temp).length === 0) {
      params.curFilePath = ''
    } else {
      params.curFilePath = temp[Object.keys(temp)[0]].path
    }
  }
}

const actions = {
  // （读文件为异步操作）读取文件目录，修改文件列表。flag=1：正面图，flag=2：侧面图
  LoadDir (context, payload) {
    fs.readdir(payload.path, (err, files) => {
      if (err) {
        return console.error(err)
      }
      var tempFileList = {}
      var fileType = ['jpg', 'jpeg', 'png', 'bmp']
      files.forEach((file) => {
        if (fileType.includes(file.split('.').pop().toLowerCase())) {
          tempFileList[file] = {
            'path': payload.path + '\\' + file,
            'isMeasured': false
          }
        }
      })
      context.commit('ChangeFileList', {
        flag: payload.flag,
        fileList: tempFileList
      })
      if (Object.keys(tempFileList).length !== 0) {
        context.commit('ChangeCurFilePath', {
          flag: payload.flag,
          curFilePath: tempFileList[Object.keys(tempFileList)[0]].path
        })
      }
    })
  }
}

export default {
  state,
  mutations,
  actions
}
