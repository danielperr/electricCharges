var timeMultiply = 1;
var tutorial1 = true;
var manualMod;


function main(mod) {
  
  mod *= timeMultiply;
  
  draw.fill('white');
  
  for (var i=0; i<charges.length; i++) {
    charges[i].calcForce(charges);
  }
  
  for (var i=0; i<charges.length; i++) {
    charges[i].calcMotion(mod);
  }
  
  for (var i=0; i<charges.length; i++) {
    charges[i].render();
  }
  
  
  /*if (tutorial1) {
    draw.text(cw/2, ch/2, 'Use left click and right click', '32', 'black');
    draw.text(cw/2, ch/2, 'to place charges', '32', 'black');
  }*/
  
  
}

fps = 60; // Change fps if you want to save energy

setInterval(function(){main(1/fps)}, 1000/fps);




function totals() {
  
  var total = 0;
  
  for (var l=0; l<charges.length; l++) {
    total += charges[l].power;
  }
  
  return total
  
}