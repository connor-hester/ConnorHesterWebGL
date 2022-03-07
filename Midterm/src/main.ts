import * as PIXI from 'pixi.js'
import { gsap } from "gsap";
import * as filters from 'pixi-filters'
import { AdjustmentFilter } from 'pixi-filters';
import * as dat from 'dat.gui'

let master = gsap.timeline();
let temp:number;
let maxTemp:number;
let minTemp:number;
let humidityPct:number;
let windSpeed:number;
let windDir:number;
let current:String;
let w=window.innerWidth;
let h=window.innerHeight;
let backgroundColor=0xE8E9ED;
let minTempColor=0x607196;
let maxTempColor=0xFF7B9C;
let tempColor=0xB07699;
let windColor=0xB9FFB7;
let humidityColor=0xBABFD1;
let maxContainer:PIXI.Container = new PIXI.Container();
let minContainer:PIXI.Container=new PIXI.Container();
let circleContainer:PIXI.Container=new PIXI.Container();
let windContainer:PIXI.Container=new PIXI.Container();
let humidityContainer:PIXI.Container=new PIXI.Container();
let currentWeatherContainer:PIXI.Container=new PIXI.Container();
let textContainer:PIXI.Container=new PIXI.Container();
let frameW=w/24;
let frameH=h/17.5;
let data;
// let isPressed:boolean=false;
// let city:boolean=false;
let url:string="https://community-open-weather-map.p.rapidapi.com/weather?q=New%20york%20city&lat=0&lon=0&callback=test&id=2172797&lang=null&units=imperial&mode=JSON";

//dysfunctional button code
// let button = new PIXI.Graphics();
//     button.beginFill(0x000000);
//     button.drawRect(4*w/6,2*h/4,60,60);
//     button.interactive = true;
//     button.buttonMode = true;
//     button.on('pointerdown', () => { isPressed = true, city=!city, console.log("pressed!")})
//     button.on('pointerup', () => { isPressed = false })
//     buttonContainer.addChild(button)
//     if(city==false){
//         url="https://community-open-weather-map.p.rapidapi.com/weather?q=New%20york%20city&lat=0&lon=0&callback=test&id=2172797&lang=null&units=imperial&mode=JSON"
//     }
//     else{
//         url="https://community-open-weather-map.p.rapidapi.com/weather?q=chicago&lat=0&lon=0&callback=test&id=2172797&lang=null&units=imperial&mode=xml"
//     }
//sets up API call
const settings = { //source https://rapidapi.com/community/api/open-weather-map/ 
    "async": true,
    "crossDomain": true,
    "url": url,
    "method": "GET",
    "json":true,
    "headers": {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": "8f9ac0a3ecmshb4c31864ba3f288p186f7fjsnf3588e26a837"
    }
};

//make api call
const done = (settings:any) => {
    return new Promise<string>((resolve) => {
        $.ajax(settings).done((response) => {
            resolve(response);
        });
    });
};

