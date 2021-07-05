<template>
    <div class="clouds-icon">
        <Component :is="activeIcon" />
    </div>
</template>

<script>
    import Clouds from "../atoms/Clouds";
    import Clear from "../atoms/Clear";

    export default {
        name: 'Cloudiness',
        components: {
            Clouds,
            Clear
        },
        props: {
            activeIcon: {
                type: String,
            }
        }
    }
</script>