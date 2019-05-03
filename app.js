/// this archive has remplace for json send by server
//import ServicesSie from './service.js'
import routerComp from './routerComp.js';

let routes = {
  "#": { name: "home", component: "hom-com", url: "./pages/homeCom.js" },
  "#about": { name: "About", component: "abo-com", url: "./pages/aboutCom.js" },
  "#research": { name: "Research", component: "res-com", url: "./pages/researchCom.js" },
  "#experience": { name: "Experience", component: "exp-com", url: "./pages/experienceCom.js" },
  "#publications": { name: "Publications", component: "pub-com", url: "./pages/publicationsCom.js" },
  "#appdata": { name: "App&Data", component: "app-com", url: "./pages/appCom.js" }
};
for (let v in routes) {

  import(routes[v].url)
    .then(module => {
      console.log(routes[v].name);
    })
    .catch(error => {
      console.log("SIE: [ERROR]: " + error);
    });
};

var app = new Vue({
  el: '#app',
  components: {
    'vt-router': routerComp
  },
  data: {
    block: false,
    menu: routes,
    menuSelect: String
  },
  computed: {
    /*service: function () {
      return new ServicesSie("/Empresa/rest", this);
    }*/
  },
  mounted: function () {
    setTimeout(() => {
      this.$refs.router.start();
    }, 400);
  },
  created: function () {
    //this.$refs.router.start();
  }
});


(function ($) {
  var SCROLLING_NAVBAR_OFFSET_TOP = 50;
  $(window).on('scroll', function () {
    var $navbar = $('.navbar');

    if ($navbar.length) {
      if ($navbar.offset().top > SCROLLING_NAVBAR_OFFSET_TOP) {
        $('.scrolling-navbar').addClass('top-nav-collapse');
      } else {
        $('.scrolling-navbar').removeClass('top-nav-collapse');
      }
    }
  });

  $(".navbar-toggler").on("click", function () {
    $("#navbarTogglerDemo").toggleClass("collapse");
  });

  $(".nav-link").on("click", function () {
    $("#navbarTogglerDemo").addClass("collapse");
  });




})(jQuery);





