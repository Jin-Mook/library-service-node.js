const express = require('express');
const dotenv = require('dotenv');
const db = require('./test');
const nunjucks = require('nunjucks');
const XLSX = require('xlsx');

const wb = XLSX.readFile('elice_library.xlsx');

datas = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], { header: 0 });

dotenv.config();

app = express();
app.set('port', process.env.PORT || 5000);

const env = nunjucks.configure('views', {
  express: app,
  watch: true,
});
env.express(app);

// 기본 설정
app.use(express.json());

// db에서 select하는 기본 api 설계
app.get('/', (req, res, next) => {
  console.log('api 전달');
  db.pool.query('select * from Book_lists;', (error, results, fileds) => {
    if (error) return res.status(500).send(error);
    else return res.render('main.html', { texts: results });
  });
});

// db에 insert하는 기본 api 설계
app.post('/', (req, res, next) => {
  console.log(req.body.text);
  db.pool.query(
    `insert into Book_lists (id, book_name, publisher, author, publication_date, pages, isbn, description, link, book_image) values ("${req.body.id}", "${req.body.book_name}", "${req.body.publisher}", "${req.body.author}", "${req.body.publication_date}", "${req.body.pages}", "${req.body.isbn}", "${req.body.description}", "${req.body.link}", "${req.body.book_img}")`,
    (error, results, fileds) => {
      if (error) return res.status(500).send(error);
      else return res.json({ success: true, value: req.body.text });
    }
  );
});

// 404 에러처리
app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status(404);
  next(error);
});

// 에러처리 미들웨어
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.status || 500);
  res.send('error');
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});
