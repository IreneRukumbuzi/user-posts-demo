function getUserPosts(id) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const button = document.getElementById("get-user-posts");
      button.disabled = true;
      let posts = json;

      ul = document.createElement("ul");

      document.getElementById(id).appendChild(ul);

      posts.forEach(function (post) {
        let li = document.createElement("li");
        ul.appendChild(li);
        li.classList.add("posts-li");

        li.innerHTML += `
        <div class="container">
          <article class="episode">
            <div class="episode__number">${post.id}</div>
              <div class="episode__content">
                  <div class="title">${post.title}</div>
                  <div class="story"><p>${post.body}</p></div>
              </div>
            </div>
          </article>
        </div>`;
      });
    })
    .catch(function (err) {
      console.log("Fetch problem: " + err.message);
    });
}

fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    let users = json;

    ul = document.createElement("ul");

    document.getElementById("users").appendChild(ul);

    users.forEach(function (user) {
      let li = document.createElement("li");
      ul.appendChild(li);
      li.classList.add("user-li");

      li.innerHTML += `
      <div id="one-user">
      <div id="first-div">
        <div id="user-details"> 
          <div id="user-name">${user.name}</div>  
          <div>${user.email} </div>
        </div>
      <div id="button-div"><button id="get-user-posts" onclick=getUserPosts(${user.id})>Get ${user.name} 's Posts</button> </div>
      </div>
      <div id="${user.id}" class="user-posts"></div>
      </div>`;
    });
  })
  .catch(function (err) {
    console.log("Fetch problem: " + err.message);
  });
