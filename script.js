const form = document.getElementById('postForm');
const feed = document.getElementById('feed');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const imageFile = document.getElementById('image').files[0];

  if (!imageFile) return;

  const imageURL = URL.createObjectURL(imageFile);

  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
    <img src="${imageURL}" alt="Publicación">
    <h3>${title}</h3>
    <p>${description}</p>
    <div class="like-section">
      ❤️ <span class="like-count">0</span> Me gusta
    </div>
  `;


  const likeSection = card.querySelector('.like-section');
  const likeCount = card.querySelector('.like-count');
  let liked = false;

  likeSection.addEventListener('click', () => {
    liked = !liked;
    likeSection.classList.toggle('liked', liked);
    likeCount.textContent = parseInt(likeCount.textContent) + (liked ? 1 : -1);
  });


  feed.prepend(card);

  form.reset();
});
