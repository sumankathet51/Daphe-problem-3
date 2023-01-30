for (let i = 1; i <= 100; i++) {
    let text = '';
    if (i % 3 === 0) text = text + 'Fizz';
    if (i % 5 === 0) text = text + 'Buzz';

    if (text !== '') {
        console.log(text)
    } else {
        console.log(i)
    }
}