document.body.onload = randcol();
function randcol() {
  var_colors = ['#424242', '#626262', '525252', '#323232', '#727272', '#828282', '#474747'];
  card1 = document.getElementById('card1').style.backgroundColor = var_colors[(Math.floor(Math.random() * var_colors.length))];
  card2 = document.getElementById('card2').style.backgroundColor = var_colors[(Math.floor(Math.random() * var_colors.length))];
  card3 = document.getElementById('card3').style.backgroundColor = var_colors[(Math.floor(Math.random() * var_colors.length))];
  card4 = document.getElementById('card4').style.backgroundColor = var_colors[(Math.floor(Math.random() * var_colors.length))];
  card5 = document.getElementById('card5').style.backgroundColor = var_colors[(Math.floor(Math.random() * var_colors.length))];
}
window.addEventListener('scroll', () => {
  const features = document.querySelectorAll('.feature');
  const screenPosition = window.innerHeight / 1.3;

  features.forEach(feature => {
    const featurePosition = feature.getBoundingClientRect().top;
    if (featurePosition < screenPosition) {
      feature.classList.add('active');
    }
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const modal = document.getElementById('modal');
const closeModal = document.querySelector('.close');
const modalImage = document.getElementById('modal-image');
const modalName = document.getElementById('modal-name');
const modalRole = document.getElementById('modal-role');

function openModal(imageSrc, name, role) {
  modalImage.src = imageSrc;
  modalName.textContent = name;
  modalRole.textContent = role;
  modal.style.display = 'flex';
}

function closeModalFunction() {
  modal.style.display = 'none';
}

closeModal.addEventListener('click', closeModalFunction);

window.addEventListener('click', function(event) {
  if (event.target === modal) {
    closeModalFunction();
  }
});

document.querySelectorAll('.team-member').forEach(member => {
  member.addEventListener('click', () => {
    const imageSrc = member.getAttribute('data-img');
    const name = member.getAttribute('data-name');
    const role = member.getAttribute('data-role');
    openModal(imageSrc, name, role);
  });
});


const ctxLine = document.getElementById('lineChart').getContext('2d');
const lineChart = new Chart(ctxLine, {
  type: 'line',
  data: {
    labels: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июн'],
    datasets: [{
      label: 'Рост продаж',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
const ctxPie = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(ctxPie, {
  type: 'pie',
  data: {
    labels: ['Рекомендации блюд', 'Оптимизация запасов', 'Поддержка персонала'],
    datasets: [{
      label: 'Процент использования',
      data: [55, 25, 20],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(75, 192, 192, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
  }
});


const stats = document.querySelectorAll('.stat-number');
const speed = 200; // Скорость анимации

stats.forEach(stat => {
  const updateCount = () => {
    const target = +stat.getAttribute('data-target');
    const count = +stat.innerText;

    const increment = target / speed;

    if(count < target) {
      stat.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 10);
    } else {
      stat.innerText = target;
    }
  };
  updateCount();
});