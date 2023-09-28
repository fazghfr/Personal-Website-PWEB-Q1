const revealButton = document.getElementById('reveal');
const backButton = document.getElementById('back');
const collapseButton = document.getElementById('collapse');
const worksContainer = document.querySelector('.works-container');
const imageSection = document.querySelector('.circle-image');


revealButton.addEventListener('click', function() {
        if (worksContainer.style.display === 'none' || worksContainer.style.display === '') {
            worksContainer.style.display = 'flex';
        }

        worksContainer.scrollIntoView({ behavior: 'smooth' });
 });

backButton.addEventListener('click', ()=>{
    window.location.href= './homepage.html';
});

collapseButton.addEventListener('click', function() {
    imageSection.scrollIntoView({behavior : "smooth"});

    setTimeout(function() {
        if (worksContainer.style.display === 'flex') {
            worksContainer.style.display = 'none';
        }
    }, 750); 
});
