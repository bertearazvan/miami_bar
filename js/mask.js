window.onload = function () {
    let name = document.getElementById("paymentName");
    const telephone = document.getElementById("input-3");
    const reservationDay = document.getElementById("input-4");
    const arrivingTime = document.getElementById("input-5");


    //from https://codepen.io/ammonious/pen/ZqGeqX

    var telephone_mask = new IMask(telephone, {
        mask: "00 00 00 00"
    });

    var reservationDay_mask = new IMask(reservationDay, {
        mask: "DD{ / }MM{ / }YY",
        blocks: {
            DD: {
                mask: IMask.MaskedRange,
                from: 1,
                to: 30
            },
            MM: {
                mask: IMask.MaskedRange,
                from: 1,
                to: 12
            },
            YY: {
                mask: IMask.MaskedRange,
                from: 18,
                to: 20
            }
        }
    });

    var arrivingTime_mask = new IMask(arrivingTime, {
        mask: "HH{ : }MM",
        blocks: {
            HH: {
                mask: IMask.MaskedRange,
                from: 00,
                to: 24
            },
            MM: {
                mask: IMask.MaskedRange,
                from: 1,
                to: 59
            },

        }
    });
}