export default function ({ isHMR, app, store, route, params, error, redirect }) {
  //  const defaultLocale = app.i18n.fallbackLocale
  // If middleware is called from hot module replacement, ignore it
  if (isHMR) { return }
  // Get locale from params
  let query = route.query
  let lang = query.lang

  console.log('lang', lang)


  //  query没有带语言
  if (!lang) {
    return redirect({
      path: route.path,
      query: {
        ...query,
        lang: store.state.locale
      }
    })
  }

  if (!store.state.locales.includes(lang)) {
    return error({ message: 'This page could not be found.', statusCode: 404 })
  }
  // Set locale
  store.commit('SET_LANG', lang)
  app.i18n.locale = store.state.locale
  // If route is /<defaultLocale>/... -> redirect to /...
  // if (locale === defaultLocale && route.fullPath.indexOf('/' + defaultLocale) === 0) {
  //   const toReplace = '^/' + defaultLocale + (route.fullPath.indexOf('/' + defaultLocale + '/') === 0 ? '/' : '')
  //   const re = new RegExp(toReplace)
  //   return redirect(
  //     route.fullPath.replace(re, '/')
  //   )
  // }
}
