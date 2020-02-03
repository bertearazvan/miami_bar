var modal = document.getElementById("myModal");
var img = document.querySelectorAll("#grid-gallery-container .item-display");

var modalImg = document.getElementById("img01");

fetch("https://www.mrbertea.com/wordpress/theme7/wp-json/wp/v2/miamibar")
    .then(e => e.json())
    .then(item => {
        const data = item;
        document.querySelector("#grid-1-1").style.backgroundImage = "url('" + data[8].acf.image_miamibar.url + "')";
        document.querySelector("#grid-1-2").style.backgroundImage = "url('" + data[7].acf.image_miamibar.url + "')";
        document.querySelector("#grid-1-3").style.backgroundImage = "url('" + data[6].acf.image_miamibar.url + "')";
        document.querySelector("#grid-1-4").style.backgroundImage = "url('" + data[5].acf.image_miamibar.url + "')";
        document.querySelector("#grid-2").style.backgroundImage = "url('" + data[4].acf.image_miamibar.url + "')";
        document.querySelector("#grid-3").style.backgroundImage = "url('" + data[3].acf.image_miamibar.url + "')";
        document.querySelector("#grid-4-1").style.backgroundImage = "url('" + data[2].acf.image_miamibar.url + "')";
        document.querySelector("#grid-4-2").style.backgroundImage = "url('" + data[1].acf.image_miamibar.url + "')";
        document.querySelector("#grid-4-3").style.backgroundImage = "url('" + data[0].acf.image_miamibar.url + "')";



        /*

        img.onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.style.backgroundImage;

        }
        */
        img.forEach(a => {
            a.onclick = function () {
                modal.style.display = "block";
                modalImg.src = this.style.backgroundImage.replace(/(url\(|\)|")/g, '');


            }
        })
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        }

    });