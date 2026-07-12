document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // Intro
    // =========================

    const intro = document.getElementById("intro");
    const hero = document.querySelector(".hero");
    const menu = document.querySelector(".menu-panel");
    const music = document.getElementById("bg-music");

    intro.addEventListener("click", () => {

        intro.classList.add("hide");

        setTimeout(() => {

            hero.classList.add("show");
            menu.classList.add("show");

        }, 700);

            music.volume = 0.3;

            music.play().catch(() => {});
    });

    // =========================
    // Character Profile
    // =========================

    const profileBtn = document.getElementById("profile-btn");
    const profileModal = document.getElementById("profile-modal");
    const profileCloseBtn = document.querySelector(".profile-close");

    profileBtn.addEventListener("click", () => {

        profileModal.classList.add("active");

    });

    profileCloseBtn.addEventListener("click", () => {

        profileModal.classList.remove("active");

    });

    profileModal.addEventListener("click", (e) => {

        if (e.target === profileModal) {

            profileModal.classList.remove("active");

        }

    });
    // =========================
// Secret Reward
// =========================

const rewardBtn = document.getElementById("reward-btn");
const rewardModal = document.getElementById("reward-modal");
const rewardClose = document.querySelector(".reward-close");

rewardBtn.addEventListener("click", () => {

    rewardModal.classList.add("active");

});

rewardClose.addEventListener("click", () => {

    rewardModal.classList.remove("active");

    showToast();

});

rewardModal.addEventListener("click",(e)=>{

    if(e.target===rewardModal){

        rewardModal.classList.remove("active");

        showToast();

    }

});
    // =========================
    // Quest Modal
    // =========================

    const questBtn = document.getElementById("quest-btn");
    const questModal = document.getElementById("quest-modal");
    const questCloseBtn = document.querySelector(".quest-close");

    questBtn.addEventListener("click", () => {

        questModal.classList.add("active");

    });

    questCloseBtn.addEventListener("click", () => {

        questModal.classList.remove("active");

    });

    questModal.addEventListener("click", (e) => {

        if (e.target === questModal) {

            questModal.classList.remove("active");

        }

    });

    // =========================
    // Quest Data
    // =========================

    const quests = [

                {
            title: "How We Met",
            text: "This is how i found you❤️",
            images: [
                "img/q1-1.jpg",
                
                
            ]
        },

        {
            title: "Our Memories",
            text: "Some of the memories we have <3",
            images: [
                "img/q2-1.jpg",
                "img/q2-2.jpg",
                "img/q2-3.jpg",
                "img/q2-4.jpg",
                "img/q2-5.jpg"
            ]
        },

        {
            title: "Happy Birthday",
            text: "Happy Birthday my true king. love you so much❤️",
            images: [
                "img/q3-1.jpg"
            ]
        }

    ];
    quests.forEach(quest => {

    quest.images.forEach(src => {

        const img = new Image();

        img.src = src;

    });

});

    const questItems = document.querySelectorAll(".quest-item");

    const questTitle = document.getElementById("quest-title");
    const questText = document.getElementById("quest-text");
    const questImg = document.getElementById("quest-img");

    const prevImageBtn = document.getElementById("prev-image");
    const nextImageBtn = document.getElementById("next-image");

    let currentQuest = 0;
    let currentImage = 0;

    function updateImageNavigation() {

        const images = quests[currentQuest].images;

        if (images.length <= 1) {

            prevImageBtn.style.display = "none";
            nextImageBtn.style.display = "none";

        } else {

            prevImageBtn.style.display = "flex";
            nextImageBtn.style.display = "flex";

        }

    }

    questItems.forEach(item => {

        item.addEventListener("click", () => {

            questItems.forEach(q => q.classList.remove("active"));

            item.classList.add("active");

            currentQuest = Number(item.dataset.quest);
            currentImage = 0;

            questTitle.textContent = quests[currentQuest].title;
            questText.textContent = quests[currentQuest].text;
            questImg.src = quests[currentQuest].images[currentImage];

            updateImageNavigation();

        });

    });

    prevImageBtn.addEventListener("click", () => {

        const images = quests[currentQuest].images;

        currentImage--;

        if (currentImage < 0) {

            currentImage = images.length - 1;

        }

        questImg.src = images[currentImage];

    });

    nextImageBtn.addEventListener("click", () => {

        const images = quests[currentQuest].images;

        currentImage++;

        if (currentImage >= images.length) {

            currentImage = 0;

        }

        questImg.src = images[currentImage];

    });

    updateImageNavigation();

});
const particles = document.querySelector(".particles");

for(let i=0;i<35;i++){

    const p=document.createElement("span");

    p.style.left=Math.random()*100+"%";

    p.style.animationDuration=8+Math.random()*10+"s";

    p.style.animationDelay=Math.random()*8+"s";

    p.style.opacity=Math.random();

    particles.appendChild(p);

}
const bg=document.querySelector(".background");

document.addEventListener("mousemove",(e)=>{

    const x=(e.clientX/window.innerWidth-.5)*20;

    const y=(e.clientY/window.innerHeight-.5)*20;

    bg.style.transform=`translate(${x}px,${y}px)`;

});
function showToast(){

    const toast=document.getElementById("toast");

    toast.classList.add("show");

    setTimeout(()=>{

        toast.classList.remove("show");

    },3000);

}