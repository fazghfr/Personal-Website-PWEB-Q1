const profileButton = document.getElementById('btnProfile');
const hometownButton = document.getElementById('btnHometown');
const foodButton = document.getElementById('btnFood');
const touristButton = document.getElementById('btnTourist');

profileButton.addEventListener('click', ()=>{
    window.location.href= './profile.html';
});

hometownButton.addEventListener('click', ()=>{
    window.location.href= './hometown.html';
});

foodButton.addEventListener('click', ()=>{
    window.location.href = './food.html';
});

touristButton.addEventListener('click', ()=>{
    window.location.href = './tourist.html';
});