export default {

  data: function () {
    return {
      currentComponent: "",
      service: {},
      routes: {}
    }
  },
  mounted: function () {
    this.routes = this.$parent.menu;
    this.service = this.$parent.service;
  },
  methods: {
    start: function () {
      let self = this;
      console.log("init router");

      window.addEventListener('popstate', () => {
        if (window.location.hash === '') {
          self.currentComponent = self.routes["#"].component;
          self.$parent.menuSelect = "#";
          //console.log("page default: /");
        }
        else if (self.routes[window.location.hash]) {
          self.currentComponent = self.routes[window.location.hash].component;
          self.$parent.menuSelect = window.location.hash;
        }
        else {
          console.log("SIE [WARNING]: not have access to: " + window.location.hash);
        }
      });

      //      setTimeout(() => {
      if (window.location.hash === '' || !self.routes[window.location.hash]) {
        document.location.href = window.location.origin + window.location.pathname + "#";
        self.$parent.menuSelect = "#";
      }
      else {
        self.currentComponent = self.routes[window.location.hash].component;
        self.$parent.menuSelect = window.location.hash;
      }
      //    }, 300);
    }
  },
  template:
    "<component v-bind:is='currentComponent'></component>"
};

