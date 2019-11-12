const db = require('../models/model').database

var carList = []

for (i = 0; i < db.car.length; i++){
    carList.push(db.car[i])
}

function find(searchOptions){
    let carArray = []
    if(Object.keys(searchOptions).length == 0){
        carArray = carList
    }

    for (i = 0; i < carList.length;i ++){
        if (searchOptions.modell == carList[i].model) {
            if (carArray == "") {
                carArray.push(carList[i]);
            } else {
                let alreadyInCarArray = false
                for (j = 0;j < carArray.length;j++){
                    if (carList[i] === carArray[j]){
                        alreadyInCarArray = true
                    }
                }
                if (!alreadyInCarArray) {
                    carArray.push(carList[i]);
                }            }        }    }

    for (i = 0; i < carList.length;i ++){
        if (searchOptions.marke == carList[i].make) {
            if (carArray == "") {
                carArray.push(carList[i]);
            } else {
                let alreadyInCarArray = false
                for (j = 0;j < carArray.length;j++){
                    if (carList[i] === carArray[j]){
                        alreadyInCarArray = true;
                        break;
                    }
                }
                if (!alreadyInCarArray) {
                    carArray.push(carList[i]);
                }            }        }    }



    //needed for individual page
    for (i = 0; i < carList.length;i ++){
        if (searchOptions == carList[i].$.id) {
            carArray.push(carList[i]);
        }
    }

    return carArray
}

module.exports = find