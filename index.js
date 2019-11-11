
//Damit Dropdownliste in Textfeld geschrieben wird

function writeInInputField(choosenValue, inputField){
    inputField.value=choosenValue;
}






//Um detaillierte Filtermöglichkeiten zu bekommen

var x = document.getElementById("dialog"); 

function showDialog() { 
  x.showModal(); 
} 

function closeDialog() { 
  x.close(); 
} 



//Um zu detaillierter Autoansicht zu gelangen

function cardetail(){
    window.open('detail.html');
}




//Bei Klick den Preis ausgeben
function setslider(thisValue, sliderValue){
    sliderValue.value=thisValue;
    
    document.querySelector(".range span").innerHTML=thisValue;
}


// Bei slider verschieben Preis ausgeben
  // Range-Slider in Variable speichern 
    var slider = document.getElementById("pricefield");

    var thisValue=slider.value;
  
    // EventListener für das Verändern des Sliders hinzufügen
    slider.addEventListener("change", function(){
  
        var thisValue=slider.value;
  
      // Wert des Range-Sliders anzeigen
      document.querySelector(".range span").innerHTML=thisValue;
    })




//Hauptfilter zurücksetzen
function resetSelection(){
    var pollutionClass = document.getElementById('pollutionClass');
    var Markenfeld = document.getElementById('Markenfeld');
    var modefield = document.getElementById('modelfield');
    var pricefield = document.getElementById('pricefield');
    var powerfield = document.getElementById('powerfield');
    var km = document.getElementById('km');
  

    pollutionClass.value = '';
    Markenfeld.value = '';
    modelfield.value = '';
    pricefield.value = '';
    powerfield.value = '';
    km.value = '';
}


//Detail zurücksetzen
function resetDetailSelection(){
    var initialRegistration = document.getElementById('initialRegistration');
    var consumptionKombi = document.getElementById('consumptionKombi');
    var consumptionOut = document.getElementById('consumptionOut');
    var consumptionIn = document.getElementById('consumptionIn');
    var fuel = document.getElementById('fuel');
    var nationalEmissionclass = document.getElementById('nationalEmissionclass');
    var ManufacturerSign = document.getElementById('ManufacturerSign');
    var carType = document.getElementById('carType');

  

    initialRegistration.value = '';
    consumptionKombi.value = '';
    consumptionOut.value = '';
    consumptionIn.value = '';
    fuel.value = '';
    nationalEmissionclass.value = '';
    ManufacturerSign.value = '';
    carType.value = '';

}
    












