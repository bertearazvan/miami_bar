let burgerMenu = document.getElementById("burger");
let navigation = document.getElementById("navigation-links");

navigation.classList.add('anim');
burgerMenu.addEventListener('click', function () {
    navigation.classList.toggle('anim');
});