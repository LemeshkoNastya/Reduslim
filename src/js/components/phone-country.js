import intlTelInput from 'intl-tel-input';

// Magic string
const idFlag = '#flag';
const idInput = '#tel';
const classIso = '.form__iso';
const countryDefault = 'ru';
const urlPlugin = 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.4/js/utils.js';

// Variables
const flag = document.querySelector(idFlag);
const input = document.querySelector(idInput);
const isoForm = document.querySelector(classIso);

// Initialization plugin
const test = intlTelInput(flag, {
    initialCountry: countryDefault,
    utilsScript: urlPlugin,
});

// Event
flag.addEventListener('countrychange', () => {
    input.placeholder = flag.placeholder;
    isoForm.innerHTML = test.getSelectedCountryData().iso2;
});