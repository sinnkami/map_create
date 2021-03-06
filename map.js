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
    this.room = [];
    this.sprit = [];
    this.sprit_equal(5);
    this.room_create(1,1);
    this.road_create(0);
    this.road_connect(0);
    this.sprit_delete();
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

    if (direction === 0){
      this.sprit.push({direction : direction, x : rand, leng : i});
    }else if (direction === 1){
      this.sprit.push({direction : direction, y : rand, leng : i});
    }else if (direction === 2){
      this.sprit.push({direction : direction, x : rand, leng : i});
    }else if (direction === 3){
      this.sprit.push({direction : direction, y : rand, leng : i});
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
    var rand_mx = Math.floor(Math.random()*(mx - x)/2)+Math.ceil((mx - x)/2)+1;
    var rand_my = Math.floor(Math.random()*(my - y)/2)+Math.ceil((my - y)/2)+1;
    if (rand_mx > (mx - x)){ rand_mx -= 2;}
    if (rand_my > (my - y)){ rand_my -= 2;}

    for (var i = y; i < rand_my + y; i++){
      for(var j = x; j < rand_mx + x; j++){
        if (i >= this.map.length-1){
          break;
        }
        this.map[i][j] = 0;
      }
    }
    this.room.push({ x : x, y : y, w : rand_mx, h : rand_my,  max_x : mx, max_y : my})

    var y = my + 3;

    if (y > this.map[0].length-1){
      y = 1;
      x++;
    }

    return this.room_create(x,y);
  }

  road_create(count) {
    if (this.room.length === count){
      return;
    }

    for (var direction = 0; direction < 4; direction++){
      if (direction === 0){
        var rand = Math.floor(Math.random()*this.room[count].w);
        for (var i = this.room[count].y + this.room[count].h; i < this.map.length; i++){
          if (this.map[i][rand+this.room[count].x] === 2){
            for (var y = i; y > this.room[count].y; y--){
              this.map[y][rand+this.room[count].x] = 0;
            }
            break;
          }
        }
      }else if (direction === 1){
        var rand = Math.floor(Math.random()*this.room[count].h);
        for (var i = this.room[count].x + this.room[count].w; i < this.map[0].length; i++){
          if (this.map[rand+this.room[count].y][i] === 2){
            for (var x = i; x > this.room[count].x; x--){
              this.map[rand+this.room[count].y][x] = 0;
            }
            break;
          }
        }
      }else if (direction === 2){
        var rand = Math.floor(Math.random()*this.room[count].w);
        for (var i = this.room[count].y + this.room[count].h; i > 0; i--){
          if (this.map[i][rand+this.room[count].x] === 2){
            for (var y = i; y < this.room[count].y; y++){
              this.map[y][rand+this.room[count].x] = 0;
            }
            break;
          }
        }
      }else if (direction === 3){
        var rand = Math.floor(Math.random()*this.room[count].h);
        for (var i = this.room[count].x + this.room[count].w; i > 0; i--){
          if (this.map[rand+this.room[count].y][i] === 2){
            for (var x = i; x < this.room[count].x; x++){
              this.map[rand+this.room[count].y][x] = 0;
            }
            break;
          }
        }
      }
    }

    return this.road_create(count+1);
  }

  road_connect(count) {
    if (this.sprit.length-1 < count){
      return;
    }

    var start,goal;
    if (this.sprit[count].direction === 0){
      for (var i = 0; i < this.sprit[count].leng; i++){
        if (this.map[i][this.sprit[count].x] === 0){
          start = i;
          break;
        }
      }
      for (var i = start; i < this.sprit[count].leng; i++){
        if (this.map[i][this.sprit[count].x] === 0){
          goal = i;
        }
      }
      console.log("0",start,goal);
      for (var i = start; i < goal; i++){
        this.map[i][this.sprit[count].x] = 0;
      }
    }else if (this.sprit[count].direction === 1){
      for (var i = 0; i < this.sprit[count].leng; i++){
        if (this.map[this.sprit[count].y][i] === 0){
          start = i;
          break;
        }
      }
      for (var i = start; i < this.sprit[count].leng; i++){
        if (this.map[this.sprit[count].y][i] === 0){
          goal = i;
        }
      }
      for (var i = start; i < goal; i++){
        this.map[this.sprit[count].y][i] = 0;
      }
    }else if (this.sprit[count].direction === 2){
      for (var i = this.map[this.sprit[count].x].length-1; i >= this.sprit[count].leng; i--){
        if (this.map[i][this.sprit[count].x] === 0){
          start = i;
          break;
        }
      }
      for (var i = start; i > this.sprit[count].leng; i--){
        if (this.map[i][this.sprit[count].x] === 0){
          goal = i;
        }
      }
      for (var i = start; i >= goal; i--){
        this.map[i][this.sprit[count].x] = 0;
      }
    }else if (this.sprit[count].direction === 3){
      for (var i = this.map.length-1; i >= this.sprit[count].leng; i--){
        if (this.map[this.sprit[count].y][i] === 0){
          start = i;
          break;
        }
      }
      for (var i = start; i >= this.sprit[count].leng; i--){
        if (this.map[this.sprit[count].y][i] === 0){
          goal = i;
        }
      }
      for (var i = start; i >= goal; i--){
        this.map[this.sprit[count].y][i] = 0;
      }
    }

    return this.road_connect(count+1);
  }

  sprit_delete() {
    for (var y = 0; y < this.map.length; y++){
      for (var x = 0; x < this.map[y].length; x++){
        if (this.map[y][x] === 2){
          this.map[y][x] = 9;
        }
      }
    }
  }

  node_log() {
    for(var y = 0; y < create.map.length; y++){
      for(var x = 0; x < create.map[y].length; x++){
        if (create.map[y][x] === 9){
          create.map[y][x] = " ";
        }else if (create.map[y][x] === 2){
          create.map[y][x] = " ";
        }else if (create.map[y][x] === 0){
          create.map[y][x] = "□";
        }
      }
      console.log(create.map[y].join(" "));
    }
  }
}
