fetch('/api/user/profile')
    .then(response => response.json())
    .then(data => {
        fetch('/static/uploads/' + data.profile_filename).then(response => {
            if (response.status == 200) {
                document.getElementById("profile-picture").src = '/static/uploads/' + data.profile_filename;
            }
        });
    });