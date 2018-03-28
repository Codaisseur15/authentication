var koa = require('koa');
var proxy = require('koa-proxy');
var app = koa();
app.use(proxy({
  host: 'http://1'
}));
app.listen(3000);

app.get('/quizes', proxy({
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

//get: /quizzes /quizzes/:id post: /quizzes patch: /quizzes  delete : 
// quizzes/id @Julia Schneider and I don't know what you mean by Server...
//  but port 4008? Maybe we should define the different ports for each service
