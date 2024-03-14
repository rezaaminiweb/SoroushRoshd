try {
    let iconbar = $('.spost')
    iconbar.on('click', (e) => {
        $(e.target).toggleClass('bi-list')
        $(e.target).toggleClass('bi-x')
    })

} catch{
}


try {
    const host = $(window).attr('location');
    const ul = $('.menu-header-item')
    ul.removeClass('active')
    sd = host.href
    console.log(host)
    if (host.pathname == '/') {
        ul.eq(0).addClass('active')
    }
    else if (host.pathname == '/blogs') {
        ul.eq(2).addClass('active')
    }
    else if (host.pathname == '/products') {
        ul.eq(1).addClass('active')

    } else if (host.pathname == '/aboutus') {

        ul.eq(4).addClass('active')

    } else if (host.pathname == '/contactus') {
        ul.eq(5).addClass('active')
    } else if (host.pathname == '/news') {
        ul.eq(3).addClass('active')
    }
    console.log('rerewddwaadxsecjcsk')
    
} catch{

}
try {
    let toggleicon = $('.mobile-header-toggle-bar')
    let menubars = $('.mobile-header-menu')
    let hbars = menubars.height()
    let i = 1
    menubars.css({ 'height': '0px' })
    toggleicon.on('click', () => {
        menubars.css({ 'height': (i % 2) ? hbars+'px' : '0px' })
        i++

    })
    

} catch{

}
try {

}
catch{

}

