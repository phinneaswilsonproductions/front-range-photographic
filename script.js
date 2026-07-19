/* ============================================================
   FRONT RANGE PHOTOGRAPHIC
   SCRIPT.JS
   PART 1 OF 4

   • Loading Screen
   • Typewriter Effect
   • Smooth Navigation
   • Header Hide On Scroll
============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       ELEMENTS
    ========================================== */

    const body = document.body;

    const header = document.querySelector("header");

    const loadingScreen =
        document.querySelector(".loading-screen");

    const heroTitle =
        document.querySelector(".hero h1");

    const navLinks =
        document.querySelectorAll('a[href^="#"]');



    /* ==========================================
       LOADING SCREEN
    ========================================== */

    if (loadingScreen) {

        body.style.overflow = "hidden";

        setTimeout(() => {

            loadingScreen.style.opacity = "0";
            loadingScreen.style.pointerEvents = "none";

            setTimeout(() => {

                loadingScreen.remove();

                body.style.overflow = "auto";

            }, 800);

        }, 1800);

    }



    /* ==========================================
       TYPEWRITER EFFECT
    ========================================== */

    if (heroTitle) {

        const originalText = heroTitle.innerHTML;

        heroTitle.innerHTML = "";

        let index = 0;

        function typeWriter() {

            if (index < originalText.length) {

                heroTitle.innerHTML +=
                    originalText.charAt(index);

                index++;

                setTimeout(typeWriter, 30);

            }

        }

        setTimeout(typeWriter, 2000);

    }



    /* ==========================================
       SMOOTH SCROLLING
    ========================================== */

    navLinks.forEach(link => {

        link.addEventListener("click", e => {

            const target =
                document.querySelector(
                    link.getAttribute("href")
                );

            if (!target) return;

            e.preventDefault();

            window.scrollTo({

                top: target.offsetTop - 100,

                behavior: "smooth"

            });

        });

    });



    /* ==========================================
       HEADER HIDE / SHOW
    ========================================== */

    let previousScroll = window.scrollY;

    window.addEventListener("scroll", () => {

        const currentScroll = window.scrollY;

        if (!header) return;

        if (currentScroll > previousScroll &&
            currentScroll > 120) {

            header.style.transform =
                "translateY(-120%)";

        }

        else {

            header.style.transform =
                "translateY(0)";

        }

        previousScroll = currentScroll;

    });

});

