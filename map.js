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
    this.sprit_equal();
    this.room_create();
  }

  sprit_equal() {
    var self = 0;
    var rand = Math.floor(Math.random() * 2);
    var sign = Math.floor(Math.random() * 2) ? -Math.floor(Math.random()*3) : Math.floor(Math.random()*3);

    if (rand === 0){

      for (var i = 0; i < this.map.length; i++){
        this.map[i][Math.floor(this.map[i].length / 2) + sign] = 2;
      }

      self = Math.floor(this.map[0].length / 2 + sign);
      rand = Math.floor(Math.random() * this.map.length);
      if (rand > this.map.length - this.minimum){
        rand -= this.minimum;
      }else if (rand < this.minimum) {
        rand += this.minimum;
      }

      if (self > this.map[0].length / 2){

        for (var i = 0; i < this.map[0].length; i++){
          if (this.map[rand][i] === 2){
            self = i;
            break;
          }
          this.map[rand][i] = 2;
        }

        if (rand > Math.floor(this.map.length / 2)){
          var rand = Math.floor(self/2);

          for (var i = 0; i < this.map.length; i++){
            if (this.map[i][rand] === 2){
              break;
            }
            this.map[i][rand] = 2;
          }
        }else {
          var rand = Math.floor(self/2);

          for (var i = this.map.length-1; i > 0; i--){
            if (this.map[i][rand] === 2){
              break;
            }
            this.map[i][rand] = 2;
          }
        }

      }else {

        for (var i = this.map[0].length-1; i > 0; i--){
          if (this.map[rand][i] === 2){
            self = i;
            break;
          }
          this.map[rand][i] = 2;
        }

        if (rand > Math.floor(this.map.length / 2)){
          var rand = Math.floor(self/2 + this.map[0].length / 2);

          for (var i = 0; i < this.map.length; i++){
            if (this.map[i][rand] === 2){
              break;
            }
            this.map[i][rand] = 2;
          }
        }else {
          var rand = Math.floor(self/2 + this.map[0].length / 2);

          for (var i = this.map.length-1; i > 0; i--){
            if (this.map[i][rand] === 2){
              break;
            }
            this.map[i][rand] = 2;
          }
        }
      }

      self = Math.floor(this.map[0].length / 2 + sign);
      rand = Math.floor(Math.random() * 2);
      if (self > this.map[0].length / 2) {
        rand = Math.floor(Math.random()*this.map.length);
        if (rand > this.map.length - this.minimum){
          rand -= this.minimum;
        }else if (rand < this.minimum) {
          rand += this.minimum;
        }

        for (var i = this.map[0].length-1; i > 0; i--){
          if (this.map[rand][i] === 2){
            break;
          }
          this.map[rand][i] = 2;
        }
      }else {
        rand = Math.floor(Math.random()*this.map.length);
        if (rand > this.map.length - this.minimum){
          rand -= this.minimum;
        }else if (rand < this.minimum) {
          rand += this.minimum;
        }
        for (var i = 0; i < this.map[0].length; i++){
          if (this.map[rand][i] === 2){
            break;
          }
          this.map[rand][i] = 2;
        }
      }


    }else if (rand === 1) {

      for (var i = 0; i < this.map[Math.floor(this.map.length / 2)].length; i++){
        this.map[Math.floor(this.map.length / 2) + sign][i] = 2;
      }

      self = Math.floor(this.map[0].length / 2 + sign);
      rand = Math.floor(Math.random() * this.map[0].length);
      if (rand > this.map[0].length - this.minimum){
        rand -= this.minimum;
      }else if (rand < this.minimum) {
        rand += this.minimum;
      }

      if (self > this.map[0].length / 2){

        for (var i = 0; i < this.map.length; i++){
          if (this.map[i][rand] === 2){
            self = i;
            break;
          }
          this.map[i][rand] = 2;
        }

        if (rand > Math.floor(this.map.length / 2)){
          var rand = Math.floor(self/2);

          for (var i = 0; i < this.map[0].length; i++){
            if (this.map[rand][i] === 2){
              break;
            }
            this.map[rand][i] = 2;
          }
        }else {
          var rand = Math.floor(self/2);

          for (var i = this.map[0].length-1; i > 0; i--){
            if (this.map[rand][i] === 2){
              break;
            }
            this.map[rand][i] = 2;
          }
        }

      }else {

        for (var i = this.map.length-1; i > 0; i--){
          if (this.map[i][rand] === 2){
            self = i;
            break;
          }
          this.map[i][rand] = 2;
        }

        if (rand > Math.floor(this.map[0].length / 2)){
          var rand = Math.floor(self/2 + this.map.length / 2);

          for (var i = 0; i < this.map.length; i++){
            if (this.map[rand][i] === 2){
              break;
            }
            this.map[rand][i] = 2;
          }
        }else {
          var rand = Math.floor(self/2 + this.map[0].length / 2);

          for (var i = this.map.length-1; i > 0; i--){
            if (this.map[rand][i] === 2){
              break;
            }
            this.map[rand][i] = 2;
          }
        }
      }

      self = Math.floor(this.map[0].length / 2 + sign);
      rand = Math.floor(Math.random() * 2);
      if (self > this.map.length / 2) {
        rand = Math.floor(Math.random()*this.map[0].length);
        if (rand > this.map[0].length - this.minimum){
          rand -= this.minimum;
        }else if (rand < this.minimum) {
          rand += this.minimum;
        }

        for (var i = this.map.length-1; i > 0; i--){
          if (this.map[i][rand] === 2){
            break;
          }
          this.map[i][rand] = 2;
        }
      }else {
        rand = Math.floor(Math.random()*this.map[0].length);
        if (rand > this.map[0].length - this.minimum){
          rand -= this.minimum;
        }else if (rand < this.minimum) {
          rand += this.minimum;
        }
        for (var i = 0; i < this.map.length; i++){
          if (this.map[i][rand] === 2){
            break;
          }
          this.map[i][rand] = 2;
        }
      }
    }
  }

  room_create(room) {
    console.log("aaaa");

    if (room === undefined){
      var room = {
        x : 2,
        y : 2,
        mx : null,
        my : null,
        map_bottom : false,
        map_right : false,
      }
    }

    console.log(room);
    room.map_bottom = room.y >= this.map.length ? true : false;

    if (room.map_bottom === true){
      console.log("return");
      return;
    }

    for (var my = room.y; my < this.map.length; my++){
      if (this.map[my][room.x] === 2){
        room.my = my - room.y;
        break;
      }else {
        room.my = my - room.y;
        if (this.map.length === my){
          room.map_bottom = true;
        }
      }
    }
    for (var mx = room.x; mx < this.map[room.y].length; mx++){
      if (this.map[room.y][mx] === 2){
        room.mx = mx - room.x;
        break;
      }else {
        room.mx = mx - room.x;
        if (this.map[0].length === mx){
          room.map_right = true;
        }
      }
    }

    if (room.mx < 5){
      room.mx = 5;
    }
    if (room.my < 5){
      room.my = 5;
    }


    var rx = Math.floor((Math.random()*room.mx/2)) + Math.floor(room.mx/2);
    var ry = Math.floor((Math.random()*room.my/2)) + Math.floor(room.my/2);

    if (rx < 5){
      rx = 5
    }
    if (ry < 5){
      ry = 5;
    }

    for (var i = room.y; i < room.y + ry + 1; i++){
      for (var j = room.x; j < room.x + rx + 1; j++){
        this.map[i][j] = 0;
      }
    }

    room.x = room.x + room.mx + 2;

    if (room.x > this.map[0].length - 1){
      console.log("x init");

      room.y = room.y + room.my + 2;
      room.x = 2;
      this.room_create(room);
    }else {
      this.room_create(room);
    }

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
