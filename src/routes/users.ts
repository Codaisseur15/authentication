var koa = require('koa');
var proxy = require('koa-proxy');
var app = koa();
app.use(proxy({
  host: 'http://4007'
}));
app.listen(4008);

app.get('/users', proxy({
  host: 'http://alicdn.com',
  map: function(path) { return 'public/' + path; }
}));

app.get('/users/:id([0-9]+)', proxy({
  host: 'http://alicdn.com',
  map: function(path) { return 'public/' + path; }
}));


app.post('index.js', proxy({
  host: 'http://alicdn.com',
  map: function(path) { return 'public/' + path; }
}));

app.patch('index.js', proxy({
  host: 'http://alicdn.com',
  map: function(path) { return 'public/' + path; }
}));

app.delete('index.js', proxy({
  host: 'http://alicdn.com',
  map: function(path) { return 'public/' + path; }
}));
