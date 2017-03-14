$(document).resize(function(){
  
  caResize();
  
});


$('#theCanvas').contextmenu(function(e){
  
  charges.push(new Charge(e.clientX, e.clientY, -0.02, 10));
  return false;
  
});


$('#theCanvas').click(function(e){
  
  charges.push(new Charge(e.clientX, e.clientY, 0.02, 10));
  
});