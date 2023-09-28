const backButton = document.getElementById('back');
const touristButton = document.getElementById('btnTourist');
const foodButton = document.getElementById('btnFood');

backButton.addEventListener('click', ()=>{
    window.location.href = './homepage.html'
});

foodButton.addEventListener('click', ()=>{
    window.location.href = './food.html'
});

touristButton.addEventListener('click', ()=>{
    window.location.href = './tourist.html'
});

