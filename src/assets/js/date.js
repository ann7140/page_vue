const weeks = ['日', '一', '二', '三', '四', '五', '六']

// 获取一个月：共多少天 month：1~12
function daysInMonth (year, month) {
  return new Date(year, month, 0).getDate()
}
// 获取当前月：共多少天
function daysInMonthNow () {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  return daysInMonth(year, month)
}
// 一个月中第一天星期几 month:1~12
function getFirstDayInMonth (year, month) {
  let firstDay = new Date(year, month - 1, 1)
  return firstDay.getDay()
}

// 一个月中第后一天星期几 month：1~12
function getLastDayInMonth (year, month) {
  let dayInMonth = daysInMonth(year, month)
  let lastDay = new Date(year, month - 1, dayInMonth)
  return lastDay.getDay()
}

// 一个月天数的数组 month：1~12
function daysList (year, month) {
  let list = []
  const firstDay = getFirstDayInMonth(year, month)
  const lastDay = getLastDayInMonth(year, month)
  const days = daysInMonth(year, month)

  console.log(firstDay, lastDay, days)

  for (let i = 0; i < firstDay; i++) {
    list.push(0)
  }
  for (let i = 0; i < days; i++) {
    list.push(i + 1)
  }
  console.log('lastDay', lastDay)
  for (let i = 0; i < (6 - lastDay); i++) {
    list.push(0)
  }

  return list
}

export { daysList, weeks, daysInMonth, daysInMonthNow, getFirstDayInMonth, getLastDayInMonth }
