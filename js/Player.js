class Player {
  constructor(x, y, width, height) {
    var options = {
      isStatic: false
    };

    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");

    this.life1 = "green";
    this.life2 = "green";
    this.life3 = "green";

    World.add(world, this.body);
  }

  life() {
    push();
    textSize(20);
    fill("white");
    text("Player", 280, 40);

    fill(this.life1);
    rect(180, 50, 70, 30);
    fill(this.life2);
    rect(250, 50, 70, 30);
    fill(this.life3);
    rect(320, 50, 70, 30);
    pop();

    
  }

  reduceLife(archerlife){
    if(archerlife === 2){
      this.life1="red";
    }
    if(archerlife === 1){
      this.life2="red";
    }
    if(archerLife === 0){
      this.life3="red";
    }
    reduceLife(playerArcherlife){
      if(playerArcherlife === 2){
        this.life1="red";
      }
      if(playerArcherlife === 1){
        this.life2="red";
      }
      if(playerArcherLife === 0){
        this.life3="red";
      }
      if (
        baseCollision.collided ||
        archerCollision.collided ||
        playerCollision.collided
      )
      {
        playerArcherLife=-1;
        player.reduceLife(playerArcherLife);
        if (playerArcherLife <= 0){
          playerArcher.collapse = true;
          Matter.Body.setStatic(playerArcher.body, false);
          Matter.Body.setStatic(player.body, false);
          Matter.Body.setPosition(player.body,{
            x: width -100,
            y: player.body.position.y
          });
        }
      }
    }
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
