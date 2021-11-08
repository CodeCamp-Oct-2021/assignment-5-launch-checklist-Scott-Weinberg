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
    window.addEventListener("load", function(){
    let form = document.querySelector("testForm");
    form.addEventListener("submit", function(event) {
       let pilotNameInput = document.querySelector("input[name=pilotName]");
       let copilotNameInput = document.querySelector("input[name=copilotName]");
       let fuelLevel = document.querySelector("input[name=fuelLevel]");
       let cargoMass = document.querySelector("input[name=cargoMass]");
        // event.preventDefault();
        // alert("All fields are required!");
       if (pilotNameInput.value ===  " " || copilotNameInput.value ===  " " || fuelLevel.value === isNan(value) || cargoMass.value === isNan(value)){
           alert(`Empty` );
            }
            if (fuelLevel.value !== Number || cargoMass.value !== Number) {
                return alert(`Not a Number`);
            } else if (fuelLevel.value === Number && cargoMass.value === Number){
                return alert(`Is a Number`)
            }
          
          // stop the form submission
    //   event.preventDefault();
        })
   

})
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let form = document.querySelector("testForm");
    form.addEventListener("submit", function(event){
    // let pilot = document.querySelector("input[name=pilotName]");
    // let copilot = document.querySelector("input[name=copilotName]");
    // let fuelLevel = document.querySelector("input[name=fuelLevel]");
    // let cargoLevel = document.querySelector("input[name=cargoMass]");
    
 
       if(pilot){ 
       document.getElementById("pilotStatus").innnerText = `${pilot}`;
       }    else{
            document.getElementById("pilotStatus").innerText = `Pilot is not ready`
       }
        
       if (copilot){
           document.getElementById("copilotStatus").innerText = `${copilot}`;
       } else {
           document.getElementById("copilotStatus").innerText = `Copilot is not ready`;
       }
       if (fuelLevel < 10000){
           document.getElementById("fuelStatus").innerText = `${fuelLevel} is too low!!`;
            document.getElementById("launchStatus").innnerText = "Shuttle not ready for Launch"
            document.getElementById("launchStatus").innerHTML= h2.style.red;
        } else{ 
            document.getElementById("launchStatus").innnerText = "Shuttle is ready for launch"
            document.getElementById("launchStatus").innerHTML= h2.style.green;

        }
       if (cargoLevel > 10000){
           document.getElementById("cargoStatus").innnerText = `${cargoLevel} is too heavy for lift off`;
              document.getElementById("launchStatus").innerHTML= h2.style.red;
        }else {
            document.getElementById("launchStatus").innnerText = "Shuttle is ready for launch"
            document.getElementById("launchStatus").innerHTML= h2.style.green;
        }
   })
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