// Hobbies page: the FUNC SET button slides the camera left and shows the film strips
export function initHobbies() {
  const stage = document.querySelector(".hobbies-stage");

  if (stage) {
    const funcButton = stage.querySelector(".func-button");
    const screenText = stage.querySelector(".screen-text");
    const screenPhoto = stage.querySelector(".screen-photo");
    const filmPhotos = stage.querySelectorAll(".film-photo");

    funcButton.addEventListener("click", () => {
      stage.classList.toggle("opened");

      // Closing puts the camera screen back to its title
      if (!stage.classList.contains("opened")) {
        screenPhoto.classList.add("d-none");
        screenText.classList.remove("d-none");
        filmPhotos.forEach((p) => p.classList.remove("active"));
      }
    });

    // Clicking a photo on the film shows it on the camera screen
    filmPhotos.forEach((photo) => {
      photo.addEventListener("click", () => {
        const img = photo.querySelector("img");

        screenPhoto.src = img.src;
        screenPhoto.alt = img.alt;
        // Crop the screen the same way as the film photo (object-position set in the HTML)
        screenPhoto.style.objectPosition = img.style.objectPosition;
        screenPhoto.classList.remove("d-none");
        screenText.classList.add("d-none");

        filmPhotos.forEach((p) => p.classList.remove("active"));
        photo.classList.add("active");
      });
    });
  }
}
