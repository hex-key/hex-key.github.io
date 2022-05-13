const notionDocId = "fbb70bb7f9024b72ba810205f020aa3d"

fetch("https://potion-api.now.sh/html?id=" + notionDocId)
  .then(res => res.text())
  .then(text => {
    document.querySelector("main").innerHTML = text
  })