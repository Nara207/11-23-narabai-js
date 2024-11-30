function openModal() {
  const modal = document.querySelector(".modal");
  modal.classList.add('open');
  console.log(modal);
}

function closeModal() {
  const modal = document.querySelector(".modal");
  modal.classList.remove('open');
  console.log(modal);
}
async function deleteProfile(event, userId, token) {
  event.preventDefault();
  
    console.log(userId)
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${userId}`, {
        method: 'DELETE'
      });
      const deletedUsed = await response.json();
  
      alert(`Ваш профиль удален`);
      location.reload();
    } catch (error) {
      console.error('Ошибка:', error);
      return;
    }
}


function openMenu() {
  const modal = document.querySelector(".menu");
  modal.classList.add('openburger');
  console.log(menu)
}
function closeMenu() {
  const modal = document.querySelector(".menu");
  modal.classList.remove('openburger');
  console.log(menu)
}

function openPannel() {
  const pannel = document.querySelector('.pannel');
  pannel.classList.add('open');
}

function closePannel() {
  const pannel = document.querySelector('.pannel');
  pannel.classList.remove('open');
}


async function sendEmail(event) {
  event.preventDefault();

  const form = event.currentTarget;
  form.classList.add('red')
  try {
    const response = await fetch('https://fakestoreapi.com/product', {
      method: 'POST',
      body: JSON.stringify({
        email: form.email.value,
      }),
    });
    const result = await response.json();
    console.log(result);
  } catch {
    alert('Error!');
  }
}

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const modal = document.querySelector('#modal-1');
      document.body.style.overflow = 'hidden';
      modal.showModal();
      let counter = 7;
      const closeModalButton = document.querySelector('.close');
      const counterElement = document.querySelector('#counter');
      counterElement.innerHTML = counter;

      setInterval(() => {
        if (counter > 0) {
          counterElement.innerHTML = counter;
          counter--;
        } else {
          counterElement.parentElement.style.display = 'none';
          closeModalButton.style.cursor = 'pointer';

          closeModalButton.addEventListener('click', () => {
            modal.close();
            document.body.style.overflow = '';
          });
        }
      }, 1000);
    }
  });
}
const options = {
  rootMargin: '0px',
  threshold: 0,
}
const observer = new IntersectionObserver(callback, options);
observer.observe(document.querySelector('#features'))