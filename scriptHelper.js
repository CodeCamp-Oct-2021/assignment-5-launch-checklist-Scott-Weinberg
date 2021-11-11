// Write your helper functions here!
require('isomorphic-fetch');
  
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
 window.addEventListener("load", function(){
       
  const missionTarget = document.getElementById('missionTarget')
  let destination = pickplanet(planetsReturned);


missionTarget.innerHTML = `
  
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}">`;
  

   })
}

function validateInput(testInput) {
   let numberInput = Number(testInput)
         if(testInput === ""){
             return "Empty"
         } else if (isNaN(numberInput)){
             return "Not a Number"
         }else if (isNaN(numberInput)=== false){
             return "Is a Number"
         }
         
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
//    const pilotNom =  document.getElementById("pilotName");
//    const copilotNom =  document.querySelector("input[name = 'copilotName']");
//    const fuelStatusLevel = document.querySelector("input[name = 'fuelLevel']");
   
//    const cargoMassLevel = document.querySelector("input[name = 'cargoMass']");

 if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuel) === "Empty"||
 validateInput(cargoLevel) === "Empty"){
     window.alert("These feilds can't be empty")
 } 
 else if(validateInput(pilot)=== "Is a Number" || validateInput(copilot)=== "Is a Number" || validateInput(fuel) === "Not a Number" ||
 validateInput(cargoLevel) === "Not a Number"){
     window.alert("Please enter a valid input type")
 } 
 else {
        pilot.innerHTML = `${pilot}`
        copilot.innerHTML = `${copilot}`;  

     let launchStatus = document.getElementById("launchStatus");
    if (fuelLevel < 10000 && cargoLevel <= 10000){
            list.style.visibility= 'visible';    
            fuelLevel.innerHTML = `${fuelLevel} is too low!!`;         
               launchStatus.innerHTML = "Shuttle not ready for Launch"  ;
            cargoLevel.innerHTML = `${cargoLevel} is too heavy for lift off`;
               launchStatus.innerHTML= h2.style.red;
        } 
        
    else if (cargoLevel > 10000 && fuelLevel >=10000){
          fuelLevel.innerHTML = `${fuelLevel} is perfect`;
            cargoLevel.innerHTML = `${cargoLevel} is perfect`;
          launchStatus.innnerHTML = "Shuttle is ready for launch";
           launchStatus.innerHTML= h2.style.green;
        }
        else if (fuelLevel < 10000 && cargoLevel > 10000){
            cargoLevel.innerHTML = `${cargoLevel} is too high`;
            fuelLevel.innerHTML =`${fuelLevel} fuel is too low`;
        }
        else{
            // fuel level is Ready
            // cargolevel is read
        }
    };
        
}
}

async function myFetch() {
    let planetsReturned;
    // window.addEventListener("submit", function() {
    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
    
    if(response.status >= 400){
        throw new Error("Bro that didnt work")
    }  else{
        return response.json()
    }
    });
    
    return planetsReturned;
    // })
}

function pickPlanet(planets) {
    let planetsRandom = Math.floor(Math.random()* planets.length);
  return planets[planetsRandom]
}
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;