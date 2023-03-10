



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
                    <h2 class="position-absolute text-white animation_h3">${image?.name}</h2>

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
               <main class="Text_container position-absolute">

                <section class="animation ">
                    <div class="first">
                        <div className='animation_p'>Travel makes people's </div>
                    </div>
                    <div class="second">
                        <div className='animation_p'>lives beautiful and</div>
                    </div>
                    <div class="third">
                        <div className='animation_p'>inspires them to live</div>
                    </div>

                </section>

            </main>
            
    `

}
