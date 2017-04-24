'use strict';
let textarea =$('message-field');
let output =$('message-formatted');
input.on('message-formatted', function(){
  let value = textarea.val();
//   $.replace(/\s+/g, ' ')
//   $.trim(value);
//   $.toLowerCase();
  output.text(value);
})
console.log($)