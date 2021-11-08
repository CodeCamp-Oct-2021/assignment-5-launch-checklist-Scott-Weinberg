// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
         if(testInput === ""){
             return "Empty"
         } else if (isNaN(testInput)){
             return "Not a Number"
         }else if (!isNaN(testInput)){
             return "Is a Number"
         }
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const pilotStatus =  document.getElementById("pilotStatus");
    console.log(pilot.value)  
   const copilotStatus =  document.getElementById("copilotStatus");
   const fuelStatus = document.getElementById("fuelStatus");
   const launchStatus = document.getElementById("launchStatus");
   const cargoStatus = document.getElementById("cargoStatus");
    if (validateInput(pilot.value) !== "empty" && validateInput(pilot.value) !== "Is a Number" ){ 
        pilotStatus.innerHTML = `${pilot}`
       }    else{ alert("No Pilot");
       pilotStatus.innerHTML= "No pilot is available"
    
       }
        
       if ( validateInput(copilot.value)!== "empty" && validateInput(copilot.value) !== "Is a Number" ){
           copilotStatus.innerHTML = `${copilot}`;
       } else { alert("No Copilot")
           copilotStatus.innerText = `Copilot is not ready`;
       }
       if (validateInput(fuelLevel.value) !== "Empty" || validateInput(fuelLevel.value)!== "Not a Number"){
           if(fuelLevel.value< 10000){
        fuelStatus.innerText = `${fuelLevel.value} is too low!!`;         
               launchStatus.innnerHTML = "Shuttle not ready for Launch"
               launchStatus.innerHTML= h2.style.red;
        } else{ 
            launchStatus.innnerHTML = "Shuttle is ready for launch"
            launchStatus.innerHTML= h2.style.green;
        }
       if (valitdateInput(cargoLevel.value) !== "Empty" || validateInput(fuelLevel.value)!== "Not a Number"){
          if(cargoLevel.value > 10000){
              alert(`${cargoLevel.value} is too heavuy for lift off.`)
            cargoStatus.innnerText = `${cargoLevel.value} is too heavy for lift off`;
            launchStatus.innerHTML= h2.style.red;
            }else {
            launchStatus.innnerText = "Shuttle is ready for launch"
            launchStatus.innerHTML= h2.style.green
        }
    }
}
}

async function myFetch() {
    let planetsReturned = response.json;

    planetsReturned = await fetch().then( function(response) {
    if(response.status >= 400){
        throw new Error("Bro that didnt work")
    }  
    });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;