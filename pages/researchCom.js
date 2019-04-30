Vue.component('res-com', {
  template:
    `
    <!--Section: research-->
      <section id="research" class="py-5" style="background-color: #eee;">

        <!-- Container -->
        <div class="container">
          <!-- Section heading -->
          <h2 class="h1-responsive font-weight-bold text-center mb-5">Research</h2>
          <!-- Section description -->
          <p class="lead grey-text text-center w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet,
            consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad
            minim veniam.</p>

          <!-- Grid row -->
          <div class="row">

            <!-- Grid column -->
            <div class="col-lg-5 text-center text-lg-left">
              <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/screens-section.jpg"
                alt="Sample image">
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-lg-7">

              <!-- Grid row -->
              <div class="row mb-3">

                <!-- Grid column -->
                <div class="col-1">
                  <i class="fa fa-mail-forward fa-lg purple-text"></i>
                </div>
                <!-- Grid column -->

                <!-- Grid column -->
                <div class="col-xl-10 col-md-11 col-10">
                  <h5 class="font-weight-bold mb-3">Physics-based Animation</h5>
                  <p class="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit enim ad
                    minima veniam, quis nostrum exercitationem ullam. Reprehenderit maiores aperiam
                    assumenda deleniti hic.</p>
                </div>
                <!-- Grid column -->

              </div>
              <!-- Grid row -->

              <!-- Grid row -->
              <div class="row mb-3">

                <!-- Grid column -->
                <div class="col-1">
                  <i class="fa fa-mail-forward fa-lg purple-text"></i>
                </div>
                <!-- Grid column -->

                <!-- Grid column -->
                <div class="col-xl-10 col-md-11 col-10">
                  <h5 class="font-weight-bold mb-3">Human–computer interaction</h5>
                  <p class="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit enim ad
                    minima veniam, quis nostrum exercitationem ullam. Reprehenderit maiores aperiam
                    assumenda deleniti hic.</p>
                </div>
                <!-- Grid column -->

              </div>
              <!-- Grid row -->

              <!--Grid row-->
              <div class="row">

                <!-- Grid column -->
                <div class="col-1">
                  <i class="fa fa-mail-forward fa-lg purple-text"></i>
                </div>
                <!-- Grid column -->

                <!-- Grid column -->
                <div class="col-xl-10 col-md-11 col-10">
                  <h5 class="font-weight-bold mb-3">Real-Time Rendering</h5>
                  <p class="grey-text mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit enim
                    ad minima veniam, quis nostrum exercitationem ullam. Reprehenderit maiores aperiam
                    assumenda deleniti hic.</p>
                </div>
                <!-- Grid column -->

              </div>
              <!--Grid row-->

            </div>
            <!--Grid column-->

          </div>
          <!-- Grid row -->

        </div>
        <!-- Container -->

      </section>
      <!--Section: research-->
    `,
  data: function () {
    return {
      caja: {}
    }
  },
  methods: {
    loadData: function () {
      var self = this;
    }
  }/*,
  mounted: function () {
    console.log("load home");
  }*/
});