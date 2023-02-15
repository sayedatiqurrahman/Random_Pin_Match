function randomPinGen() {
    const random = Math.round(Math.random() * 10000) + ''

    if (random.length === 4) {
        return random

    } else {
        return randomPinGen()
    }
}
document.getElementById('gen-pin').addEventListener('click', function () {
    const genField = document.getElementById('gen-field')
    genField.value = randomPinGen()
})


// ================================================================================================

document.getElementById('calculator').addEventListener('click', function (event) {
    const display = document.getElementById('display');
    const cal = event.target.innerText;
    const individual = display.value;

    if (isNaN(cal)) {
        if (cal == 'C') {
            display.value = '';
        } else if (cal == '<') {
            const digits = individual.split('');
            digits.pop();
            const dec = digits.join('');
            display.value = dec;
        }
    } else {
        const previousNumber = individual + cal;
        display.value = previousNumber;
    }

})

document.getElementById('btn-submit').addEventListener('click', function () {
    const gDisply = document.getElementById('gen-field')
    const genDisply = gDisply.value;
    const displyaf = document.getElementById('display');
    const matchDisplay = displyaf.value;
    displyaf.value = '';
    const success = document.getElementById('success')
    const inc = document.getElementById('incorret')


    if (genDisply == matchDisplay) {
        success.style.display = 'block';
        inc.style.display = 'none';
        gDisply.value = '';
    } else {
        inc.style.display = 'block';
        success.style.display = 'none';

    }

})