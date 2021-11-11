// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   window.addEventListener("load", function(){
       
  const missionTarget = document.getElementById('missionTarget')
  let destination = pickplanet(planetsReturned);


missionTarget.innerHTML = `
  
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${json[i].name} </li>
                    <li>Diameter: ${json[i].diameter} </li>
                    <li>Star: ${json[i].star}</li>
                    <li>Distance from Earth: ${json[i].distance} </li>
                    <li>Number of Moons: ${json[i].moons} </li>
                </ol>
                <img src="${json[i].image}">`
  

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
    const pilotStatus =  document.getElementById("pilotStatus");
    console.log(pilot.value)  
   const copilotStatus =  document.getElementById("copilotStatus");
   const fuelStatus = document.getElementById("fuelStatus");
   const launchStatus = document.getElementById("launchStatus");
   const cargoStatus = document.getElementById("cargoStatus");
   
   if (validateInput(pilot) !== "empty" && validateInput(pilot) !== "Is a Number" ){ 
        pilotStatus.innerHTML = `${pilot}`
       }    else{ alert("No Pilot");
       pilotStatus.innerHTML= "No pilot is available"
    
       }
        
       if ( validateInput(copilot)!== "empty" && validateInput(copilot) !== "Is a Number" ){
           copilotStatus.innerHTML = `${copilot}`;
       } else { alert("No Copilot")
           copilotStatus.innerText = `Copilot is not ready`;
       }
       if (validateInput(fuelLevel) !== "Empty" || validateInput(fuelLevel)!== "Not a Number"){
           if(fuelLevel< 10000){
        fuelStatus.innerText = `${fuelLevel} is too low!!`;         
               launchStatus.innnerHTML = "Shuttle not ready for Launch"
               launchStatus.innerHTML= h2.style.red;
        } else{ 
            launchStatus.innnerHTML = "Shuttle is ready for launch"
            launchStatus.innerHTML= h2.style.green;
        }
       if (valitdateInput(cargoLevel) !== "Empty" || validateInput(fuelLevel)!== "Not a Number"){
          if(cargoLevel.value > 10000){
              alert(`${cargoLevel} is too heavuy for lift off.`)
            cargoStatus.innnerText = `${cargoLevel} is too heavy for lift off`;
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
    }  else{
        return response.json()
    }
    });
    
    return planetsReturned;
    // })
}

function pickPlanet(planets) {
    let planetsRandom = Math.floor(Math.random()* 6) +1;
  return planets[planetsRandom]
}
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;