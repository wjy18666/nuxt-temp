import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en_US from '~/locales/en-US'
import zh_CN from '~/locales/zh-CN'

// let en_US = require('~/locales/en-US.js').default
// let zh_CN = require('~/locales/zh-CN.js').default

Vue.use(VueI18n)

export default ({ app, store }) => {
  app.i18n = new VueI18n({
    locale:  store.state.locale,
    fallbackLocale: 'zh-CN',
    messages: {
      'en-US': en_US,
      'zh-CN':  zh_CN
    }
  })
}