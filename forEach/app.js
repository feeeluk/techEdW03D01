let myArray= [
    {
        "carManufacturer": "Ford",
        "carModel": "Focus"
    },

    {
        "carManufacturer": "Ford",
        "carModel": "Escourt"
    },
    {
        "carManufacturer": "Ford",
        "carModel": "Fiesta"
    }
]

myArray.forEach(function(object){
  
    let objectP =  document.createElement("p");

    objectP.innerText = object.carManufacturer + " " + object.carModel;

    document.body.appendChild(objectP);

})