/* ============================================================
   FRONT RANGE PHOTOGRAPHIC
   SCRIPT.JS
   PART 2 OF 4

   • Mobile Navigation
   • Dropdown Menus
   • Scroll Reveal
   • Active Navigation
============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       MOBILE MENU
    ========================================== */

    const mobileButton =
        document.querySelector(".mobile-menu");

    const navigation =
        document.querySelector(".nav-menu");

    if (mobileButton && navigation) {

        mobileButton.addEventListener("click", () => {

            navigation.classList.toggle("active");
            mobileButton.classList.toggle("active");

        });

        navigation.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navigation.classList.remove("active");
                mobileButton.classList.remove("active");

            });

        });

    }



    /* ==========================================
       DROPDOWN MENUS
    ========================================== */

    const dropdowns =
        document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {

        dropdown.addEventListener("mouseenter", () => {

            dropdown.classList.add("open");

        });

        dropdown.addEventListener("mouseleave", () => {

            dropdown.classList.remove("open");

        });

        dropdown.addEventListener("click", () => {

            dropdown.classList.toggle("open");

        });

    });



    /* ==========================================
       SCROLL REVEAL
    ========================================== */

    const revealItems =
        document.querySelectorAll(
            ".reveal, .service-card, .price-card, .stat-card, .faq-card, .info-box"
        );

    function revealContent() {

        const trigger =
            window.innerHeight * 0.85;

        revealItems.forEach(item => {

            const top =
                item.getBoundingClientRect().top;

            if (top < trigger) {

                item.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", revealContent);

    revealContent();



    /* ==========================================
       ACTIVE NAVIGATION
    ========================================== */

    const sections =
        document.querySelectorAll("section[id]");

    const links =
        document.querySelectorAll(".nav-menu a");

    function updateNavigation() {

        let current = "";

        sections.forEach(section => {

            const top =
                section.offsetTop - 150;

            const height =
                section.offsetHeight;

            if (window.scrollY >= top &&
                window.scrollY < top + height) {

                current = section.id;

            }

        });

        links.forEach(link => {

            link.classList.remove("current");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("current");

            }

        });

    }

    window.addEventListener("scroll", updateNavigation);

    updateNavigation();

});

/* ============================================================
   FRONT RANGE PHOTOGRAPHIC
   SCRIPT.JS
   PART 3 OF 4

   • Animated Counters
   • Mouse Parallax
   • Floating Cards
   • Hero Motion
   • Scroll Progress Bar
   • Button Shine
   • Card Tilt
============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       SCROLL PROGRESS BAR
    ========================================== */

    const progressBar = document.createElement("div");

    progressBar.style.position = "fixed";
    progressBar.style.top = "0";
    progressBar.style.left = "0";
    progressBar.style.height = "4px";
    progressBar.style.width = "0%";
    progressBar.style.background =
        "linear-gradient(90deg,#cfa14a,#ffd98a)";
    progressBar.style.zIndex = "99999";
    progressBar.style.boxShadow =
        "0 0 15px rgba(255,215,120,.6)";

    document.body.appendChild(progressBar);

    function updateProgress() {

        const scroll =
            window.scrollY;

        const height =
            document.documentElement.scrollHeight -
            window.innerHeight;

        progressBar.style.width =
            (scroll / height) * 100 + "%";

    }

    window.addEventListener(
        "scroll",
        updateProgress
    );



    /* ==========================================
       ANIMATED COUNTERS
    ========================================== */

    const counters =
        document.querySelectorAll(".stat-number");

    let counterStarted = false;

    function runCounters() {

        if (counterStarted) return;

        const stats =
            document.querySelector(".statistics");

        if (!stats) return;

        if (
            stats.getBoundingClientRect().top <
            window.innerHeight - 150
        ) {

            counterStarted = true;

            counters.forEach(counter => {

                const text =
                    counter.innerText;

                const value =
                    parseInt(text.replace(/\D/g, ""));

                if (isNaN(value)) return;

                let current = 0;

                const increment =
                    Math.max(
                        1,
                        Math.floor(value / 80)
                    );

                const timer = setInterval(() => {

                    current += increment;

                    if (current >= value) {

                        current = value;

                        clearInterval(timer);

                    }

                    if (text.includes("%")) {

                        counter.innerText =
                            current + "%";

                    }

                    else if (text.includes("HR")) {

                        counter.innerText =
                            current + "HR";

                    }

                    else {

                        counter.innerText =
                            current + "+";

                    }

                }, 20);

            });

        }

    }

    window.addEventListener(
        "scroll",
        runCounters
    );



    /* ==========================================
       HERO PARALLAX
    ========================================== */

    const hero =
        document.querySelector(".hero");

    window.addEventListener(
        "mousemove",
        e => {

            if (!hero) return;

            const x =
                (e.clientX /
                    window.innerWidth -
                    .5) * 20;

            const y =
                (e.clientY /
                    window.innerHeight -
                    .5) * 20;

            hero.style.backgroundPosition =
                `${50 + x}% ${50 + y}%`;

        }
    );



    /* ==========================================
       FLOATING INFO BOXES
    ========================================== */

    const infoBoxes =
        document.querySelectorAll(
            ".info-box"
        );

    infoBoxes.forEach((box, index) => {

        let direction = 1;

        setInterval(() => {

            const amount =
                Math.sin(Date.now() / 700 + index);

            box.style.transform =
                `translateY(${amount * 6}px)`;

        }, 30);

    });



    /* ==========================================
       BUTTON SHINE
    ========================================== */

    const buttons =
        document.querySelectorAll(
            ".gold-button,.primary-button,.package-button"
        );

    buttons.forEach(button => {

        button.addEventListener(
            "mousemove",
            e => {

                const rect =
                    button.getBoundingClientRect();

                const x =
                    e.clientX - rect.left;

                const y =
                    e.clientY - rect.top;

                button.style.background =
                    `radial-gradient(circle at ${x}px ${y}px,#ffe39d,#d4a24c)`;

            }
        );

        button.addEventListener(
            "mouseleave",
            () => {

                button.style.background = "";

            }
        );

    });



    /* ==========================================
       SERVICE CARD TILT
    ========================================== */

    const cards =
        document.querySelectorAll(
            ".service-card,.price-card,.faq-card"
        );

    cards.forEach(card => {

        card.addEventListener(
            "mousemove",
            e => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    e.clientX - rect.left;

                const y =
                    e.clientY - rect.top;

                const rotateY =
                    ((x / rect.width) - .5) * 12;

                const rotateX =
                    ((y / rect.height) - .5) * -12;

                card.style.transform =
                    `perspective(900px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-10px)`;

            }
        );

        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "perspective(900px) rotateX(0) rotateY(0) translateY(0)";

            }
        );

    });



    /* ==========================================
       HERO FADE ON SCROLL
    ========================================== */

    const heroContent =
        document.querySelector(".hero-content");

    window.addEventListener(
        "scroll",
        () => {

            if (!heroContent) return;

            const amount =
                window.scrollY * .0015;

            heroContent.style.opacity =
                1 - amount;

            heroContent.style.transform =
                `translateY(${window.scrollY * .25}px)`;

        }
    );



    /* ==========================================
       RANDOM GOLD GLOW
    ========================================== */

    setInterval(() => {

        cards.forEach(card => {

            if (Math.random() > .97) {

                card.style.boxShadow =
                    "0 0 30px rgba(212,162,76,.5)";

                setTimeout(() => {

                    card.style.boxShadow = "";

                }, 700);

            }

        });

    }, 800);

});

