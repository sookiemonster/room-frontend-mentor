var carousel_counter = 1;
var min_images = 1;
var max_images = 3;

function nextImage() {
    document.getElementById("hero-image-" + carousel_counter).classList.remove("active");
    carousel_counter = wrap(carousel_counter + 1, min_images, max_images);
    document.getElementById("hero-image-" + carousel_counter).classList.add("active");
}

function prevImage() {
    document.getElementById("hero-image-" + carousel_counter).classList.remove("active");
    carousel_counter = wrap(carousel_counter - 1, min_images, max_images);
    document.getElementById("hero-image-" + carousel_counter).classList.add("active");
}

function wrap(n, min, max) {
    if (n > max) {
        return min;
    } else if (n < min) {
        return max;
    } else {
        return n;
    }
}