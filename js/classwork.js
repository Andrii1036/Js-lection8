// Взяти файл template_2.html та працювати в ньому
// ---------------------------------------------------------------------------------------

//     a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
document.getElementById('main_header').classList.add('sep2021');
// ----------------------------------------------------------------------------------------------

//     b) робить шириниу елементу ul 400px
let ul = document.getElementsByTagName('ul');
for (item of ul) {
    item.style.width = '400px'
};
// ----------------------------------------------------------------

//     c) робить шириниу всіх елементів з класом linkList шириною 50%
let linkList = document.getElementsByClassName('linkList');
for (item of linkList) {
    item.style.width = '50%'
};
// -------------------------------------------------------------------------------------------------

//     d) отримує текст який зберігається в елементі з класом listElement2
let txtFromListElement2 = document.querySelectorAll('.listElement2');
for (item of txtFromListElement2) {
    console.log(`'${item.innerText}' <-- text from item with .listElement2 `);
};
console.log('---------------------------------------------')
    // ------------------------------------------------------------------------------------------

//     e) отримує всі елементи li та змінює ім колір фону на сірий
let li = document.getElementsByTagName('li')
let liArray = Array.from(li);
liArray.forEach(item => item.style.background = 'grey');
// ---------------------------------------------------------------------

//     f) отримує всі елементи 'a' та додає їм клас anchor
Array.from(document.getElementsByTagName('a')).forEach(item => item.classList.add('anchor'));
// ---------------------------------------------------------------------------------------------------------

//     g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, 
// змінює йому розмір тексту на 40 пікселів
let a = document.getElementsByTagName('a');
for (item of a) {
    if (item.innerText === 'link3') {
        item.style.fontSize = '40px'
    };
};
// ----------------------------------------------------------------------------------------

//     h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (item of a) {
    item.classList.add(`element_${item.innerText}`);
};
// --------------------------------------------------------------------------------------------------

//     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let color = prompt('plese enter color to change backqround,example red or yellow');
Array.from(document.getElementsByClassName('sub-header')).forEach(item => item.style.background = color);
// ------------------------------------------------------------------------------------------------------

//     j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо 
// текст елемнту = content 2 segment . Колір отримати з prompt();
let color2 = prompt('plese enter color to change text color,example red or yellow');
Array.from(document.getElementsByClassName('sub-header')).forEach(item => item.innerText.includes('content 2 segment') ? item.style.color = color2 : '');
// ----------------------------------------------------------------

//     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let text = prompt('plese enter new text');
let content_1 = Array.from(document.querySelectorAll('.content_1'));
content_1.forEach(item => Array.from(item.children).forEach(item => item.innerText = text));
// ----------------------------------------------------------------------------------

//     l) отримати елементи p та змінити їм padding на 20px;
let p = document.getElementsByTagName('p');
for (item of p) {
    item.style.padding = '20px';
};
// ------------------------------------------------------------------------------------------------------

//     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let text2 = Array.from(document.getElementsByClassName('text2'));
text2.forEach(item => item.textContent = 'september2021');
// ----------------------------------------------------------------------------------------------------------