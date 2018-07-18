function show_abstract(name) {
    var abstract = document.getElementById(name);
	var abs_show = document.getElementById("show-" + name);
    if (abstract.style.display === "none") {
        abstract.style.display = "block";
		abs_show.innerHTML = "<i>Hide Abstract</i>"
    } else {
        abstract.style.display = "none";
		abs_show.innerHTML = "<i>Show Abstract</i>"
    }
}
