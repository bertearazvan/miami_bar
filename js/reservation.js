const reservationForm = document.getElementById("grid-form-container");

reservationForm.addEventListener("submit", e => {
    //preventDefault() - means that when the user click submit, the page will not reload automatically
    localStorage.clear();
    e.preventDefault();
    console.log(reservationForm.elements);
    //calling function checkUser
    updateUsers(
        reservationForm.elements.name.value,
        reservationForm.elements.email.value,
        reservationForm.elements.phone.value,
        reservationForm.elements.date.value,
        reservationForm.elements.time.value,
        reservationForm.elements.amount.value,
        reservationForm.elements.comments.value
    );

    function updateUsers(formName, formEmail, formPhone, formDate, formTime, formAmount, formComments) {


        console.log("sdsds");
        const data = {
            name: formName,
            email: formEmail,
            phone: formPhone,
            date: formDate,
            time: formTime,
            amountPeople: formAmount,
            comments: formComments
        };



        fetch("https://5ce696370adb8e0014a6f23f.mockapi.io/tables", {
                method: "post",
                body: JSON.stringify(data),
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            })
            .then(res => res.json())
            .then(e => {
                console.log(e);
                reservationForm.style.opacity = "0";
                setTimeout(function () {
                    reservationForm.style.display = "none";
                    document.getElementById("thank-you-reserve").style.display = "block";
                    setTimeout(function () {
                        document.getElementById("thank-you-reserve").style.opacity = "1";
                    }, 500);
                }, 1000);
            });

    }
});