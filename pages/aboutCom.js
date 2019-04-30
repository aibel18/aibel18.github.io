Vue.component('abo-com', {
  template:
    `
    <!--Section: about-->
      <section id="about" class="text-center py-5">

        <!-- Container -->
        <div class="container">

          <!-- Section heading -->
          <h2 class="h1-responsive font-weight-bold mb-5">About Me</h2>

          <!-- Carousel Wrapper -->
          <div id="carousel-example-1" class="carousel no-flex testimonial-carousel slide carousel-fade"
            data-ride="carousel" data-interval="false">
            <!--Slides-->
            <div class="carousel-inner" role="listbox">
              <!--First slide-->
              <div class="carousel-item active">
                <div class="testimonial">
                  <!--Avatar-->

                  <!--Content-->
                  <p style="width: 92%;margin: auto">
                    Hello, I research in Interactive computer graphics. My research interests include physically-based
                    simulation, real-time rendering, 3D reconstruction, GPU computing, processing images, virtual
                    reality.
                    Actually I am finishing my master in computer science at Federal University of Rio Grande do Sul..
                  </p><br />
                  <p style="width: 92%;margin: auto">
                    Hello, I research in Interactive computer graphics. My research interests include physically-based
                    simulation, real-time rendering, 3D reconstruction, GPU computing, processing images, virtual
                    reality.
                    Actually I am finishing my master in computer science at Federal University of Rio Grande do Sul..
                  </p>
                  <a class="btn btn-blue btn-sm waves-effect waves-light"><i class="fa fa-clone left"></i> Download
                    CV</a>
                </div>
              </div>
              <!--First slide-->
              <!--Second slide-->
              <div class="carousel-item">
                <div class="testimonial">
                  <!--Avatar-->

                  <!--Content-->
                  <p>
                    Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium.</p>
                  <h4 class="font-weight-bold">John Doe</h4>
                  <h6 class="font-weight-bold my-3">Front-end Developer in NY</h6>
                  <!--Review-->
                  <i class="fa fa-star amber-text"> </i>
                  <i class="fa fa-star amber-text"> </i>
                  <i class="fa fa-star amber-text"> </i>
                  <i class="fa fa-star amber-text"> </i>
                  <i class="fa fa-star-o amber-text"> </i>
                </div>
              </div>
              <!--Second slide-->
              <!--Third slide-->

              <div class="carousel-item">
                <div class="testimonial">
                  <div class="mh-education">
                    <h3 class="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s"
                      style="visibility: visible; animation-duration: 0.8s; animation-delay: 0.2s; animation-name: fadeInUp;">
                      Education</h3>
                    <div class="mh-education-deatils">
                      <!-- Education Institutes-->
                      <div class="mh-education-item dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s"
                        style="visibility: visible; animation-duration: 0.8s; animation-delay: 0.3s; animation-name: fadeInUp;">
                        <h4>Art &amp; Multimedia From <a href="">Oxford University</a></h4>
                        <div class="mh-eduyear">2005-2008</div>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a
                          page when looking at its layout. The point of using Lorem Ipsum </p>
                      </div>
                      <!-- Education Institutes-->
                      <div class="mh-education-item dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.5s"
                        style="visibility: visible; animation-duration: 0.8s; animation-delay: 0.5s; animation-name: fadeInUp;">
                        <h4>Art &amp; Multimedia From <a href="">Oxford University</a></h4>
                        <div class="mh-eduyear">2005-2008</div>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a
                          page when looking at its layout. The point of using Lorem Ipsum </p>
                      </div>
                      <!-- Education Institutes-->
                      <div class="mh-education-item dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.6s"
                        style="visibility: visible; animation-duration: 0.8s; animation-delay: 0.6s; animation-name: fadeInUp;">
                        <h4>Art &amp; Multimedia From <a href="">Oxford University</a></h4>
                        <div class="mh-eduyear">2005-2008</div>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a
                          page when looking at its layout. The point of using L orem Ipsum </p>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
              <!--Third slide-->
            </div>
            <!--Slides-->
            <!--Controls-->
            <a class="carousel-item-prev carousel-control" href="#carousel-example-1" role="button" data-slide="prev"
              style="left: 0;top: 45%;">
              <i class="fa fa-chevron-left"> </i>
            </a>
            <a class="carousel-item-next carousel-control" href="#carousel-example-1" role="button" data-slide="next"
              style="right: 0;top: 45%;">
              <i class="fa fa-chevron-right"> </i>
            </a>
            <!--Controls-->
          </div>
          <!-- Carousel Wrapper -->

        </div>
        <!-- Container -->

      </section>
      <!--Section: about-->
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