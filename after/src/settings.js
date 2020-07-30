module.exports = {
  title: '橘子的分享',

  /**
   * @type {boolean} true | false
   * @description 是否显示右边的设置
   */
  showSettings: true,

  /**
   * @type {boolean} true | false
   * @description 是否显示打开的页面
   */
  tagsView: false,

  /**
   * @type {boolean} true | false
   * @description 固定头部
   */
  fixedHeader: true,

  /**
   * @type {boolean} true | false
   * @description 显示侧边导航栏图标
   */
  sidebarLogo: true,

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  errorLog: 'production'
}
