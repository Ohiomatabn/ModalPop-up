const modal = document.querySelector('.modal')

document.querySelector('.open').addEventListener('click', ()=>{
  modal.setAttribute('style', 'margin-top: 5rem');
})

function closeModal(){
  modal.setAttribute('style', 'margin-top: -25rem');
}

document.querySelector('.close').addEventListener('click', closeModal)
document.querySelector('.close-btn').addEventListener('click', closeModal)