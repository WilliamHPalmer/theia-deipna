
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const captionText = document.getElementById('caption');
const closeBtn = document.getElementsByClassName('close')[0];

document.querySelectorAll('.photo img').forEach(img => {
  img.onclick = function() {
    modal.style.display = 'block';
    modalImg.src = this.src;
    captionText.innerText = this.parentElement.getAttribute('data-description');
  };
});

closeBtn.onclick = function() {
  modal.style.display = 'none';
};

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