/* ============================================================
   FRONT RANGE PHOTOGRAPHIC
   SCRIPT.JS
   PART 4 OF 5

   Luxury Effects
============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       PARALLAX BACKGROUNDS
    ===================================== */

    const parallaxSections =
        document.querySelectorAll(
            ".hero,.technology,.booking-cta"
        );

    window.addEventListener("scroll", () => {

        const scroll = window.scrollY;

        parallaxSections.forEach(section => {

            section.style.backgroundPosition =
                `center ${scroll * 0.25}px`;

        });

    });



    /* =====================================
       IMAGE HOVER ZOOM
    ===================================== */

    document.querySelectorAll("img").forEach(image => {

        image.addEventListener("mouseenter", () => {

            image.style.transition = ".8s";
            image.style.transform = "scale(1.04)";

        });

        image.addEventListener("mouseleave", () => {

            image.style.transform = "scale(1)";

        });

    });



    /* =====================================
       BUTTON RIPPLE
    ===================================== */

    document.querySelectorAll("button,.gold-button,.primary-button")
    .forEach(button => {

        button.addEventListener("click", e => {

            const ripple =
                document.createElement("span");

            ripple.className = "ripple";

            ripple.style.left =
                e.offsetX + "px";

            ripple.style.top =
                e.offsetY + "px";

            button.appendChild(ripple);

            setTimeout(() => {

                ripple.remove();

            },600);

        });

    });



    /* =====================================
       RANDOM GLOW
    ===================================== */

    setInterval(() => {

        document
            .querySelectorAll(".service-card")
            .forEach(card => {

                if(Math.random()>.96){

                    card.style.boxShadow =
                    "0 0 40px rgba(212,162,76,.45)";

                    setTimeout(()=>{

                        card.style.boxShadow="";

                    },800);

                }

            });

    },900);

});

/* ============================================================
   FRONT RANGE PHOTOGRAPHIC
   SCRIPT.JS
   PART 5 OF 5

   Final Polish
============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       PAGE FADE IN
    ===================================== */

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition =
            "opacity 1.2s";

        document.body.style.opacity = "1";

    },150);



    /* =====================================
       CURRENT YEAR
    ===================================== */

    document
        .querySelectorAll(".year")
        .forEach(year => {

            year.textContent =
                new Date().getFullYear();

        });



    /* =====================================
       BACK TO TOP BUTTON
    ===================================== */

    const topButton =
        document.createElement("button");

    topButton.innerHTML = "↑";

    topButton.style.position = "fixed";
    topButton.style.right = "25px";
    topButton.style.bottom = "25px";
    topButton.style.width = "55px";
    topButton.style.height = "55px";
    topButton.style.borderRadius = "50%";
    topButton.style.border = "none";
    topButton.style.cursor = "pointer";
    topButton.style.display = "none";
    topButton.style.background = "#d4a24c";
    topButton.style.color = "#171512";
    topButton.style.fontSize = "22px";
    topButton.style.zIndex = "9999";

    document.body.appendChild(topButton);

    window.addEventListener("scroll",()=>{

        if(window.scrollY>500){

            topButton.style.display="block";

        }else{

            topButton.style.display="none";

        }

    });

    topButton.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });



    /* =====================================
       PERFORMANCE
    ===================================== */

    console.log(
        "Front Range Photographic Loaded Successfully"
    );

});

/* ==========================================================
   FRONT RANGE PHOTOGRAPHIC
   SCRIPT.JS
   PART 1 OF MANY

   Core Engine
   Loading Screen
   Navigation
   Scroll Banner
   Typewriter
========================================================== */

