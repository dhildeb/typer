<template>
  <main class="container">
    <div class="circle-container" v-for="i in 100" :key="i">
      <div class="circle">
      </div>
    </div>
    <router-view />
    <iframe hidden src="https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1" title="lofi hip hop radio - beats to relax/study to" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </main>
</template>

<script>
import { computed } from 'vue'
import { useStore } from './Store'
import { router } from "./router"

export default {
  watch: {
    game(){
      if(this.game == 'game over'){
        router.push({name: 'Home'})
      }
    }
  },
  setup() {
    const store = useStore()
    return {
      game: computed(() => store.game)
    }
  },
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
* {
  margin: 0;
  padding: 0;
}

html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

body {
  background-color: #021027!important;
}

.container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.background {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;

  mask-image: radial-gradient(
    white 0%,
    white 30%,
    transparent 80%,
    transparent
  );
}

.circle-container {
  $particleNum: 200;
  $particleColor: hsl(180, 100%, 80%);

  position: absolute;
  transform: translateY(-10vh);
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  .circle {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    mix-blend-mode: screen;
    background-image: radial-gradient(
      hsl(180, 100%, 80%),
      hsl(180, 100%, 80%) 10%,
      hsla(180, 100%, 80%, 0) 56%
    );

    animation: fadein-frames 200ms infinite, scale-frames 2s infinite;

    @keyframes fade-frames {
      0% {
        opacity: 1;
      }

      50% {
        opacity: 0.7;
      }

      100% {
        opacity: 1;
      }
    }

    @keyframes scale-frames {
      0% {
        transform: scale3d(0.4, 0.4, 1);
      }

      50% {
        transform: scale3d(2.2, 2.2, 1);
      }

      100% {
        transform: scale3d(0.4, 0.4, 1);
      }
    }
  }

  $particleBaseSize: 8;

  
  @for $i from 1 through $particleNum {
    &:nth-child(#{$i}) {
      $circleSize: random($particleBaseSize);
      width: $circleSize + px;
      height: $circleSize + px;

      $startPositionY: random(10) + 100;
      $framesName: "move-frames-" + $i;
      $moveDuration: 28000 + random(9000) + ms;

      animation-name: #{$framesName};
      animation-duration: $moveDuration;
      animation-delay: random(37000) + ms;

      @keyframes #{$framesName} {
        from {
          transform: translate3d(
            #{random(100) + vw},
            #{$startPositionY + vh},
            0
          );
        }

        to {
          transform: translate3d(
            #{random(100) + vw},
            #{- $startPositionY - random(30) + vh},
            0
          );
        }
      }

      .circle {
        animation-delay: random(4000) + ms;
      }
    }
  }
}

.message {
  position: absolute;
  right: 20px;
  bottom: 10px;
  color: white;
  font-family: "Josefin Slab", serif;
  line-height: 27px;
  font-size: 18px;
  text-align: right;
  pointer-events: none;
  animation: message-frames 1.5s ease 5s forwards;
  opacity: 0;
  
  @keyframes message-frames {
    from {
      opacity: 0;
    }
    
    to {
      opacity: 1;
    }
  }
}
.button-73 {
  appearance: none;
  background-color: #FFFFFF;
  border-radius: 40em;
  border-style: none;
  box-shadow: #ADCFFF 0 -12px 6px inset;
  box-sizing: border-box;
  color: #000000;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: -.24px;
  margin: 0;
  outline: none;
  padding: 1rem 1.3rem;
  quotes: auto;
  text-align: center;
  text-decoration: none;
  transition: all .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}
</style>
