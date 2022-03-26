<template>
  <p>The user is {{ age }} years old</p>
</template>

<script>
export default {
    name: 'newUser',
    props: [
        "age"
    ]
}
</script>

<style>

</style>