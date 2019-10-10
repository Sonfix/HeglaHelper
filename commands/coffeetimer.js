const timer = require('./timer');
module.exports = message => {
    message.content += ' 9';
    timer(message);
}