"use strict";

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       VARIABLES
    ========================================== */

    const body = document.body;

    const header =
        document.querySelector("header");

    const hero =
        document.querySelector(".hero");

    const loadingScreen =
        document.querySelector(".loading-screen");

    const introScreen =
        document.querySelector("#intro-screen");

    const typewriter =
        document.querySelector("#typewriter");

    const nav =
        document.querySelector(".navbar");

    const navLinks =
        document.querySelectorAll(".nav-menu a");

    const heroTitle =
        document.querySelector(".hero h1");



    /* ==========================================
       SETTINGS
    ========================================== */

    const SETTINGS = {

        scrollHeader:40,

        typeSpeed:55,

        loadingTime:1500,

        revealDistance:80,

        parallaxStrength:.18

    };



    /* ==========================================
       LOADING SCREEN
    ========================================== */

    function removeLoading(){

        if(!loadingScreen && !introScreen){

            return;

        }

        const screen =
            loadingScreen || introScreen;

        setTimeout(()=>{

            screen.style.opacity="0";

            screen.style.pointerEvents="none";

            screen.style.transition=
                "opacity .9s ease";

            setTimeout(()=>{

                screen.remove();

            },900);

        },SETTINGS.loadingTime);

    }



    removeLoading();



    /* ==========================================
       HEADER COLOR
    ========================================== */

    function updateHeader(){

        if(!header) return;

        if(window.scrollY>30){

            header.classList.add("scrolled");

        }else{

            header.classList.remove("scrolled");

        }

    }

    updateHeader();

    window.addEventListener(
        "scroll",
        updateHeader
    );



    /* ==========================================
       HERO PARALLAX
    ========================================== */

    function heroParallax(){

        if(!hero) return;

        hero.style.transform =
            `translateY(${window.scrollY *
            SETTINGS.parallaxStrength}px)`;

    }

    window.addEventListener(
        "scroll",
        heroParallax
    );



    /* ==========================================
       TYPEWRITER
    ========================================== */

    function startTypewriter(){

        if(!typewriter) return;

        const text =
        "Front Range Photographic";

        typewriter.textContent="";

        let i=0;

        function write(){

            if(i<text.length){

                typewriter.textContent+=
                    text.charAt(i);

                i++;

                setTimeout(
                    write,
                    SETTINGS.typeSpeed
                );

            }

        }

        write();

    }

    startTypewriter();



    /* ==========================================
       HERO TITLE FADE
    ========================================== */

    if(heroTitle){

        heroTitle.animate(

        [

            {

                opacity:0,

                transform:
                "translateY(60px)"

            },

            {

                opacity:1,

                transform:
                "translateY(0)"

            }

        ],

        {

            duration:1500,

            easing:"ease-out",

            fill:"forwards"

        });

    }



    /* ==========================================
       NAV LINK HOVER
    ========================================== */

    navLinks.forEach(link=>{

        link.addEventListener(

            "mouseenter",

            ()=>{

                link.style.transition=
                    ".3s";

                link.style.color=
                    "#ffd98a";

            }

        );

        link.addEventListener(

            "mouseleave",

            ()=>{

                link.style.color="";

            }

        );

    });



    /* ==========================================
       HIDE HEADER WHEN SCROLLING
    ========================================== */

    let previousScroll=0;

    window.addEventListener(

        "scroll",

        ()=>{

            const current=
                window.pageYOffset;

            if(!nav) return;

            if(current>previousScroll &&
               current>150){

                nav.style.transform=
                "translateY(-150%)";

            }else{

                nav.style.transform=
                "translateY(0)";

            }

            previousScroll=current;

        }

    );



    /* ==========================================
       REVEAL ELEMENTS
    ========================================== */

    const revealItems =
        document.querySelectorAll(

            ".reveal,"+
            ".service-card,"+
            ".info-box,"+
            ".price-card,"+
            ".process-card"

        );

    function reveal(){

        const trigger=
            window.innerHeight-80;

        revealItems.forEach(item=>{

            const top=
                item.getBoundingClientRect().top;

            if(top<trigger){

                item.classList.add("active");

            }

        });

    }

    reveal();

    window.addEventListener(
        "scroll",
        reveal
    );



    /* ==========================================
       CONSOLE
    ========================================== */

    console.log(

        "Front Range Photographic",
        "Core Engine Loaded"

    );

});

/* ==========================================================
   FRONT RANGE PHOTOGRAPHIC
   SCRIPT.JS

   MODULE 2A

   Mobile Navigation
   Dropdown Menus
   Touch Controls
   Accessibility
========================================================== */


