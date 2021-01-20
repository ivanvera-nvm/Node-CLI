var commands = require("./commands");

let pwd = commands.pwd;
let date = commands.date;
let ls = commands.ls;
let echo = commands.echo;
let cat = commands.cat;
let head = commands.head;
let tail = commands.tail;

var fs = require("fs");
process.stdout.write("prompt > ");
process.stdin.on("data", function (data) {
  var param = data.toString().trim().split(' ');
  let cmd = param[0];
  let args = param.slice(1);
  commands[cmd](args);
});