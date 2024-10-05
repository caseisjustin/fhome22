<template>
  <div>
    <h2>Welcome to the Home Page</h2>
    <SuspenseLoader />
  </div>
</template>

<script>
import SuspenseLoader from '../components/SuspenseLoader.vue';

export default {
  components: {
    SuspenseLoader
  }
}
</script>
