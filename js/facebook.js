/*
 This is an  example on how I would get the facebook data from a specific facebook page. 
Throught this you can import the events that the page is hosting. 
This example might not work due to facebook security system and the so called facebook token that checks for https and other security protocols.


let template = document.querySelector("#template-events").content;
let eventList = document.querySelector("#event-section");
let numberPages = 2;
let accessToken = "EAAISZAyPU5wABAL2rIW9ZCBBcYhxsiviYFDtZCtng8C5VZCCINZBPhbfRLTot18AlYFwpgl5jovseKnEZBGFvGs6Y5Nw6kMqyXx2zXcwCUGXc9ywEkO7caK2UTvsrXdMvt2fRPxcbaNeYQGZBmDbMut0X2EDkApkMKWui2LfHIVXJY3AJLojLpv3XR6MMnFggxZA5W2G0R4xmQZDZD";
let elemen;

window.fbAsyncInit = function () {
    FB.init({
        appId: '583184145508096',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v3.3'
    });

    facebookAPI();

    function facebookAPI() {
        let counter = 0;
        FB.api(
            '/2180876815342426/events?&limit=' + numberPages + '&access_token=' + accessToken,
            'GET', {},
            function (response) {

                let objects = response.data;
                console.log(objects);
                elemen = objects.length;

                objects.forEach(a => {
                    let desc = a.description;
                    let startTime = a.start_time;
                    let title = a.name;
                    let moment = new Date();
                    let eventId = a.id;

                    if (new Date(a.start_time) >= moment) {
                        counter++;
                        FB.api(
                            '/' + eventId + "?&access_token=" + accessToken,
                            'GET', {
                                "fields": "cover"
                            },
                            function (resp) {

                                let coverSource = resp.cover.source;

                                let clone = template.cloneNode(true);
                                clone.querySelector(".title-event").innerHTML = title;
                                clone.querySelector(".event-d").innerHTML = desc;
                                clone.querySelector(".event-image").style.backgroundImage = "url('" + coverSource + "')";
                                clone.querySelector(".entry-price").setAttribute("href", "https://www.facebook.com/" + eventId);
                                var date = new Date(startTime);

                                let day, month, hours, minutes;

                                if (date.getDay() < 10) {
                                    day = "0" + date.getDay();
                                } else {
                                    day = date.getDay();
                                }
                                if (date.getMonth() < 10) {
                                    month = "0" + date.getMonth();
                                } else {
                                    month = date.getMonth();
                                }
                                if (date.getHours() < 10) {
                                    hours = "0" + date.getHours();
                                } else {
                                    hours = date.getHours();
                                }
                                if (date.getMinutes() < 10) {
                                    minutes = "0" + date.getMinutes();
                                } else {
                                    minutes = date.getMinutes();
                                }

                                clone.querySelector(".event-date").innerHTML = day + " / " + month + " / " + date.getFullYear();
                                clone.querySelector(".event-time").innerHTML = hours + " : " + minutes;

                                eventList.appendChild(clone);
                            }
                        );

                    }

                });
                if (elemen > counter) {
                    document.getElementById("loadButton").style.display = "none";
                } else {
                    if (counter === 0) {
                        console.log("it is equal to 0");
                    }
                }
            }

        );

    }

    document.getElementById("loadButton").addEventListener('click', loadMore);

    function loadMore() {
        document.getElementById("event-section").innerHTML = "";
        console.log(elemen + " " + numberPages)
        numberPages += 2;
        console.log("clicks");
        facebookAPI();
    }
};

*/