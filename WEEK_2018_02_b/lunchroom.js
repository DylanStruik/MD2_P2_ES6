let button = document.getElementsByName("coffee");
button[0].addEventListener('click', function() {
    this.classList.toggle('choose');
});


let coffee = document.getElementsByClassName("button");
function coffeeListeners() {

    for (let counter = 0; counter < coffee.length; counter++) {

        //  Maak de functie af. De eventlisteners moet je koppelen aan de buttons
        //  Zie bovenstaande voorbeeld.

        uncheckOtherButtons(coffee, counter);
    }
}

function uncheckOtherButtons(arr, element) {

    // De uncheckOtherButtons zorgt ervoor dat elke andere button
    // die actief is en waar niet op geklikt is
    // niet meer actief moet zijn.

    // Doe je dit niet dan kan op een bepaald moment alle buttons actief zijn
    
    console.log('Element in array: ' + element)
}

coffeeListeners();

