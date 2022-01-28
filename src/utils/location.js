const locationMessage = (username,lat,lon) => {
    return{
        username,
        url: `https://google.com/maps?q=${lat},${lon}`,
        createdAt: new Date().getTime()
    }

}

module.exports = {
    locationMessage
}