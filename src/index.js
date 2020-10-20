module.exports = function toReadable (number) {
    let string = number.toString();
    let units;
    let tens;
    let ints;
    let word;
    let words =[];

    if (parseInt(string) === 0) {
        return 'zero';
    }
    units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    ints = string.split('').reverse().map(parseFloat);


    if (ints[1] === 1) {
        ints[0] += 10;
    }


    if ((word = units[ints[0]])) {
        words.push(word);
    }
    if ((word = tens[ints[1]])) {
        words.push(word);
    }
    if (ints[0] || ints[1]) {

    }

    if ((word = units[ints[2]])) {
        words.push(word + ' hundred');
    }


    return words.reverse().join(' ');

}

