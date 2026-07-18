const mainContent = document.getElementById('main-content')

function showAPOD(data) {

    mainContent.innerHTML = ''

    const media = data.media_type === 'image'
        ? `<img src="${data.url}" alt="${data.title}" />`
        : `<iframe src="${data.url}" frameborder="0" allowfullscreen></iframe>`

    mainContent.innerHTML = `
        <div class="apod-container">
            <h2>${data.title}</h2>
            <p class="apod-date">${data.date}</p>
            ${media}
            <p class="apod-explanation">${data.explanation}</p>
        </div>
    `    

}

getAPOD().then(data => showAPOD(data))