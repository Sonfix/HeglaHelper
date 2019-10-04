module.exports = message => {
    let s = "\n";    
    s += Math.floor(Math.random() * 6) + 1 + '\n'; 
    s += Math.floor(Math.random() * 6) + 1 + '\n'; 
    s += Math.floor(Math.random() * 6) + 1 + '\n'; 
    s += Math.floor(Math.random() * 6) + 1 + '\n'; 
    s += Math.floor(Math.random() * 6) + 1;
    message.reply(s);
}
