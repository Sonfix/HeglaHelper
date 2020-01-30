const timer = require('./timer');
module.exports = message => {
    message.content += ' 8';
    timer(message);
    message.reply("Teatimer ist gestartet! In 8 Minuten werde ich dich benachrichtigen.");

}
