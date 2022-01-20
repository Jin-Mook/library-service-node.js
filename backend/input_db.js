const XLSX = require('xlsx');
const db = require('./test');

const wb = XLSX.readFile('elice_library.xlsx');

datas = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], { header: 0 });

datas.forEach((data) => {
  console.log(data.id);
  if (data.id) {
    db.pool.query(
      `insert into Book_lists (id, book_name, publisher, author, pages, isbn, description, link, book_image) values ("${data.id}", "${data.book_name}", "${data.publisher}", "${data.author}", "${data.pages}", "${data.isbn}", "${data.description}", "${data.link}", "${data.book_img}")`,
      (error, results, fileds) => {
        if (error) console.log(error);
        else console.log('success');
      }
    );
  }
});
