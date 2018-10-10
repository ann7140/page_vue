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

export {
  getHrefData
}
