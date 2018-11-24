export function getEntryUrl (pageName) {
  if (weex.config.env.platform === 'Web') {
    return './' + pageName + '.html'
  } else {
    var arr = weex.config.bundleUrl.split('/')
    // 防止为 .html
    arr.pop()
    arr.push(pageName + '.js')
    return arr.join('/')
  }
}
