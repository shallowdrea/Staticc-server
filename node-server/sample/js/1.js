alert('这里是静态服务器')
var xhr = new XMLHttpRequest()
xhr.open('GET', '/getWeather?city=hangzhou', true)
xhr.send()
xhr.onload = function(){
  console.log(JSON.parse(xhr.responseText))
}