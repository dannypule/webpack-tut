var message = require('./messages');

import Button from './button';

// var newMessage = () => `Hello ${message.name}`;
var newMessage = () => Button.button;

var app = document.getElementById('app'); 
app.innerHTML = newMessage(); 

Button.attachEl();

// debugger; 

if(module.hot){
    module.hot.accept();
}