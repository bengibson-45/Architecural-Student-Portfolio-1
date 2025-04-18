import "./style.css";
import data from "./data/data";
import { createThreeScene } from "./threeScene";

const cubes = [
  "./cubeDrawings/cube1.webp",
  "./cubeDrawings/cube2.webp",
  "./cubeDrawings/cube3.webp",
];

const trees = [
  "./treeDrawings/tree1.jpg",
  "./treeDrawings/tree2.jpg",
  "./treeDrawings/tree3.jpg",
  "./treeDrawings/tree4.jpg",
];

document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
    </section>
    <section id="projects">
      <div id="project-row">
        Cadavre Exquis: LIVE FOR ART
        <div class="three-model">
          <a href="./cadavreexquis/collage.png" target="new">
            <img src="./cadavreexquis/collage.png" alt="random image" width="400" height="300" id="model1">
          </a>
        </div>
        <div id="images-description">
          <div id="images">
            <a href="./cadavreexquis/tagging.png" target="new">
              <img src="./cadavreexquis/tagging.png" alt="random image" width="400" height="300">
            </a>
            <a href="./cadavreexquis/manifesto.png" target="new">
              <img src="./cadavreexquis/manifesto.png" alt="random image" width="400" height="300">
            </a>
            <a href="./cadavreexquis/sources.png" target="new">
              <img src="./cadavreexquis/sources.png" alt="random image" width="400" height="300">
            </a>
            
          </div>
          <h4 id="description">A Cadavre Exquis is a manifestation and collaboration of ideas, marrying multiple modes of thinking to create a cohesive whole out of pieces that may not initially seem like they fit together. This piece, entitled LIVE FOR ART, combines different artistic formes and types of human expression into a single piece, demonstating the beauty surrounding the natural world.</h4>
        </div>
      </div>

      <div id="project-row">
      Interoperability: Nidoking
        <div class="three-model">
          <div id="model2"></div>
        </div>
        

        <div id="images-description">
          <div id="images">
            <a href="./Interop/Nidoking Matrix.png" target="new">
              <img src="./Interop/Nidoking Matrix.png" alt="random image" width="400" height="300">
            </a>
            <a href="./Interop/Torus Matrix.png" target="new">
              <img src="./Interop/Torus Matrix.png" alt="random image" width="400" height="300">
            </a>
            <a href="./Interop/Pavilion Matrix.png" target="new">
              <img src="./Interop/Pavilion Matrix.png" alt="random image" width="400" height="300">
            </a>
          </div>
          <h4 id="description">This project explored interoperability, the relationship between different softwares and modes of working. The base form was modelled in Blender, then imported into Rhino using a variety of settings to explore the advantages and disadvantages of each.</h4>
        </div>
      </div>


      <div id="project-row">
      Object Design: Midnight Oil
        <div class="three-model">
          <div id="model3"></div>
        </div>
        <div id="images-description">
          <div id="images">
            <a href="./obdes/3D.png" target="new">
              <img src="./obdes/3D.png" alt="random image" width="400" height="300">
            </a>
            <a href="./obdes/Phys.png" target="new">
              <img src="./obdes/Phys.png" alt="random image" width="400" height="300">
            </a>
            <a href="./obdes/Process Chart.png" target="new">
              <img src="./obdes/Process Chart.png" alt="random image" width="400" height="300">
            </a>
          </div>
          <h4 id="description">A 3D house model is a geometric representation of a house, featuring walls, a roof, and windows. It often includes additional details such as doors, chimneys, and balconies, with textures like brick, wood, or stucco to enhance realism. The interior may also feature rooms, furniture, and lighting for a more detailed design.</h4>
        </div>
      </div>


      <div id="project-row">
      Pavilion: Bastion
        <div class="three-model">
          <div id="model4"></div>
        </div>
        <div id="images-description">
          <div id="images">
            <a href="./pavilion/phys.png" target="new">
              <img src="./pavilion/phys.png" alt="random image" width="400" height="300">
            </a>
            <a href="./pavilion/interior.jpg" target="new">
              <img src="./pavilion/interior.jpg" alt="random image" width="400" height="300">
            </a>
            <a href="./pavilion/3d.png" target="new">
              <img src="./pavilion/3d.png" alt="random image" width="400" height="300">
            </a>
          </div>
          <h4 id="description">Bastion is formed from over 100 hexagonal pillars rising out of the ground. The form is reminiscent of basalt columns, echoing the natural world and giving man-made form to natural structure and texture.</h4>
        </div>
      </div>
    </section>


    <div id="project-row">
      Portfolio World: Solus Nox
        <div class="three-model">
          <a href="./cadavreexquis/collage.png" target="new">
            <img src="./cadavreexquis/collage.png" alt="random image" width="400" height="300" id="model1">
          </a>
        </div>
        <div id="images-description">
          <div id="images">
            <a href="./solusnox/Axo.png" target="new">
              <img src="./solusnox/Axo.png" alt="random image" width="400" height="300">
            </a>
            <a href="./solusnox/Game 2.png" target="new">
              <img src="./solusnox/Game 2.png" alt="random image" width="400" height="300">
            </a>
            <a href="./solusnox/Game 4.png" target="new">
              <img src="./solusnox/Game 4.png" alt="random image" width="400" height="300">
            </a>
            <a href="./solusnox/game 6.png" target="new">
              <img src="./solusnox/game 6.png" alt="random image" width="400" height="300">
            </a>
          </div>
          <h4 id="description">Solus Nox is a virtual environment created for the purpose of showcasing work in a digital, playable format. Uploaded as a playable game on spatial.io, it allows users to explore a dreamy, ethereal world where they can interact and explore my work.</h4>
        </div>
      </div>
    </section>

    <ul id="footer-items">
      <li>Email: ${data.contact.email}</li>
      <li>Phone: ${data.contact.phone}</li>
      <li>LinkedIn: <a href="${data.contact.linkedin}">${
  data.contact.linkedin
}</a></li>
      <li>GitHub: <a href="${data.contact.github}">${
  data.contact.github
}</a></li>
    </ul>
  </main>
`;

// Create three.js scenes for each

createThreeScene("#model2", "/3DModels/project2/Nidoking.obj");
createThreeScene("#model3", "/3DModels/project3/Lantern.obj");
createThreeScene("#model4", "/3DModels/project4/Bastion.obj");
