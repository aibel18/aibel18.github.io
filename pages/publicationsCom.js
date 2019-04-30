Vue.component('pub-com', {
  template:
    `
    <!--Section: publications-->
      <section id="publications" class="text-center py-5" style="background-color: #eee;">

        <!-- Container -->
        <div class="container">

          <!-- Section heading -->
          <h2 class="h1-responsive font-weight-bold mb-5">Publications</h2>
          <!-- Section description -->
          <p class="grey-text w-responsive mx-auto mb-5">Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit est laborum.</p>

          <!-- Grid row -->
          <div class="row text-center">

            <!-- Grid column -->
            <div class="col-lg-4 col-md-12 mb-lg-0 mb-4">
              <!--Featured image-->
              <div class="view overlay rounded z-depth-1">
                <img src="https://mdbootstrap.com/img/Photos/Others/images/58.jpg" class="img-fluid"
                  alt="Sample project image">
                <a>
                  <div class="mask rgba-white-slight"></div>
                </a>
              </div>
              <!--Excerpt-->
              <div class="card-body pb-0">
                <h4 class="font-weight-bold my-3">Title of the news</h4>
                <p class="grey-text">Temporibus autem quibusdam et aut officiis debitis aut rerum
                  necessitatibus saepe eveniet ut et voluptates repudiandae.
                </p>
                <a class="btn btn-purple btn-sm"><i class="fa fa-clone left"></i> View project</a>
              </div>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-lg-4 col-md-6 mb-md-0 mb-4">
              <!--Featured image-->
              <div class="view overlay rounded z-depth-1">
                <img src="https://mdbootstrap.com/img/Photos/Others/project4.jpg" class="img-fluid"
                  alt="Sample project image">
                <a>
                  <div class="mask rgba-white-slight"></div>
                </a>
              </div>
              <!--Excerpt-->
              <div class="card-body pb-0">
                <h4 class="font-weight-bold my-3">Title of the news</h4>
                <p class="grey-text">Temporibus autem quibusdam et aut officiis debitis aut rerum
                  necessitatibus saepe eveniet ut et voluptates repudiandae.
                </p>
                <a class="btn btn-purple btn-sm"><i class="fa fa-clone left"></i> View project</a>
              </div>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-lg-4 col-md-6">
              <!--Featured image-->
              <div class="view overlay rounded z-depth-1">
                <img src="https://mdbootstrap.com/img/Photos/Others/images/88.jpg" class="img-fluid"
                  alt="Sample project image">
                <a>
                  <div class="mask rgba-white-slight"></div>
                </a>
              </div>
              <!--Excerpt-->
              <div class="card-body pb-0">
                <h4 class="font-weight-bold my-3">Title of the news</h4>
                <p class="grey-text">Temporibus autem quibusdam et aut officiis debitis aut rerum
                  necessitatibus saepe eveniet ut et voluptates repudiandae.
                </p>
                <a class="btn btn-purple btn-sm"><i class="fa fa-clone left"></i> View project</a>
              </div>
            </div>
            <!-- Grid column -->

          </div>
          <!-- Grid row -->

        </div>
        <!-- Container -->

      </section>
      <!--Section: publications-->
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