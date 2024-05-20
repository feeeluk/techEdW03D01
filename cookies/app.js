// declare & initialize global variables
// *************************************
let numberOfCookies = 0;
let cookiesPerSecond = 0;
let level = 0;
let levelName = "start";
let levelCost = 0;
let levelCostMultiplier = 0;
let levelCpsMuliplier = 0;
let levelIncrementor = 0;

let counter = 0;

let upgradeArray = [
    {
        "name": "cursor",
        "cost": 10,
        "costMultiplier": 1.1,
        "cpsMultiplier": 1.01,
        "level": 1,
        "levelIncrementor": 1
    },
    {
        "name": "grandma",
        "cost": 100,
        "costMultiplier": 1.2,
        "cpsMultiplier": 1.1,
        "level": 2,
        "levelIncrementor": 1
    },
    {
        "name": "farm",
        "cost": 1000,
        "costMultiplier": 1.3,
        "cpsMultiplier": 1.2,
        "level": 3,
        "levelIncrementor": 1
    }
]

// declare functions
// *************************************
function ShowClock(){
    
    setInterval(function(){
    
        counter++;

        totalSeconds = counter;
        totalMinutes = totalSeconds / 60;
        totalHours = totalMinutes / 60;

        seconds = (totalSeconds % 60);
        
        if(seconds < 10)
        {    
            seconds = "0" + seconds;
        }

        
        minutes = Math.floor(totalMinutes % 60);
        
        if(minutes < 10)
        {
            minutes = "0" + minutes;
        }

        hours = Math.floor(totalHours % 60);

        if(hours < 10)
        {
            hours = "0" + hours;
        }

        let showClock = document.getElementById("showClock");
        showClock.innerText = `${hours} : ${minutes} : ${seconds}`;

    }, 1000);
}

function ShowCookieDetails(){
    let showNumberOfCookies = document.createElement("p");
    showNumberOfCookies.innerText = `Number of cookies baked: ${numberOfCookies}`;

    let showCookiesPerSecond = document.createElement("p");
    showCookiesPerSecond.innerText = `Cookies per Second: ${cookiesPerSecond}`;

    let showLevel = document.createElement("p");
    showLevel.innerText = `Level: ${level}`;

    let showLevelName = document.createElement("p");
    showLevelName.innerText = `Level name: ${levelName}`;

    let showLevelCost = document.createElement("p");
    showLevelCost.innerText = `Level cost: ${levelCost}`;

    let showLevelCostMultiplier = document.createElement("p");
    showLevelCostMultiplier.innerText = `Level Cost Multiplier: ${levelCostMultiplier}`;

    let showCpsMultiplier = document.createElement("p");
    showCpsMultiplier.innerText = `Level CpS Multiplier: ${levelCpsMuliplier}`;

    let showLevelIncrementor = document.createElement("p");
    showLevelIncrementor.innerText = `Level Incrementor: ${levelIncrementor}`;

    let showDetails = document.getElementById("showCookieDetails"); 
    showDetails.innerText = "";
    showDetails.appendChild(showNumberOfCookies);
    showDetails.appendChild(showCookiesPerSecond);
    showDetails.appendChild(showLevel);
    showDetails.appendChild(showLevelName);
    showDetails.appendChild(showLevelCost);
    showDetails.appendChild(showLevelCostMultiplier);
    showDetails.appendChild(showCpsMultiplier);
    showDetails.appendChild(showLevelIncrementor);
}

// event listeners & invoke functions
// *************************************
ShowClock();


let listenForBakeCookies = document.getElementById("bakeCookies");
listenForBakeCookies.addEventListener("click", function(){
    numberOfCookies++;
    ShowCookieDetails();
})

