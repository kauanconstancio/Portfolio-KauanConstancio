document.addEventListener('DOMContentLoaded', () => {
      const inputFile = document.querySelector(".imageInput");
      const pictureImage = document.querySelector(".picture__image");
      const pictureImageTxt = '<i class="fa-solid fa-plus"></i> Envie uma foto';
      pictureImage.innerHTML = pictureImageTxt;

      inputFile.addEventListener("change", function (e) {
        const file = e.target.files[0];
        if (file && file.type.startsWith("image/")) {
          const reader = new FileReader();
          reader.onload = (e) => {
            const img = document.createElement("img");
            img.src = e.target.result;
            img.classList.add("picture__img");
            pictureImage.innerHTML = "";
            pictureImage.appendChild(img);
          };
          reader.readAsDataURL(file);
        } else {
          pictureImage.innerHTML = pictureImageTxt;
        }
      });
    });