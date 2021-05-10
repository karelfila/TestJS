function myFunction() {
    document.getElementById("Drop").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.button')) {
        var dropdowns = document.getElementsByClassName("dropdown-nav");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}