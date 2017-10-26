(function (doc, win) {
  var docEl = doc.documentElement
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  var recalc = function () {
    var clientWidth = docEl.clientWidth
    if (!clientWidth) return
    // docEl.style.fontSize = 20 * (clientWidth / 320) + 'px'
    if (22 * (clientWidth / 750) < 12) {
      docEl.style.fontSize = 12 + 'px'
    } else {
      docEl.style.fontSize = 22 * (clientWidth / 750) + 'px' // 750 设计图宽度
    }
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)
