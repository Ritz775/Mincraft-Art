var canvas = new fabric.Canvas("myCanvas");
block_image_width = 30;
block_image_height = 30;

var block_img_object = "";

player_x = 10;
player_y = 10;

var player_object = "";

function player_update() {
  fabric.Image.fromURL("player.png", function (Img) {
    player_object = Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
      top: player_y,
      left: player_x,
    });
    canvas.add(player_object);
  });
}

function new_Image(get_Image) {
  fabric.Image.fromURL(get_Image, function (Img) {
    block_img_object = Img;
    block_img_object.scaleToWidth(block_image_width);
    block_img_object.scaleToHeight(block_image_height);
    block_img_object.set({
      top: player_y,
      left: player_x,
    });
    canvas.add(block_img_object);
  });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
  keypress = e.keyCode;
  console.log(keypress);
  if (e.shiftKey == true && keypress == "80") {
    console.log("P & SHift Prssd Toghhether");
    block_image_width = block_image_width + 10;
    block_image_height = block_image_height + 10;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;
  }
  if (e.shiftKey == true && keypress == "77") {
    console.log("M & SHift Prssd Toghhether");
    block_image_width = block_image_width - 10;
    block_image_height = block_image_height - 10;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;
  }
  if (keypress == "38") {
    up();
    console.log("up");
  }
  if (keypress == "40") {
    down();
    console.log("down");
  }
  if (keypress == "39") {
    right();
    console.log("right");
  }
  if (keypress == "37") {
    left();
    console.log("left");
  }

  if (keypress == "87") {
    new_Image("wall.jpg");
    console.log("w");
  }
  if (keypress == "71") {
    new_Image("ground.png");
    console.log("g");
  }
  if (keypress == "76") {
    new_Image("light_green.png");
    console.log("l");
  }
  if (keypress == "84") {
    new_Image("trunk.jpg");
    console.log("t");
  }
  if (keypress == "82") {
    new_Image("roof.jpg");
    console.log("r");
  }
  if (keypress == "89") {
    new_Image("yellow_wall.png");
    console.log("y");
  }
  if (keypress == "68") {
    new_Image("dark_green.png");
    console.log("d");
  }
  if (keypress == "85") {
    new_Image("unique.png");
    console.log("u");
  }
  if (keypress == "67") {
    new_Image("cloud.jpg");
    console.log("c");
  }
}

function up() {
  if (player_y >= 0) {
    player_y = player_y - block_image_height;
    console.log("block_image_height = " + block_image_height);
    console.log(
      "When up arrow key is pressed, X =" + player_x + " Y= " + player_y
    );
    canvas.remove(player_object);
    player_update();
  }
}

function down() {
  if (player_y <= 500) {
    player_y = player_y + block_image_height;
    console.log("block_image_height = " + block_image_height);
    console.log(
      "When down arrow key is pressed, X =" + player_x + " Y= " + player_y
    );
    canvas.remove(player_object);
    player_update();
  }
}

function left() {
  if (player_x >= 0) {
    player_x = player_x - block_image_width;
    console.log("block_image_width = " + block_image_width);
    console.log(
      "When left arrow key is pressed, X =" + player_x + " Y= " + player_y
    );
    canvas.remove(player_object);
    player_update();
  }
}

function right() {
  if (player_x <= 850) {
    player_x = player_x + block_image_width;
    console.log("block_image_width = " + block_image_width);
    console.log(
      "When right arrow key is pressed, X =" + player_x + " Y= " + player_y
    );
    canvas.remove(player_object);
    player_update();
  }
}