try {
    
    
    const dayere = document.getElementById('dayereh')
    const figha = document.querySelectorAll('#dayereh>figure')
    const imgfig = document.querySelectorAll('#dayereh>figure>img')
    let imagespan = document.getElementById('imagespan')
    let imagespan2 = document.getElementById('imagespan2')
    const charkhesh1 = document.getElementById('charkhesh1')
    const charkhesh2 = document.getElementById('charkhesh2')
    let spane1 = document.getElementById('spane1')
    
    let spane2 = document.getElementById('spane2')
    const width50 = document.getElementById('width50')
    const divaval1 = document.getElementById('divaval1')
    const divhayewid = document.querySelectorAll('#width50>div')
    let dayere2 = document.getElementById('dayereh2')
    let figha2 = document.querySelectorAll('#dayereh2>figure')
    let imgfig2 = document.querySelectorAll('#dayereh2>figure>img')
    let imagespan3 = document.getElementById('imagespan3')
    const charkhesh33 = $('#charkhesh3')
    const charkhesh44 = $('#charkhesh4')
    let imagespan4 = document.getElementById('imagespan4')
    let charkhesh3 = document.getElementById('charkhesh3')
    let charkhesh4 = document.getElementById('charkhesh4')
    const width60 = document.getElementById('width60')
    const divhayewid2 = document.querySelectorAll('#width60>div')
    const divaval2 = document.getElementById('divaval2')
    
    let _hdayereh = dayere.offsetWidth;

    let _hdayereh2 = dayere2.offsetWidth;
    
    
    let iconleft = document.getElementById('iconleft')
    let iconright = document.getElementById('iconright')
    console.log('rezasdjkvnlkdsn')
    window.addEventListener('load', () => {
        radius2 = dayere2.offsetWidth / .6;
        if (0 < window.innerWidth && window.innerWidth < 456) {
            console.log('reza456')
            radius2 = dayere2.offsetWidth / .6;
        } if (456 <= window.innerWidth && window.innerWidth < 500) {
            console.log('reza500')
            radius2 = dayere2.offsetWidth / .7;
        } if (500 <= window.innerWidth && window.innerWidth < 650) {
            console.log('reza650')
            radius2 = dayere2.offsetWidth / .7;
        } if (650 <= window.innerWidth && window.innerWidth < 800) {
            radius2 = dayere2.offsetWidth / .8
        } if (800 <= window.innerWidth && window.innerWidth < 1024) {
            console.log('reza1000')
            radius2 = dayere2.offsetWidth / 1.2
        }
        const numImages2 = figha2.length;
        figha2.forEach((item, index) => {
            const angle2 = (index / numImages2) * Math.PI * 2;
            const x2 = Math.cos(angle2) * radius2 + dayere2.offsetWidth / 2;
            const y2 = Math.sin(angle2) * radius2 + dayere2.offsetHeight / 2;
            item.style.left = x2 + 'px';
            item.style.top = y2 + 'px';
        })
    })
    iconleft.addEventListener('click', () => {

    })
    iconright.addEventListener('click', () => {

    })
    
    //
    
    //
    imagespan3.addEventListener('click', (event) => {
    })


    dayere.style.height = _hdayereh + 'px'
    dayere2.style.height = _hdayereh2 + 'px'

    window.addEventListener('resize', (e) => {
        radius2 = dayere2.offsetWidth / .6;
        if (0 < e.target.innerWidth && e.target.innerWidth < 456) {
            console.log('reza456')
            radius2 = dayere2.offsetWidth / .6;
        } if (456 <= e.target.innerWidth && e.target.innerWidth < 500) {
            console.log('reza500')
            radius2 = dayere2.offsetWidth / .7;
        } if (500 <= e.target.innerWidth && e.target.innerWidth < 650) {
            console.log('reza650')
            radius2 = dayere2.offsetWidth / .7;
        } if (650 <= e.target.innerWidth && e.target.innerWidth < 800) {
            radius2 = dayere2.offsetWidth / .8
        } if (800 <= e.target.innerWidth && e.target.innerWidth < 1024) {
            console.log('reza1000')
            radius2 = dayere2.offsetWidth / 1.2
        }

        _hdayereh2 = dayere2.offsetWidth;
        _hdayereh = dayere.offsetWidth
        dayere2.offsetHeight = dayere2.offsetWidth
        dayere2.style.height = _hdayereh2 + 'px'
        dayere.offsetHeight = dayere.offsetWidth
        dayere.style.height = _hdayereh + 'px'

        const numImages = figha.length;
        const radius = dayere.offsetWidth / 2.6; // دور دایره

        figha.forEach((item, index) => {
            const angle = (index / numImages) * Math.PI * 2; // Calculate angle;
            const x = Math.cos(angle) * radius + dayere.offsetWidth / 2; // Calculate x coordinate
            const y = Math.sin(angle) * radius + dayere.offsetHeight / 2; // Calculate y coordinate
            //item.src = imageUrls[i];
            item.style.left = x + 'px';

            item.style.top = y + 'px';


        })
        const numImages2 = figha2.length;

        figha2.forEach((item, index) => {
            const angle2 = (index / numImages2) * Math.PI * 2;
            const x2 = Math.cos(angle2) * radius2 + dayere2.offsetWidth / 2;
            const y2 = Math.sin(angle2) * radius2 + dayere2.offsetHeight / 2;
            item.style.left = x2 + 'px';
            item.style.top = y2 + 'px';
        })


        setTimeout(() => {
            rect = imagespan.getBoundingClientRect();
            rect2 = imagespan2.getBoundingClientRect();

        }, 1000)
        setTimeout(() => {
         
            charkhesh1.style.width = rect.width + 'px'
            charkhesh1.style.height = rect.height + 'px'
            charkhesh1.style.left = rect.left + 'px'
            charkhesh1.style.top = rect.top + 'px'
            charkhesh2.style.width = rect2.width + 'px'
            charkhesh2.style.height = rect2.height + 'px'
            charkhesh2.style.left = rect2.left + 'px'
            charkhesh2.style.top = rect2.top + 'px'
        }, 1200)



    })
    let ada = 0

    let degit = 30

    divhayewid.forEach((item) => {
        item.style.opacity = '0'
        item.style.visibility = 'hidden'
        if (item.getAttribute('data-pro') == 'mahsol1') {
            item.style.opacity = '1'
            item.style.visibility = 'visible'
        }
    })

    width50.style.height = divaval1.clientHeight + 'px'
    width60.style.height = divaval2.clientHeight + 'px'
    setTimeout(() => {
        if (imagespan.complete) {

        
        const rect = imagespan.getBoundingClientRect();
        charkhesh1.style.width = rect.width + 'px'
        charkhesh1.style.height = rect.height + 'px'
        charkhesh1.style.left = rect.left + 'px'
        charkhesh1.style.top = rect.top + 'px'

        }
    

        if (imagespan2.complete) {

        const rect2 = imagespan2.getBoundingClientRect();


        charkhesh2.style.width = rect2.width + 'px'
        charkhesh2.style.height = rect2.height + 'px'
        charkhesh2.style.left = rect2.left + 'px'
        charkhesh2.style.top = rect2.top + 'px'
        
        }
        
    },1500)
    charkhesh1.addEventListener('click', () => {
        degit += 360 / figha.length

        imgfig.forEach((item) => {
            
            item.style.scale = 1
            item.style.transform = 'rotate(' + (-degit +30 ) + 'deg)'
        })
        if (ada >= divhayewid.length - 1) {
            ada = 0
        } else {

            ada++
        }

        divhayewid.forEach((item) => {
            item.style.opacity = '0'
            item.style.visibility = 'hidden'
        })
        divhayewid[ada].style.opacity = '1'
        divhayewid[ada].style.visibility = 'visible'
        dayere.style.transform = 'rotate(' + (degit - 30) + 'deg)  '

        //console.log(figha);
        //positionXY();
    })
    charkhesh1.addEventListener('mouseenter', () => {
        //console.log(spane1)
        spane2.style.opacity = '1'
    })
    charkhesh1.addEventListener('mouseleave', () => {
        //console.log(spane1)
        spane2.style.opacity = '0'
    })
    charkhesh2.addEventListener('mouseenter', () => {
        //console.log(spane1)
        spane1.style.opacity = '1'
    })
    charkhesh2.addEventListener('mouseleave', () => {
        //console.log(spane1)
        spane1.style.opacity = '0'
    })


    //function positionXY() {
    //    $(imgfig).each(function(){
    //        $(this).click(function () {
    //            console.log(this)
    //            $(imgfig).css("rotate", -degit+'deg')
    //            $(dayere).css("rotate", degit+'deg')
    //            $(imgfig).css("width", "100px");
    //            $(imgfig).css("height", "100px");
    //            $(this).css("width", "150px");
    //            $(this).css("height", "150px");
    //            degit += 360 / figha.length;
    //        });
    //    });
    //}
    let attrbt = document.getElementById('attrbt')
    charkhesh2.addEventListener('click', () => {
        
        degit -= 360 / figha.length
        imgfig.forEach((item) => {
            item.style.scale = 1;
            item.style.transform = 'rotate(' + (-degit +30) + 'deg)'

        })
        console.log(ada)
        if (ada <= 0) {
            ada = divhayewid.length - 1
        } else {

            ada--
        }

        divhayewid.forEach((item) => {
            item.style.opacity = '0'
            item.style.visibility = 'hidden'
        })
        divhayewid[ada].style.opacity = '1'
        divhayewid[ada].style.visibility = 'visible'
        
        console.log(degit)
        dayere.style.transform = 'rotate(' + (degit - 30) + 'deg)'


    })






    // List of your image URLs


    //const circle = document.getElementById('circle');
    const numImages = figha.length;
    const radius = dayere.offsetWidth / 2.6; // دور دایره

    figha.forEach((item, index) => {
        const angle = (index / numImages) * Math.PI * 2; // Calculate angle;
        const x = Math.cos(angle) * radius + dayere.offsetWidth / 2; // Calculate x coordinate
        const y = Math.sin(angle) * radius + dayere.offsetHeight / 2; // Calculate y coordinate
        //item.src = imageUrls[i];
        item.style.left = x + 'px';

        item.style.top = y + 'px';


    })
    
   console.log('rezadssdsdv')

} catch{

}


//for (let i = 0; i < numImages; i++) {
//    //const img = document.createElement('img');
   
    

//    circle.appendChild(img);
//}

