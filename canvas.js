var ca = document.getElementById('theCanvas');
var ctx = ca.getContext('2d');


function caResize() {
  
  ca.width = $(document).width();
  ca.height = $(document).height();
  
  cw = ca.width;
  ch = ca.height;
  
}

caResize();



function Draw() {
  
  this.defaultFont = 'Arial';
  
  this.circle = function (x, y, r, c) {
    
    ctx.beginPath();
    
    ctx.arc(x, y, r, 0, 2*Math.PI);
    ctx.fillStyle = c;
    ctx.fill();
    
    ctx.closePath();
    
  }
  
  
  this.sign = function (x, y, r, power, w, c) {
    
    if (power != 0) {
    
    ctx.beginPath();
    
    // Draw minus
    ctx.moveTo(x-r, y);
    ctx.lineTo(x+r, y);
    
    // Draw plus
    if (power > 0) {
      ctx.moveTo(x, y-r);
      ctx.lineTo(x, y+r);
    }
    
    ctx.lineWidth = w;
    ctx.strokeStyle = "white";
    ctx.stroke();
    
    ctx.closePath();
    
    }
    
  }
  
  
  this.arrow = function (x1, y1, x2, y2, head, w, c) {
    
    
    var angle = Math.atan2(y2-y1,x2-x1);
    
    ctx.beginPath();
    
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2-head*0.5*Math.cos(angle), y2-head*0.5*Math.sin(angle));
    
    ctx.strokeStyle = c;
    ctx.lineWidth = w
    ctx.stroke();
    
    ctx.closePath();
    
    
    ctx.beginPath();
    
    ctx.moveTo(x2-head*Math.cos(angle-Math.PI/6),y2-head*Math.sin(angle-Math.PI/6));
    ctx.lineTo(x2, y2);
    ctx.lineTo(x2-head*Math.cos(angle+Math.PI/6),y2-head*Math.sin(angle+Math.PI/6));
    
    ctx.fillStyle = c;
    ctx.fill();
    
    ctx.closePath();
    
  }
  
  
  this.text = function (x, y, text, size, color, font) {
    
    family = font || this.defaultFont;
    ctx.font = size+'px '+family;
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
  
  }
  
  
  this.fill = function (color) {
    
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, cw, ch);
    
  }
  
}

var draw = new Draw();