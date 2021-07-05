<template>
    <div class="forecast-main-container">
        <Cloudiness class="icon-header" :active-icon="updateWeather" />
        <div class="main-info-container">
            <div class="sub-info">
                <div class="clouds-status">{{ updateWeather }}</div>
                <div class="max-min-status">{{ storeState.maxTemp + '/' + storeState.minTemp}}</div>
                <div class="city-location">{{ storeState.cityLocation }}</div>
            </div>
            <div class="main-info">
                <h1 class="temp-deg">{{storeState.temperature + '&deg;'}}</h1>
                <div class="date">
                    <h2 class="day">{{ displayDayName }}</h2>
                    <h2 class="day-month">{{ displayDay + '. ' + displayMonth }}</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Cloudiness from "../molecules/Cloudiness";
    import { store } from '../../store/store';

    export default {
        name: 'WeatherHeader',
        components: {
            Cloudiness
        },
        data() {
            return {
                storeState: store.state
            }
        },
        props: {
            weatherType: {
                type: String
            },
        },
        computed: {
            updateWeather() {
                return this.storeState.weatherType
            },
            displayDayName() {

                let day = [
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Saturday"
                ][new Date().getDay()];
                return day
            },
            displayMonth() {
                let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                let d = new Date();
                return months[d.getMonth()];
            },
            displayDay() {
                let date = new Date().getDate();
                if (date < 9 || date > 1) {
                    return '0' + date
                }
                return date
            }
        }
    }
</script>