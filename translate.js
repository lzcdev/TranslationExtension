
const { youdao, baidu, google } = window.tjs

function translate(type) {
  var inputValue = $('.input').val()
  if (inputValue == '') {
    alert('输入不能为空')
    return
  }
  console.log(inputValue)
  type.translate(inputValue).then(result => {
    console.log(result)
    $('.item').remove()
    $('.link').attr('href', result.link)
    $('.link').text(result.link)
    if (!result.dict) { return }
    for (let i = 0, item = result.dict; i < item.length; i++) {
      console.log(item[i])
      if (item[i].substring(0,9) == 'undefined') {
        $('.content').append("<div class='item'>" + inputValue + item[i].substring(10) + "</div>")
      } else {
        $('.content').append("<div class='item'>" + item[i] + "</div>")
      }
    }
  })
}

// 百度翻译
$('.baidu').click(function () {
  translate(baidu)
})

// 谷歌翻译
$('.google').click(function () {
  translate(google)
})

// 有道翻译
// $('.youdao').click(function () {
//   translate(youdao)
// })






