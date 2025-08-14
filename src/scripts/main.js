document.addEventListener("DOMContentLoaded", function(){
    console.log("DOM carregado");

    const avatarElement = document.querySelector('#avatar');
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const reposElement = document.querySelector('#repos');
    const linkElement = document.querySelector('#link');

    fetch('https://api.github.com/users/eliasdantas31')
    .then(function(res){
        return res.json();
    })
    .then(function(json){
        nameElement.innerHTML = json.name;
        usernameElement.innerHTML = json.login;
        avatarElement.src = json.avatar_url;
        followersElement.innerHTML = json.followers;
        followingElement.innerHTML = json.following;
        reposElement.innerHTML = json.public_repos;
        linkElement.href = json.html_url;
    })

    console.log(nameElement);
})