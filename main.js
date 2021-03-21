canvas = new fabric.Canvas("myCanvas");
player_x = 10;
player_y = 10;
blockWidth = 30;
blockHeight = 30;
playerObject = "";
blockObject = "";
function playerUpdate(){
    fabric.Image.fromURL("player.png", function (Img){
        playerObject = Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top:player_y,
            left:player_x
        });
        canvas.add(playerObject);
    });
}
function new_img(get_img){
    fabric.Image.fromURL(get_img, function (Img){
        blockObject = Img;
        blockObject.scaleToWidth(blockWidth);
        blockObject.scaleToHeight(blockHeight);
        blockObject.set({
            top:player_y,
            left:player_x
        });
        canvas.add(blockObject);
    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == "80"){
        console.log("p and shift pressed together");
        blockWidth = blockWidth + 10;
        blockHeight = blockHeight + 10;
        document.getElementById("currect_width").innerHTML = blockWidth;
        document.getElementById("currect_height").innerHTML = blockHeight;
    }
    if(e.shiftKey == true && keyPressed == "77"){
        console.log("m and shift pressed together");
        blockWidth = blockWidth - 10;
        blockHeight = blockHeight - 10;
        document.getElementById("current_width").innerHTML = blockWidth;
        document.getElementById("current_height").innerHTML = blockHeight;
    }
    if(keyPressed == "38"){
        up();
        console.log("up");
    }
    if(keyPressed == "40"){
        down();
        console.log("down");
    }
    if(keyPressed == "37"){
        left();
        console.log("left");
    }
    if(keyPressed == "39"){
        right();
        console.log("right");
    }
    if(keyPressed == "70"){
        new_img("ironman_face.png");
        console.log("f");
    }
    if(keyPressed == "66"){
        new_img("spiderman_body.png");
        console.log("b");
    }
    if(keyPressed == "76"){
        new_img("hulk_legs.png");
        console.log("l");
    }
    if(keyPressed == "82"){
        new_img("thor_right_hand.png");
        console.log("r");
    }
    if(keyPressed == "72"){
        new_img("captain_america_left_hand.png");
        console.log("h");
    }
}
function up(){
    if(player_y >= 0){
        player_y = player_y - blockHeight;
        console.log("blockHeight " + blockHeight);
        console.log("When up arrow key is pressed, X = " + player_x + " Y = " + player_y);
        canvas.remove(playerObject);
        playerUpdate();
    }
}
function down(){
    if(player_y <= 500){
        player_y = player_y + blockHeight;
        console.log("blockHeight" + blockHeight);
        console.log("When down arrow key is pressed, X = " + player_x + " Y = " + player_y);
        canvas.remove(playerObject);
        playerUpdate();
    }
}
function left(){
    if(player_x >= 0){
        player_x = player_x - blockWidth;
        console.log("blockWidth " + blockWidth);
        console.log("When left arrow key is pressed, X = " + player_x + " Y = " + player_y);
        canvas.remove(playerObject);
        playerUpdate();
    }
}
function right(){
    if(player_x <= 850){
        player_x = player_x + blockWidth;
        console.log("blockWidth" + blockWidth);
        console.log("When right arrow key is pressed, X = " + player_x + " Y = " + player_y);
        canvas.remove(playerObject);
        playerUpdate();
    }
}