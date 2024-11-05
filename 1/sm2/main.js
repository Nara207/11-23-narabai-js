let name = prompt('Как тебя зовут?');
alert (`Тебя зовут ${name}`);

let age = prompt('Сколько тебе лет?');
if (age < 20) {
    alert ("Тебе меньше 20");
} else {
    for ( let u = 0; u < 5; u++) {
        let phrase = ('Привет!');
        alert (phrase);
    }
}

let js = confirm('Ты учишь js?');
if (js) alert('Супер!')
    else {
        alert('Ну будь дураком - учи js!')
}