// var listEl = document.querySelector('.list')


// for (i = 0; i < movies.length; i++){
//     var filmEl = document.createElement("div")
//     filmEl.setAttribute("class", "film")
//     filmEl.textContent = movies[i]. title
//     filmsEl.appendChild(filmEl)
// }




for (i = 0; i < movies.length; i++){
    var filmEl = document.createElement("div")
    filmEl.setAttribute("class", "film")
    
    var filmTitleEl = document.createElement("h2")

    var yearELSpan = document.createElement("span")

    var directorElement = document.createElement("h3")

    var actorsDivEl = document.createElement("div")

    var descriptionTextEL = document.createElement("p")

    var imageUrlEL = document.createElement("img")
    
    var genreDivEl = document.createElement("div")

    

    for(var j=0; j < movies[i].genres.length; j++){
        var genreItemEl = document.createElement("div")
        genreItemEl.textContent = movies[i].genres[j]
        genreDivEl.appendChild(genreItemEl)
    }
    imageUrlEL.srcset = movies[i].imageUrl
    filmEl.appendChild(imageUrlEL)

    filmTitleEl.textContent = movies[i].title
    filmEl.appendChild(filmTitleEl)

    filmEl.appendChild(genreDivEl)

    filmsEl.appendChild(filmEl)

    yearELSpan.textContent = movies[i].year
    filmEl.appendChild(yearELSpan)

    directorElement.textContent = movies[i].director
    filmEl.appendChild(directorElement)

    actorsDivEl.textContent = movies[i].actors
    filmEl.appendChild(actorsDivEl)

    descriptionTextEL.textContent = movies[i].description
    filmEl.appendChild(descriptionTextEL)



    
}