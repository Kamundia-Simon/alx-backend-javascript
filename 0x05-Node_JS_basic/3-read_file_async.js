const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      try {
        const lines = data.split('\n').filter((line) => line.trim().length > 0);

        lines.shift();
        const fields = {};
        lines.forEach((line) => {
          const [firstname, , , field] = line.split(',');

          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        });
        console.log(`Number of students: ${lines.length}`);

        for (const [field, students] of Object.entries(fields)) {
          console.log(
            `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`,
          );
        }

        resolve();
      } catch (parseError) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

module.exports = countStudents;
