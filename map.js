class Createmap {
  constructor(width,height,minimum) {
    this.width = width;
    this.height = height;
    this.minimum = minimum;
    this.map = new Array(height);
    for (var y = 0; y < this.map.length; y++){
      this.map[y] = new Array(width);
      for (var x = 0; x < this.map[y].length; x++){
        this.map[y][x] = 9;
      }
    }
    this.sprit_equal(1);
    this.room_create();
  }

  sprit_equal(count, x, y, mx, my, direction, first) {
    if (count < 0){
      return;
    }

    console.log(count);
    console.log("x = " + x);
    console.log("y = " + y);
    console.log("mx = " + mx);
    console.log("my = " + my);
    console.log(first);


    if (direction === 0){
      direction = 1;
    }else if (direction === 1) {
      direction = 0;
    }else {
      direction = Math.floor(Math.random()*2);
    }

    if (x||y||mx||my){
      console.log("2nd");
      if (direction === 0){
        var rand_x = Math.floor(Math.random()*mx);
        for (var y = y; y < my; y++){
          this.map[y][rand_x] = 2;
        }
        var rand = Math.floor(Math.random()*2);
        if (rand === 0 && x+rand_x < mx){
          x += rand_x;
        }else if (rand === 1 && mx-rand_x < x){
          mx -= rand_x;
        }
      }else {
        var rand_y = Math.floor(Math.random()*my);
        for (var x = x; x < mx; x++){
          this.map[rand_y][x] = 2;
        }
        var rand = Math.floor(Math.random()*2);
        if (rand === 0 && y+rand_y < my){
          y += rand_y;
        }else if (rand === 1 && my-rand_y < y){
          my -= rand_y;
        }
      }

      return this.sprit_equal(count-1, x, y, mx, my, direction, first);

    }else {
      console.log("1st");
      var x = 0;
      var y = 0;
      var mx = this.map[x].length;
      var my = this.map.length;
      var first = {};

      if (direction === 0){
        var rand_x = Math.floor(Math.random()*mx);
        if (rand_x > mx - this.minimum){ rand_x -= this.minimum; }else if (rand_x < this.minimum){ rand_x += this.minimum; }
        for (var fy = y; fy < my; fy++){
          this.map[fy][rand_x] = 2;
        }
        var rand = Math.floor(Math.random()*2);
        first.x = rand_x;
        if (rand === 0){
          x += rand_x;
          first.x_direction = rand;
        }else if (rand === 1){
          mx = fy - (fy - rand_x);
          first.x_direction = rand;
        }
      }else {
        var rand_y = Math.floor(Math.random()*my);
        if (rand_y > my - this.minimum){ rand_y -= this.minimum; }else if (rand_y < this.minimum){ rand_y += this.minimum; }
        for (var fx = x; fx < mx; fx++){
          this.map[rand_y][fx] = 2;
        }
        var rand = Math.floor(Math.random()*2);
        first.y = rand_y;
        if (rand === 0){
          y += rand_y;
          first.y_direction = rand;
        }else if (rand === 1){
          my = fx - (fx - rand_y);
          first.y_direction = rand;
        }
      }
      return this.sprit_equal(count-1, x, y, mx, my, direction, first);
    }
  }

  room_create() {
    return
  }

}


var count = 0;
setInterval(function () {
  count++;
  var create = new Createmap(50,50,10);

  for(var y = 0; y < create.map.length; y++){
    for(var x = 0; x < create.map[y].length; x++){
      if (create.map[y][x] === 9){
        create.map[y][x] = "■";
      }else if (create.map[y][x] === 2){
        create.map[y][x] = "@";
      }else if (create.map[y][x] === 0){
        create.map[y][x] = "□";
      }
    }
    console.log(create.map[y].join(" "));
  }
  console.log("");
  console.log(count);
  console.log("");
}, 1000);
