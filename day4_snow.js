let button;
let slider;
let container = [];
let trash = [];

function setup(){
    createCanvas(400,400);

    button = createButton('');
    button.html('Start');
    button.position(100,400);
    button.mousePressed(LetItSnow);

    slider = createSlider(1,5,2);
    slider.position(200,400);

    background(255);
}

class snow{
    constructor(xpos,ypos,radius,vspeed,hspeed,rflag,rmoving){
        this.xpos = xpos;
        this.ypos = ypos;
        this.radius = radius;
        this.vspeed = vspeed;
        this.hspeed = hspeed;
        this.rflag = rflag;         // the flag for right direction
        this.rmoving = rmoving;     // the number of moving in right direction
    }

    fall(){
        this.xpos += this.hspeed;
        this.ypos += this.vspeed;
        
        if(this.rflag){
            this.rmoving += Math.round(random(1,2));
            if (this.rmoving > 8){
                this.rflag = false;
            }
        }
        
        else {
            this.rmoving -= Math.round(random(1,2));
            if (this.rmoving < -8){
                this.rflag = true;
            }
        }
    }

    shake(){
        if (this.rflag) {
            if (this.rmoving > 7) this.hspeed = -this.hspeed;
        }

        else if (this.rmoving < -7) this.hspeed = -this.hspeed;
    }

}

function LetItSnow(){
    if (button.html() === 'Start'){
        button.html('Stop');
    } else button.html('Start');
}

function draw(){
    if (button.html() === 'Stop'){
        background(255);

        if(Math.floor(Math.random()*100) < slider.value()){
            xpos = Math.floor(Math.random()*380);
            radius = Math.ceil(Math.random()*15)+5;
            vspeed = Math.ceil(Math.random()*3);
            hspeed = Math.ceil(Math.random()*3);

            new_snow = new snow(xpos,0,radius,vspeed,hspeed,true,1);
            container.push(new_snow);
        }

        for(let i = 0; i<container.length; i++){
            circle(container[i].xpos,container[i].ypos,container[i].radius);
        }

        for(let i=0; i<container.length; i++){
            container[i].fall();
            container[i].shake();
            if (container[i].ypos >= 400){
                trash.push(i);
            }
        }

        for(let i = 0; i<trash.length; i++){
            container.splice(trash.pop(),1);
        }
    }
}