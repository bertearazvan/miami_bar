const eventsDiv = document.getElementById('event-section');
fetch("https://mrbertea.com/wordpress/theme7/wp-json/wp/v2/maimi_events").then(e => e.json()).then(res => {
    const data = res;
    var el = 0;
    let c = new Date(data[0].acf.date).setHours(23, 59, 59, 999);


    data.forEach(element => {

        let c = new Date(element.acf.date).setHours(23, 59, 59, 999);

        if (c > new Date()) {
            el++;

            var flexHolder = document.createElement("div");
            flexHolder.setAttribute('class', 'flex-event-holder')
            flexHolder.setAttribute('data-aos', 'fade-up')
            flexHolder.setAttribute('data-aos-duration', '1000')
            flexHolder.setAttribute('data-aos-easing', 'ease')
            flexHolder.setAttribute('data-aos-once', 'true')
            eventsDiv.appendChild(flexHolder);

            var descContainer = document.createElement("div");
            descContainer.setAttribute('class', 'event-desc-container');
            flexHolder.appendChild(descContainer);

            var image = document.createElement("div");
            image.setAttribute('class', 'event-image');
            image.setAttribute('style', 'background-image:url(' + element.acf.image_event + ');')

            flexHolder.appendChild(image);

            var title = document.createElement("h3");
            title.setAttribute('class', 'title-event');
            title.innerHTML = element.acf.title;
            descContainer.appendChild(title);

            var date = document.createElement("p");
            var dateEvent = new Date(element.acf.date);

            let dateHtml;
            if (dateEvent.getDate() < 10) {
                var dateDay = '0' + dateEvent.getDate();
            } else {
                var dateDay = dateEvent.getDate();
            }



            if (dateEvent.getMonth() < 10) {
                var dateMonth = '0' + dateEvent.getMonth() + 1;
            } else {
                var dateMonth = dateEvent.getMonth() + 1;
            }

            dateHtml = dateDay + '/' + dateMonth + '/' + dateEvent.getFullYear()
            //console.log(dateHtml);


            date.setAttribute('class', 'event-date');
            date.innerHTML = dateHtml;
            descContainer.appendChild(date);

            var time = document.createElement("p");
            time.setAttribute('class', 'event-time')
            time.innerHTML = element.acf.time_start;
            descContainer.appendChild(time);

            var eventDescDiv = document.createElement("div");
            eventDescDiv.setAttribute('class', 'event-desc');
            descContainer.appendChild(eventDescDiv);

            var desc = document.createElement("p");
            desc.setAttribute('class', 'event-d');
            desc.innerHTML = element.acf.event_description;
            eventDescDiv.appendChild(desc);

            if (element.id == 146) {
                console.log(element);

                var pageDiv = document.createElement('div');
                pageDiv.setAttribute('style', 'margin-top:80px; text-align: center;')
                descContainer.appendChild(pageDiv);

                var buttonPage = document.createElement('a');
                buttonPage.setAttribute('href', '../new-year/index.html');
                buttonPage.setAttribute('class', 'entry-price');
                buttonPage.setAttribute('target', "_self");
                buttonPage.innerHTML = "SEE EVENT PAGE";
                pageDiv.appendChild(buttonPage);
            }

            var buttonDiv = document.createElement('div');
            buttonDiv.setAttribute('style', 'margin-top:80px; text-align: center;')
            descContainer.appendChild(buttonDiv);

            var buttonEvent = document.createElement('a')
            buttonEvent.setAttribute('class', 'entry-price');

            if (element.id == 146) {
                buttonEvent.setAttribute('id', 'page-button');
                buttonEvent.style.padding = '12px 25px';
            }

            buttonEvent.setAttribute('href', element.acf.event_link);
            buttonEvent.setAttribute('target', "_blank");
            buttonEvent.innerHTML = "SEE FACEBOOK EVENT";
            buttonDiv.appendChild(buttonEvent);


        }


    });

    if (el == 0) {
        var noEventsDiv = document.createElement('div');
        noEventsDiv.setAttribute('id', 'thank-you-reserve');
        noEventsDiv.setAttribute('data-aos', 'fade-up');
        noEventsDiv.setAttribute('data-aos-duration', '1000');
        noEventsDiv.setAttribute('data-aos-easing', 'ease');
        noEventsDiv.setAttribute('data-aos-once', 'ftrue');
        eventsDiv.appendChild(noEventsDiv);

        var underDiv = document.createElement("div");
        noEventsDiv.appendChild(underDiv);

        var imgNoEvent = document.createElement("img");
        imgNoEvent.setAttribute('src', '../images/no_events.png');
        underDiv.appendChild(imgNoEvent);

        var pNoEvent = document.createElement("p");
        pNoEvent.innerHTML = 'We are sorry but there are no new events at the moment.';
        underDiv.appendChild(pNoEvent);
    }
}) //.catch(function () {
//  console.error(error);
//})