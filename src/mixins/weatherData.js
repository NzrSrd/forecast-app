import axios from "axios";
import { store } from "../store/store";

export const weatherDataMixin = {
    data() {
        return {
            loaded: false,
            timeStamp: null,
            forecast: [],
            storeState: store.state
        };
    },
    methods: {
        async getForecastData() {
            let cityLocation = 'München';
            let countryCode = 'DE';
            const url = `https://forward-weather-api.herokuapp.com/forecast?q=${cityLocation},${countryCode}&appid=${process.env.APP_ID}`

            const response = await axios
                .get(url)
                .then( response => {
                    this.forecast = response.data.list
                    store.setForcast(this.forecast[0])
                })
            return response
        }
    },
    mounted() {
        this.getForecastData()
    }
};