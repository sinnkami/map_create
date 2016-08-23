class Createmap {
  constructor(width,height) {
    this.width = width;
    this.height = height;
    this.map = new Array(height);
    for (var y = 0; y < this.map.length; y++){
      this.map[y] = new Array(width);
      for (var x = 0; x < this.map[y].length; x++){
        this.map[y][x] = 9;
      }
    }
    this.sprit_equal(5);//今は縦でいfしてるけど横で胃fすればいける希ガス
    this.room_create(1,1);
  }

  sprit_equal(count,direction) {
    if (count < 1){
      return;
    }

    if (direction === undefined){
      var direction = Math.floor(Math.random()*4);
    }else if (direction === 0 || direction === 2){
      var rand = Math.floor(Math.random()*2);
      if (rand === 0){
        direction = 1;
      }else {
        direction = 3;
      }
    }else if (direction === 1 || direction === 3){
      var rand = Math.floor(Math.random()*2);
      if (rand === 0){
        direction = 0;
      }else {
        direction = 2;
      }
    }

    var number = 0;

    if (direction === 0){//上から下
      while (true) {
        number++
        if (number > 100){ return this.sprit_equal(count-1,direction); }
        var rand = Math.floor(Math.random()*this.map[0].length);
        if (rand > this.map[rand].length-8){ rand -= 7; }else if(rand < 8){ rand += 7; }
        if (this.map[0][rand] === 2 || this.map[0][rand-1] === 2 || this.map[0][rand-2] === 2 || this.map[0][rand-3] === 2 || this.map[0][rand-4] === 2 || this.map[0][rand-5] === 2 || this.map[0][rand-6] === 2 || this.map[0][rand-7] === 2){
          continue;
        }
        if (this.map[0][rand] === 2 || this.map[0][rand+1] === 2 || this.map[0][rand+2] === 2 || this.map[0][rand+3] === 2 || this.map[0][rand+4] === 2 || this.map[0][rand+5] === 2 || this.map[0][rand+6] === 2 || this.map[0][rand+7] === 2){
          continue;
        }
        break;

      }

      for (var i = 0; i < this.map.length; i++){
        if (this.map[i][rand] === 2){
          this.map[i][rand] = 2;
          break;
        }else {
          this.map[i][rand] = 2;
        }
      }

    }else if (direction === 1) {//右から左
      while (true) {
        number++
        if (number > 100){ return this.sprit_equal(count-1,direction); }
        var rand = Math.floor(Math.random()*this.map[0].length);
        if (rand > this.map[rand].length-8){ rand -= 7; }else if(rand < 8){ rand += 7; }
        if (this.map[rand][0] === 2 || this.map[rand-1][0] === 2 || this.map[rand-2][0] === 2 || this.map[rand-3][0] === 2 || this.map[rand-4][0] === 2 || this.map[rand-5][0] === 2 || this.map[rand-6][0] === 2 || this.map[rand-7][0] === 2){
          continue;
        }
        if (this.map[rand][0] === 2 || this.map[rand+1][0] === 2 || this.map[rand+2][0] === 2 || this.map[rand+3][0] === 2 || this.map[rand+4][0] === 2 || this.map[rand+5][0] === 2 || this.map[rand+6][0] === 2 || this.map[rand+7][0] === 2){
          continue;
        }
        break;

      }

      for (var i = 0; i < this.map[rand].length; i++){
        if (this.map[rand][i] === 2){
          this.map[rand][i] = 2;
          break;
        }else {
          this.map[rand][i] = 2;
        }
      }
    }else if (direction === 2) {//下から上
      while (true) {
        number++
        if (number > 100){ return this.sprit_equal(count-1,direction); }
        var rand = Math.floor(Math.random()*this.map[0].length);
        if (rand > this.map[rand].length-8){ rand -= 7; }else if(rand < 8){ rand += 7; }
        if (this.map[this.map.length-1][rand] === 2 || this.map[this.map.length-1][rand-1] === 2 || this.map[this.map.length-1][rand-2] === 2 || this.map[this.map.length-1][rand-3] === 2 || this.map[this.map.length-1][rand-4] === 2 || this.map[this.map.length-1][rand-5] === 2 || this.map[this.map.length-1][rand-6] === 2 || this.map[this.map.length-1][rand-7] === 2){
          continue;
        }
        if (this.map[this.map.length-1][rand] === 2 || this.map[this.map.length-1][rand+1] === 2 || this.map[this.map.length-1][rand+2] === 2 || this.map[this.map.length-1][rand+3] === 2 || this.map[this.map.length-1][rand+4] === 2 || this.map[this.map.length-1][rand+5] === 2 || this.map[this.map.length-1][rand+6] === 2 || this.map[this.map.length-1][rand+7] === 2){
          continue;
        }
        break;

      }

      for (var i = this.map.length-1; i >= 0; i--){
        if (this.map[i][rand] === 2){
          this.map[i][rand] = 2;
          break;
        }else {
          this.map[i][rand] = 2;
        }
      }
    }else if (direction === 3) {//左から右
      while (true) {
        number++
        if (number > 100){ return this.sprit_equal(count-1,direction); }
        var rand = Math.floor(Math.random()*this.map[0].length);
        if (rand > this.map[rand].length-8){ rand -= 7; }else if(rand < 8){ rand += 7; }
        if (this.map[rand][this.map[rand].length-1] === 2 || this.map[rand-1][this.map[rand].length-1] === 2 || this.map[rand-2][this.map[rand].length-1] === 2 || this.map[rand-3][this.map[rand].length-1] === 2 || this.map[rand-4][this.map[rand].length-1] === 2 || this.map[rand-5][this.map[rand].length-1] === 2 || this.map[rand-6][this.map[rand].length-1] === 2 || this.map[rand-7][this.map[rand].length-1] === 2){
          continue;
        }
        if (this.map[rand][this.map[rand].length-1] === 2 || this.map[rand+1][this.map[rand].length-1] === 2 || this.map[rand+2][this.map[rand].length-1] === 2 || this.map[rand+3][this.map[rand].length-1] === 2 || this.map[rand+4][this.map[rand].length-1] === 2 || this.map[rand+5][this.map[rand].length-1] === 2 || this.map[rand+6][this.map[rand].length-1] === 2 || this.map[rand+7][this.map[rand].length-1] === 2){
          continue;
        }
        break;

      }

      for (var i = this.map[rand].length-1; i >= 0; i--){
        if (this.map[rand][i] === 2){
          this.map[rand][i] = 2;
          break;
        }else {
          this.map[rand][i] = 2;
        }
      }
    }

    return this.sprit_equal(count-1,direction);
  }

  room_create(x,y) {
    if (x > this.map[0].length-1){
      return
    }

    if (x > 1 && this.map[y][x-2] !== 2){
      for (var my = y; my < this.map.length; my++){
        if (this.map[my][x] === 2){
          my--;
          break;
        }else if (my === this.map.length-1){
          break;
        }
      }
      var y = my + 3;
      if (y > this.map[0].length-1){
        y = 1;
        x++;
      }

      return this.room_create(x,y);
    }

    console.log("x = " + x);
    console.log("y = " + y);

    for (var mx = x; mx < this.map[y].length; mx++){
      if (this.map[y][mx] === 2){
        mx--;
        break;
      }else if (mx === this.map[y].length-1){
        break;
      }
    }
    for (var my = y; my < this.map.length; my++){
      if (this.map[my][x] === 2){
        my--;
        break;
      }else if (my === this.map.length-1){
        break;
      }
    }
    console.log("最高 " + mx);
    console.log("最高 " + my);
    var rand_mx = Math.floor(Math.random()*(mx - x));
    var rand_my = Math.floor(Math.random()*(my - x));
    if (rand_mx > (mx - x)-2){ rand_mx -= 2;}else if (rand_mx <= Math.floor((mx - x)/2)){rand_mx = Math.floor((mx - x)/2);}
    if (rand_my > (my - y)-2){ rand_my -= 2;}else if (rand_my <= Math.floor((my - y)/2)){rand_my = Math.floor((my - y)/2);}

    for (var i = y; i < rand_my + y; i++){
      for(var j = x; j < rand_mx + x; j++){
        if (i >= this.map.length-1){
          break;
        }
        this.map[i][j] = 0;
      }
    }

    var y = my + 3;

    if (y > this.map[0].length-1){
      y = 1;
      x++;
    }

    console.log(rand_mx);
    console.log(rand_my);

    return this.room_create(x,y);
  }

}


var count = 0;
setInterval(function () {
  count++;
  var create = new Createmap(50,50);
  var test = []
  for (var i = 0; i < create.map[0].length; i++){
    if (i > 10){
      test.push(i);
    }else {
      var self = " " + i;
      test.push(self)
    }
  }
  console.log(test.join(""));
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
    var self = 0;
    if (y > 9){
      self = y;
    }else {
      self = " " + y;
    }
    console.log(self + create.map[y].join(" "));
  }
  console.log("");
  console.log(count);
  console.log("");
}, 1000);
