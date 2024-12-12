let punkty = 0;
let liczba;

function dziel(num) {
    return num % 7 === 0;
}

function ma(num) {
    return num.toString().includes('7');
}

function losuj() {
    liczba = Math.floor(Math.random() * 100) + 1;
    document.getElementById('liczbaWyswietlona').innerText = `Liczba: ${liczba}`;
}

document.getElementById('dzikButton').addEventListener('click', function() {
    if (dziel(liczba) || ma(liczba)) {
        punkty++;
        document.getElementById('punkty').innerText = punkty;
    } else {
        document.getElementById('przegrana').style.display = 'block';
        punkty = 0;  // Resetowanie punktów
        document.getElementById('punkty').innerText = punkty;  // Aktualizacja wyświetlonego wyniku
    }
});

setInterval(losuj, 1000);
losuj();
