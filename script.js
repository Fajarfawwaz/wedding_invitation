// INITIALIZE AOS
AOS.init({ duration: 1500, once: true });

// GUEST NAME FROM URL
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
if (params.to) {
    document.getElementById('guest-name').innerText = params.to;
}

// OPENING MECHANISM
function launchInvitation() {
    const overlay = document.getElementById('master-overlay');
    const musicBox = document.querySelector('.music-controller');
    const audio = document.getElementById('bg-audio');
    
    // Animate Overlay Out
    overlay.style.transform = "translateY(-100%)";
    overlay.style.opacity = "0";
    
    // Unlock Scroll
    document.body.classList.remove('is-locked');
    
    // Show & Play Music
    musicBox.classList.remove('hidden');
    audio.play().catch(() => console.log("User gesture required for audio"));
}

// MUSIC CONTROL
let isPlaying = true;
function handleMusic() {
    const audio = document.getElementById('bg-audio');
    const icon = document.getElementById('music-icon');
    
    if (isPlaying) {
        audio.pause();
        icon.classList.remove('disc-anim');
    } else {
        audio.play();
        icon.classList.add('disc-anim');
    }
    isPlaying = !isPlaying;
}

// SMOOTH PARALLAX EFFECT
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.parallax');
    if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});