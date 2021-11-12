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


function formSubmission( pilot, copilot, fuelLevel, cargoLevel, list) {
//    const pilotNom =  document.getElementById("pilotName");
//    const copilotNom =  document.querySelector("input[name = 'copilotName']");
//    const fuelStatusLevel = document.querySelector("input[name = 'fuelLevel']");
   
//    const cargoMassLevel = document.querySelector("input[name = 'cargoMass']");
console.log(pilot);
console.log(copilot);
 if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty"||
 validateInput(cargoLevel) === "Empty"){
     window.alert("These feilds can't be empty")
 } 
    else if(validateInput(pilot)=== "Is a Number" || validateInput(copilot)=== "Is a Number" || validateInput(fuelLevel) === "Not a Number" ||
    validateInput(cargoLevel) === "Not a Number"){
     window.alert("Please enter a valid input type")
 } 
         else {
        pilot.innerHTML = `${pilot}`
        copilot.innerHTML = `${copilot}`;  

     let launchStatus = document.getElementById("launchStatus");
     let h2 = 
 }
 if (fuelLevel < 10000 && cargoLevel <= 10000){
            list.style.visibility= 'visible';    
            fuelLevel.innerHTML = `${fuelLevel} is too low!!`;         
               launchStatus.innerHTML = "Shuttle Not cleared for launch"  ;
            cargoLevel.innerHTML = `${cargoLevel} is good lift off`;
               
            h2.style.red;
        } 
        
    else if (cargoLevel > 10000 && fuelLevel >=10000){
         list.style.visibility= 'visible'; 
         fuelLevel.innerHTML = `${fuelLevel} is Ready for launc`;
         cargoLevel.innerHTML = `${cargoLevel} is too heavy for launch`;
         launchStatus.innerHTML = "Shuttle is Not cleared for launch";
         h2.style.red;
        }
        else if (fuelLevel < 10000 && cargoLevel > 10000){
            cargoLevel.innerHTML = `${cargoLevel} is too heavy for launch`;
            fuelLevel.innerHTML =`${fuelLevel} fuel is too low`;
            list.style.visibility= 'visible';
            launchStatus.innerHTML = "Shuttle is Not cleared for launch";
            h2.style.red;
        }
             else{
             cargoLevel.innerHTML = `${cargoLevel} is Ready for launch`;
             fuelLevel.innerHTML =`${fuelLevel} fuel is Ready for launch`;
              }
    };
        



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