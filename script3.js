// Fetch data from the API
fetch("https://newsapi.org/v2/everything?q=apple&from=2023-07-04&to=2023-07-04&sortBy=popularity&apiKey=f7d54802ae9d4e2eb6b90d6e456b63ee")
  .then(response => response.json())
  .then(data => {
    const articles = data.articles;
    const gridContainer = document.getElementById("gridContainer");

    // Loop through the articles and create grid items with images and content
    articles.forEach(article => {
      const gridItem = document.createElement("div");
      gridItem.classList.add("body-grid-item");

      const image = document.createElement("img");
      image.src = article.urlToImage;
      image.alt = article.title;
      gridItem.appendChild(image);

      const heading = document.createElement("h2");
      heading.textContent = article.title;
      gridItem.appendChild(heading);

      const paragraph = document.createElement("p");
      paragraph.textContent = article.description;
      gridItem.appendChild(paragraph);

      gridContainer.appendChild(gridItem);
    });
  })
  .catch(error => console.error("Error fetching data:", error));
