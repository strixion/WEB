document.body.onload = MembersApp();

// название переменной = [ИМЯ ФАМИЛИЯ ДОЛЖНОСТЬ АДРЕС-КАРТИНКИ]

function MembersApp() {
    var member1 = ['Денис Астапенко', 'Фронтенд', "./images/member3.jpg"];
    var member2 = ['Родион Бушуев', 'Тим-лид', "./images/member1.png"];
    var member3 = ['Ксения Попкова', 'UX-UI дизайнер', "./images/member2.png"];
    var member4 = ['Дмитрий Елькин', 'Маркетолог', "./images/member5.jpeg"];
    var member5 = ['Руслан Маннанов', 'Бэкэнд', "./images/member4.png"];
    addMember.apply(null, member4)
    addMember.apply(null, member2);
    addMember.apply(null, member3);
    addMember.apply(null, member1);
    addMember.apply(null, member5);
}
function addMember(nme, imgg, rolee) 
{
    var div = document.createElement('div');
    div.setAttribute('class', 'team-member');
    div.setAttribute('data-name', nme);
    div.setAttribute('data-img', imgg);
    div.setAttribute('data-role', rolee);
    div.innerHTML = `
    <div class="card">
        <img src=${rolee} alt=${nme}/>
        <h3>${nme}</h3>
    </div>
    `;
    console.log(imgg);
    document.getElementById('people').appendChild(div);

}

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
      const imageSrc = member.getAttribute('data-role');
      const name = member.getAttribute('data-name');
      const role = member.getAttribute('data-img');
      openModal(imageSrc, name, role);
    });
  });

  