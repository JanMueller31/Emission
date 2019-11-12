//Auto suchen

function carsearch(){
  alert("hallo")
}





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







// Bei slider verschieben Preis ausgeben
  // Range-Slider in Variable speichern 
    var slider = document.getElementById("pricefield");

    var thisValue=slider.value;
  
    // EventListener für das Verändern des Sliders hinzufügen
    slider.addEventListener("change", function(){
  
        var thisValue=slider.value;
  
      // Wert des Range-Sliders anzeigen
      document.querySelectorAll(".range span")[0].innerHTML=thisValue;
    })





    // Bei slider verschieben Leistung ausgeben
  // Range-Slider in Variable speichern 
  var slider2 = document.getElementById("powerfield");

  var thisValue2=slider2.value;

  // EventListener für das Verändern des Sliders hinzufügen
  slider2.addEventListener("change", function(){

      var thisValue2=slider2.value;

    // Wert des Range-Sliders anzeigen
    document.querySelectorAll(".range span")[1].innerHTML=thisValue2;
    
  })






   // Bei slider verschieben km ausgeben
  // Range-Slider in Variable speichern 
  var slider3 = document.getElementById("km");

  var thisValue3=slider3.value;

  // EventListener für das Verändern des Sliders hinzufügen
  slider3.addEventListener("change", function(){

      var thisValue3=slider3.value;

    // Wert des Range-Sliders anzeigen
    document.querySelectorAll(".range span")[2].innerHTML=thisValue3;
  })




//Bei Klick richtige Werte angeben
//Bei Klick den Preis ausgeben
function setslider(thisValue, sliderValue){
  sliderValue.value=thisValue;
  
  document.querySelector(".range span").innerHTML=thisValue;
}


//Bei Klick die Leistung ausgeben
function setslider2(thisValue2, sliderValue){
  sliderValue.value=thisValue2;
  
  document.querySelectorAll(".range span")[1].innerHTML=thisValue2;

}



//Bei Klick km ausgeben
function setslider3(thisValue3, sliderValue){
  sliderValue.value=thisValue3;
  
  document.querySelectorAll(".range span")[2].innerHTML=thisValue3;
}
























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
    pricefield.value = '15000';
    powerfield.value = '117';
    km.value = '30000';
    
    document.querySelectorAll(".range span")[0].innerHTML= '15000';
    document.querySelectorAll(".range span")[1].innerHTML= '117';
    document.querySelectorAll(".range span")[2].innerHTML= '30000';
}


//Detail zurücksetzen
function resetDetailSelection(){
    var initialRegistration = document.getElementById('initialRegistration');
    var consumptionKombi = document.getElementById('consumptionKombi');
    var consumptionOut = document.getElementById('consumptionOut');
    var consumptionIn = document.getElementById('consumptionIn');
    var fuel = document.getElementById('fuel');
    var carType = document.getElementById('carType');
    var TypSign = document.getElementById('TypSign');
    var ManufacturerSign = document.getElementById('ManufacturerSign');
    var carClass = document.getElementById('carClass');



  

    initialRegistration.value = '';
    consumptionKombi.value = '';
    consumptionOut.value = '';
    consumptionIn.value = '';
    fuel.value = '';
    carType.value = '';
    TypSign.value = '';
    ManufacturerSign.value = '';
    carClass.value = '';


}
    












