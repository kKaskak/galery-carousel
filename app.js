let list = document.querySelector('.list');
let imgs = Array.from(list.children);
const nextBtn = document.querySelector('.btn-right');
const prevBtn = document.querySelector('.btn-left');


//  --- Getting imgs width

// The returned value is a DOMRect object which is the smallest rectangle which contains the entire element, including its padding and border-width. The left, top, right, bottom, x, y, width, and height properties describe the position and size of the overall rectangle in pixels. Properties other than width and height are relative to the top-left of the viewport [desc === get`boundingClientRect()].

const imgWidth = imgs[0].getBoundingClientRect().width;

// --- Arranging imgs next to each other

function setImgPosition(img, index) {
    img.style.left = imgWidth * index + "px";
}

imgs.forEach(setImgPosition);


// --- Function for movement

const moveToImg = function (list, currentImg, targetImg) {
    list.style.transform = "translateX(-" + targetImg.style.left + ")";
    currentImg.classList.remove('current-img')
    targetImg.classList.add('current-img')
}


// --- Hide/show arrrows

const hideShowArrows = function (imgs, prevBtn, nextBtn, targetIndex) {
    if (targetIndex === 0) {
        prevBtn.classList.add('hidden')
        nextBtn.classList.remove('hidden')
    } else if (targetIndex === imgs.length - 1) {
        nextBtn.classList.add('hidden');
        prevBtn.classList.remove('hidden')
    } else {
        prevBtn.classList.remove('hidden')
        nextBtn.classList.remove('hidden')
    }
}


// --- When we click on the rigth button, move images to the left

nextBtn.addEventListener('click', function (e) {
    const currentImg = list.querySelector('.current-img');
    const nextImg = currentImg.nextElementSibling;
    const nextIndex = imgs.findIndex((img) => img === nextImg)
    console.log(nextIndex);
    moveToImg(list, currentImg, nextImg)
    hideShowArrows(imgs, prevBtn, nextBtn, nextIndex)
});


// --- When we click on the left button move images to the right

prevBtn.addEventListener('click', function (e) {
    const currentImg = list.querySelector('.current-img');
    const prevImg = currentImg.previousElementSibling;
    const prevIndex = imgs.findIndex((img) => img === prevImg)
    console.log(prevIndex);
    moveToImg(list, currentImg, prevImg)
    hideShowArrows(imgs, prevBtn, nextBtn, prevIndex)
});

