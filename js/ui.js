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

function showEPIC(data) {
    
    mainContent.innerHTML = '<h2>Earth from Space</h2>'
    
    const grid = document.createElement('div')
    grid.className = 'epic-grid'

    const images = data.slice(0, 12)

    images.map( img => {
        const card = document.createElement('div')
        card.className = 'epic-card'

        const date = img.date.split(' ')[0] // "2026-07-16"
        const datePath = date.split('-').join('/') // "2026/07/16"
        const imageUrl = `https://api.nasa.gov/EPIC/archive/natural/${datePath}/png/${img.image}.png?api_key=${CONFIG.API_KEY}`
       
        card.innerHTML = `
                <img src="${imageUrl}" alt="image" />
                <p>${img.date}</p>
        `

        grid.appendChild(card)
    })

    mainContent.appendChild(grid)

}

getEPIC().then(data => showEPIC(data))