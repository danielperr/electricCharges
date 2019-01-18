class Charge {
  
  
  constructor(x, y, power, mass, kinetic) {
    
    this.x = x;
    this.y = y;
    this.power = power; // Charge is measured in coulombs
    this.mass = mass; // Mass is measured in kg
    this.radius = mass;
    this.kinetic = kinetic;
    this.oob = false;
    
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
      if (!((this.x == charge.x && this.y == charge.y) || charge.oob)) {
      
        var dist = Math.max(Math.sqrt(Math.pow(charge.x-this.x, 2) + Math.pow(charge.y-this.y, 2)), charge.radius+this.radius);
        
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
    if (this.kinetic) {
    
    this.acc.x = this.res.x / this.mass;
    this.acc.y = this.res.y / this.mass;
    
    this.vel.x += this.acc.x * mod;
    this.vel.y += this.acc.y * mod;
    
    if ((this.x < -this.radius) || (this.x > cw+this.radius) || (this.y < -this.radius) || (this.y > ch+this.radius)) {
      //this.oob = true;
    }
      
    
    if (this.x <= this.radius) {
      this.vel.x = Math.abs(this.vel.x);
    } if (this.x >= cw-this.radius) {
      this.vel.x = -Math.abs(this.vel.x);
    } if (this.y <= this.radius) {
      this.vel.y = Math.abs(this.vel.y);
    } if (this.y >= ch-this.radius) {
      this.vel.y = -Math.abs(this.vel.y);
    }
    
    
    this.x += this.vel.x * mod;
    this.y += this.vel.y * mod;
      
    }
  }
  
  
  
  render() {
    
    if (this.oob) {return false}
    
    var col = 'rgb('+(-this.power*3000)+', 0, '+this.power*3000+')';
    
    //draw.arrow(this.x, this.y, this.x+(this.res.x/10), this.y+(this.res.y/10), 10, 2, "black");
    draw.circle(this.x, this.y, this.radius, col);
    draw.sign(this.x, this.y, this.mass*0.75, this.power, 2, "white");
    
  }
  
  
}

charges = [];
