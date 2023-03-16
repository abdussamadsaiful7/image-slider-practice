
const images =[
    'img/img-1.jpg',
    'img/img-2.jpg',
    'img/img-3.jpg',
    'img/img-4.jpg',
    'img/img-5.jpg',
    'img/img-6.jpg',
    'img/img-7.jpg',
    'img/img-8.jpg',
    'img/img-9.jpg',
    'img/img-10.jpg',
    'img/img-11.jpg',
    'img/img-12.jpg',
    'img/img-13.jpg',
   
]

const imgEl =document.getElementById('slider-img');
let imgIndex = 0;
setInterval(()=>{
    if(imgIndex === images.length){
        imgIndex = 0;
    }
    const imgUrl =images[imgIndex];
    console.log(imgUrl);
    imgEl.setAttribute('src', imgUrl);

    imgIndex ++;
}, 1500);