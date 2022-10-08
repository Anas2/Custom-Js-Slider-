
function displayleft() {
    var leftcheck = document.getElementById("left");
    leftcheck = leftcheck.className = "clickleft";
}
function displayleftout() {
    var leftcheck = document.getElementById("left");
    leftcheck = leftcheck.className = "leftDisplaynone";
}


function displayright() {
    var rightcheck = document.getElementById("right");
    rightcheck = rightcheck.className = "clickright";
}
function displayrightout() {
    var rightcheck = document.getElementById("right");
    rightcheck = rightcheck.className = "rightDisplaynone";
}


var i = 3;
function changeimgleft(n) {
    var img = document.getElementById("img");
    var arr = ["images/slider1.jpg", "images/slider2.jpg", "images/slider3.jpg", "images/slider4.jpg"];
    console.log(i);
    if (n < 0 && arr[i]) {
        img.src = arr[i];
        i--;

    } else if (arr.length > 0) {
        i = 3
        img.src = arr[i];
        i--;
        console.log("here minus");
    }
    console.log(img.src);


}


var i = 1;
function changeimgright(n) {
    var img = document.getElementById("img");
    var arr = ["images/slider1.jpg", "images/slider2.jpg", "images/slider3.jpg", "images/slider4.jpg"];
    console.log(i);

    if (n > 0 && arr[i]) {
        img.src = arr[i];
        i++;

    } else if (arr.length >= 3) {
        i = 0
        img.src = arr[i];

        i++;
        console.log("here");
    }

    console.log(img.src);
}