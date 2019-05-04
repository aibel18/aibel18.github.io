Vue.component('res-com', {
  template:
    `
    <!--Section: research-->
      <section id="research" class="py-5" >

        <!-- Container -->
        <div class="container">
          <!-- Section heading -->
          <h2 class="h1-responsive font-weight-bold text-center mb-5">Research</h2>
          <!-- Section description -->

          <!-- Grid row -->
          <div class="row">

            <!-- Grid column -->
            <div class="col-lg-5 text-center">
              <img class="img-fluid" src="img/research.jpg" alt="Sample image" style="max-height:550px;padding-bottom: 10px;">
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
                <div class="col-xl-10 col-md-11 col-10" style=" animation-duration: 1.0s; animation-delay: 0.4s; animation-name: fadeInUp;">
                  <h5 class="font-weight-bold mb-3">Physics-Based Animation</h5>
                  <p style="text-align:justify">
                  An area that uses core mathematics, methods for computer animation and motion simulation permitting animating natural phenomena with high realism and perception. Physics-based simulation methods for modeling shape, motion, and behavior as: particle systems, constraints, rigid bodies, deformable models, collisions and contact, fluids, and fracture.
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
                <div class="col-xl-10 col-md-11 col-10" style=" animation-duration: 1.0s; animation-delay: 0.8s; animation-name: fadeInUp;">
                  <h5 class="font-weight-bold mb-3">Interaction Computer</h5>
                  <p style="text-align:justify">
                  Is a multidisciplinary area of research aimed at interactive computer-mediated immersive simulations focuses on the generation of images and animations at interactive frame rates,  then the user interactions must often involve sight and touch. This simulations involving a blending of real and virtual objects and has many applications like VR, AR, medical simulations, computer games or virtual prototyping
                  </p>
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
                <div class="col-xl-10 col-md-11 col-10" style=" animation-duration: 1.0s; animation-delay: 1.2s; animation-name: fadeInUp;">
                  <h5 class="font-weight-bold mb-3">Real-Time Rendering</h5>
                  <p style="text-align:justify">
                  Use and Development to algorithms and theoretical frameworks which enable the synthesis of images that previously were infeasible to render, with the challenge of that will be efficient and running in time-real, take advantaging of the potential in performant of the GPUs + CPUs.
                  </p>
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