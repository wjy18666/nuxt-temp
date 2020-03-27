export default {
  headerNav: "头部 导航栏",
  lang: 'CN',
  navs: [
    {
      name: '首页',
      path: '/'
    },
    {
      name: '算法商城',
      path: '/algo_mall'
    },
    {
      name: '开发者平台',
      path: 'http://www.cvmart.net',
      _blank: true
    },
    {
      name: '行业方案',
      path: '/industry_plan',
      children: [
         {
          name: '智慧安防解决方案',
          path: '/security'
         },
         {
          name: '智慧城市解决方案',
          path: '/smart_city'
         },
         {
          name: '智能零售解决方案',
          path: '/pass_flow'
         }
      ]
    },
    {
      name: '典型案例',
      path: '/cases'
    },
    {
      name: '关于我们',
      path: '/about_us',
      children: [
         {
          name: '企业简介',
          path: '/company_profile'
         },
         {
          name: '加入我们',
          path: '/join_us'
         }
      ]
    },
    {
      name: '商务合作',
      path: '/cooperation',
      children: [
         {
          name: 'AI合伙人',
          path: '/AI_partner'
         },
         {
          name: '产品代理',
          path: '/product_agent'
         }
      ]
    },
  ],
  langList: [
    {name: 'EN', command: 'en-US'},
  ],
  home: {
    title: '极视角科技'
  },
  algoMall: {
    title: '算法商城'
  },
  industryPlan: {
    title: '行业方案',
    security: {
      title: '智慧安防'
    },
    smartCity: {
      title: '智慧城市'
    },
    passFlow: {
      title: '智能零售'
    }
  },
  cases: {
    title: '典型案例'
  },
  aboutUs: {
    title: '关于我们',
    companyProfile: {
      title: '公司简介'
    },
    joinUs: {
      title: '加入我们'
    }
  },
  cooperation: {
    title: '商务合作',
    AI_partner: {
      title: 'AI合伙人'
    },
    productAgent: {
      title: '产品代理'
    }
  }
}