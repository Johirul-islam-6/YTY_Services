



const dynamicImageData = () => {
    fetch("./image.json")
        .then(res => res.json())
        .then(data => displayImage(data))
}

const displayImage = (images) => {
    const scrollDiv = document.getElementById('swiper_container');
    images.map(image => {
        const swiperSlide = document.createElement('swiper-slide');
        // swiperSlide.classList.add('wiper_slide')
        swiperSlide?.setAttribute('id', 'wiper_slide');
        swiperSlide.innerHTML = `
          <swiper-slide id="wiper_slide" onclick="imageData('${image?.image}')">
                    <img id = "singelImage" class= "" src= ${image?.image}
                     loading="lazy"  alt="">
                    <h2 class="position-absolute text-white">${image?.name}</h2>
                </swiper-slide>

        `
        scrollDiv.appendChild(swiperSlide);

    })

}


dynamicImageData()

// === Braground image change onclick ======

const imageData = (image, name) => {
    console.log(image, name)
    const newdiv = document.getElementById("divImage");
    newdiv.classList.add('img-gradient')
    newdiv.innerHTML = `
     <img class="w-100 h-100"
            src=${image} alt="">
            <h1 id="tour_text" class="position-absolute text-center top-0 pt-5 d-flex tourText">An Unforgettable Tour
                Across
                <br>
                World Wide
            </h1>
    `

}
