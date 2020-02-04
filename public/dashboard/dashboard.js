let template = document.querySelector("#reservation-template").content;
let carlist = document.querySelector("#reservation-list");
let reservationNumber = 0;

function fetchReservations() {
    let endpoint = "https://5ce696370adb8e0014a6f23f.mockapi.io/tables";

    fetch(endpoint)
        .then(e => e.json())
        .then(reservation => {
            reservation.forEach(showReservation);
            console.log(reservation);
            reservationNumber = reservation.length;

            function showReservation(item) {
                let clone = template.cloneNode(true);
                clone.querySelector("#table-number").innerHTML = "TABLE NUMBER: " + item.id;
                clone.querySelector("#reservation-name").innerHTML = "Name: " + item.name;
                clone.querySelector("#reservation-email").innerHTML = "Email: " + item.email;
                clone.querySelector("#reservation-phone").innerHTML = "Phone number: " + item.phone;
                clone.querySelector("#reservation-date").innerHTML = "Desired date: " + item.date;
                clone.querySelector("#reservation-time").innerHTML = "Arrival time: " + item.time;
                clone.querySelector("#reservation-amount").innerHTML = "Amount of people: " + item.amountPeople;
                clone.querySelector("#reservation-commentaries").innerHTML = "Comments: " + item.comments;

                carlist.appendChild(clone);
            }
        });
}
fetchReservations();

function checkReservation() {
    let endpoint = "https://5ce696370adb8e0014a6f23f.mockapi.io/tables";

    fetch(endpoint).then(e => e.json()).then(a => {
        if (a.length > reservationNumber) {
            reservationNumber = a.length;
            document.getElementById("reservation-list").innerHTML = "";
            fetchReservations();
        } else {
            console.log("no new reservations");
        }
    })
}

setInterval(function () {
    checkReservation();
}, 5000);

/*
function showCars(data) {
    console.log(data)
    data.forEach(showSingleCar);
}

function showSingleCar(aCar) {
    let clone = template.cloneNode(true);
    clone.querySelector("p").innerHTML = aCar.title.rendered;

    if (aCar.acf.gingis_project_image.url != "") { //img is there
        clone.querySelector(".project-img").setAttribute("src", aCar.acf.gingis_project_image.url);
    }



    carlist.appendChild(clone);
}
fetchUsedCars();
*/