document.addEventListener("DOMContentLoaded", () => {


    /* ==========================================
       MOBILE MENU SYSTEM
    ========================================== */


    const menuButton =
        document.querySelector(".mobile-menu");


    const navigation =
        document.querySelector(".nav-menu");



    if(menuButton && navigation){


        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );


        menuButton.addEventListener(
            "click",
            () => {


                const opened =
                    navigation.classList.toggle(
                        "active"
                    );


                menuButton.classList.toggle(
                    "active"
                );


                menuButton.setAttribute(
                    "aria-expanded",
                    opened
                );


                document.body.style.overflow =
                    opened ? "hidden" : "";


            }
        );



        navigation
        .querySelectorAll("a")
        .forEach(link => {


            link.addEventListener(
                "click",
                () => {


                    navigation.classList.remove(
                        "active"
                    );


                    menuButton.classList.remove(
                        "active"
                    );


                    document.body.style.overflow =
                        "";


                }
            );


        });


    }




    /* ==========================================
       CREATE MOBILE MENU BUTTON
       IF MISSING
    ========================================== */


    if(!menuButton){


        const button =
            document.createElement("button");


        button.className =
            "mobile-menu";


        button.innerHTML =

        `
        <span></span>
        <span></span>
        <span></span>
        `;


        button.setAttribute(
            "aria-label",
            "Open navigation menu"
        );



        const navbar =
            document.querySelector(
                ".navbar"
            );



        if(navbar){

            navbar.appendChild(button);

        }


    }





    /* ==========================================
       DROPDOWN MENU SYSTEM
    ========================================== */


    const dropdowns =
        document.querySelectorAll(
            ".dropdown"
        );



    dropdowns.forEach(dropdown => {



        const trigger =
            dropdown.querySelector(
                "a"
            );



        if(trigger){


            trigger.addEventListener(
                "click",
                event => {


                    if(window.innerWidth <= 900){


                        event.preventDefault();


                        dropdown.classList.toggle(
                            "open"
                        );


                    }


                }
            );


        }



        dropdown.addEventListener(
            "mouseenter",
            ()=>{


                if(window.innerWidth > 900){


                    dropdown.classList.add(
                        "open"
                    );


                }


            }
        );



        dropdown.addEventListener(
            "mouseleave",
            ()=>{


                dropdown.classList.remove(
                    "open"
                );


            }
        );


    });





    /* ==========================================
       CLOSE MENU WHEN CLICKING OUTSIDE
    ========================================== */


    document.addEventListener(
        "click",
        event => {


            if(!navigation ||
               !menuButton){

                return;

            }



            const clickedInside =
                navigation.contains(
                    event.target
                )
                ||
                menuButton.contains(
                    event.target
                );



            if(!clickedInside){


                navigation.classList.remove(
                    "active"
                );


                menuButton.classList.remove(
                    "active"
                );


                document.body.style.overflow =
                    "";


            }


        }
    );





    /* ==========================================
       ESCAPE KEY CLOSE
    ========================================== */


    document.addEventListener(
        "keydown",
        event => {


            if(event.key === "Escape"){


                if(navigation){


                    navigation.classList.remove(
                        "active"
                    );


                }


                if(menuButton){


                    menuButton.classList.remove(
                        "active"
                    );


                }


                document.body.style.overflow =
                    "";


            }


        }
    );





    /* ==========================================
       TOUCH SWIPE CLOSE MENU
    ========================================== */


    let startX = 0;


    document.addEventListener(
        "touchstart",
        event => {


            startX =
                event.touches[0].clientX;


        },
        {passive:true}
    );



    document.addEventListener(
        "touchend",
        event => {


            let endX =
                event.changedTouches[0].clientX;



            let distance =
                endX - startX;



            if(distance < -100){


                if(navigation){


                    navigation.classList.remove(
                        "active"
                    );


                }


            }


        },
        {passive:true}
    );





    /* ==========================================
       MOBILE SCREEN CHECK
    ========================================== */


    function mobileCheck(){


        if(window.innerWidth <= 900){


            document.body.classList.add(
                "mobile-device"
            );


        }else{


            document.body.classList.remove(
                "mobile-device"
            );


        }


    }



    mobileCheck();



    window.addEventListener(
        "resize",
        mobileCheck
    );



});

/* ==========================================================
   FRONT RANGE PHOTOGRAPHIC
   SCRIPT.JS

   MODULE 3A

   Scroll Engine
   Animated Counters
   Progress Bar
   Active Navigation
========================================================== */


