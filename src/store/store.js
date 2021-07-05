export const store = {
    state: {
        forecast: {
            id: null,
        },
        weatherType: 'Clear',
        temperature: 0,
        minTemp: null,
        maxTemp: null,
        cityLocation: 'Munich',
        time: null
    },
    setForecast(infoObj) {
        this.state.forecast = infoObj
    },

}