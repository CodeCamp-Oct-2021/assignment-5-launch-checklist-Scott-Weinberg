// Write your JavaScript code here!

// const { addDestinationInfo } = require("./scriptHelper");

// const { formSubmission, myFetch } = require("./scriptHelper");
//  helperFuncs = import("./helperFuncs.js");
//  helperFuncs = require("./helperFuncs.js")
window.addEventListener("load", function(event) {
    
 
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
     
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions 
    //    to pick a planet fom the list of planets and add that information
    //  to your destination.
       let destination = pickPlanet(listedPlanets);

        addDestinationInfo(document, destination.name, destination.diameter,
            destination.star, destination.distance, destination.moons,
            destination.image
            ); 
            console.log("print")
   
});

   let form = document.querySelector("form");
   form.addEventListener("submit", function(event){

    event.preventDefault()
   
    let pilotInput = document.querySelector("input[name='pilotName']");
    let pilot = pilotInput.value;
    let copilotInput = document.querySelector("input[name='copilotName']");
    let copilot = copilotInput.value;
    console.log(copilotInput.value)
    let fuelLevelInput = document.querySelector("input[name='fuelLevel']");
    let fuelLevel = Number(fuelLevelInput.value);
    let cargoLevelInput = document.querySelector("input[name='cargoMass']");
    let cargoLevel = Number(cargoLevelInput.value);
    let list = document.getElementById("faultyItems");
console.log(copilot);
console.log(pilot)
    formSubmission(pilot, copilot, fuelLevel, cargoLevel, list);

   })

})