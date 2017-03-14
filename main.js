charges.push(new Charge(200, 200, 0.02, 10));
charges.push(new Charge(400, 400, -0.02, 10));

function main(mod) {
  
  
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cw, ch);
  
  for (var i=0; i<charges.length; i++) {
    charges[i].calcForce(charges);
  }
  
  for (var i=0; i<charges.length; i++) {
    charges[i].calcMotion(mod);
  }
  
  for (var i=0; i<charges.length; i++) {
    charges[i].render();
  }
  
}

fps = 60

setInterval(function(){main(1/fps)}, 1000/fps);




function totals() {
  
  var total = 0;
  
  for (var l=0; l<charges.length; l++) {
    total += charges[l].power;
  }
  
  return total
  
}