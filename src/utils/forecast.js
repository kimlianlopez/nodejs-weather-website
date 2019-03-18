const request = require('request')

const forecast = (lat, lng, callback) => {
    const url = `https://api.darksky.net/forecast/73fbe66857a91137ea5ea92eb7ac874e/${lat},${lng}?units=si`

    request({ url, json: true }, (error, response) => {
        const { error:responseErr, currently } = {} = response.body

        if (error) {
            callback('Unable to connect to weather services...', undefined)
        } else if (responseErr) {
            callback('Unable to find locations. Try another search...', undefined)
        } else {

            const { temperature:temp, precipProbability:rainChance, summary } = currently

            callback(undefined, {
                data: { temp,rainChance,summary },
                message: summary + '. It is currently ' + temp + ' degrees outside. There is a ' + rainChance + '% chance of rain.'
            })
        }
    })
}

module.exports = forecast