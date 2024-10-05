<template>
    <div>
      <Suspense>
        <template #default>
          <AsyncDataComponent />
        </template>
        <template #fallback>
          <p>Loading data...</p>
        </template>
      </Suspense>
    </div>
  </template>
  
  <script>
  const AsyncDataComponent = () => new Promise(resolve => {
    setTimeout(() => {
      resolve({
        template: `<div><p>Data loaded successfully!</p></div>`
      });
    }, 2000);
  });
  
  export default {
    components: {
      AsyncDataComponent
    }
  }
  </script>
  