document.addEventListener("DOMContentLoaded", () => {


    /* ==========================================
       SCROLL PROGRESS BAR
    ========================================== */


    const progress =
        document.createElement("div");


    progress.className =
        "scroll-progress";


    progress.style.position =
        "fixed";


    progress.style.top =
        "0";


    progress.style.left =
        "0";


    progress.style.height =
        "3px";


    progress.style.width =
        "0%";


    progress.style.background =
        "#d4a24c";


    progress.style.zIndex =
        "99999";


    progress.style.transition =
        "width .15s ease";



    document.body.appendChild(
        progress
    );



    function updateProgress(){


        const height =
            document.documentElement.scrollHeight -
            window.innerHeight;


        const progressAmount =
            (window.scrollY / height) * 100;



        progress.style.width =
            progressAmount + "%";


    }



    window.addEventListener(
        "scroll",
        updateProgress
    );





    /* ==========================================
       ACTIVE NAVIGATION TRACKER
    ========================================== */


    const sections =
        document.querySelectorAll(
            "section[id]"
        );


    const links =
        document.querySelectorAll(
            ".nav-menu a"
        );



    function updateActiveLink(){


        let current = "";



        sections.forEach(section => {


            const sectionTop =
                section.offsetTop - 150;



            const sectionHeight =
                section.offsetHeight;



            if(
                window.scrollY >= sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight
            ){

                current =
                    section.getAttribute(
                        "id"
                    );

            }


        });



        links.forEach(link => {


            link.classList.remove(
                "active"
            );



            const href =
                link.getAttribute(
                    "href"
                );



            if(
                href === "#" + current
            ){

                link.classList.add(
                    "active"
                );

            }


        });


    }



    window.addEventListener(
        "scroll",
        updateActiveLink
    );





    /* ==========================================
       ANIMATED NUMBER COUNTERS
    ========================================== */


    const counters =
        document.querySelectorAll(
            ".stat-number"
        );



    let counterStarted = false;



    function startCounters(){


        if(counterStarted)
            return;



        const trigger =
            window.innerHeight -
            100;



        counters.forEach(counter => {



            const position =
                counter.getBoundingClientRect()
                .top;



            if(position < trigger){


                counterStarted = true;



                animateCounter(
                    counter
                );


            }



        });


    }





    function animateCounter(element){



        let text =
            element.textContent;



        let number =
            parseInt(
                text.replace(/\D/g,"")
            );



        if(isNaN(number))
            return;



        let suffix =
            text.replace(
                /[0-9]/g,
                ""
            );



        let current = 0;



        let speed =
            number / 60;



        const timer =
            setInterval(()=>{



                current += speed;



                if(current >= number){


                    current = number;


                    clearInterval(
                        timer
                    );


                }



                element.textContent =
                    Math.floor(current)
                    + suffix;



            },20);


    }





    window.addEventListener(
        "scroll",
        startCounters
    );


    startCounters();





    /* ==========================================
       SMOOTH ANCHOR MOVEMENT
    ========================================== */


    document.querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(anchor => {


        anchor.addEventListener(
            "click",
            event => {



                const target =
                    document.querySelector(
                        anchor.getAttribute(
                            "href"
                        )
                    );



                if(target){


                    event.preventDefault();



                    target.scrollIntoView({

                        behavior:
                        "smooth",

                        block:
                        "start"

                    });


                }


            }
        );


    });





    /* ==========================================
       SECTION FADE OBSERVER
    ========================================== */


    const fadeItems =
        document.querySelectorAll(
            ".fade-in,.reveal"
        );



    const observer =
        new IntersectionObserver(
            entries => {


                entries.forEach(entry=>{


                    if(entry.isIntersecting){


                        entry.target.classList.add(
                            "visible"
                        );


                    }


                });



            },
            {

                threshold:.15

            }
        );



    fadeItems.forEach(item=>{


        observer.observe(
            item
        );


    });





    console.log(
        "Module 3A Loaded"
    );


});

/* ==========================================================
   FRONT RANGE PHOTOGRAPHIC
   SCRIPT.JS

   MODULE 4A

   Cinematic Effects
   Gold Particles
   Floating Light
   Mouse Interaction
========================================================== */


document.addEventListener("DOMContentLoaded", () => {



    /* ==========================================
       GOLD PARTICLE SYSTEM
    ========================================== */


    const particleContainer =
        document.createElement("div");


    particleContainer.className =
        "gold-particle-container";


    particleContainer.style.position =
        "fixed";


    particleContainer.style.inset =
        "0";


    particleContainer.style.pointerEvents =
        "none";


    particleContainer.style.overflow =
        "hidden";


    particleContainer.style.zIndex =
        "1";



    document.body.appendChild(
        particleContainer
    );





    function createParticle(){


        const particle =
            document.createElement("span");



        particle.className =
            "gold-particle";



        const size =
            Math.random()*5+2;



        particle.style.width =
            size+"px";


        particle.style.height =
            size+"px";



        particle.style.position =
            "absolute";



        particle.style.background =
            "#f0b45c";



        particle.style.borderRadius =
            "50%";



        particle.style.opacity =
            Math.random()*.7;



        particle.style.left =
            Math.random()*100+"%";



        particle.style.bottom =
            "-20px";



        particle.style.boxShadow =
            "0 0 15px #f0b45c";



        particleContainer.appendChild(
            particle
        );



        const duration =
            Math.random()*8+5;



        particle.animate(

            [

                {
                    transform:
                    "translateY(0)",
                    opacity:0
                },

                {
                    opacity:1
                },

                {
                    transform:
                    "translateY(-110vh)",
                    opacity:0
                }

            ],

            {

                duration:
                duration*1000,

                easing:
                "linear"

            }

        );



        setTimeout(()=>{


            particle.remove();


        },duration*1000);



    }





    setInterval(()=>{


        createParticle();


    },350);







    /* ==========================================
       MOUSE GOLD LIGHT EFFECT
    ========================================== */


    const light =
        document.createElement("div");



    light.className =
        "mouse-light";



    light.style.position =
        "fixed";



    light.style.width =
        "250px";



    light.style.height =
        "250px";



    light.style.borderRadius =
        "50%";



    light.style.pointerEvents =
        "none";



    light.style.background =
        "radial-gradient(circle, rgba(240,180,92,.18), transparent 70%)";



    light.style.transform =
        "translate(-50%,-50%)";



    light.style.zIndex =
        "0";



    document.body.appendChild(
        light
    );





    document.addEventListener(
        "mousemove",
        event=>{


            light.style.left =
                event.clientX+"px";


            light.style.top =
                event.clientY+"px";


        }
    );







    /* ==========================================
       CARD TILT EFFECT
    ========================================== */


    const cards =
        document.querySelectorAll(
            ".service-card,.price-card,.testimonial"
        );



    cards.forEach(card=>{



        card.addEventListener(
            "mousemove",
            event=>{


                const rect =
                    card.getBoundingClientRect();



                const x =
                    event.clientX -
                    rect.left;



                const y =
                    event.clientY -
                    rect.top;



                const rotateX =
                    ((y -
                    rect.height/2)
                    /20);



                const rotateY =
                    ((rect.width/2 -
                    x)
                    /20);



                card.style.transform =
                `
                perspective(800px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-8px)
                `;


            }
        );



        card.addEventListener(
            "mouseleave",
            ()=>{


                card.style.transform =
                "";


            }
        );



    });







    /* ==========================================
       MOBILE PERFORMANCE
    ========================================== */


    function checkDevice(){


        if(window.innerWidth < 700){


            particleContainer.style.display =
                "none";


            light.style.display =
                "none";


        }else{


            particleContainer.style.display =
                "block";


            light.style.display =
                "block";


        }


    }



    checkDevice();



    window.addEventListener(
        "resize",
        checkDevice
    );





    console.log(
        "Module 4A Loaded"
    );



});

