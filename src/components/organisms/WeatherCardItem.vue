<template>
    <div class="forecast-card" @click="updateForecast">
        <div class="forecast-time">{{ forecastTime }}</div>
        <Cloudiness :active-icon="weatherType" :key="index"/>
        <div>{{ forecastDeg + '&deg;'}}</div>
    </div>
</template>

<script>
    import { store } from "@/store/store";
    import Cloudiness from "../molecules/Cloudiness";

    export default {
        name: 'WeatherCardItem',
        components: {
            Cloudiness
        },
        data() {
            return {
                storeState: store.state
            }
        },
        props: {
            index: {
                type: Number
            },
            weatherObject: {
                type: Object
            },
            timeStamp: {
                type: Number
            },
            temperatureObject: {
                type: Object
            }
        },
        computed: {
            weatherType() {
                return this.weatherObject[0].main
            },
            forecastTime() {
                return new Date(this.timeStamp).toTimeString().slice(3, 9);
            },
            forecastDeg() {
                return Math.round(this.temperatureObject['temp'] - 273.15 )
            }
        },
        methods:{
            updateForecast() {
                this.storeState.weatherType = this.weatherType
                this.storeState.temperature = this.forecastDeg
                this.storeState.time = this.timeStamp
                this.storeState.maxTemp = Math.round(this.temperatureObject['temp_max'] - 273.15)
                this.storeState.minTemp = Math.round(this.temperatureObject['temp_min'] - 273.15)
            }
        },
        mounted() {
            return this.index === 0 && this.updateForecast()
        }
    }
</script>