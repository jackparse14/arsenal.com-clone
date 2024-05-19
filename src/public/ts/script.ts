window.addEventListener("DOMContentLoaded", () => {
  const profileBtn = window.document.getElementById("profile-icon-bg");

  if (profileBtn === null) {
    console.error("Profile Button is NULL");
  } else {
    profileBtn.addEventListener("click", openLoginPopUp);
  }

  function openLoginPopUp() {
    console.log("clicked");
  }
});