/* ==========================================================
   FRONT RANGE PHOTOGRAPHIC
   SCRIPT.JS

   MODULE 5A

   Gallery System
   Image Viewer
   Premium Package Effects
========================================================== */


document.addEventListener("DOMContentLoaded", () => {



    /* ==========================================
       IMAGE LIGHTBOX SYSTEM
    ========================================== */


    const images =
        document.querySelectorAll(
            ".gallery img,.photo-card img"
        );



    const lightbox =
        document.createElement("div");



    lightbox.className =
        "image-lightbox";



    lightbox.style.position =
        "fixed";


    lightbox.style.inset =
        "0";


    lightbox.style.background =
        "rgba(0,0,0,.92)";


    lightbox.style.display =
        "none";


    lightbox.style.alignItems =
        "center";


    lightbox.style.justifyContent =
        "center";


    lightbox.style.zIndex =
        "99999";


    lightbox.style.cursor =
        "zoom-out";



    const lightboxImage =
        document.createElement("img");



    lightboxImage.style.maxWidth =
        "90%";


    lightboxImage.style.maxHeight =
        "90%";


    lightboxImage.style.objectFit =
        "contain";


    lightboxImage.style.boxShadow =
        "0 0 60px rgba(212,162,76,.5)";



    lightbox.appendChild(
        lightboxImage
    );


    document.body.appendChild(
        lightbox
    );





    images.forEach(image=>{


        image.style.cursor =
            "zoom-in";



        image.addEventListener(
            "click",
            ()=>{


                lightboxImage.src =
                    image.src;



                lightbox.style.display =
                    "flex";



                document.body.style.overflow =
                    "hidden";



            }
        );


    });





    lightbox.addEventListener(
        "click",
        ()=>{


            lightbox.style.display =
                "none";


            document.body.style.overflow =
                "";


        }
    );







    /* ==========================================
       ESCAPE CLOSE VIEWER
    ========================================== */


    document.addEventListener(
        "keydown",
        event=>{


            if(
                event.key === "Escape"
                &&
                lightbox.style.display==="flex"
            ){


                lightbox.style.display =
                    "none";


                document.body.style.overflow =
                    "";


            }


        }
    );








    /* ==========================================
       PREMIUM PACKAGE GLOW
    ========================================== */


    const premium =
        document.querySelector(
            ".premium,.package.premium"
        );



    if(premium){



        setInterval(()=>{



            premium.style.boxShadow =
            `
            0 0 35px
            rgba(212,162,76,.45)
            `;



            setTimeout(()=>{


                premium.style.boxShadow =
                    "";


            },1200);



        },3000);



    }







    /* ==========================================
       SERVICE CARD STAGGER ANIMATION
    ========================================== */


    const serviceCards =
        document.querySelectorAll(
            ".service-card"
        );



    serviceCards.forEach(
        (card,index)=>{


            card.style.transitionDelay =
                `${index*.15}s`;



        }
    );







    /* ==========================================
       BUTTON MAGNET EFFECT
    ========================================== */


    const buttons =
        document.querySelectorAll(
            ".gold-button,.primary-button,.package-button"
        );



    buttons.forEach(button=>{


        button.addEventListener(
            "mousemove",
            event=>{


                const rect =
                    button.getBoundingClientRect();



                const x =
                    event.clientX -
                    rect.left -
                    rect.width/2;



                const y =
                    event.clientY -
                    rect.top -
                    rect.height/2;



                button.style.transform =
                `
                translate(
                ${x*.15}px,
                ${y*.15}px
                )
                `;


            }
        );



        button.addEventListener(
            "mouseleave",
            ()=>{


                button.style.transform =
                    "";


            }
        );


    });







    console.log(
        "Module 5A Loaded"
    );



});

