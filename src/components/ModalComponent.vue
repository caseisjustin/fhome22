<template>
    <div class="modal-content">
      <h2>This is a Modal!</h2>
      <button @click="$emit('close')">Close</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ModalComponent'
  }
  </script>
  
  <style scoped>
  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
  }
  </style>
  