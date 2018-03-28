import proxy from 'koa-proxy'


const quizesURl = process.env.PORT || 4007;

app.get('index.js', proxy({
  url: 'http://alicdn.com/index.js'
}));
