// Navigation logic
function navTo(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    
    // Trigger animations when screen becomes active
    if (screenId === 'letter') {
        setTimeout(() => typeLetter(), 500);
    }
}

// Welcome Popup
window.addEventListener('load', () => {
    const welcomePopup = document.getElementById('welcome-popup');
    welcomePopup.classList.add('active');
    
    welcomePopup.addEventListener('click', () => {
        welcomePopup.classList.remove('active');
    });
});

// Music logic
const audio = document.getElementById('bg-audio');
const musicBtn = document.getElementById('music-toggle');
const musicIcon = document.getElementById('music-icon');
let isPlaying = false;

musicBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        musicIcon.innerText = "🎵";
        showMusicPopup("Music Paused 😢");
    } else {
        audio.play();
        musicIcon.innerText = "⏸️";
        showMusicPopup("Playing Love Song 🎶❤️");
    }
    isPlaying = !isPlaying;
});

// Music Popup
function showMusicPopup(message) {
    // Remove existing music popup if any
    const existing = document.querySelector('.music-popup');
    if (existing) existing.remove();
    
    const popup = document.createElement('div');
    popup.className = 'music-popup';
    popup.innerHTML = `<div class="music-popup-content">${message}</div>`;
    document.body.appendChild(popup);
    
    setTimeout(() => {
        popup.classList.add('active');
    }, 10);
    
    setTimeout(() => {
        popup.classList.remove('active');
        setTimeout(() => popup.remove(), 300);
    }, 2000);
}

// Date Confirmation Popup
function sayYes() {
    const popup = document.getElementById('popup');
    popup.classList.add('active');
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('active');
}

// Background Heart Generator
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    
    document.getElementById('heart-bg').appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);

// Sparkle Generator
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.innerHTML = '✨';
    sparkle.style.left = Math.random() * 100 + 'vw';
    sparkle.style.animationDuration = (Math.random() * 2 + 3) + 's';
    sparkle.style.animationDelay = Math.random() * 2 + 's';
    
    document.getElementById('heart-bg').appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 6000);
}

setInterval(createSparkle, 800);

// Image Zoom Helper
function zoom(el) {
    el.style.transform = el.style.transform === 'scale(1.5)' ? 'scale(1)' : 'scale(1.5)';
    el.style.zIndex = el.style.zIndex === '10' ? '1' : '10';
    el.style.transition = '0.3s';
}

// Typing Animation for Letter
const letterText = "KAFI TIME HO GAYA HAI TUMHARE SATH AUR MENE KABHI NHI SOCHA THA KI HUM SATH HONGE AUR ITNA PYAR HOGA HAMARE BEECH. HAR SUBAH MUJHE TUMSE BAAT KARNA ITNA ACCHA LAGTA HAI, ESA LAGTA HAI KI HUM SATH ME HI HO. TUMHARE HONE KA EHSAAS HAMESHA MUJHE HOTA HAI CHAHE HUM JITNA BHI DOOR KYU NA HO. MUJHE PATA HAI TUMHE MERI BHUT JADHA YAAD AATI HAI BUT I PROMISE HAMARE BEECH KI YEH DOORIYA JALD HI KHATAM HOGI.";
let currentIndex = 0;

function typeLetter() {
    const letterElement = document.getElementById('letter-text');
    if (currentIndex < letterText.length) {
        letterElement.textContent += letterText.charAt(currentIndex);
        currentIndex++;
        setTimeout(typeLetter, 50); // Adjust speed here
    }
}