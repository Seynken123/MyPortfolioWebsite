/* PAGE LOAD FADE */
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

/* PAGE TRANSITION */
document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function(e) {

        if (
            this.href &&
            !this.href.startsWith("mailto:") &&
            !this.href.includes("facebook.com") &&
            !this.href.includes("m.me")
        ) {

            e.preventDefault();

            document.body.classList.remove("loaded");

            setTimeout(() => {
                window.location = this.href;
            }, 500);
        }
    });
});

/* SMOOTH ROTATING TEXT */

const words = [
    "Creative Developer",
    "Gamer",
    "Mabini College Student",
];

let i = 0;

const text = document.getElementById("text");

/* ONLY RUN IF TEXT EXISTS */
if (text) {

    function changeText() {

        /* REMOVE SHOW */
        text.classList.remove("show");

        setTimeout(() => {

            /* CHANGE WORD */
            text.innerHTML = words[i];

            /* SHOW ANIMATION */
            text.classList.add("show");

            /* NEXT WORD */
            i = (i + 1) % words.length;

        }, 400);
    }

    /* INITIAL */
    changeText();

    /* LOOP */
    setInterval(changeText, 3000);
}

/* REALISTIC SKILL ANIMATION */

function animateSkill(skill, target) {

    const fill = skill.querySelector(".fill");
    const percent = skill.querySelector(".percent");

    let count = 0;

    /* RESET */
    fill.style.width = "0%";
    percent.innerHTML = "0%";

    /* ANIMATE BAR */
    setTimeout(() => {
        fill.style.width = target + "%";
    }, 100);

    /* ANIMATE NUMBER */
    const interval = setInterval(() => {

        if (count >= target) {

            clearInterval(interval);

        } else {

            count++;

            percent.innerHTML = count + "%";
        }

    }, 15);
}