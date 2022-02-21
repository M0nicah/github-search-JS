const button = document.getElementById("btn");

button.addEventListener("click", async function (e) {
  e.preventDefault();
  

  const username = document.getElementById("username").value;

  const result = await fetch("https://api.github.com/users/" + username);
  const data = await result.json();

  document.getElementById("result").innerHTML = `

        <img class="mx-auto mt-5" src=${data.avatar_url}>
        <a href=${data.html_url};> Name: ${data.name}</a>
        <p> Github URL: ${data.url}
        <p> Followers: ${data.followers}</p>
        <p class="mb-5 pb-4"> Following: ${data.following}</p>
        <p class=> Public Repos: ${data.public_repos}</p>
        `;
  // document.getElementById("avatar").innerHTML = `${data.avatar_url}`;
});
