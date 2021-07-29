let img;
let jpgarray=[];        // array for saving image fragments
let button;             // reset button
let cbutton;            // change button
let l_input;            // left input
let r_input;            // right input

function preload(){
    img = loadImage('selfcamera.jpg');
}

function setup(){
    createCanvas(700,600);

    // button creation
    button = createButton('reset button');
    button.position(5,10);
    button.mousePressed(mixmix);

    cbutton = createButton('change');
    cbutton.position(20,200);
    cbutton.mousePressed(reorederit);

    // input creation
    l_input = createInput(1,Number);
    l_input.position(5,170);
    l_input.size(30);

    r_input = createInput(2,Number);
    r_input.position(55,170);
    r_input.size(30);

    // setup.
    translate(100,0);
    image(img,0,0,600,600);

    // get data from loaded image
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
            jpgarray.push(get(100+i*150,j*150,150,150));
        }
    }

    // mixing the array
    for(let i=0; i<16; i++){
        var temp = floor(random(15));
        var temp2 = jpgarray[i];
        jpgarray[i] = jpgarray[temp];
        jpgarray[temp]=temp2;
    }

    // image update with randomized array
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
            image(jpgarray[4*i+j],i*150,j*150,150,150);
        }
    }
}

// array reset button
function mixmix(){
    // mixing the array
    for(let i=0; i<16; i++){
        var temp = floor(random(15));
        var temp2 = jpgarray[i];
        jpgarray[i] = jpgarray[temp];
        jpgarray[temp]=temp2;
    }

    // image update with randomized array
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
            image(jpgarray[4*i+j],i*150,j*150,150,150);
        }
    }
}

function reorederit(){
    // array reordering
    var a = int(l_input.value());
    var b = int(r_input.value());
    var temp = jpgarray[a];
    jpgarray[a] = jpgarray[b];
    jpgarray[b] = temp;

    // image update with re-ordered array
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
            image(jpgarray[4*i+j],i*150,j*150,150,150);
        }
    }
}

function draw(){
    translate(100,0);
}