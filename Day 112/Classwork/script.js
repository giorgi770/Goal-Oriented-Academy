let posts = [];

// API-დან პოსტების წამოღება და ფილტრების რენდერება
document.addEventListener('DOMContentLoaded', () => {
  fetch('https://dummyjson.com/posts')
    .then(response => response.json())
    .then(data => {
      posts = data.posts;
      renderPosts(posts);
      renderTagFilters();
    })
    .catch(error => console.error('Error fetching posts:', error));
});

// პოსტების რენდერება
function renderPosts(postsToRender) {
  const newsFeedContainer = document.getElementById('news-feed');
  newsFeedContainer.innerHTML = '';  

  postsToRender.forEach(post => {
    const postElement = document.createElement('div');
    postElement.className = 'post';
    postElement.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.body}</p>
      <p><strong>Tags:</strong> ${post.tags.join(', ')}</p>
    `;
    newsFeedContainer.appendChild(postElement);
  });
}

// ტეგების ფილტრების რენდერება
function renderTagFilters() {
  const tagFilters = document.getElementById('tagFilters');
  const uniqueTags = [...new Set(posts.flatMap(post => post.tags))];

  uniqueTags.forEach(tag => {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = tag;
    checkbox.onchange = filterPosts;
    const label = document.createElement('label');
    label.appendChild(checkbox);
    label.append(` ${tag}`);
    tagFilters.appendChild(label);
  });
}

// სორტირება სათაურის მიხედვით
function sortPosts() {
  const sortedPosts = [...posts].sort((a, b) => a.title.localeCompare(b.title));
  renderPosts(sortedPosts);
}

// პოსტების ფილტრაცია
function filterPosts() {
  const titleQuery = document.getElementById('searchTitle').value.toLowerCase();
  const checkedTags = Array.from(document.querySelectorAll('#tagFilters input:checked')).map(input => input.value);

  const filteredPosts = posts.filter(post => {
    const titleMatch = post.title.toLowerCase().includes(titleQuery);
    const tagMatch = checkedTags.length === 0 || checkedTags.every(tag => post.tags.includes(tag));
    return titleMatch && tagMatch;
  });

  renderPosts(filteredPosts);
}

// სექციის ჩვენება
function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(section => {
    section.style.display = 'none';
  });
  document.getElementById(sectionId).style.display = 'block';
}

// რეგისტრაციის ფორმის დამუშავება
document.getElementById('registrationForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('reg-username').value;
  const password = document.getElementById('reg-password').value;
  console.log('Registered:', { username, password });
  alert('Registration successful!');
});

// ავტორიზაციის ფორმის დამუშავება
document.getElementById('authorizationForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('auth-username').value;
  const password = document.getElementById('auth-password').value;
  console.log('Logged in:', { username, password });
  alert('Login successful!');
});
