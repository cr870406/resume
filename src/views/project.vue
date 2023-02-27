<template>
  <div class="container pt-5">
    <div class="row">
      <div class="col-12 pb-5">
        <h1>作品</h1>
      </div>
      <div class="col-12 col-lg-6 pt-md-5">
        <h3>目木家具</h3>
        <p class="lh-lg pt-3">
          本身從事木工，如果能將自己做的商品以網路的方式讓大家知道會是一個很棒的行銷，<br />
          進而增加不同領域的人脈，提供了一個簡潔、現代化的介面，方便用戶查看和購買手工製作的家具。
          網站主頁展示了精選的家具系列，包括沙發、椅子、桌子等等。<br />
          此外，網站還有一個靈感頁面提供用戶找尋居家擺放的靈感。<br />
          目前正在規劃客製化設計選項，讓用戶可以按照自己的喜好和需求設計和定制家具。
        </p>
      </div>
      <div class="col-12 col-lg-6 pt-lg-5">
        <div class="back my-auto">
          <img src="../assets/messageImage_1676883918721.jpg" class="w-100" />
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
@mixin sm {
  @media (max-width: 576px) {
    @content;
  }
}
.back {
  width: 80%;
  @include xl {
    width: 100%;
  }
}
.container {
  margin-bottom: 330px;
}
br {
  @include xl {
    display: none;
  }
}
</style>
