const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let strArr = [];
    let str = '';

    for (let i = 0; i < expr.length; i += 10) {
        if (i == expr.length) {
            break;
        } else {
            strArr.push(expr.slice(i, i + 10));
        }
    }

    strArr.forEach(arr => {
        let strWord = [];

        Loop: for (let i = 0; i < arr.length; i += 2) {

            switch (arr.slice(i, i + 2)) {
                case '10':
                    strWord.push('.')
                    break;
                case '11':
                    strWord.push('-');
                    break;
                case '**':
                    strWord.push(' ');
                    break Loop;
            }

        }

        if (strWord == ' ') {
            str += ' ';
        } else {
            str += MORSE_TABLE[strWord.join('')];
        }


    })

    return str;
}

module.exports = {
    decode
}