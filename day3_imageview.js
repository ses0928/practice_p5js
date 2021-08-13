let img;
let button;     // start, stop button
let slider;     // speed slider
let x = 0;
let get_img;
let imgarray=[];

function preload() {
    img = loadImage('pinkbean.webp');
}

function setup() {
    createCanvas(400,400);

    button = createButton('');
    button.html('Start');
    button.position(100,400);
    button.mouseClicked(ViewImage);

    slider = createSlider(1,10,2);
    slider.position(200,400);
    
    background(img);
    loadPixels();
    get_img = pixels;
    
    background(255);
    loadPixels();
}

function ViewImage() {
    if (button.html() === 'Start'){
        button.html('Stop');
    } else button.html('Start');
}

let y = 0;

function draw() {
    
    // single image figures.
    /*
    if (button.html() === 'Stop'){
        for (let i=0;i<x;i++){
            pixels[x+i] = get_img[x+i];
        }

        if (x<= 8*width*height) x += 40*slider.value();

        updatePixels();
    }
    */

    // multi image figures
    if (button.html() === 'Stop'){
        for(let i=0; i<80; i++){
            pixels[y+x+i] = get_img[y+x+i];
        }
        
        x += 80;

        if (x%800 === 0){
            x -= 800;
            x += width*8;
        }

        if (x%(width*height*4)===0){
            y += width*2;
            x = 0;

            if (y%(width*8)===0){
                y -= width*8;
                y += width*height*4;
            }
        }
       
        updatePixels();
    }
}