const state = {
  // frontParamSet: {   // 正面图的相关变量
  //   'dirPath': "",                                          // 文件夹路径
  //   'contrastDirPath': '../../../static/temp_data/img/front_contrast/',   // 对比度调整后的保存路径
  //   'cutDirPath': './temp_data/img/front_cut/',             // 裁剪后保存路径
  //   'fileDict': OrderedDict(),                              // 文件列表，采用顺序字典，便于查找（键名为文件名，键值为字典）
  //   'curFilename': ""                                       // 当前打开的文件文件名
  // },
  // sideParamSet: {    // 侧面图的相关变量
  //   'dirPath': "",
  //   'contrastDirPath': './temp_data/img/side_contrast/',
  //   'cutDirPath': './temp_data/img/side_cut/',
  //   'fileDict': OrderedDict(),
  //   'curFilename': ""
  // }
}

const mutations = {
}

const actions = {
  someAsyncTask ({ commit }) {
    // do something async
    commit('INCREMENT_MAIN_COUNTER')
  }
}

export default {
  state,
  mutations,
  actions
}
