export default {
  path: "/movie",
  component: () => import("@/views/Movie"),
  children: [

    {
      path: 'city',
      component: () => import("@/components/City")
    },
    {
      path: 'nowPlaying',
      component: () => import("@/components/NowPlaying")
    },
    {
      path: 'comingSoon',
      component: () => import("@/components/ComingSoon")
    },
    {
      path: 'search',
      component: () => import("@/components/Search")
    },

    {
      path: 'detail/1/:movieId', //动态路由  // 动态路径参数 以冒号开头
      components: {
        default: () => import("@/components/NowPlaying"),
        detail111: () => import('@/views/Movie/detail')
      },
      props: {
        detail111: true
      }
    }, //可以在任何地方使用该组件，使得该组件更易于重用和测试
    
    {
      path: 'detail/2/:movieId', //动态路由  // 动态路径参数 以冒号开头
      components: {
        default: () => import("@/components/ComingSoon"),
        detail111: () => import('@/views/Movie/detail')
      },
      props: {
        detail111: true
      }
    }, //可以在任何地方使用该组件，使得该组件更易于重用和测试
    {
      path: '/movie',
      redirect: '/movie/nowPlaying'
    },
  ]
};