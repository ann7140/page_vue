function getHrefData () {
  let search = location.search
  if (search.length > 0 && search[0] === '?') {
    search = search.substr(1)
    let data = search.split('&')
    const obj = {}

    data.forEach(item => {
      const arr = item.split('=')
      obj[arr[0]] = arr[1]
    })
    console.log(obj)
    return obj
  }

  return null
}

export {
  getHrefData
}
