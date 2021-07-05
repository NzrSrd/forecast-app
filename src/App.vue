<template>
    <div class="main">
        <section class="forecast-main">
            <WeatherHeader />
        </section>
        <section class="forecast-list">
            <WeatherCardItem
                v-for="(item, index) in forecast"
                :key="item.dt"
                :index="index"
                :weather-object="item['weather']"
                :time-stamp="item['dt']"
                :temperature-object="item['main']"
            />
        </section>
    </div>
</template>

<script>

    import { weatherDataMixin } from "./mixins/weatherData";
    import WeatherCardItem from "./components/organisms/WeatherCardItem.vue"
    import WeatherHeader from "./components/organisms/WeatherHeader.vue";

    export default {
        name: 'App',
        mixins: [ weatherDataMixin ],
        components: {
            WeatherHeader,
            WeatherCardItem
        },
    }
</script>

<style>
    @import "scss/_reset.scss";
    @import "scss/main.scss";
</style>
