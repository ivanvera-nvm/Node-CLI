var fs = require("fs");

module.exports = {
  pwd: function () {
    process.stdout.write(process.cwd() + "\nprompt > ");
  },
  date: function () {
    process.stdout.write(Date() + "\nprompt > ");
  },
  ls: function () {
    fs.readdir(".", function (err, files) {
      if (err) throw err;
      files.forEach(function (file) {
        process.stdout.write(file.toString() + "\n");
      });
      process.stdout.write("prompt > ");
    });
  },

  echo: function (args) {
    let str = "";
    args.forEach((elem) => {
      if (process.env[elem.slice(1)]) {
        str += process.env[elem.slice(1)];
      } else {
        str += args;
      }
    });
    process.stdout.write(str + "\nprompt > ");
  },

  cat: function (file) {
    fs.readFile(`./${file}`, (err, data) => {
      if (err) throw err;
      process.stdout.write(data + "\nprompt > ");
    });
  },

  head: function (file) {
      
    fs.readFile(`./${file}`,'utf-8' ,(err, data) => {
        if (err) throw err;
        let datos = data.split('\n');
        let filas = datos.slice(0,10).join('\n');
        process.stdout.write(filas + "\nprompt > ");
      });
  },

  tail: function (file) {

    fs.readFile(`./${file}`,'utf-8' ,(err, data) => {
        if (err) throw err;
        let datos = data.split('\n');
        let filas = datos.slice(datos.length - 11,datos.length).join('\n');
        process.stdout.write(filas + "\nprompt > ");
      });
  },
};