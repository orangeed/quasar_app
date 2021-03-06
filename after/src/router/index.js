import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
import componentsRouter from './modules/components'
// import chartsRouter from './modules/charts'
import tableRouter from './modules/table'
// import nestedRouter from './modules/nested'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [{
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [{
      path: '/redirect/:path(.*)',
      component: () => import('@/views/redirect')
    }]
  },
  {
    path: '/login',
    component: () => import('@/views/login'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard'),
      name: '首页',
      meta: {
        title: '首页',
        icon: 'dashboard',
        affix: true
      }
    }]
  },
  // {
  //   path: '/documentation',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/documentation'),
  //       name: 'Documentation',
  //       meta: { title: 'Documentation', icon: 'documentation', affix: true }
  //     }
  //   ]
  // },
  {
    path: '/guide',
    component: Layout,
    redirect: '/guide/index',
    children: [{
      path: 'index',
      component: () => import('@/views/guide'),
      name: '引导页',
      meta: {
        title: '引导页',
        icon: 'guide',
        noCache: true
      }
    }]
  },
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    hidden: true,
    children: [{
      path: 'index',
      component: () => import('@/views/profile'),
      name: '个人资料',
      meta: {
        title: '个人资料',
        icon: 'user',
        noCache: true
      }
    }]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  // {
  //   path: '/permission',
  //   component: Layout,
  //   redirect: '/permission/page',
  //   alwaysShow: true, // will always show the root menu
  //   name: 'Permission',
  //   meta: {
  //     title: 'Permission',
  //     icon: 'lock',
  //     roles: ['admin', 'editor'] // you can set roles in root nav
  //   },
  //   children: [
  //     {
  //       path: 'page',
  //       component: () => import('@/views/permission/page'),
  //       name: 'PagePermission',
  //       meta: {
  //         title: 'Page Permission',
  //         roles: ['admin'] // or you can only set roles in sub nav
  //       }
  //     },
  //     {
  //       path: 'directive',
  //       component: () => import('@/views/permission/directive'),
  //       name: 'DirectivePermission',
  //       meta: {
  //         title: 'Directive Permission'
  //         // if do not set roles, means: this page does not require permission
  //       }
  //     },
  //     {
  //       path: 'role',
  //       component: () => import('@/views/permission/role'),
  //       name: 'RolePermission',
  //       meta: {
  //         title: 'Role Permission',
  //         roles: ['admin']
  //       }
  //     }
  //   ]
  // },
  {
    path: '/map',
    component: Layout,
    children: [{
      path: 'index',
      component: () => import('@/views/map'),
      name: '地图',
      meta: {
        title: '地图',
        icon: 'icon',
        noCache: true
      }
    }]
  },
  {
    path: '/offlinemap',
    component: Layout,
    children: [{
      path: 'index',
      component: () => import('@/views/offlinemap'),
      name: '离线地图',
      meta: {
        title: '离线地图',
        icon: 'icon',
        noCache: true
      }
    }]
  },
  {
    path: '/vedio',
    component: Layout,
    children: [{
      path: 'index',
      component: () => import('@/views/vedio'),
      name: '摄像头',
      meta: {
        title: '摄像头',
        icon: 'icon',
        noCache: true
      }
    }]
  },
  {
    path: '/h264',
    component: Layout,
    children: [{
      path: 'index',
      component: () => import('@/views/h264'),
      name: 'h264视频流',
      meta: {
        title: 'h264视频流',
        icon: 'icon',
        noCache: true
      }
    }]
  },
  {
    path: '/record',
    component: Layout,
    children: [{
      path: 'index',
      component: () => import('@/views/record'),
      name: '录音',
      meta: {
        title: '录音',
        icon: 'icon',
        noCache: true
      }
    }]
  },
  {
    path: '/connection',
    component: Layout,
    name: '聊天室',
    redirect: '/person/index',
    meta: {
      title: '聊天室',
      icon: 'icon',
      noCache: true
    },
    children: [{
      path: 'index',
      component: () => import('@/views/connection'),
      name: '文字聊天',
      meta: {
        title: '文字聊天',
        noCache: true
      }
    }, {
      path: 'audio',
      component: () => import('@/views/connection/audio.vue'),
      name: "语音通话",
      meta: {
        title: "语音通话",
        noCache: true
      }
    }]
  },
  {
    path: '/icon',
    component: Layout,
    children: [{
      path: 'index',
      component: () => import('@/views/icons'),
      name: '图标',
      meta: {
        title: '图标',
        icon: 'icon',
        noCache: true
      }
    }]
  },

  {
    path: '/person',
    component: Layout,
    redirect: '/person/index',
    name: '人员管理',
    meta: {
      title: '人员管理',
      icon: 'el-icon-user-solid'
    },
    children: [{
        path: 'index',
        component: () => import('@/views/person/index'),
        name: '人员列表',
        meta: {
          title: '人员管理',
          icon: 'el-icon-user-solid'
        }
      }
      // {
      //   path: 'edit/:id(\\d+)',
      //   component: () => import('@/views/example/edit'),
      //   name: '编辑文章',
      //   meta: {
      //     title: '编辑文章',
      //     noCache: true,
      //     activeMenu: '/example/list'
      //   },
      //   hidden: true
      // },
      // {
      //   path: 'list',
      //   component: () => import('@/views/example/list'),
      //   name: '网站列表',
      //   meta: {
      //     title: '网站列表',
      //     icon: 'list'
      //   }
      // }
    ]
  },
  {
    path: '/message',
    component: Layout,
    redirect: '/example/list',
    name: '留言管理',
    meta: {
      title: '留言管理',
      icon: 'message'
    },
    children: [{
        path: 'create',
        component: () => import('@/views/example/create'),
        name: '留言列表',
        meta: {
          title: '留言管理',
          icon: 'message'
        }
      }
      // {
      //   path: 'edit/:id(\\d+)',
      //   component: () => import('@/views/example/edit'),
      //   name: '编辑文章',
      //   meta: {
      //     title: '编辑文章',
      //     noCache: true,
      //     activeMenu: '/example/list'
      //   },
      //   hidden: true
      // },
      // {
      //   path: 'list',
      //   component: () => import('@/views/example/list'),
      //   name: '网站列表',
      //   meta: {
      //     title: '网站列表',
      //     icon: 'list'
      //   }
      // }
    ]
  },
  {
    path: '/comment',
    component: Layout,
    redirect: '/example/list',
    name: '评论管理',
    meta: {
      title: '评论管理',
      icon: 'el-icon-s-help'
    },
    children: [{
        path: 'create',
        component: () => import('@/views/example/create'),
        name: '评论列表',
        meta: {
          title: '评论管理',
          icon: 'edit'
        }
      }
      // {
      //   path: 'edit/:id(\\d+)',
      //   component: () => import('@/views/example/edit'),
      //   name: '编辑文章',
      //   meta: {
      //     title: '编辑文章',
      //     noCache: true,
      //     activeMenu: '/example/list'
      //   },
      //   hidden: true
      // },
      // {
      //   path: 'list',
      //   component: () => import('@/views/example/list'),
      //   name: '网站列表',
      //   meta: {
      //     title: '网站列表',
      //     icon: 'list'
      //   }
      // }
    ]
  },
  {
    path: '/example',
    component: Layout,
    redirect: '/example/list',
    name: '文章管理',
    meta: {
      title: '文章管理',
      icon: 'el-icon-document'
    },
    children: [{
        path: 'create',
        component: () => import('@/views/example/create'),
        name: '新建文章',
        meta: {
          title: '新建文章',
          icon: 'edit'
        }
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/example/edit'),
        name: '编辑文章',
        meta: {
          title: '编辑文章',
          noCache: true,
          activeMenu: '/example/list'
        },
        hidden: true
      },
      {
        path: 'list',
        component: () => import('@/views/example/list'),
        name: '文章列表',
        meta: {
          title: '文章列表',
          icon: 'list'
        }
      }
    ]
  },
  {
    path: '/imgage',
    component: Layout,
    redirect: '/example/list',
    name: '照片管理',
    meta: {
      title: '照片管理',
      icon: 'el-icon-picture'
    },
    children: [{
        path: 'create',
        component: () => import('@/views/example/create'),
        name: '上传照片',
        meta: {
          title: '上传照片',
          icon: 'edit'
        }
      },
      // {
      //   path: 'edit/:id(\\d+)',
      //   component: () => import('@/views/example/edit'),
      //   name: '编辑文章',
      //   meta: {
      //     title: '编辑文章',
      //     noCache: true,
      //     activeMenu: '/example/list'
      //   },
      //   hidden: true
      // },
      {
        path: 'list',
        component: () => import('@/views/example/list'),
        name: '照片列表',
        meta: {
          title: '照片列表',
          icon: 'list'
        }
      }
    ]
  },
  {
    path: '/video',
    component: Layout,
    redirect: '/example/list',
    name: '视频管理',
    meta: {
      title: '视频管理',
      icon: 'el-icon-video-camera-solid'
    },
    children: [{
        path: 'create',
        component: () => import('@/views/example/create'),
        name: '上传视频',
        meta: {
          title: '上传视频',
          icon: 'edit'
        }
      },
      // {
      //   path: 'edit/:id(\\d+)',
      //   component: () => import('@/views/example/edit'),
      //   name: '编辑文章',
      //   meta: {
      //     title: '编辑文章',
      //     noCache: true,
      //     activeMenu: '/example/list'
      //   },
      //   hidden: true
      // },
      {
        path: 'list',
        component: () => import('@/views/example/list'),
        name: '视频列表',
        meta: {
          title: '视频列表',
          icon: 'list'
        }
      }
    ]
  },
  {
    path: '/website',
    component: Layout,
    redirect: '/example/list',
    name: '网站管理',
    meta: {
      title: '网站管理',
      icon: 'el-icon-s-platform'
    },
    children: [{
        path: 'create',
        component: () => import('@/views/example/create'),
        name: '新建网站',
        meta: {
          title: '新建网站',
          icon: 'edit'
        }
      },
      // {
      //   path: 'edit/:id(\\d+)',
      //   component: () => import('@/views/example/edit'),
      //   name: '编辑文章',
      //   meta: {
      //     title: '编辑文章',
      //     noCache: true,
      //     activeMenu: '/example/list'
      //   },
      //   hidden: true
      // },
      {
        path: 'list',
        component: () => import('@/views/example/list'),
        name: '网站列表',
        meta: {
          title: '网站列表',
          icon: 'list'
        }
      }
    ]
  },

  /** when your routing map is too long, you can split it into small modules **/
  componentsRouter,
  tableRouter,
  // chartsRouter,
  // nestedRouter,

  // {
  //   path: '/tab',
  //   component: Layout,
  //   children: [{
  //     path: 'index',
  //     component: () => import('@/views/tab'),
  //     name: 'Tab',
  //     meta: {
  //       title: 'Tab',
  //       icon: 'tab'
  //     }
  //   }]
  // },

  // {
  //   path: '/error',
  //   component: Layout,
  //   redirect: 'noRedirect',
  //   name: 'ErrorPages',
  //   meta: {
  //     title: 'Error Pages',
  //     icon: '404'
  //   },
  //   children: [
  //     {
  //       path: '401',
  //       component: () => import('@/views/error-page/401'),
  //       name: 'Page401',
  //       meta: { title: '401', noCache: true }
  //     },
  //     {
  //       path: '404',
  //       component: () => import('@/views/error-page/404'),
  //       name: 'Page404',
  //       meta: { title: '404', noCache: true }
  //     }
  //   ]
  // },

  // {
  //   path: '/error-log',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'log',
  //       component: () => import('@/views/error-log'),
  //       name: 'ErrorLog',
  //       meta: { title: 'Error Log', icon: 'bug' }
  //     }
  //   ]
  // },

  // {
  //   path: '/excel',
  //   component: Layout,
  //   redirect: '/excel/export-excel',
  //   name: 'Excel',
  //   meta: {
  //     title: 'Excel',
  //     icon: 'excel'
  //   },
  //   children: [{
  //       path: 'export-excel',
  //       component: () => import('@/views/excel/export-excel'),
  //       name: 'ExportExcel',
  //       meta: {
  //         title: 'Export Excel'
  //       }
  //     },
  //     {
  //       path: 'export-selected-excel',
  //       component: () => import('@/views/excel/select-excel'),
  //       name: 'SelectExcel',
  //       meta: {
  //         title: 'Export Selected'
  //       }
  //     },
  //     {
  //       path: 'export-merge-header',
  //       component: () => import('@/views/excel/merge-header'),
  //       name: 'MergeHeader',
  //       meta: {
  //         title: 'Merge Header'
  //       }
  //     },
  //     {
  //       path: 'upload-excel',
  //       component: () => import('@/views/excel/upload-excel'),
  //       name: 'UploadExcel',
  //       meta: {
  //         title: 'Upload Excel'
  //       }
  //     }
  //   ]
  // },

  // {
  //   path: '/zip',
  //   component: Layout,
  //   redirect: '/zip/download',
  //   alwaysShow: true,
  //   name: 'Zip',
  //   meta: {
  //     title: 'Zip',
  //     icon: 'zip'
  //   },
  //   children: [{
  //     path: 'download',
  //     component: () => import('@/views/zip'),
  //     name: 'ExportZip',
  //     meta: {
  //       title: 'Export Zip'
  //     }
  //   }]
  // },

  // {
  //   path: '/pdf',
  //   component: Layout,
  //   redirect: '/pdf/index',
  //   children: [{
  //     path: 'index',
  //     component: () => import('@/views/pdf'),
  //     name: 'PDF',
  //     meta: {
  //       title: 'PDF',
  //       icon: 'pdf'
  //     }
  //   }]
  // },
  // {
  //   path: '/pdf/download',
  //   component: () => import('@/views/pdf/download'),
  //   hidden: true
  // },

  // {
  //   path: '/theme',
  //   component: Layout,
  //   children: [{
  //     path: 'index',
  //     component: () => import('@/views/theme'),
  //     name: 'Theme',
  //     meta: {
  //       title: 'Theme',
  //       icon: 'theme'
  //     }
  //   }]
  // },

  {
    path: '/clipboard',
    component: Layout,
    children: [{
      path: 'index',
      component: () => import('@/views/clipboard'),
      name: 'ClipboardDemo',
      meta: {
        title: 'Clipboard',
        icon: 'clipboard'
      }
    }]
  },

  // 404 page must be placed at the end !!!
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
