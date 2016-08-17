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
  }

  sprit_equal() {
    var self = 0;
    var rand = Math.floor(Math.random() * 2);
    var sign = Math.floor(Math.random() * 2) ? -Math.floor(Math.random()*3) : Math.floor(Math.random()*3);
    console.log(rand);

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
    }
  }


}

var create = new Createmap(50,50,10);

for(var y = 0; y < create.map.length; y++){
  for(var x = 0; x < create.map[i].length; x++){
    if (create.map[y][x] === 9){
      create.map[y][x] = "■";
    }else {
      create.map[y][x] = "@";
    }
  }
  console.log(create.map[y].join(" "));
}
