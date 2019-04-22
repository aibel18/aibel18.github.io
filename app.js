/// this archive has remplace for json send by server
import ServicesSie from './service.js'
import routerComp from './routerComp.js';

let routes = {
  "#": { name: "home", component: "hom-com", url: "./pages/homeCom.js" },
  "#repcaj": { name: "reporte caja", component: "rep-caj-com", url: "./pages/reportCajCom.js" },
  "#repven": { name: "reporte vendedor", component: "rep-ven-com", url: "./pages/reportVenCom.js" },
  "#repalm": { name: "reporte almacenero", component: "rep-alm-com", url: "./pages/reportAlmCom.js" },
  "#repadm": { name: "reporte administrador", component: "rep-adm-com", url: "./pages/reportAdmCom.js" }
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
    organization: "Materiales y Conecciones",
    version: "0.30",
    user: "administrador",
    menu: routes
  },
  computed: {
    service: function () {
      return new ServicesSie("/Empresa/rest", this);
    }
  },
  mounted: function () {
    setTimeout(() => {
      this.$refs.router.start();
    }, 200);
  },
  created: function () {
    //this.$refs.router.start();
  }
});





