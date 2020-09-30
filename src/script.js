function convertToKg() {

    let kilogram = document.querySelector('#kilogramInput').value;

    let kgConversion = (kilogram * 2.205);

    document.querySelector('#lbs-display').innerHTML = kgConversion;

};

function convertToLbs() {

    let pound = document.querySelector('#poundInput').value;

    let lbsConversion = (pound / 2.205);

    document.querySelector('#kg-display').innerHTML = lbsConversion;

};

function convertFromKgToGrams() {
    let kilo = document.querySelector('#kilo').value;
    let kgToGramsConversion = (kilo * 1000);
    document.querySelector('#kg-to-grams-display').innerHTML = kgToGramsConversion;
}

function convertFromLbsToGrams() {
    let lbs = document.querySelector('#lbs').value;
    let lbsToGramsConversion = (lbs * 453.6);
    document.querySelector('#lbs-to-grams-display').innerHTML = lbsToGramsConversion;
}

function convertFromGramstoKg() {
    let gramsOne = document.querySelector('#grams-one').value;
    let gramsToKgConversion = (gramsOne / 1000);
    document.querySelector('#grams-to-kg-display').innerHTML = gramsToKgConversion;
}

//! Problem rounding the result (too big of a number to display)
function convertFromGramstoLbs() {
    let gramsTwo = document.querySelector('#grams-two').value;
    let gramsToLbsConversion = (gramsTwo / 453.6);
    document.querySelector('#grams-to-lbs-display').innerHTML = gramsToLbsConversion;
}