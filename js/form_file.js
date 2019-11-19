let fileSelect = document.getElementById("cv-file");

fileSelect.addEventListener('change', function () {
    let filename = fileSelect.value.split(/(\\|\/)/g).pop();
    document.getElementById('file-name').innerHTML = filename;
})