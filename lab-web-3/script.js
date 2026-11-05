"use strict";

let container = document.getElementById('features-container');
let programsContainer = document.getElementById('programs-container');

class classFeature {
    constructor(image) {
        this.image = image;
    }

    create(image) {
        let code = `
        <div id="feature">
        <img id="icons" src="${image}" title="clipboard">
        <h2>Online Testing</h2>
        <p id="feature-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, ut ex. Sed a eligendi, eum vel sunt non.</p>
        </div>
        `;
        return code;
    }
}

class classPrograms {
    constructor(label, text, image) {
        this.label = label;
        this.text = text;
        this.image = `pictures/${image}`;
    }

    create() {
        let code = `
        <div id="program">
                <div id="block" style="background-image: linear-gradient(rgba(0, 255, 150, 0.5), rgba(0, 255, 150, 0.5)), image-set('${this.image}');">
                    <h1 id="block-text">${this.label}</h1>
                    <p id="block-text">${this.text}</p>
                </div>
            </div>
        `;
        
        programsContainer.innerHTML += code;
    }
    
}

let a = new classFeature;


container.innerHTML += a.create("pictures/clipboard.png");
container.innerHTML += a.create("pictures/dean.png");
container.innerHTML += a.create("pictures/medal.png");
container.innerHTML += a.create("pictures/atomic.png");
container.innerHTML += a.create("pictures/blackboard.png");
container.innerHTML += a.create("pictures/notes.png");


let programTexts = [
    ["Pre-college education", "Broaden the creative horizons of your kids", "precolegge.jpg"],
    ["Middle School", "Broaden the creative horizons of your kids", "bookshelf.jpg"],
    ["High School", "High school Preparing youngsters for the adult life", "high.webp"],
    ["International exchange", "Accepting students from abroad", "airplane.jpg"],
    ["Graduate programs","Solidifying knowledge that was obtained through the long years of learning", "grade.jpg"],
    ["Home education", "sProviding robust distant education", "bookshelf.jpg"]
];

let Aprogram = new classPrograms(programTexts[0][0], programTexts[0][1], programTexts[0][2]);
let Bprogram = new classPrograms(programTexts[1][0], programTexts[1][1], programTexts[1][2]);
let Cprogram = new classPrograms(programTexts[2][0], programTexts[2][1], programTexts[2][2]);
let Dprogram = new classPrograms(programTexts[3][0], programTexts[3][1], programTexts[3][2]);
let Eprogram = new classPrograms(programTexts[4][0], programTexts[4][1], programTexts[4][2]);
let Fprogram = new classPrograms(programTexts[5][0], programTexts[5][1], programTexts[5][2]);

Aprogram.create();
Bprogram.create();
Cprogram.create();
Dprogram.create();
Eprogram.create();
Fprogram.create();
