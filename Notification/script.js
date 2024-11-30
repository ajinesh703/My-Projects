const notificationCard = document.getElementById('notificationCard');
const showBtn = document.getElementById('showBtn');
const closeBtn = document.getElementById('closeBtn');

showBtn.addEventListener('click', () => {
   notificationCard.classList.add('show');
   notificationCard.classList.remove('hide');
});

closeBtn.addEventListener('click', () => {
   notificationCard.classList.add('hide');
   notificationCard.classList.remove('show');
});
