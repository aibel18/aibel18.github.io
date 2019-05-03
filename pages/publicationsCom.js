Vue.component('pub-com', {
  template:
    `
    <!--Section: publications-->
    <main>
      <section id="publications" class="text-center py-5">

        <!-- Container -->
        <div class="container">

          <!-- Section heading -->
          <h2 class="h1-responsive font-weight-bold mb-5">Publications</h2>

          <!-- Grid row -->
          <div class="row">
            <!-- Grid column -->
            <div class="col-lg-4 text-center text-lg-left">
              <img class="img-fluid" src="img/papers/shifting.jpg" >
            </div>
            <!-- Grid column -->
            <div class="col-lg-8">
              <div style="text-align: left">
                <h6 >
                  Heat-based bidirectional phase shifting simulation using position-based dynamics
                </h6>
                <h6>Nov-2018</h6>              
                <h6 style="text-align: justify;font-size: 0.9rem;">
                  Phase-change phenomena are present in our daily life. Examples are the evaporation of a fluid when it reaches its boiling temperature, the condensation of water vapor in air due to the pressure changes or due to the difference of temperature in boundaries, and the melting of snow when winter is ending. Current development in physics-based animation allows the simulation of these phenomena, but an integrated solution for modeling bidirectional phase-shifting objects is not available for games and other virtual environments. In this work we present a temperature-based method that drives phase transition phenomena based on latent heat of materials using position-based dynamics (PBD). Modifications to density, viscosity and distance PBD constraints are proposed to simulate the necessary thermal phenomena. Results show that melting, fusion, evaporation, condensation, dilation and even convection effects can be obtained by modifying the original PBD constraints in function of latent heat.
                </h6>
                <p >Authors</p>
              </div>              
            </div>            
          </div>
          <hr style="border-top: 1px solid rgba(0,0,0,.2);"/>
          <div class="row">
            <!-- Grid column -->
            <div class="col-lg-4 text-center text-lg-left">
              <img class="img-fluid" src="img/papers/evaluation.jpeg" >
            </div>
            <!-- Grid column -->
            <div class="col-lg-8">
              <div style="text-align: left">
                <h6 >
                  Evaluation of Visual, Auditory and Vibro-Tactile Alerts in Supervised Interfaces
                </h6>
                <h6>Oct-2018</h6>              
                <h6 style="text-align: justify;font-size: 0.9rem;">
                  In teleoperation, particularly when controlling systems performing tasks that must be supervised for many hours, human users cannot keep a high level of attention all time. An open issue in the design of such interfaces is to help the user to maintain a situational awareness. In this paper, we compare three types of alert signals aiming to inform users about critical situations that require their full attention. Haptic, visual and auditory signals were assessed as pre-attention mechanisms for tasks in a camera-based supervisory interface scenario. Results show that haptic alerts, for long term supervision, are more effective than auditory and visual ones.
                </h6>
                <p >Authors</p>
              </div>              
            </div>            
          </div>
          <hr style="border-top: 1px solid rgba(0,0,0,.2);"/>
          <div class="row">
            <!-- Grid column -->
            <div class="col-lg-4 text-center text-lg-left">
              <img class="img-fluid" src="img/papers/3dathlon.jpg" >
            </div>
            <!-- Grid column -->
            <div class="col-lg-8">
              <div style="text-align: left">
                <h6 >
                  3DAthlon: 3D Gestural Interfaces to Support a 3-Stage Contest in VR
                </h6>
                <h6>Mar-2018</h6>              
                <h6 style="text-align: justify;font-size: 0.9rem;">
                  In the context of the 3DUI Contest promoted by the IEEE VR 2018, we propose 3D interaction techniques that address three distinct tasks in a virtual environment setup: climbing a ladder, controlling a quadcopter in a first-person view flight, and building a tower by stacking a series of objects. The interaction techniques were developed so the player, our 3D-athlete, has control over the events in each task, following metaphors that facilitate the use of the interface, and having status and spatial awareness supported by clear feedback cues. Thus, the player should be able to execute the tasks with precision and agility.
                </h6>
                <p >Authors</p>
              </div>              
            </div>            
          </div>
          <hr style="border-top: 1px solid rgba(0,0,0,.2);"/>
          
        </div>
      </section>
      
      <!--Section: publications-->
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