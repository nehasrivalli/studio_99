// nav-bar

        // var prevScrollpos = window.pageYOffset;
        // window.onscroll = function () {
        //     var currentScrollPos = window.pageYOffset;
        //     if (prevScrollpos > currentScrollPos) {
        //         document.getElementById("navbar").style.top = "0";
        //     } else {
        //         document.getElementById("navbar").style.top = "-70px";
        //     }
        //     prevScrollpos = currentScrollPos;
        // }

        function v() {
            document.getElementById("booking-main").style.display = "flex"
            document.getElementById("booking").style.display = "flex"
            document.getElementById("body").style.overflowY = "hidden"
        }
        function r(){
            document.getElementById("booking-main").style.display = "none"
            document.getElementById("booking").style.display = "none"
            document.getElementById("body").style.overflowY = "scroll"
        }

let a = document.getElementById("booking-button")

a.addEventListener("click", function () {

    v()
})

let b = document.getElementById("booking-main")

b.addEventListener("click", function () {
    
    r()
})


// scroll
const observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry)=> {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
            
        } else {
            entry.target.classList.remove('show')
        }
    })
},{
    threshold: 0.5
    
})

const hiddenElements = document.querySelectorAll(".hidden-2 , .hidden-1 , .hidden-h1 , .hidden-divs");

hiddenElements.forEach((el) => observer.observe(el));