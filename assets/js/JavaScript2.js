
try {

const charkhesh2 = document.getElementById('charkhesh2')
const images = Array.from(document.querySelectorAll('.slider-item img'));
const charkhesh1 = document.getElementById('charkhesh1')

    charkhesh2.addEventListener('click', () => {
        const currentIndex = images.findIndex(item => item.dataset.name === 'true');
        if (currentIndex !== -1) {
            images[currentIndex].dataset.name = 'false';
            const nextIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1; // اینجا تغییر داده شده است
            images[nextIndex].dataset.name = 'true';
            bozorgimage();
        }



    
});
charkhesh1.addEventListener('click', () => {
    const currentIndex = images.findIndex(item => item.dataset.name === 'true');

    if (currentIndex !== -1) {
        images[currentIndex].dataset.name = 'false';
        const nextIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        images[nextIndex].dataset.name = 'true';
        bozorgimage();
    }
});
function bozorgimage() {

    images.forEach((item, index) => {
        item.style.scale = .78
        item.style.filter = 'grayscale(100%)'

        if (item.getAttribute('data-name') == 'true') {
            item.style.scale = 1.7
            item.style.filter = 'grayscale(0%)'

        }
    })
}
bozorgimage()
} catch{
    


}
try {
    let libozorg = $('.libozorg');
    let ulli12 = $('.ulli12');
    let h1 = ulli12.height();
    ulli12.css('height', 0);
    libozorg.on('mouseenter', () => {
        ulli12.stop().animate({ height: h1 });
    });
    libozorg.on('mouseleave', () => {
        ulli12.stop().animate({ height: 0 });
    });
   
} catch{

}
try {
    const imagesbars = Array.from($('.slidermobile2>figure>img'))

    
    const charkhesh33 = $('#charkhesh3')
 
    const charkhesh44 = $('#charkhesh4')

    let degit2 = 13;
    let ada2 = 0;
    let figha2 = $('#dayereh2>figure');
    let imgfig2 = $('#dayereh2>figure>img');
    const divhayewid2 = $('#width60>div');
    let dayere2 = $('#dayereh2');

        function imagebarrrs(imagesbars) {

        const currentIndex2 = imagesbars.findIndex(item => $(item).data('name') === true);
        console.log(currentIndex2)
        if (currentIndex2 !== -1) {
            $(imagesbars[currentIndex2]).data('name', 'false');
            const nextIndex2 = (currentIndex2 === imagesbars.length - 1) ? 0 : currentIndex2 + 1;
            $(imagesbars[nextIndex2]).data('name', true);
            
        }
        }
    charkhesh33.on('click', () => {
        imagebarrrs(imagesbars)
        degit2 -= 360 / figha2.length;

        imgfig2.each((index, item) => {
            $(item).css('transform', 'rotate(' + (-degit2 + 13) + 'deg)').css('scale', 1);
        });

        if (ada2 >= divhayewid2.length - 1) {
            ada2 = 0;
        } else {
            ada2++;
        }

        divhayewid2.css({ 'opacity': '0', 'visibility': 'hidden' });
        $(divhayewid2[ada2]).css({ 'opacity': '1', 'visibility': 'visible' });
        dayere2.css('transform', 'rotate(' + degit2 + 'deg)');
        imagebozorg123(imagesbars);
    });

        function imagebarrrs2() {

        const currentIndex2 = imagesbars.findIndex(item => $(item).data('name') === true);
        if (currentIndex2 !== -1) {
            $(imagesbars[currentIndex2]).data('name', 'false');
            const nextIndex2 = (currentIndex2 === 0) ? imagesbars.length - 1 : currentIndex2 - 1;
            $(imagesbars[nextIndex2]).data('name', true);
            
        }
        }
    charkhesh44.on('click', () => {
        imagebarrrs2(imagesbars)
        degit2 += 360 / figha2.length;

        imgfig2.each((index, item) => {
            $(item).css('transform', 'rotate(' + (-degit2 + 13) + 'deg)').css('scale', 1);
        });

        if (ada2 <= 0) {
            ada2 = divhayewid2.length - 1;
        } else {
            ada2--;
        }

        divhayewid2.css({ 'opacity': '0', 'visibility': 'hidden' });
        $(divhayewid2[ada2]).css({ 'opacity': '1', 'visibility': 'visible' });
        dayere2.css('transform', 'rotate(' + degit2 + 'deg)');
        imagebozorg123(imagesbars);
    });

    function imagebozorg123(imagesbars) {
        $(imagesbars).each(function (index, item) {
        
            $(item).css('scale', '0.6');
            console.log('reza');
            let getdata = $(item).data('name'); // دسترسی به ویژگی data-name
            console.log(getdata);
            if (getdata === true) {
                $(item).css('scale', '1.5');
            }
        });
    }
    
    imagebozorg123(imagesbars);


}
catch{

}
try {
    
    
 
    

}
catch{

}