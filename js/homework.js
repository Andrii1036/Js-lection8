// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!

// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName 
// або document.getElementsByTagName :
// -------------------------------------------------------------------------------------------------
//     -- отримує текст з параграфа з id "content"

let pTxt = document.getElementById('content').innerText;
console.log('innerText from p#content ');
console.log(pTxt);
console.log('---------------------------------------------------------------');
// -----------------------------------------------------------------------------------

//     -- отримує текст з блоку з id "rules"
let divTxt = document.querySelector('#rules').innerText;
console.log('innerText from div#rules ');
console.log(divTxt);
console.log('---------------------------------------------------------------');
// --------------------------------------------------------------------------------------

//     -- замініть текст параграфа з id 'content' на будь-який інший
document.getElementById('content').innerText = "some new text";
// ------------------------------------------------------------------------

//     -- замініть текст параграфа з id 'rules' на будь-який інший
let txt = 'another new text';
document.getElementById('rules').innerText = txt;
// --------------------------------------------------------------------------

//     -- змініть кожному елементу колір фону на червоний
let bodyChildren = document.body.children
for (i = 0; i < bodyChildren.length - 1; i++) {
    bodyChildren[i].style.background = 'red'
};
// -------------------------------------------------------------------------------------------------

//     -- змініть кожному елементу колір тексту на синій
for (i = 0; i < bodyChildren.length - 1; i++) {
    bodyChildren[i].style.color = 'blue'
};
// -------------------------------------------------------------------------------------------------

//     -- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log('classList element#rules')
console.log(document.getElementById('rules').classList);
console.log('-----------------------------------------------------------');
// ---------------------------------------------------------------------------

//     -- поміняти колір тексту у всіх елементів fc_rules на жовтий
let elementsWithfc_rules = document.getElementsByClassName('fc_rules');
for (element of elementsWithfc_rules) {
    element.style.color = 'yellow'
};
// ------------------------------------------------------------------------------------------------