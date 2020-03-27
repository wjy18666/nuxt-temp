export const state = () => {
  return {
    locales: ['en-US', 'zh-CN'],
    locale: process.browser ? window.localStorage.getItem('lang') : 'zh-CN'
  }
}

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
}