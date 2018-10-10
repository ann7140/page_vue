// 获取href链接参数
function getHrefData () {
  const obj = {}
  let search = location.search
  if (search.length > 0 && search[0] === '?') {
    search = search.substr(1)
    let data = search.split('&')

    data.forEach(item => {
      const arr = item.split('=')
      obj[arr[0]] = arr[1]
    })
  }
  return obj
}

/* 这段代码是固定的，必须要放到js中 */

function setupWebViewJavascriptBridge (callback) {
  if (window.WebViewJavascriptBridge) { return callback(window.WebViewJavascriptBridge) }
  if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback) }
  window.WVJBCallbacks = [callback]
  var WVJBIframe = document.createElement('iframe')
  WVJBIframe.style.display = 'none'
  WVJBIframe.src = 'https://__bridge_loaded__'
  document.documentElement.appendChild(WVJBIframe)
  setTimeout(function () { document.documentElement.removeChild(WVJBIframe) }, 0)
}

export {
  getHrefData,
  setupWebViewJavascriptBridge
}