const main = async () => {
    // Actual app
    let app = new PIXI.Application({antialias: true, backgroundColor: backgroundColor});
    // //Creates background pattern
    // let dots = new PIXI.Graphics();
    // dots.beginFill(0x1C3B4B,0.2);
    // for(let j=0;j<30;j++){
    //     for(let i=0;i<60;i++){
    //         dots.drawEllipse(frameW+i*frameW,frameH/2+j*frameW,3,3);
    //     }
    // }
    // dots.endFill();
    // app.stage.addChild(dots);
    // Display application properly
    document.body.style.margin = '0';
    app.renderer.view.style.position = 'absolute';
    app.renderer.view.style.display = 'block';
    // View size = windows
    app.renderer.resize(window.innerWidth, window.innerHeight);
    // Load api data
    let weatherData=await done (settings);
    let len=weatherData.length;
    weatherData=weatherData.slice(5,len-1);
    data=JSON.parse(weatherData);
    //Set data points for animation
    temp=data.main.temp;
    maxTemp=data.main.temp_max;
    minTemp=data.main.temp_min;
    humidityPct=data.main.humidity;
    windSpeed=data.wind.speed;
    windDir=data.wind.deg;
    current=data.weather[0].description;

    app.stage.interactive = true
    app.stage.hitArea = new PIXI.Polygon([
        0,0,
        window.innerWidth, 0,
        window.innerWidth, window.innerHeight,
        0, window.innerHeight
    ])
    document.body.appendChild(app.view);

    app.stage.addChild(minContainer);
    app.stage.addChild(maxContainer);
    app.stage.addChild(circleContainer);
    app.stage.addChild(windContainer);
    app.stage.addChild(humidityContainer);
    app.stage.addChild(currentWeatherContainer);
    //Creates dark blue framing
    let lines= new PIXI.Graphics();
    lines.beginFill(0x1C3B4B);
    lines.lineStyle(0);
    lines.drawRect(0,0,w,frameH);
    lines.drawRect(0,0,frameW,h);
    lines.drawRect(w-frameW,0,frameW,h);
    lines.drawRect(0,h-frameH,w,frameH);
    lines.drawRect(w/2-frameW/4,0,frameW/2,h);
    lines.drawRect(0,2*h/3-frameH/4,w/2,frameH/2);
    lines.drawRect(w/2-frameW/4,h/2,w/3,frameH/2);
    lines.drawRect(5*w/6-frameW/4,0,frameW/2,h);
    lines.drawRect(w/2+frameW/4,2*h/3,w/3-frameW/4,frameH/2);
    lines.drawRect(w/2+1.59*frameW,h/2+1.5*frameH,10,20);
    lines.drawCircle(w/2+4*frameW,h/2-3.85*frameH,6);//for wind compass
    lines.endFill();
    lines.lineStyle(4,0x1C3B4B,1);
    lines.beginFill(0x000000,0);
    lines.drawCircle(w/2+4*frameW,h/2-3.85*frameH,w/28.8);
    lines.drawCircle(w/2+4*frameW,h/2-3.85*frameH,w/14.4);
    lines.drawCircle(w/2+4*frameW,h/2-3.85*frameH,w/9.6);
    lines.drawRect(5*w/6+frameW,h-2*frameH,frameW,1);//for humidity bar
    lines.drawRect(5*w/6+frameW,h/2-5.9*frameH,1,3*h/4-frameH/2);
    lines.drawRect(5*w/6+2*frameW,h/2-5.9*frameH,1,3*h/4-frameH/2);
    lines.lineStyle(0);
    lines.endFill();
    app.stage.addChild(lines);
    //adds text
    let style1=new PIXI.TextStyle({
        fill:backgroundColor,
        fontSize:16
    });
    let style2=new PIXI.TextStyle({
        fill:0x1C3B4B,
        fontSize:12
    });
    let style3=new PIXI.TextStyle({
        fill:0x1C3B4B,
        fontSize:24,
        align:'center'
    });
    let myText=new PIXI.Text("High Temp (˚F)",style1);
    textContainer.addChild(myText);
    myText=new PIXI.Text("Low Temp (˚F)",style1);
    textContainer.addChild(myText);
    myText=new PIXI.Text("Current Temp (˚F)",style1);
    textContainer.addChild(myText);
    myText=new PIXI.Text("Wind Speed/Direction (mph)",style1);
    textContainer.addChild(myText);
    myText=new PIXI.Text("Humidity (%)",style1);
    textContainer.addChild(myText);
    myText=new PIXI.Text("10",style2);
    textContainer.addChild(myText);
    myText=new PIXI.Text("10",style2);
    textContainer.addChild(myText);
    myText=new PIXI.Text("50",style2);
    textContainer.addChild(myText);
    myText=new PIXI.Text("Animated Weather Station\nConnor Hester S22",style3);
    textContainer.addChild(myText);
    textContainer.getChildAt(0).setTransform(frameW/2,h/2-1.25*frameH,1,1,3*Math.PI/2,0,0,0,0);
    textContainer.getChildAt(1).setTransform(w/4-frameW/2,frameH/4,1,1,0,0,0,0,0);
    textContainer.getChildAt(2).setTransform(frameW/2,3*h/4+2.65*frameH,1,1,3*Math.PI/2,0,0,0,0);
    textContainer.getChildAt(3).setTransform(3*w/4-3.5*frameW,frameH/4,1,1,0,0,0,0,0);
    textContainer.getChildAt(4).setTransform(w-frameW/2,h/2-frameH,1,1,Math.PI/2,0,0,0,0);
    textContainer.getChildAt(5).setTransform(1.1*frameW,5*h/6-2.1*frameH,1,1,0,0,0,0,0);
    textContainer.getChildAt(6).setTransform(w/2+2.85*frameW,h/2-4*frameH,1,1,0,0,0,0,0);
    textContainer.getChildAt(7).setTransform(5*w/6+2.25*frameW,h/2+frameH/4,1,1,0,0,0,0,0);
    textContainer.getChildAt(8).setTransform(3*w/4-4.25*frameW,3*h/4+frameH/2,1,1,0,0,0,0,0);
    app.stage.addChild(textContainer);
    // Handle window resizing
    window.addEventListener('resize', (_e) => {
        app.renderer.resize(window.innerWidth, window.innerHeight);
        app.stage.hitArea = new PIXI.Polygon([
            0,0,
            window.innerWidth, 0,
            window.innerWidth, window.innerHeight,
            0, window.innerHeight
        ]);
    });
    //gui for animation progress
    const gui = new dat.GUI()
	let timelineFolder = gui.addFolder("timeline")
	timelineFolder.open()
	let tlCallbacks = {
		pause: () => master.pause(),
		play: () => master.play(),
		reverse: () => master.reverse(),
		progress: 0
	}
	timelineFolder.add(tlCallbacks, "pause")
	timelineFolder.add(tlCallbacks, "play")
	timelineFolder.add(tlCallbacks, "reverse")
	timelineFolder.add(tlCallbacks, "progress", 0.0, 1.0, 0.01).onChange((value) => {
		master.play()
		master.progress(value)
		master.pause()
	})
    //puts the master timeline together
    master.add(maxMinTemps());
    master.add(actualTemp());
    master.add(wind());
    master.add(humidity());
    master.add(currentWeather());
    master.play();
};

