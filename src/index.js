const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const WORD_LENGTH = 10;

const to_morse = (word) => {
    let morse_word = "";
    for (let i = 0; i < WORD_LENGTH; i+=2){
        let sym = '' + word[i] + word[i + 1];
        switch(sym) {
            case '10':
                morse_word += ('.');
                break;
            case '11':
                morse_word += ('-');
                break;
            case '00':
                break;
            case '**':
                return " ";
        }
    }
    return morse_word;
};

const to_letter = (morse_letter) => {
    if (morse_letter === ' ') return ' ';
    return MORSE_TABLE[morse_letter];    
};

function decode(expr) {
    // write your solution here
    let arr = expr.split('');
    let words = [];
    let words_count = arr.length/WORD_LENGTH;
    
    for (let i = 0; i < words_count; i++){
        words.push(arr.splice(0,WORD_LENGTH));
    }
    let morse_letters = words.map(to_morse);
    let letters = morse_letters.map(to_letter);
    let res_string = "";
    for (let i in letters){
        res_string += letters[i];
    }
    return res_string;
}

module.exports = {
    decode
}