const today = new Date().toISOString().split('T')[0]

async function getAPOD() {

    try {

        const url = `${CONFIG.BASE_URL}/planetary/apod?api_key=${CONFIG.API_KEY}`

        const response = await fetch(url) 
        const data = await response.json()

        return data

    } catch (error) {

        console.log('Error fetching:', error)
        throw error
    }
    
}

async function getEPIC() {

    try {

        const url = `${CONFIG.BASE_URL}/EPIC/api/natural?api_key=${CONFIG.API_KEY}`

        const response = await fetch(url) 
        const data = await response.json()

        return data

    } catch (error) {

        console.log('Error fetching:', error)
        throw error
    }
    
}

async function getNEO() {

    try {

        const url = `${CONFIG.BASE_URL}/neo/rest/v1/feed?start_date${today}&end_date=${today}&api_key=${CONFIG.API_KEY}`

        const response = await fetch(url) 
        const data = await response.json()

        return data.near_earth_objects[today]

    } catch (error) {

        console.log('Error fetching:', error)
        throw error
    }
    
}
