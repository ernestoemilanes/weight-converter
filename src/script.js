function convertToKg() {

    let kilogram = document.querySelector('#kilogram').value;

    let kgConversion = (kilogram * 2.205);

    document.querySelector('#kg-display').innerHTML = kgConversion;

};

function convertToLbs() {

    let pound = document.querySelector('#pound').value;

    let lbsConversion = (pound / 2.205);

    document.querySelector('#lbs-display').innerHTML = lbsConversion;

};