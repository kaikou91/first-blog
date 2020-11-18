// on recupere la balise//
const myDate = document.querySelector('time.datecard1');
//on recupére la date d'aujourdhui dans la variable datevalue//
const dateValue = new Date(Date.now());

//créé un  textNod//
const myDateValue = document.createTextNode(dateValue);
//ajout d'un téxte node dans la balise time//
myDate.appendChild(myDateValue);

//-------------------------date et heurs---------------------------------------//

// on recupere la balise//
const myDate1 = document.querySelector('time.datecard2');
//on recupére la date d'aujourdhui dans la variable datevalue//
const dateValue1 = new Date(Date.now());

//créé un  textNod//
const myDateValue1 = document.createTextNode(dateValue1);
//ajout d'un téxte node dans la balise time//
myDate1.appendChild(myDateValue1);

//--------------------------date et heurs--------------------------------------//

// on recupere la balise//
const myDate2 = document.querySelector('time.datecard3');
//on recupére la date d'aujourdhui dans la variable datevalue//
const dateValue2 = new Date(Date.now());

//créé un  textNod//
const myDateValue2 = document.createTextNode(dateValue2);
//ajout d'un téxte node dans la balise time//
myDate2.appendChild(myDateValue2);

//---------------------------scrollreveal-------------------------------------//


//scrollreveal sur les cards est sur les titres//
ScrollReveal().reveal('.card', { delay: 700 });


const valuesForm = [];



// function display() {
//     const inputEmail = document.querySelector('#exampleInputEmail1').value;
//     const valueMail = document.createTextNode(inputEmail);
//     valuesForm.push(inputEmail);
//     console.log(inputEmail);
// }