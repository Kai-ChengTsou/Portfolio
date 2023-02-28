(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
})();

const projectsBtn = document.getElementsByClassName('btn-hover')

const trialByFireBtn = document.getElementById('trialbyfire-btn');
const trialByFirePage = document.getElementById('TrialByFire');
const readyToRobBtn = document.getElementById('readytorob-btn');
const readyToRobPage = document.getElementById('ReadyToRob');
const villageRevengerBtn = document.getElementById('villagerevenger-btn');
const villageRevengerPage = document.getElementById('VillageRevenger');
const villageProtectorBtn = document.getElementById('villageprotector-btn');
const villageProtectorPage = document.getElementById('VillageProtector');
const theDarkCaveBtn = document.getElementById('thedarkcave-btn');
const theDarkCavePage = document.getElementById('TheDarkCave');
const futureMissionBtn = document.getElementById('futuremission-btn');
const futureMissionPage = document.getElementById('FutureMission');




trialByFireBtn.addEventListener('click', function(){
    document.querySelector(".active").classList.remove("active");
    trialByFirePage.classList.add('active');
    document.querySelector(".controls2").style.display = 'block';
    document.querySelector(".controls").style.display = 'none';
})
readyToRobBtn.addEventListener('click', function(){
    document.querySelector(".active").classList.remove("active");
    readyToRobPage.classList.add('active');
    document.querySelector(".controls2").style.display = 'block';
    document.querySelector(".controls").style.display = 'none';
    document.querySelector("#trial-by-fire-btn").classList.remove("active-btn");
    document.querySelector('#ready-to-rob-btn').classList.add("active-btn");
})
villageRevengerBtn.addEventListener('click', function(){
    document.querySelector(".active").classList.remove("active");
    villageRevengerPage.classList.add('active');
    document.querySelector(".controls2").style.display = 'block';
    document.querySelector(".controls").style.display = 'none';
    document.querySelector("#trial-by-fire-btn").classList.remove("active-btn");
    document.querySelector('#village-revenger-btn').classList.add("active-btn");
})
villageProtectorBtn.addEventListener('click', function(){
    document.querySelector(".active").classList.remove("active");
    villageProtectorPage.classList.add('active');
    document.querySelector(".controls2").style.display = 'block';
    document.querySelector(".controls").style.display = 'none';
    document.querySelector("#trial-by-fire-btn").classList.remove("active-btn");
    document.querySelector('#village-protector-btn').classList.add("active-btn");
})
theDarkCaveBtn.addEventListener('click', function(){
    document.querySelector(".active").classList.remove("active");
    theDarkCavePage.classList.add('active');
    document.querySelector(".controls2").style.display = 'block';
    document.querySelector(".controls").style.display = 'none';
    document.querySelector("#trial-by-fire-btn").classList.remove("active-btn");
    document.querySelector('#the-dark-cave-btn').classList.add("active-btn");
})
futureMissionBtn.addEventListener('click', function(){
    document.querySelector(".active").classList.remove("active");
    futureMissionPage.classList.add('active');
    document.querySelector(".controls2").style.display = 'block';
    document.querySelector(".controls").style.display = 'none';
    document.querySelector("#trial-by-fire-btn").classList.remove("active-btn");
    document.querySelector('#future-mission-btn').classList.add("active-btn");
})

