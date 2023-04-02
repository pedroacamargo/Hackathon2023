fetch('/api/user/profile')
    .then(response => response.json())
    .then(data => {
        console.log(data.profilePicture)
        document.getElementById("profile-picture").src = data.profilePicture;
    });