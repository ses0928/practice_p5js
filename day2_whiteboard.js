let wselect;
let colorpicker;

function setup(){
    createCanvas(500,400);
    textAlign(CENTER);
    text('pen thickness',40,100);
    wselect=createSelect();     // slider
    wselect.position(10,110);
    wselect.option('2');
    wselect.option('5');
    wselect.option('8');
    wselect.selected('2');

    text('color palette',5,10,70,30);
    colorpicker=createColorPicker(); //color picker
    colorpicker.position(5,30);

    text('spacebar is reset button',5,160,70,180);
    eraser_token=0;
    line(80,0,80,height);
    line(width,0,width,height);
    line(0,height,width,height);
}

function mousePressed(){
    if(mouseButton==RIGHT) {
        if (eraser_token==0) {
            erase();
            eraser_token=1;
        }
        else {
            eraser_token=0;
            noErase();
        }
    }
}

function mouseDragged() {
    if (mouseButton==LEFT){
        strokeWeight(int(wselect.value()));
        stroke(colorpicker.value());
        point(mouseX,mouseY);
    }
}

function keyPressed(){
    if (keyCode==32){
        clear();
        noErase();
        eraser_token=0;
        stroke(0);
        strokeWeight(0.2);
        text('pen thickness',40,100);
        text('color palette',5,10,70,30);
        text('spacebar is reset button',5,160,70,180);
        strokeWeight(1);
        line(80,0,80,height);
        line(width,0,width,height);
        line(0,height,width,height);
        stroke(colorpicker.value());
        strokeWeight(int(wselect.value()));
    }
    else if (keyCode==40){
        circle(random(116,370),random(30,370),30);
    }
}

function draw(){
}