function toggle_show(name, inner_name) {
    var abstract = document.getElementById(name);
	var abs_show = document.getElementById("show-" + name);
    if (abstract.style.display === "none") {
        abstract.style.display = "block";
		abs_show.innerHTML = "<i>Hide " + inner_name + "</i>"
    } else {
        abstract.style.display = "none";
		abs_show.innerHTML = "<i>Show " + inner_name + "</i>"
    }
}
