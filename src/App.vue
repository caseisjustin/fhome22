<template>
  <div id="app">
    <h1>Vue Teleport, Suspense, and Router Example</h1>

    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/contacts">Contacts</router-link>
    </nav>

    <!-- Router View -->
    <router-view></router-view>

    <!-- Teleport Modal Example -->
    <button @click="showModal = true">Open Modal</button>

    <!-- Using teleport to place the modal outside #app -->
    <teleport to="body">
      <div v-if="showModal" class="modal">
        <ModalComponent @close="showModal = false" />
      </div>
    </teleport>
  </div>
</template>

<script>
import ModalComponent from './components/ModalComponent.vue'

export default {
  data() {
    return {
      showModal: false,
    }
  },
  components: {
    ModalComponent
  }
}
</script>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
