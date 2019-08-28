import './css/webfont/onlinewebfonts.css';
import './css/style.css';

import Zodiac from './Zodiac';

const zodiac = new Zodiac();

const forms = document.getElementsByClassName('form');
const form = forms[0];
const inputField = document.getElementById('birthday');


form.addEventListener('submit', (e) => {
    event.preventDefault();
    
    let res = zodiac.getSign(inputField.value);
    console.log(res);
}, false);
