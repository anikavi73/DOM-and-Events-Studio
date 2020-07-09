// Write your JavaScript code here.

window.addEventListener("load", function(){

    let takeOff = document.getElementById("takeoff");
    let land = document.getElementById("landing");
    let abort = document.getElementById("missionAbort");
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let shuttleHeight = document.getElementById("spaceShuttleHeight");

    let upButton = document.getElementById("up");
    let downButton = document.getElementById("down");
    let leftButton = document.getElementById("left");
    let rightButton = document.getElementById("right");
    
    let rocket = document.getElementById("rocket");
    rocket.style.position = "relative";

    takeOff.addEventListener("click", function() {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff!");
        
        if (response){
            flightStatus.innerHTML = "Shuttle in flight";
            shuttleBackground.style.backgroundColor = "blue";
            shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
        }
    })

    land.addEventListener("click", function(){
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        shuttleHeight.innerHTML = 0;
    })

    abort.addEventListener("click", function(){
       let response = window.confirm("Confirm that you want to abort the mission.");

       if (response){
          flightStatus.innerHTML = "Mission aborted";
          shuttleBackground.style.backgroundColor = "green";
          shuttleHeight.innerHTML = 0;   
       }
        
    })

    upButton.addEventListener("click", function(){
        let positionString = rocket.style.top;
        let position = positionString.slice(0, positionString.length -2);
        rocket.style.top = Number(position) - 10 + "px";
    })

    downButton.addEventListener("click", function(){
        let positionString = rocket.style.top;
        let position = positionString.slice(0, positionString.length -2);
        rocket.style.top = Number(position) + 10 + "px";        
    })

    leftButton.addEventListener("click", function(){
        let positionString = rocket.style.left;
        let position = positionString.slice(0, positionString.length -2);
        rocket.style.left = Number(position) + 10 + "px";        
    })

    rightButton.addEventListener("click", function(){
        let positionString = rocket.style.left;
        let position = positionString.slice(0, positionString.length -2);
        rocket.style.left = Number(position) - 10 + "px";
        
    })

    
})





// Remember to pay attention to page loading!