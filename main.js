let year = +prompt('Скільки тобі років ?');
if (year === 0) {
    alert('Шкода, що Ви не захотіли ввести свій вік');
} else {
    alert(`Тобто, тобі ${year} років`);
}

const city = prompt( 'В якому місті ти народився ?');


let capital = city;

if(capital === null){
    alert('Шкода, що Ви не захотіли ввести своє місто');
}

switch (capital) {
    case capital = 'Київ' :
        capital = alert(`Ти живеш в столиці Київ`);
        break;
    case capital = 'Лондон':
        capital = alert(`Ти живеш в столиці Лондон`);
        break;
    case capital = 'Вашингтон':
        capital = alert(`Ти живеш в столиці Вашингтон`);
        break;
    default :
        alert(`Ти живеш в місті ${city}`);
        break;
}



let sport = prompt('Який твій улюблений вид спорту ?');
let kindSport = sport;
switch (kindSport) {
    case kindSport = 'Футбол' :
        alert('Круто! Хочеш стати як Роналдо?');
        break;
    case kindSport = 'Баскетбол' :
        alert('Круто! Хочеш стати як ЛеБрон Джеймс?');
        break;
    case kindSport = 'Стрільба з луку' :
        alert('Круто! Хочеш стати Робін Гудом?');
        break
    default :
        alert('Я не знаю відомих спортсменів в цьому виді спорту')

}



