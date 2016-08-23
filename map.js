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
    this.sprit_equal(5);
    this.room_create();
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

  room_create() {
    return
  }

}


var count = 0;
setInterval(function () {
  count++;
  var create = new Createmap(50,50);

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
