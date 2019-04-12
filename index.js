function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      vars[key] = value;
  });
  return vars;
}

console.log(getUrlVars()["x"])

setTimeout(function(){
  $('div').last().remove()
  $('div').last().remove()
}, 2000);
