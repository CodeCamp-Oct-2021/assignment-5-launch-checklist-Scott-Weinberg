// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   window.addEventListener("load", function(){
       
  const missionTarget = document.getElementById('missionTarget')
  let destination = pickplanet(planetsReturned);


  for (let i =0; i < json.length; i++){
      destination += `
  
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${json[i].name} </li>
                    <li>Diameter: ${json[i].diameter} </li>
                    <li>Star: ${json[i].star}</li>
                    <li>Distance from Earth: ${json[i].distance} </li>
                    <li>Number of Moons: ${json[i].moons} </li>
                </ol>
                <img src="${json[i].image}">`
   missionTarget = destination;
}
   })
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
    let planetsReturned = response.json() ;
    // window.addEventListener("submit", function() {
    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
    console.log(response)
    if(response.status >= 400){
        throw new Error("Bro that didnt work")
    }  
    });
    
    return planetsReturned;
    // })
}

function pickPlanet(planets) {
 window.addEventListener("load", function() {
    let planetsRandom = Math.floor(Math.random()* 6) +1;
  return planets[planetsRandom]
 })
}
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;