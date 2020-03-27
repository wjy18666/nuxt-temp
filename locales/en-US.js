export default {
  headerNav: "headerNav",
  lang: 'EN',
  navs: [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Algo mall',
      path: '/algo_mall'
    },
    {
      name: 'Dev Platform',
      path: 'http://www.cvmart.net',
      _blank: true
    },
    {
      name: 'Industry plan',
      path: '/industry_plan',
      children: [
         {
          name: 'Intelligent Security Solution',
          path: '/security'
         },
         {
          name: 'Smart City Solutio',
          path: '/smart_city'
         },
         {
          name: 'Smart Retail Solution',
          path: '/pass_flow'
         }
      ]
    },
    {
      name: 'Cases',
      path: '/cases'
    },
    {
      name: 'About Us',
      path: '/about_us',
      children: [
         {
          name: 'Company profile',
          path: '/company_profile'
         },
         {
          name: 'Join us',
          path: '/join_us'
         }
      ]
    },
    {
      name: 'Cooperation',
      path: '/cooperation',
      children: [
         {
          name: 'AI Partner',
          path: '/AI_partner'
         },
         {
          name: 'Product agent',
          path: '/product_agent'
         }
      ]
    },
  ],
  langList: [
    {name: 'CN', command: 'zh-CN'},
  ],
  home: {
    title: 'Extremesion'
  },
  algoMall: {
    title: 'algo-mall'
  },
  industryPlan: {
    title: 'industry-plan',
    security: {
      title: 'security'
    },
    smartCity: {
      title: 'smart-city'
    },
    passFlow: {
      title: 'pass-flow'
    }
  },
  cases: {
    title: 'cases'
  },
  aboutUs: {
    title: 'about-us',
    companyProfile: {
      title: 'company-profile'
    },
    joinUs: {
      title: 'join-us'
    }
  },
  cooperation: {
    title: 'cooperation',
    AI_partner: {
      title: 'AI_partner'
    },
    productAgent: {
      title: 'product-agent'
    }
  }
}