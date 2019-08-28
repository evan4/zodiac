
import './css/style.css';

import Zodiac from './Zodiac';

const zodiac = new Zodiac();

const forms = document.getElementsByClassName('form');
const form = forms[0];
const inputField = document.getElementById('birthday');

const res = document.getElementById('res');


form.addEventListener('submit', (e) => {
    event.preventDefault();
    
    let result = zodiac.getSign(inputField.value);
    console.log(result);

    let h2 = document.createElement("h2");
    h2.innerHTML = `Ваш знак зодиака ${result.name}`;

    res.appendChild(h2);

}, false);
