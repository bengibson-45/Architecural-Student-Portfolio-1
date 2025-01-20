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
          <a href="./public/cadavreexquis/collage.png" target="new">
            <img src="./public/cadavreexquis/collage.png" alt="random image" width="400" height="300" id="model1">
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
      Model 2
        <div class="three-model">
          <div id="model2"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${trees
              .map(
                (trees, index) =>
                  `<img src="${trees}" alt="tree${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D tree model is a geometric representation of a tree, featuring a trunk, branches, and foliage. The trunk is typically cylindrical, with textured bark, while the branches extend outward to support leaves or a canopy. It may include roots or flowers for added detail.</h4>
        </div>
      </div>

      <div id="project-row">
      Model 3
        <div class="three-model">
          <div id="model3"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${cubes
              .map(
                (cube, index) => `<img src="${cube}" alt="cube${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D house model is a geometric representation of a house, featuring walls, a roof, and windows. It often includes additional details such as doors, chimneys, and balconies, with textures like brick, wood, or stucco to enhance realism. The interior may also feature rooms, furniture, and lighting for a more detailed design.</h4>
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
createThreeScene("#model1", "/3DModels/project1/cube.obj");
createThreeScene("#model2", "/3DModels/project2/tree.obj");
createThreeScene("#model3", "/3DModels/project3/cottage.obj");
