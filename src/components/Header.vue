<template>
  <header>
      <Icon icon="menu" class="menu-button" @click="toggleNav"/>
      <div class="header__title">
        <h1>{{ header.title }}</h1>
        <div class="social-icons">
          <a href="https://github.com/alexhad6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="github"/>
          </a>
          <a href="https://www.linkedin.com/in/alexhadley/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="linkedin"/>
          </a>
          <a href="Resume.pdf"
            target="_blank"
          >
            <Icon icon="resume"/>
          </a>
          <a href="mailto:ahadley@g.hmc.edu"
          >
            <Icon icon="mail"/>
          </a>
        </div>
      </div>
      <nav class="expanded-nav">
        <a v-for="item in header.nav"
          :key="item.text"
          :href="item.link"
          class="nav-item"
        >
          {{ item.text }}
        </a>
      </nav>
      <div class="menu" v-show="showNav">
        <div class="menu__background" @click="toggleNav"></div>
        <nav class="menu__nav">
          <Icon icon="close" class="menu-button" @click="toggleNav"/>
          <a v-for="item in header.nav"
            :key="item.text"
            :href="item.link"
            class="nav-item"
            @click="toggleNav"
          >
            {{ item.text }}
          </a>
        </nav>
      </div>
  </header>
</template>

<script>
import Icon from '@/components/Icon.vue';

export default {
  name: 'Header',
  components: {
    Icon,
  },
  props: {
    header: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showNav: false,
    };
  },
  methods: {
    toggleNav() {
      this.showNav = !this.showNav;
      document.body.style.overflow = this.showNav ? 'hidden' : 'visible';
    },
  },
};
</script>

<style lang="scss">
header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: $header-padding;
  padding-bottom: $header-padding;

  h1 {
    margin: 0;
    margin-bottom: 0.5rem;
    font-family: $header-font;
    font-size: $header-font-size;
    font-weight: $header-font-weight;
    line-height: $header-line-height;
  }
}

.menu-button {
  width: $menu-icon-size;
  height: $menu-icon-size;
  position: absolute;
  top: $menu-button-top;
  left: $side-padding;
  cursor: pointer;
}

.nav-item {
  font-family: $header-font;
  font-size: $nav-font-size;
  font-weight: $header-font-weight;
  color: $nav-color;
  text-decoration: none;

  &:hover {
    color: $nav-hover;
  }
}

.header__title {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.social-icons {
  display: flex;
  align-items: center;

  a:not(:last-of-type) {
    margin-right: 0.75rem;
  }

  svg {
    width: 2rem;
    height: 2rem;

    &:hover {
      fill: $nav-hover;
    }
  }
}

.expanded-nav {
  display: none;

  .nav-item:not(:last-of-type) {
    margin-right: $expanded-nav-spacing;
  }
}

.menu {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

.menu__nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 14rem;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding-top: $menu-nav-top;
  padding-left: $side-padding;
  background-color: white;

  .nav-item:not(:last-of-type) {
    margin-bottom: $menu-nav-spacing;
  }
}

.menu__background {
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
}

@media only screen and (min-width: 851px) {
  header {
    justify-content: space-between;

    h1 {
      margin-right: 1rem;
    }
  }

  .header__title {
    flex-direction: row;
  }

  .menu-button {
    display: none;
  }

  .expanded-nav {
    display: block;
  }

  .menu {
    display: none;
  }
}
</style>