/* ==========================================================
   FRONT RANGE PHOTOGRAPHIC
   SCRIPT.JS

   MODULE 5B

   Before / After Slider
   Testimonials
   Contact Interactions
   Performance
========================================================== */


document.addEventListener("DOMContentLoaded", () => {



    /* ==========================================
       BEFORE / AFTER IMAGE SLIDER
    ========================================== */


    const sliders =
        document.querySelectorAll(
            ".before-after"
        );



    sliders.forEach(slider=>{


        const before =
            slider.querySelector(
                ".before-image"
            );


        const handle =
            slider.querySelector(
                ".slider-handle"
            );



        if(!before || !handle)
            return;



        function moveSlider(position){


            before.style.width =
                position + "%";



            handle.style.left =
                position + "%";


        }




        slider.addEventListener(
            "mousemove",
            event=>{


                const rect =
                    slider.getBoundingClientRect();



                let position =
                    ((event.clientX -
                    rect.left)
                    /
                    rect.width)
                    *100;



                position =
                    Math.max(
                        0,
                        Math.min(
                            100,
                            position
                        )
                    );



                moveSlider(
                    position
                );


            }
        );





        slider.addEventListener(
            "touchmove",
            event=>{


                const rect =
                    slider.getBoundingClientRect();



                let position =
                    ((event.touches[0].clientX -
                    rect.left)
                    /
                    rect.width)
                    *100;



                position =
                    Math.max(
                        0,
                        Math.min(
                            100,
                            position
                        )
                    );



                moveSlider(
                    position
                );


            },
            {
                passive:true
            }
        );


    });







    /* ==========================================
       TESTIMONIAL AUTO ROTATION
    ========================================== */


    const testimonials =
        document.querySelectorAll(
            ".testimonial"
        );



    let testimonialIndex =
        0;



    function rotateTestimonials(){


        if(testimonials.length < 2)
            return;



        testimonials.forEach(
            item=>{

                item.style.opacity =
                    ".35";

            }
        );



        testimonials[
            testimonialIndex
        ].style.opacity =
            "1";



        testimonialIndex++;



        if(
            testimonialIndex >=
            testimonials.length
        ){

            testimonialIndex = 0;

        }


    }



    if(testimonials.length){


        rotateTestimonials();



        setInterval(
            rotateTestimonials,
            4000
        );


    }







    /* ==========================================
       PHONE AND EMAIL TRACKING
    ========================================== */


    const contactButtons =
        document.querySelectorAll(
            'a[href^="tel:"],a[href^="mailto:"]'
        );



    contactButtons.forEach(button=>{


        button.addEventListener(
            "click",
            ()=>{


                console.log(
                    "Contact action:",
                    button.href
                );


            }
        );


    });







    /* ==========================================
       LAZY LOAD IMAGES
    ========================================== */


    const lazyImages =
        document.querySelectorAll(
            "img"
        );



    const imageObserver =
        new IntersectionObserver(
            entries=>{


                entries.forEach(
                    entry=>{


                        if(
                            entry.isIntersecting
                        ){


                            const image =
                                entry.target;



                            image.loading =
                                "lazy";



                            imageObserver.unobserve(
                                image
                            );


                        }


                    }
                );


            }
        );



    lazyImages.forEach(
        image=>{


            imageObserver.observe(
                image
            );


        }
    );







    /* ==========================================
       REDUCE EFFECTS ON SLOW DEVICES
    ========================================== */


    function performanceMode(){


        const memory =
            navigator.deviceMemory;



        if(memory && memory <= 4){



            document.body.classList.add(
                "low-performance"
            );



        }


    }



    performanceMode();







    console.log(
        "Module 5B Loaded"
    );



});

// ENTER SITE BUTTON FUNCTION

const enterButton = document.querySelector(".enter-site");
const introScreen = document.querySelector("#intro-screen");

if (enterButton && introScreen) {

    enterButton.addEventListener("click", function(){

        introScreen.style.opacity = "0";

        introScreen.style.transition = "1s ease";

        setTimeout(function(){

            introScreen.style.display = "none";

        },1000);

    });

}
