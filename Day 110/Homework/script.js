const form = document.querySelector('form');
const main = document.querySelector('main');

const renderInfo = (user) => {
  main.innerHTML = `
    <img src='${user.avatar_url}' width='300px'/>
    <h1>${user.name ? user.name : "Luka"}</h1>
    <p>Username: ${user.login}</p>
    <p>Bio: ${user.bio}</p>
    <p>Public Reps: ${user.public_repos}</p>
    <a href='${user.html_url}'>See More</a>
  `
}

const fetchInfo = async (username) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const user = await response.json();
    renderInfo(user);
  } catch(error) {
    console.log(`My code error: ${error}`)
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetchInfo(form.username.value);
})