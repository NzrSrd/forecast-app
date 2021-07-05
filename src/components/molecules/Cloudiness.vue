<template>
    <div class="clouds-icon">
        <Component :is="activeIcon"
                   :dimension="dimension"
        />
    </div>
</template>

<script>
    import Clouds from "../atoms/Clouds";
    import Clear from "../atoms/Clear";
    import Rain from "../atoms/Rain";

    export default {
        name: 'Cloudiness',
        components: {
            Clouds,
            Clear,
            Rain
        },
        props: {
            activeIcon: {
                type: String,
            },
            dimension: {
                type: Number
            },
        }
    }
</script>