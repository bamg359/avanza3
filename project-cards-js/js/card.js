

//Vamos a seleccionar los elementos 
const whiteColor = document.querySelector(".white");
const blackColor = document.querySelector(".black");
const yellowColor = document.querySelector(".yellow");

const cartButton = document.getElementById("button");
const itemTag = document.getElementsByTagName("h3")[0];

const imageCard = document.querySelector(".img-container");

const feedbackBtn = document.querySelector(".feedback");

const buttonText = document.querySelector(".button-text"); 


// Eventos en los botones de colores

    
whiteColor.addEventListener("click", function(){

    cartButton.style.backgroundColor= "white";
    buttonText.style.color ="black";
    itemTag.style.backgroundColor= "white";
    itemTag.style.color = "black";
    imageCard.style.backgroundImage= 'url(./img/bmw-5849403_1280.jpg)';

});

blackColor.addEventListener("click", function(){

    cartButton.style.backgroundColor= "black";
    buttonText.style.color ="white";
    itemTag.style.backgroundColor= "black";
    itemTag.style.color = "white";
    imageCard.style.backgroundImage= 'url(./img/bmw-m4-2970890_1280.jpg)';

});

yellowColor.addEventListener("click", function(){

    cartButton.style.backgroundColor= "yellow";
    buttonText.style.color ="black";
    itemTag.style.backgroundColor= "yellow";
    itemTag.style.color = "black";
    imageCard.style.backgroundImage= 'url(./img/bmwyellow.jpg)';

});


// implementar el botón del carrito

const cart = () => {

    cartButton.style.display = "none";
    feedbackBtn.style.display = "block";

}


cartButton.addEventListener("click", cart);

const feedbackFun = () => {

    cartButton.style.display = "block";
    feedbackBtn.style.display = "none";
};

feedbackBtn.addEventListener("click", feedbackFun);

