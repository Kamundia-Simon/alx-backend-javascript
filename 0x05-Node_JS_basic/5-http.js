const http = require('http');
const fs = require('fs');

const countStudents = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.split('\n').filter((line) => line.trim().length > 0);

    const fields = {};

    const studentLines = lines.slice(1);

    studentLines.forEach((line) => {
      const [firstname, , , field] = line.split(',');

      if (firstname && field) {
        if (!fields[field]) {
          fields[field] = [];
        }

        fields[field].push(firstname);
      }
    });

    const result = [];
    result.push(`Number of students: ${studentLines.length}`);

    for (const [field, students] of Object.entries(fields)) {
      result.push(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }

    resolve(result.join('\n'));
  });
});

const app = http.createServer((req, res) => {
  const { url } = req;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (url === '/') {
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    const databaseFile = process.argv[2];

    if (!databaseFile) {
      res.statusCode = 400;
      res.end('Database file missing');
      return;
    }

    countStudents(databaseFile)
      .then((data) => {
        res.end(`This is the list of our students\n${data}`);
      })
      .catch((err) => {
        res.statusCode = 500;
        res.end(err.message);
      });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('...');
});

module.exports = app;
