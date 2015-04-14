var quotes = ['Rhombus! Iceclops!', 'Eat my sword, Ice King!', 'Wait! Let\'s always be stupid. Forever!', 'Cowabunga indeed.', 'Bye. Don\'t follow me.', 'Jake, I don\'t wanna hurt you. But you should know things get crazy when I\'m hungry.', 'If this keeps up, we\'ll have to move to the city and get jobs. We don\'t know how to do anything cool.', 'Everything ahead of us is totally unknown and there\'s no guarantee that things are going to be all right.']

var qLength = quotes.length;
var quoteNum = Math.floor(Math.random() * qLength);

var div = document.createElement("div");
div.innerHTML = '<h2>' + quotes[quoteNum]; '</h2>'
document.getElementsByTagName('body')[0].appendChild(div);