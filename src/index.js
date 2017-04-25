'use strict';
let textarea =$(".message-field");
let output =$(".message-formatted");
textarea.on("input", function(){
  let value = textarea.val();
  function setFormatOfMessage(){
    return value.replace(/\s+/g, ' ').toLowerCase().trim();
  }
  output.text(setFormatOfMessage(value));
});
// console.log(output.text(setFormatOfMessage(value)));
