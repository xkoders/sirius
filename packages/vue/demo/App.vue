<script setup lang="ts">
import ExamplePage from '../src/ExamplePage.vue'
import { Provider } from "../src/index";

</script>
<template>
    <Provider>
        <ExamplePage />
    </Provider>
</template>