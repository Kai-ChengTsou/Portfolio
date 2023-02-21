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


const trialByFire = document.getElementById('trial-by-fire');
const readyToRob = document.getElementById('ready-to-rob');
const villageRevenger= document.getElementById('village-revenger');
const villageProtector = document.getElementById('village-protector');
const theDarkCave = document.getElementById('the-dark-cave');
const futureMision = document.getElementById('future-mission');

trialByFire.addEventListener('click', function() {
    document.querySelector(".active-btn").classList.remove("active-btn");
    this.classList.add("active-btn");
    document.querySelector(".active").classList.remove("active");
    document.getElementById(button.dataset.id).classList.add("active");
})

function projectControl(){
    const projectControl = document.querySelector(".controls2");
    projectControl.style.display =  'none';
}

function change(){
    document.querySelector(".controls2").style.display = 'block';
    document.querySelector(".controls").style.display = 'none';
    window.open('TrialByFire.html', '_self');
}

// viewMore.addEventListener('click', change);