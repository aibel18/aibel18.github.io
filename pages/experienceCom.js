Vue.component('exp-com', {
  template:
    `
    <!--Section: experience-->
    <main>
      <section id="experience" class="py-5">

        <!-- Container -->
        <div class="container">
          <!-- Section heading -->
          <h2 class="h1-responsive font-weight-bold text-center mb-5">Experience</h2>
          <!-- Section description -->

          <!-- Grid row -->
          <div class="row">

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
                  <h5 class="font-weight-bold mb-3">Systems Architect </h5>
                  <p class="grey-text" style="text-align:justify">
                  </p>
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
                  <h5 class="font-weight-bold mb-3">Web Developer</h5>
                  <p class="grey-text" style="text-align:justify">
                  </p>
                </div>
                <!-- Grid column -->

              </div>
              <!-- Grid row -->

            </div>
            <!--Grid column-->

            <!-- Grid column -->
            <div class="col-lg-5 text-center text-lg-right">
              <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/screens-section.jpg"
                alt="Sample image">
            </div>
            <!-- Grid column -->

          </div>
          <!-- Grid row -->

        </div>
        <!-- Container -->

      </section>
      <!--Section: experience-->
    </main>
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