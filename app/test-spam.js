const http = require('http');

(() => {
  setInterval(() => http.get(`http://127.0.0.1:9080/anything/foo?arg=10`, {'host': 'example.com'},
    res => {
      console.log(`${res.statusMessage}, ${res.statusCode}`)
    }), 100
  )
})()
