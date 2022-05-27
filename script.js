const settings = {
  async: true,
  crossDomain: true,
  url: "https://jikan1.p.rapidapi.com/top/anime/1/upcoming",
  method: "GET",
  headers: {
    "x-rapidapi-host": "jikan1.p.rapidapi.com",
    "x-rapidapi-key": "e4a6f3060dmsh6a2f4995a842c45p1f701djsnc35a5e98c0dd",
  },
};

$.ajax(settings).done(function (response) {
  console.log(response)
  for (let i = 0; i < response.top.length; i++) {
    const divMovie = document.createElement("div");
    divMovie.setAttribute("class", "Moviecontainer");
    divMovie.setAttribute("id", "movie" + i);

    const movieIMG = document.createElement("img");
    movieIMG.setAttribute("src", response.top[i].image_url);

    const movieTitle = document.createElement("h3");
    movieTitle.innerText = response.top[i].title;

    divMovie.appendChild(movieIMG);
    divMovie.appendChild(movieTitle);
    document.getElementById("main").appendChild(divMovie);
  }
});

const searchbutton = document.getElementById("search");
searchbutton.addEventListener("click", function () {
  var url = "https://jikan1.p.rapidapi.com/search/anime?q=";
  const valuex = document.getElementById("valuex").value;
  url += valuex;
  console.log(url)


  console.log(url)
  document.getElementById("main").remove()

  const createMain = document.createElement("div")
  createMain.setAttribute("id", "main")
  document.body.appendChild(createMain)

  const settings2 = {
    async: true,
    crossDomain: true,
    url: url,
    method: "GET",
    headers: {
      "x-rapidapi-host": "jikan1.p.rapidapi.com",
      "x-rapidapi-key": "e4a6f3060dmsh6a2f4995a842c45p1f701djsnc35a5e98c0dd",
    },
  };

  $.ajax(settings2).done(function (response) {

    for (let i = 0; i < response.results.length; i++) {
      const divMovie = document.createElement("div");
      divMovie.setAttribute("class", "Moviecontainer");
      divMovie.setAttribute("id", "movie" + i);

      const movieIMG = document.createElement("img");
      movieIMG.setAttribute("src", response.results[i].image_url);

      const movieTitle = document.createElement("h3");
      movieTitle.innerText = response.results[i].title;

      divMovie.appendChild(movieIMG);
      divMovie.appendChild(movieTitle);
      document.getElementById("main").appendChild(divMovie);
    }
  });
});
