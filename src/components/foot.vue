<template>
  <footer class="pt-4">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <ul
            class="list-inline d-sm-flex ms-3 ms-sm-0 justify-content-between align-items-center"
          >
            <li>
              <h6>Phone</h6>
              <p>0968656936</p>
            </li>
            <li>
              <h6>Email</h6>
              <p>cr870406@gmail.com</p>
            </li>
            <li class="mb-3">
              <h6>Follow Me</h6>
              <a
                href="https://github.com/cr870406"
                target="_blank"
                style="color: black"
              >
                <i class="fa-brands fa-github fa-xl"></i>
              </a>
            </li>
            <!-- <li class="opacity-0">
        <ul class="list-inline d-flex pe-5">
          <li>
            <a href="" class="text-decoration-none text-reset bar">Home</a>
          </li>
          <li>
            <router-link to="/resume" class="text-decoration-none text-reset"
              >Resume</router-link
            >
          </li>
        </ul>
      </li> -->
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  position: relative;
  &::after {
    content: "";
    border-top: 1.5px solid #bfc0c1;
    position: absolute;
    width: 100%;
    top: 0;
  }
}
.bar {
  &::after {
    content: "";
    border-right: 1px solid black;
    margin: 0 16px;
  }
}
</style>
