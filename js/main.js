const dateOfBirth = document.querySelector("#DOB");
const lucky = document.querySelector("#lucky__number");
const check = document.querySelector("#btn-check");
const output = document.querySelector("#output");
const image1 = document.querySelector("#sad");
const image2 = document.querySelector("#happy");


function hideImage(image) {
    image.style.display="none";
};

function showImage (image) {
    image.style.display="block";
}

function checkIsLucky() {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    compareValues(sum, lucky.value);
};

function calculateSum(dob) {
    dob = dob.replaceAll("-", "");

    let sum = 0;
    for( let i=0; i<dob.length; i++){
        sum += Number(dob.charAt(i));
    }

    return sum; 
};

function compareValues(sum, lucky) {
    if(sum%lucky === 0) {
        output.innerHTML="Hurray! You are a lucky person!";
        showImage(image2);
        hideImage(image1);
    }
    else{
        output.innerHTML="Sorry! Your birthday is not a lucky number!";
        showImage(image1);
        hideImage(image2);
    }
};

hideImage(image1);
hideImage(image2);

check.addEventListener("click", checkIsLucky);