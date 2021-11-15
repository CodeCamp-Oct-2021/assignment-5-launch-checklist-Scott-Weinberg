// Write your helper functions here!
require('isomorphic-fetch');
  
function addDestinationInfo(document, name, diameter, star, distance, moons, image) {

    let missionTarget = document.getElementById('missionTarget')
missionTarget.innerHTML = `
  
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${image}">`;
   
}

function validateInput(testInput) {
   let numberInput = Number(testInput)
         if(testInput === ""){
             return "Empty";
         } else if (isNaN(numberInput)){
             return "Not a Number";
         }else if (isNaN(numberInput)=== false){
             return "Is a Number";
         }
         
}


function formSubmission( document, pilot, copilot, fuelLevel, cargoLevel, list) {
//    const pilotNom =  document.getElementById("pilotName");
//    const copilotNom =  document.querySelector("input[name = 'copilotName']");
//    const fuelStatusLevel = document.querySelector("input[name = 'fuelLevel']");
let h2 = document.getElementById('launchStatus');  
//    const cargoMassLevel = document.querySelector("input[name = 'cargoMass']");

 if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty"||
 validateInput(cargoLevel) === "Empty"){
     window.alert("These feilds can't be empty")
 } 
    else if(validateInput(pilot)=== "Is a Number" || validateInput(copilot)=== "Is a Number" || validateInput(fuelLevel) === "Not a Number" ||
    validateInput(cargoLevel) === "Not a Number"){
     window.alert("Please enter a valid input type")
 } 
         else {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for Launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for Launch`;  

     let launchStatus = document.getElementById("launchStatus");
    
 } 
 if (fuelLevel < 10000 && cargoLevel <= 10000){
            list.style.visibility= 'visible';    
            fuelStatus.innerHTML = `Fuel Level too low for launch`;         
            launchStatus.innerHTML = "Shuttle Not cleared for launch";
            cargoStatus.innerHTML = ` Cargo mass low enought for lift off`;
               
            h2.style.color = "red";
        } 
        
    else if (cargoLevel > 10000 && fuelLevel >=10000){
         list.style.visibility= 'visible'; 
         fuelStatus.innerHTML = `Fuel Level high enough for launch`;
         cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
         launchStatus.innerHTML = "Shuttle is Not cleared for launch";
         h2.style.color = "red";
        }
        else if (fuelLevel < 10000 && cargoLevel > 10000){
            cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
            fuelStatus.innerHTML =`Fuel Level too low for launch`;
            list.style.visibility= 'visible';
            launchStatus.innerHTML = "Shuttle is Not cleared for launch";
            h2.style.color = "red";
        }
             else{
             list.style.visibility= 'hidden';
             cargoStatus.innerHTML = `Cargo mass low enough for launch`;
             fuelStatus.innerHTML =`Fuel Level high enough for launch`;
             pilotStatus.innerHTML = `Pilot Ready`;
             copilotStatus.innerHTML = `Co-pilot Ready`;
             launchStatus.innerHTML = "Shuttle is Ready for launch";
             h2.style.color = "green"
            }
    };
        



async function myFetch() {
    let planetsReturned;
    // window.addEventListener("submit", function() {
    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
    
    if(response.status >= 400){
        throw new Error("Bro that didnt work")
    }  else{
        return response.json();
    }
    });
    
    return planetsReturned;
    
};

function pickPlanet(planets) {
    
  return planets[ Math.floor(Math.random()* planets.length)]
};
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;