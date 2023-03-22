let indexValue = 2;
let amountPhotos = 4;
showImg(indexValue);

function side_slide(e) {
    showImg(indexValue += e);
}

function showImg(e) {
    let i; const img = document.querySelectorAll('img');
    if (e > amountPhotos + 1) {
        indexValue = 2;
    }
     if (e < 2) {
        indexValue = amountPhotos + 1;
     }

     for(i = 1; i < amountPhotos + 1; i++) {
        img[i].style.display = "none";
     }
     img[indexValue - 1].style.display = "block";
     document.getElementById('currentImg').innerHTML = (indexValue - 1) + ' of ' + amountPhotos
}