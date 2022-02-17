const http = require('http');

function spamImageRoute() {
  setInterval(() => http.get(`http://localhost:9080/image`,
      // res => console.log(`${res.statusMessage}, ${res.statusCode}`)),
      () => {
      }),
    100
  )
}

function spamThisImageRoute() {
  setInterval(() => http.get(`http://localhost:9080/image/dog`,
      // res => console.log(`${res.statusMessage}, ${res.statusCode}`)),
      () => {
      }),
    500
  )
}

function spamAnythingRoute() {
  setInterval(() => http.get(`http://localhost:9080/anything`,
      // res => console.log(`${res.statusMessage}, ${res.statusCode}`)),
      () => {
      }),
    250
  )
}

spamImageRoute()
spamThisImageRoute()
spamAnythingRoute()
