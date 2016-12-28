var style = require('style-loader!css-loader?localIdentName=[path][name]---[local]!./style/globalStyle.css');

var message = require('./messages');

// import Button from './button';
// import Kitten from './kitten';
// import Small from './small';

// var newMessage = () => (
//  `
//     <p>
//         Hello ${message.name}
//         ${Kitten}
//         ${Small}
//     </p>
//  `   
// );

// import {multiply} from './mathStuff';

var newMessage = function() {
    return "<div class=" + style.box + ">PROD: " + PRODUCTION.toString() + "<div>";
     
};

var app = document.getElementById('app'); 
app.innerHTML = newMessage(); 

// Button.attachEl();

// debugger; 

if(module.hot){
    module.hot.accept();
}