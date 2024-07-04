    // const buttons = document.querySelectorAll("button");
    // buttons.forEach(button => {
    //    button.addEventListener("click", event => {
    //       buttons.forEach(b => b.classList.remove("selected"));
    //       event.target.classList.toggle("selected");
    //    });
    // });

    // buttons();

// const brandsButtonOpen = document.querySelector('.brands__button');

// const brandsList = document.querySelector('.brands__brand-list');

// brandsButtonOpen.addEventListener('click', () => {
//     brandsList.classList.add('brand-list--opened');
//     brandsButtonOpen.classList.add('brands-button--close');
//     brandsButtonOpen.classList.remove('brands-button--open');
// }) 

// const findButtonOpen = document.querySelector('.main__button1');

// function myFunction() {

//     const element = document.getElementById("textOpen");
//     element.classList.toggle("changeheight");
// }


// findButtonOpen.addEventListener('click', () => {

//     myFunction();
// })


const findButtonOpen = document.querySelector('.main__button1');
let clicks = 0;

function myFunction() {

    const element = document.getElementById("textOpen");
    element.classList.toggle("changeheight");

    function clickMe() {
    clicks++;

    const buttonHidden = document.getElementById('buttonHidden');
    buttonHidden.classList.toggle("main__button2"); 

    if (clicks % 2 === 0) {
        buttonHidden.innerText = 'Показать все';
    }
    else {
        buttonHidden.innerText = 'Скрыть';   
    }
    };

    clickMe();

}

findButtonOpen.addEventListener('click', () => {
    myFunction();
})