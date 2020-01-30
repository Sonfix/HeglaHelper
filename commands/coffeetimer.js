const timer = require('./timer');
module.exports = message => {
    message.content += ' 9';
    timer(message);
    message.reply("Der Kaffeetimer wurde erfolgreich gestartet. In 9 Minuten ist es soweit.");
}
