<template>
  <div class="nav">
    <div class="menu-icon" @click="showMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="nav--list">
      <router-link to="/" @click.native="showMenu">
        HOME
      </router-link>
      <router-link to="/documentary" @click.native="showMenu">
        DOCUMENTARY
      </router-link>
      <router-link to="/commercial" @click.native="showMenu">
        COMMERCIAL
      </router-link>
      <router-link to="/music" @click.native="showMenu">
        MUSIC
      </router-link>
      <router-link to="/art" @click.native="showMenu">
        ART
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showMenu: () => {
      const bars = document.querySelectorAll('.menu-icon span')
      const menu = document.querySelector('.nav--list')
      menu.classList.toggle('showing')
      Array.from(bars).forEach(b => b.classList.toggle('open'))
    },
  },
}
</script>

<style scoped lang="scss">
@import '../assets/_variables';
// general styling
.nav {
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;
  background-color: $white;
  height: 100vh;
  .menu-icon {
    position: fixed;
    z-index: 2;
    display: block;
    width: 36px;
    height: 28px;
    margin: 30px 30px 0 -30px;
    cursor: pointer;
    span {
      display: block;
      position: absolute;
      height: 3px;
      width: 100%;
      background: $white;
      border-radius: 2px;
      left: 0;
      transform-origin: right center;
      @include short-transition(0.1s);
      &.open {
        background-color: $darker-grey;
      }
      &:nth-child(1) {
        top: 0px;
        &.open {
          transform: rotate(-45deg);
          left: 6px;
        }
      }
      &:nth-child(2) {
        width: 75%;
        right: 0;
        left: unset;
        top: 12px;
        &.open {
          width: 0%;
          opacity: 0;
        }
      }
      &:nth-child(3) {
        top: 25px;
        &.open {
          transform: rotate(45deg);
          top: 25px;
          left: 6px;
        }
      }
    }
  }
  .nav--list {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    padding: 20vh 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    overflow: hidden;
    background-color: $white;
    visibility: hidden;
    opacity: 0;
    @include long-transition;
    a {
      font-family: 'Oswald', sans-serif;
      font-size: 4em;
      font-style: normal;
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: 0;
      text-decoration: none;
      color: $darker-grey;
      opacity: 0;
      transform: translateX(-20px);
      @include short-transition;
      &.router-link-exact-active {
        color: $accent;
      }
      @media (max-width: 768px) {
        font-size: 3em;
      }
    }
    &.showing {
      visibility: visible;
      opacity: 1;
      a {
        opacity: 1;
        transform: translateX(0);
        &:nth-child(1) {
          @include short-transition(0.2s);
        }
        &:nth-child(2) {
          @include short-transition(0.3s);
        }
        &:nth-child(3) {
          @include short-transition(0.4s);
        }
        &:nth-child(4) {
          @include short-transition(0.5s);
        }
        &:nth-child(5) {
          @include short-transition(0.6s);
        }
      }
    }
  }
}
</style>
