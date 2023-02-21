(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

// const sections = document.querySelectorAll('.section');
// const sectBtns = document.querySelectorAll('.controls');
// const sectBtn = document.querySelectorAll('.control');
// const allSections = document.querySelectorAll('.main-content');


// function PageTransitions(){
//     for(let i = 0; i < sectBtn.length; i++){
//         sectBtn[i].addEventListener('click', () =>{
//             let currentBtn = document.querySelectorAll('.active-btn');
//             currentBtn[0].className = currentBtn[0].className.replace('active.btn', '')
//             this.className += 'active-btn';
//         })
//     }
// }


const trialByFire = document.getElementById('trial-by-fire');
const readyToRob = document.getElementById('ready-to-rob');
const villageRevenger= document.getElementById('village-revenger');
const villageProtector = document.getElementById('village-protector');
const theDarkCave = document.getElementById('the-dark-cave');
const futureMision = document.getElementById('future-mission');
const viewMore = document.getElementsByClassName('btn-hover');
const trialbyfireClass = document.getElementsByClassName('TrialByFire')



function change() {
    window.open('TrialByFire.html', '_self');
}

trialByFire.addEventListener('click', change);