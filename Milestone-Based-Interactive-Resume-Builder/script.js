"use strict";
// input elements
let profilePic = document.querySelector("#profile-pic");
let inputFile = document.querySelector("#input-file");
let username = document.querySelector("#username");
let desig = document.querySelector("#designation");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let linkedin = document.querySelector("#linkedin");
let edu = document.querySelector("#education1");
let skill = document.querySelector("#skill1");
let exp = document.querySelector("#experience1");
// setting values
let setName = document.querySelector("#set-name");
let setDesig = document.querySelector("#set-desig");
let setEmail = document.querySelector("#set-email");
let setPhone = document.querySelector("#set-phone");
let setLinkedin = document.querySelector("#set-linkedin");
let setEdu = document.querySelector("#set-education");
let setSkill = document.querySelector("#set-skill1");
let setExp = document.querySelector("#set-experience");
let displayedProfilePic = document.querySelector("#displayed-profile-pic");
let btn = document.querySelector("#convert");
let uploadedProfilePicUrl = null;
inputFile.onchange = function () {
    if (inputFile.files && inputFile.files.length > 0) {
        uploadedProfilePicUrl = URL.createObjectURL(inputFile.files[0]);
        profilePic.src = uploadedProfilePicUrl;
    }
};
btn.addEventListener("click", function () {
    if (uploadedProfilePicUrl) {
        displayedProfilePic.src = uploadedProfilePicUrl;
    }
    else {
        displayedProfilePic.src = "images.png";
    }
    setName.innerText = username.value;
    setName.setAttribute("contenteditable", "true");
    setDesig.innerText = desig.value;
    setDesig.setAttribute("contenteditable", "true");
    setEmail.innerText = email.value;
    setEmail.setAttribute("contenteditable", "true");
    setPhone.innerText = phone.value;
    setPhone.setAttribute("contenteditable", "true");
    setLinkedin.innerText = linkedin.value;
    setLinkedin.setAttribute("contenteditable", "true");
    setEdu.innerText = edu.value;
    setEdu.setAttribute("contenteditable", "true");
    setSkill.innerText = skill.value;
    setSkill.setAttribute("contenteditable", "true");
    setExp.innerText = exp.value;
    setExp.setAttribute("contenteditable", "true");
});
// Toggle image Section
document
    .getElementById("toggleImage")
    ?.addEventListener("click", function () {
    const imageHide = document.getElementById("resume-profile-pic");
    if (imageHide && imageHide.style) {
        if (imageHide.style.display === "none") {
            imageHide.style.display = "block";
            this.textContent = "Hide Image";
        }
        else {
            imageHide.style.display = "none";
            this.textContent = "Show image";
        }
    }
    else {
        console.error("image element not found.");
    }
});
// Toggle Contact Section
document
    .getElementById("toggleContact")
    ?.addEventListener("click", function () {
    const contact = document.getElementById("contact");
    if (contact && contact.style) {
        if (contact.style.display === "none") {
            contact.style.display = "block";
            this.textContent = "Hide Contact";
        }
        else {
            contact.style.display = "none";
            this.textContent = "Show Contact";
        }
    }
    else {
        console.error("Contact element not found.");
    }
});
// Toggle Education Section
document
    .getElementById("toggleEducation")
    ?.addEventListener("click", function () {
    const education = document.getElementById("education");
    if (education && education.style) {
        if (education.style.display === "none") {
            education.style.display = "block";
            this.textContent = "Hide Education";
        }
        else {
            education.style.display = "none";
            this.textContent = "Show Education";
        }
    }
    else {
        console.error("Education element not found.");
    }
});
// Toggle Skills Section
document
    .getElementById("toggleSkills")
    ?.addEventListener("click", function () {
    const skills = document.getElementById("skills");
    if (skills && skills.style) {
        if (skills.style.display === "none") {
            skills.style.display = "block";
            this.textContent = "Hide Skills";
        }
        else {
            skills.style.display = "none";
            this.textContent = "Show Skills";
        }
    }
    else {
        console.error("Skills element not found.");
    }
});
// Toggle Experience Section
document
    .getElementById("toggleExperience")
    ?.addEventListener("click", function () {
    const experience = document.getElementById("experience");
    if (experience && experience.style) {
        if (experience.style.display === "none") {
            experience.style.display = "block";
            this.textContent = "Hide Experience";
        }
        else {
            experience.style.display = "none";
            this.textContent = "Show Experience";
        }
    }
    else {
        console.error("Experience element not found.");
    }
});
