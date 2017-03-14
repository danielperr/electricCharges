class Charge {
  
  
  constructor(x, y, power, mass, kinetic) {
    
    this.x = x;
    this.y = y;
    this.power = power; // Charge is measured in coulombs
    this.mass = mass; // Mass is measured in kg
    this.kinetic = kinetic || true;
    
    this.acc = { // Acceleration is measured in m/s^2
      x: 0,
      y: 0
    }
    
    this.vel = { // Velocity is measured in m/s
      x: 0,
      y: 0
    }
    
    this.forces = []; // The forces and the resultant force are measured in Newtons (m*kg / s^2)
    
    this.res = {
      x: 0,
      y: 0
    }
    
  }
  
  
  
  calcForce(charges) {
    
    for (var j=0; j<charges.length; j++) {
      var charge = charges[j];
      if (!(this.x == charge.x && this.y == charge.y)) {
      
        var dist = Math.sqrt(Math.pow(charge.x-this.x, 2) + Math.pow(charge.y-this.y, 2));
        
        if (dist <= 10) {
          var charge1 = this.power;
          var charge2 = charge.power;
          
          this.power = (charge1+charge2)/2;
          charge.power = (charge1+charge2)/2;
        }
        
        var f = (9 * 10**9 * this.power * charge.power) / Math.pow(dist, 2);
        
        var fx = f * (this.x-charge.x)/dist;
        var fy = f * (this.y-charge.y)/dist;
        
        this.forces.push({x: fx, y: fy});
        
      } 
    }
    
    this.res.x = 0;
    this.res.y = 0;
    
    for (var k=0; k<this.forces.length; k++) {
      
      this.res.x += this.forces[k].x;
      this.res.y += this.forces[k].y;
      
    }
    
    this.forces = [];
    
  }
  
  
  
  calcMotion(mod) {
    
    this.acc.x = this.res.x / this.mass;
    this.acc.y = this.res.y / this.mass;
    
    this.vel.x += this.acc.x * mod;
    this.vel.y += this.acc.y * mod;
    
    if ((this.x <= 0) || (this.x >= cw)) {
      this.vel.x *= -0.5;
      this.x += this.vel.x * 0.1
    }
    
    if ((this.y <= 0) || (this.y >= ch)) {
      this.vel.y *= -0.5;
      this.y += this.vel.y * 0.1
    }
    
    this.x += this.vel.x * mod + 0.5 * this.acc.x * Math.pow(mod, 2);
    this.y += this.vel.y * mod + 0.5 * this.acc.y * Math.pow(mod, 2);
    
  }
  
  
  
  render() {
    
    var col = 'rgb('+(-this.power*10000)+', 0, '+this.power*10000+')';
    
    draw.arrow(this.x, this.y, this.x+this.res.x, this.y+this.res.y, 10, 2, "black");
    draw.circle(this.x, this.y, this.mass, col);
    draw.sign(this.x, this.y, this.mass*0.75, this.power, 2, "white");
    
  }
  
  
}

charges = [];