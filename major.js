//select element function
const_selectElement =function (element){
    return document.querySelector(element);
};

let_menuToggler = selectElement('.menu-toggle');
let_body = selectElement('body');

menuToggler.addEventListener('click',function(){
body.classList.toggle('open');
});