function maxMinTemps(){
    let tl=gsap.timeline();
    for(let i=0;i<Math.floor(maxTemp);i++){//generate red rectangles for animating
        let rect=new PIXI.Graphics();
        rect.beginFill(maxTempColor);
        rect.drawRect(frameW+i*(((w-2.25*frameW)/2)/maxTemp),0,((w-2.25*frameW)/2)/maxTemp-5,0.1);
        rect.endFill();
        maxContainer.addChild(rect);
    }
    for(let i=0;i<Math.floor(minTemp);i++){//generate blue rectangles for animation
        let rect=new PIXI.Graphics();
        rect.beginFill(minTempColor);
        rect.drawRect(0,frameH+i*(((2*h/3)-frameH)/minTemp),0.1,(2*h/3-frameH)/minTemp-5);
        //rect.setTransform(w/2,h,1,1,Math.PI,0,0,0,0);
        rect.endFill();
        minContainer.addChild(rect);
    }
    for(let i=0;i<Math.floor(maxTemp);i++){//animates red rectangles
    tl.fromTo(maxContainer.getChildAt(i),{height:maxContainer.getChildAt(i).scale.y},{height:2*h/3, duration:1.5, ease:"power3.inOut"},"<+5%");
    }
    for(let i=0;i<Math.floor(minTemp);i++){//animates blue rectangles
        tl.fromTo(minContainer.getChildAt(i),{width:minContainer.getChildAt(i).scale.x},{width:(w-frameW)/2+frameW/4, duration:1.5, ease:"power3.inOut"},"<+5%");
        }
    return tl;
}

function actualTemp(){
    let tl=gsap.timeline();
    let remainder=temp%10;
    let rows=Math.floor(temp/10);
    for(let j=0;j<rows;j++){//generates n-remainder circles for temp
        for (let i=0;i<10;i++){
            let circle=new PIXI.Graphics();
            circle.beginFill(tempColor);
            circle.drawCircle(2*frameW+frameW*i,2*(h/3)+frameH+j*21,10);
            circle.endFill();
            circleContainer.addChild(circle);
        }
    }
    for(let i=0;i<remainder;i++){//generates the remainder circles for temp
        let circle=new PIXI.Graphics();
        circle.beginFill(tempColor);
        circle.drawCircle(2*frameW+frameW*i,2*(h/3)+frameH+21*rows,10); //might need to be rows+1
        circle.endFill();
        circleContainer.addChild(circle);
    }
    for(let i=0;i<temp;i++){//animates circle opacity
        tl.fromTo(circleContainer.getChildAt(i),{alpha:0.0},{alpha:1.0, duration:2, ease:"slow(1,1,false)"},"<+5%");
    }
    return tl;
}

function wind(){ 
    let windRad=windDir*(Math.PI/180); //convert windspd to rad
    let tl= gsap.timeline();
    let arrow=new PIXI.Graphics();
    arrow.beginFill(windColor);
    arrow.drawEllipse(0,-1*windSpeed,10,25);
    arrow.endFill();
    windContainer.addChild(arrow);
    windContainer.position.set(5*w/4+2*frameW,h/2+frameH);
    windContainer.pivot.x=windContainer.x/2;
    windContainer.pivot.y=windContainer.y/2;
    tl.fromTo(windContainer.getChildAt(0),{height:windContainer.getChildAt(0).scale.y},{height:5*windSpeed, duration: 2, ease:"power3.out"});//animates for wind speed
    tl.fromTo(windContainer.getChildAt(0),{rotation:0},{rotation:windRad,duration:3,ease:"back.out(3)"});//animates for wind direction
    return tl;
}

function humidity(){
    let tl=gsap.timeline();
    let waterBar=new PIXI.Graphics();
    waterBar.beginFill(humidityColor);
    waterBar.drawRect(0,0,frameW,10);
    waterBar.endFill();
    waterBar.setTransform(w-2*frameW,h-2*frameH,1,1,Math.PI,0,0,0,0);
    humidityContainer.addChild(waterBar);
    tl.fromTo(humidityContainer.getChildAt(0),{height:humidityContainer.getChildAt(0).scale.y},{height:humidityPct*5,duration:3.5,ease:"elastic.out(1,0.3)"});//animates humidity bar
    return tl;
}

function currentWeather(){ //prints out current weather as last step of animation 
    let tl=gsap.timeline();
    let myText=new PIXI.Text("Current Weather: "+current);
    myText.style=new PIXI.TextStyle({
        fill:0x000000,
        fontSize:20
    });
    myText.x=w/2+1.75*frameW;
    myText.y=h/2+1.5*frameH;
    currentWeatherContainer.addChild(myText);
    tl.fromTo(currentWeatherContainer.getChildAt(0),{width:currentWeatherContainer.getChildAt(0).scale.x},{width:w/6,duration:2,ease:"steps(8)"});
    return tl;
}

main();
