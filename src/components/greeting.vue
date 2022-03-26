<template>
    <p>{{ msg }}</p>
</template>

<script>
export default {
    name: 'newGreeting',
    data(){
        return {
            msg: 'Hello World!'
        }
    }
}
</script>

<style scoped lang="scss">
$color: red;
    p {
        color: $color;
    }
</style>
