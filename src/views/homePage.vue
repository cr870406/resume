<script setup></script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6 d-none d-md-flex">
        <div class="circle">
          <div class="back"></div>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <h1 class="mt-3 mt-sm-0">Hello</h1>
        <h3 class="fs-4 mt-3 mt-sm-5">關於我</h3>
        <p class="lh-lg fw-light">
          您好，我是賴慕宇，今年25歲，畢業於醒吾科大的數位設計系，<br />
          對學習新知識抱有非常大的熱情，擅長與人溝通與傾聽他人需求，<br />
          具備找出問題、找到處理方式並解決問題的能力。
        </p>
        <div
          class="d-flex my-sm-3 justify-content-center justify-content-md-start"
        >
          <router-link to="/resume" class="text-decoration-none rounded-circle"
            ><span>Resume</span>
          </router-link>
        </div>
        <div class="col-12 d-md-none">
          <div class="mobile"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@mixin xl {
  @media (max-width: 1200px) {
    @content;
  }
}
@mixin md {
  @media (max-width: 820px) {
    @content;
  }
}
@mixin sm {
  @media (max-width: 667px) {
    @content;
  }
}
.container {
  padding-top: 8%;
  padding-bottom: 10%;
  @include md {
    padding-top: 30%;
    padding-bottom: 29%;
  }
  @include sm {
    padding-top: 8%;
  }

  .circle {
    width: 400px;
    height: 400px;
    margin: auto 0 auto auto;
    @include xl {
      width: 300px;
      height: 300px;
    }
    .back {
      background-image: url("../assets/S__38338720.jpg");
      background-position: top;
      background-size: cover;
      border-radius: 50%;
      width: 100%;
      height: 100%;
      @include xl {
        // width: 90%;
        // height: 90%;
      }
    }
  }

  .mobile {
    width: 300px;
    height: 300px;
    margin: 24px auto;
    border-radius: 50%;
    background-image: url("../assets/S__38338720.jpg");
    background-position: top;
    background-size: cover;
  }
  br {
    @include xl {
      display: none;
    }
  }

  h1 {
    font-size: 100px;
    font-weight: 600;
    @include xl {
      font-size: 40px;
    }
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border-radius: 999em;
    &:nth-child(1) {
      transition: 0.4s;
      color: #6096b4;
      border: 1.5px solid #6096b4;
      &:hover {
        background-color: #6096b4;
        color: #ffffff;
      }
    }
    &:nth-child(2) {
      transition: 0.4s;
      color: #93bfcf;
      border: 1.5px solid #93bfcf;
      &:hover {
        background-color: #93bfcf;
        color: #ffffff;
      }
    }
  }
}
</style>
