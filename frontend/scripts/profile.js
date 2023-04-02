let loggedIn = null // we have to put the user ID here

const editBtn = document.getElementById("edit-profile")
let readOnly = true
const bio = document.getElementById("bioedit")
const editBioBtn = document.getElementById("edit-bio-btn")

/* if (loggedIn == user id of actual profile) {
    editBtn.style.display = "none";
}
*/

function editBio() {
    if (readOnly == true) {
        bio.removeAttribute("disabled")
        editBioBtn.innerHTML = '<i class="fa-solid fa-check" style="color: #33d17a;"></i> Confirm'
        readOnly = false
    } else {
        readOnly = true
        editBioBtn.innerHTML = '<i class="fa-solid fa-pencil pr-2"></i>Edit Bios'
        bio.setAttribute("disabled","")
    }
}

function editProfile() {
    window.location.href = "/edit-profile"
}