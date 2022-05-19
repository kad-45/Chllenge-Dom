/*
let buttonListe = document.querySelectorAll(".btn");
let inputElement = document.querySelector(".submit");
//let sectionElement2 = document.querySelector(".section2");
let sectionElement1 = document.querySelector(".section1")
/*
function maFonction() {
  if (sectionElement.style.display === "none") {
    sectionElement.style.display = "block";
  } else {
    sectionElement.style.display = "none";
  }
}*/
/*
inputElement.addEventListener('mouseout', function(){this.style.backgroundColor='orange'});
inputElement.addEventListener('mouseover', function(){this.style.backgroundColor ='grey'});
function myFunction(){
  let sectionElement1 =  document.querySelector(".section1");
  let sectionElement2 = document.querySelector(".section2")

  if(sectionElement1.style.display = "none"){
    
    sectionElement2.style.display = "block";

  }else{

  sectionElement1.style.display = "block";
  sectionElement2.style.display = "none";


}



}
  */

let buttonListe = document.querySelectorAll(".btn");
let inputElement = document.querySelector(".submit");
let sectionElement1 = document.querySelector(".challeng");

for (let i = 0; i < buttonListe.length; i++) {
  let buttonELement = buttonListe[i];

  buttonELement.addEventListener("mouseout", function () {
    this.style.backgroundColor = "white";
  });
  buttonELement.addEventListener("mouseover", function () {
    this.style.backgroundColor = "orange";
  });
  buttonELement.addEventListener("onclick", function () {
    this.style.backgroundColor = "grey";
  });
}

buttonListe.forEach((elem) => {
  elem.addEventListener("click", () => {
    elem.classList.toggle("click"); // Element.classList  retourne une collection directe DOMTokenList des attributs de classe de l'élément.

    inputElement.addEventListener("click", () => {
                                                    // addEventListener() agit en ajoutant une fonction ou un objet qui implémente EventListener
                                                      //"click" représente le type d'évènement à écouter.
      sectionElement1.innerHTML = `
            <div class="thank-you">
              <img src="./images/illustration-thank-you.svg" alt="">
              <h3>You selected ${elem.value} out of 5</h3>
              <h1>Thank you!</h1>
              <p>We appreciate you taking time to give a rating. If you ever need more support, don't hesitate to get in touch.</p>
            </div>
      `;
    });
  });
});
