const btn = document.querySelector("#random");

btn.addEventListener("click", () => {
  const random1 = Math.floor(Math.random() * 256);
  const random2 = Math.floor(Math.random() * 256);
  const random3 = Math.floor(Math.random() * 256);

  let h1 = (document.querySelector(
    "h1"
  ).innerHTML = `rgb(${random1}, ${random2}, ${random3})`);

  document.body.style.backgroundColor = h1;
});
