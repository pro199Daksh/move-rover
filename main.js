canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

mars_img=["mars.jpg","img2.jpg","img3.jpg","img4.jpg"]
random_number= Math.floor(Math.random()*4)

rover_width= 100;
rover_height= 90;
rover_x= 10;
rover_y=10;
bg_image= mars_img[random_number];
rover_image="rover.png"

function add(){
    bg_image_tag= new Image()
    bg_image_tag.onload= uploadBg;
    bg_image_tag.src= bg_image

    rover_image_tag= new Image()
    rover_image_tag.onload= uploadRover;
    rover_image_tag.src= rover_image;
}
function uploadBg(){
    ctx.drawImage(bg_image_tag,0,0, canvas.width, canvas.height)
}function uploadRover(){
    ctx.drawImage(rover_image_tag,rover_x, rover_y,rover_width,rover_height )
}
window.addEventListener("keydown", MyKD)
function MyKD(e){
    key_press=e.keyCode
    if(key_press=="38"){
        console.log("up")
        up()
    }
    if(key_press=="37"){
        console.log("left")
        left()
    }
    if(key_press=="40"){
        console.log("down")
        down()
    }
    if(key_press=="39"){
        console.log("right")
        right()
    }

}
function up(){
    if(rover_y>=0){
        rover_y= rover_y-10;
        console.log(rover_y)
        uploadBg()
        uploadRover()
    }
}

function down(){
    if(rover_y<=500){
        rover_y= rover_y+10;
        console.log(rover_y)
        uploadBg()
        uploadRover()
    }
}

function left(){
    if(rover_x>=0){
        rover_x= rover_x-10;
        console.log(rover_x)
        uploadBg()
        uploadRover()
    }
}

function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        console.log(rover_x)
        uploadBg()
        uploadRover()
    }
}

