function getInputValueById(id){
    const value= document.getElementById(id).value;
    const convertedValue= parseInt(value);
    return convertedValue;
}



function getInnerTextById(id) {
    const value = document.getInnerTextById(id).innerText;
    const convertedValue = parseInt(value);
    return convertedValue;
}



function setInnerTextByIdandValue ( id,value) {
document.getElementById(id).innerText = value;
}