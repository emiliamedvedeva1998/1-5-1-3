const findButtonOpen = document.querySelector('.brands-main__button1');
let clicks = 0;

function myFunction() {

    const element = document.getElementById("textOpen");
    element.classList.toggle("changeheight");

    function clickMe() {
    clicks++;

    const buttonHidden = document.getElementById('buttonHidden');
    buttonHidden.classList.toggle("brands-main__button2"); 

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