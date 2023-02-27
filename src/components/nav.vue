<template>
  <header class="pt-4 pe-5 d-flex justify-content-end">
    <ul class="list-inline d-flex">
      <li>
        <a href="" class="text-decoration-none text-reset bar">Home</a>
      </li>
      <li>
        <router-link to="/resume" class="text-decoration-none text-reset"
          >Resume</router-link
        >
      </li>
    </ul>
  </header>
</template>

<style scoped lang="scss">
.bar {
  max-width: 100%;
  &::after {
    content: "";
    border-right: 1px solid black;
    margin: 0 16px;
  }
}
</style>
