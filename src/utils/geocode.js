const request = require('request')

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?limit=1&access_token=pk.eyJ1Ijoia2xpYW5sb3BleiIsImEiOiJjanQ3YzBnNncwcWQ4NDlyMXJyNzYxa2RhIn0.jYxRvzkfyZRjyPTb-lnBbw&limit=1`

    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to location services...', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search...', undefined)
        } else {
            callback(undefined, {
                lat: body.features[0].center[1],
                lng: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
        // console.log(body.features)
    })
}

module.exports = geocode