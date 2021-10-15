const form = document.querySelector("#searchForm");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const userSearchTerm = form.elements.query.value;
  const response = await axios.get(
    `https://api.tvmaze.com/search/shows?q=${userSearchTerm}`
  );
  console.log(response.data);

  makeImages(response.data);
  form.elements.query.value = "";
});

const makeImages = (shows) => {
  for (let result of shows) {
    if (result.show.image && result.show.rating.average > 4) {
      const img = document.createElement("IMG");
      img.src = result.show.image.medium;
      document.body.append(img);
      document.body.append("Show: ", result.show.name);
      document.body.append(" Rating: ", result.show.rating.average);
    }
  }
};
