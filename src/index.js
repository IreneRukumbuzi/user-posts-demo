function getUserPosts(id) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      let posts = json;
      console.log(posts);

      ul = document.createElement("ul");

      document.getElementById(id).appendChild(ul);

      posts.forEach(function (post) {
        let li = document.createElement("li");
        ul.appendChild(li);
        li.classList.add("posts-li");

        li.innerHTML += `<h4>${post.title} </h4>${post.body}`;
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
    console.log(users);

    ul = document.createElement("ul");

    document.getElementById("users").appendChild(ul);

    users.forEach(function (user) {
      let li = document.createElement("li");
      ul.appendChild(li);
      li.classList.add("user-li");

      li.innerHTML += `<div>Name:  ${user.name} </div>
      <div>Email:  ${user.email} </div>
      <div><button onclick=getUserPosts(${user.id})>Get ${user.name} 's Posts</button> </div>
      <div id="${user.id}" class="user-posts"></div>`;
    });
  })
  .catch(function (err) {
    console.log("Fetch problem: " + err.message);
  });
