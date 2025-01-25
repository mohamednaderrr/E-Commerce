var MainImg = document.getElementById("MainImg");
var smalling = document.getElementsByClassName("small-img");

smalling[0].onclick = function () {
    MainImg.src = smalling[0].src;
}
smalling[1].onclick = function () {
    MainImg.src = smalling[1].src;
}
smalling[2].onclick = function () {
    MainImg.src = smalling[2].src;
}
smalling[3].onclick = function () {
    MainImg.src = smalling[3].src;
}
