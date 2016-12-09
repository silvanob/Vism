function addCmd(name, func, desc) {
    cmds.push([name, func, desc])
}
function log(arg) {
  console.log(arg)
}
function t(trans, from, to, msg){
  translate(trans, {from: from, to: to}).then(res => {
    msg.edit(`Translating from **${from.toUpperCase()}**:\n\`\`\`\n${trans}\n\`\`\`\nTranslated to **${to.toUpperCase()}**:\n\`\`\`\n${res.text}\`\`\``)
    }).catch(err => {
   console.error(err);
  });
}
function eval2(message, command){
  try{
  var msg = (command).length;
  var X = eval(message.content.slice(msg));
  message.edit(`${message.content}\n\`\`\`js\n${X}\n\`\`\``).catch(console.error);
  }catch(e){
  message.edit(`${message.content}\n\`\`\`js\n${e}\n\`\`\``).catch(console.error);
  }
}
function listcmds(msg){
  let cmdlist = []
  for (var i = 0; i <cmds.length; i++){
  cmdlist.push([`${cmds[i][0]}: ${cmds[i][2]}\n`])
  }
  let cmdslist2 = cmdlist.join("\n")
  msg.channel.sendMessage(`\`\`\`\n${cmdslist2}\n\`\`\``)
}
function isNumeric(num){
    return !isNaN(num)
}
exports.addCmd = addCmd;
exports.log = log;
exports.translate = t;
exports.eval = eval2;
exports.lcmd = listcmds;
exports.isNum = isNumeric;
