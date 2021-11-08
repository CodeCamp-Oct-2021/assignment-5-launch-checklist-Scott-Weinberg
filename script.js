// Write your JavaScript code here!

// const { formSubmission } = require("./scriptHelper");
// const helperFuncs = import("./helperFuncs.js");
// const helperFuncs = require("./helperFuncs.js")
window.addEventListener("load", function(event) {
    
  console.log("show me this")
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = response.json;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       pickPlanet(listedPlanetsResponse);

   })
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event){

    event.preventDefault()
    let pilot = document.querySelector("input[name=pilotName]");
    let copilot = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoLevel = document.querySelector("input[name=cargoMass]");
    let list = document.querySelector("faultyItems")
formSubmission(list, pilot.value, copilot, fuelLevel, cargoLevel)

   });
});
