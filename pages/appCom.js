Vue.component('app-com', {
  template:
    `
    <!--Section: App-->
      <section id="appdata" class="text-center py-5">

        <!-- Container -->
        <div class="container">

          <!-- Section heading -->
          <h2 class="h1-responsive font-weight-bold mb-5">App</h2>
          <p class="grey-text w-responsive mx-auto mb-5">Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit est laborum.</p>

          <!--Grid row-->
          <div class="row">

            <!--Grid column-->
            <div class="col-lg-4 col-md-12 mb-4">

              <!-- Card Narrower -->
              <div class="card card-cascade narrower">

                <!-- Card image -->
                <div class="view view-cascade">
                  <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg"
                    alt="Card image cap">
                  <a>
                    <div class="mask img-gradient"></div>
                  </a>
                </div>

                <!-- Card content -->
                <div class="card-body card-body-cascade">

                  <!-- Label -->
                  <h5 class="pink-text pb-2 pt-1"><i class="fa fa-cutlery"></i> Culinary</h5>
                  <!-- Title -->
                  <h4 class="font-weight-bold card-title">Cheat day inspirations</h4>
                  <!-- Text -->
                  <p class="card-text">Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</p>
                  <!-- Button -->
                  <a class="btn btn-unique">Button</a>

                </div>

              </div>
              <!-- Card Narrower -->

            </div>
            <!--Grid column-->

            <!--Grid column-->
            <div class="col-lg-4 col-md-6 mb-4">

              <!-- Card Narrower -->
              <div class="card card-cascade narrower">

                <!-- Card image -->
                <div class="view view-cascade">
                  <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg"
                    alt="Card image cap">
                  <a>
                    <div class="mask img-gradient"></div>
                  </a>
                </div>

                <!-- Card content -->
                <div class="card-body card-body-cascade">

                  <!-- Label -->
                  <h5 class="pink-text pb-2 pt-1"><i class="fa fa-cutlery"></i> Culinary</h5>
                  <!-- Title -->
                  <h4 class="font-weight-bold card-title">Cheat day inspirations</h4>
                  <!-- Text -->
                  <p class="card-text">Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</p>
                  <!-- Button -->
                  <a class="btn btn-unique">Button</a>

                </div>

              </div>
              <!-- Card Narrower -->

            </div>
            <!--Grid column-->

            <!--Grid column-->
            <div class="col-lg-4 col-md-6 mb-4">

              <!-- Card Narrower -->
              <div class="card card-cascade narrower">

                <!-- Card image -->
                <div class="view view-cascade">
                  <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg"
                    alt="Card image cap">
                  <a>
                    <div class="mask img-gradient"></div>
                  </a>
                </div>

                <!-- Card content -->
                <div class="card-body card-body-cascade">

                  <!-- Label -->
                  <h5 class="pink-text pb-2 pt-1"><i class="fa fa-cutlery"></i> Culinary</h5>
                  <!-- Title -->
                  <h4 class="font-weight-bold card-title">Cheat day inspirations</h4>
                  <!-- Text -->
                  <p class="card-text">Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</p>
                  <!-- Button -->
                  <a class="btn btn-unique">Button</a>

                </div>

              </div>
              <!-- Card Narrower -->

            </div>
            <!--Grid column-->

          </div>
          <!--Grid row-->

        </div>
        <!-- Container -->

      </section>
      <!--Section: projects-->
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