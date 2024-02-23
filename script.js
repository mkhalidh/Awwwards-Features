window.addEventListener("mousemove", function (move) {
  // jahan pr bhi mouse user move karega on browser then uski X and Y axis ki value get karliengea
  document.querySelector("#slidephoto").style.top = `${move.clientY}px`;
  document.querySelector("#slidephoto").style.left = `${move.clientX}px`;

  // Ab jo value get kari hai wahan pr ham chahtea hain hamara box bhi wahi rahe , simple user kea cursor pr hamara box rahe
  // ham transform translate use krtea hain for moving boxes

  // using formula to move boxes on cursor position accurately
  document.querySelector("#slidephoto").style.transform = `translate${
    -move.clientX * 0.21
  }px, ${-move.clientY * 0.45}px`;
});

// Changing images in box

document.querySelector("#chainn").addEventListener("mousemove", function () {
  // margin 0% kara hai of  all slide photos
  document.querySelector("#slidephotos").style.marginTop = "0%";
  // hover effect banaya hai of all elements

  // abhi jesi hi cursor jae ga then color turns into red
  document.querySelector("#chainn").style.color = "red";

  // but the problem is hamea wapis inital color mei bhi jana hai jeses mouse hatea
});

document.querySelector("#chainn").addEventListener("mouseleave", function () {
  // wapis usi color mei ajae ga
  document.querySelector("#chainn").style.color = "initial";
});

// x2

document.querySelector("#aty").addEventListener("mousemove", function () {
  // margin -160% for moving the image

  document.querySelector("#slidephotos").style.marginTop = "-160%";
  // hover effect banaya hai of all elements

  // abhi jesi hi cursor jae ga then color turns into red
  document.querySelector("#aty").style.color = "red";

  // but the problem is hamea wapis inital color mei bhi jana hai jeses mouse hatea
});

document.querySelector("#aty").addEventListener("mouseleave", function () {
  // wapis usi color mei ajae ga
  document.querySelector("#aty").style.color = "initial";
});

document.querySelector("#mic").addEventListener("mousemove", function () {
  // margin -320% kara hai of  all slide photos
  document.querySelector("#slidephotos").style.marginTop = "-320%";
  // hover effect banaya hai of all elements

  // abhi jesi hi cursor jae ga then color turns into red
  document.querySelector("#mic").style.color = "red";

  // but the problem is hamea wapis inital color mei bhi jana hai jeses mouse hatea
});

document.querySelector("#mic").addEventListener("mouseleave", function () {
  // wapis usi color mei ajae ga
  document.querySelector("#mic").style.color = "initial";
});

// eff div, image hat jae agr eff ki div sea bahar jahain

document.querySelector("#eff").addEventListener("mousemove", function () {
  document.querySelector("#slidephoto").style.display = "initial";
  document.querySelector("#slidephoto").style.opacity = 1;
});

document.querySelector("#eff").addEventListener("mouseleave", function () {
  document.querySelector("#slidephoto").style.display = "none";
  document.querySelector("#slidephoto").style.opacity = 0;
});

document.querySelector("#btns").addEventListener("mousemove", function () {
  // Creating hover effect on button
  document.querySelector("#btns").style.backgroundColor = "blue";
  document.querySelector("#btns").style.cursor = "pointer";
  document.querySelector("#btns h1").style.color = "white";
});

document.querySelector("#btns").addEventListener("mouseleave", function () {
  // taking back to initial values
  document.querySelector("#btns").style.backgroundColor = "initial";
  document.querySelector("#btns h1").style.color = "rgb(95,95,95)";
});
