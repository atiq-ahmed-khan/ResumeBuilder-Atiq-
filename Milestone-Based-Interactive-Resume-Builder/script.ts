// input elements
let profilePic = document.querySelector("#profile-pic") as HTMLImageElement;
let inputFile = document.querySelector("#input-file") as HTMLInputElement;
let username = document.querySelector("#username") as HTMLInputElement;
let desig = document.querySelector("#designation") as HTMLInputElement;
let email = document.querySelector("#email") as HTMLInputElement;
let phone = document.querySelector("#phone") as HTMLInputElement;
let linkedin = document.querySelector("#linkedin") as HTMLInputElement;
let edu = document.querySelector("#education1") as HTMLInputElement;
let skill = document.querySelector("#skill1") as HTMLInputElement;
let exp = document.querySelector("#experience1") as HTMLInputElement;

// setting values
let setName = document.querySelector("#set-name") as HTMLElement;
let setDesig = document.querySelector("#set-desig") as HTMLElement;
let setEmail = document.querySelector("#set-email") as HTMLElement;
let setPhone = document.querySelector("#set-phone") as HTMLElement;
let setLinkedin = document.querySelector("#set-linkedin") as HTMLElement;
let setEdu = document.querySelector("#set-education") as HTMLElement;
let setSkill = document.querySelector("#set-skill1") as HTMLElement;
let setExp = document.querySelector("#set-experience") as HTMLElement;
let displayedProfilePic = document.querySelector(
  "#displayed-profile-pic"
) as HTMLImageElement;

let btn = document.querySelector("#convert") as HTMLButtonElement;

let uploadedProfilePicUrl: string | null = null;

inputFile.onchange = function () {
  if (inputFile.files && inputFile.files.length > 0) {
    uploadedProfilePicUrl = URL.createObjectURL(inputFile.files[0]);
    profilePic.src = uploadedProfilePicUrl;
  }
};

btn.addEventListener("click", function () {
  if (uploadedProfilePicUrl) {
    displayedProfilePic.src = uploadedProfilePicUrl;
  } else {
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
  ?.addEventListener("click", function (this: HTMLButtonElement) {
    const imageHide = document.getElementById("resume-profile-pic");

    if (imageHide && imageHide.style) {
      if (imageHide.style.display === "none") {
        imageHide.style.display = "block";
        this.textContent = "Hide Image";
      } else {
        imageHide.style.display = "none";
        this.textContent = "Show image";
      }
    } else {
      console.error("image element not found.");
    }
  });

// Toggle Contact Section
document
  .getElementById("toggleContact")
  ?.addEventListener("click", function (this: HTMLButtonElement) {
    const contact = document.getElementById("contact");

    if (contact && contact.style) {
      if (contact.style.display === "none") {
        contact.style.display = "block";
        this.textContent = "Hide Contact";
      } else {
        contact.style.display = "none";
        this.textContent = "Show Contact";
      }
    } else {
      console.error("Contact element not found.");
    }
  });

// Toggle Education Section
document
  .getElementById("toggleEducation")
  ?.addEventListener("click", function (this: HTMLButtonElement) {
    const education = document.getElementById("education");

    if (education && education.style) {
      if (education.style.display === "none") {
        education.style.display = "block";
        this.textContent = "Hide Education";
      } else {
        education.style.display = "none";
        this.textContent = "Show Education";
      }
    } else {
      console.error("Education element not found.");
    }
  });

// Toggle Skills Section
document
  .getElementById("toggleSkills")
  ?.addEventListener("click", function (this: HTMLButtonElement) {
    const skills = document.getElementById("skills");

    if (skills && skills.style) {
      if (skills.style.display === "none") {
        skills.style.display = "block";
        this.textContent = "Hide Skills";
      } else {
        skills.style.display = "none";
        this.textContent = "Show Skills";
      }
    } else {
      console.error("Skills element not found.");
    }
  });

// Toggle Experience Section
document
  .getElementById("toggleExperience")
  ?.addEventListener("click", function (this: HTMLButtonElement) {
    const experience = document.getElementById("experience");

    if (experience && experience.style) {
      if (experience.style.display === "none") {
        experience.style.display = "block";
        this.textContent = "Hide Experience";
      } else {
        experience.style.display = "none";
        this.textContent = "Show Experience";
      }
    } else {
      console.error("Experience element not found.");
    }
  });
