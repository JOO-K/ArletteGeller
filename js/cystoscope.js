//Variables for setup

let container;
let camera;
let renderer;
let scene;


function init() {
  container = document.getElementById( 'canvas' );
  // document.body.appendChild( container );
    
  //Create scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color('#ebebeb');

  //Camera setup    
  const fov = 35;
  const aspect = container.clientWidth * 1.0/ container.clientHeight;
  const near = 0.1;
  const far = 1000;

  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(20, 5, 5);
  camera.lookAt(0, 0, 0);    
    
    
  //GridVis
    
    const size = 10;
    const divisions = 10;
    const colorGrid = '#ff0065';

    const gridHelper = new THREE.GridHelper( size, divisions, colorGrid );
    scene.add( gridHelper );
    grid = gridHelper;
 
  
  //Light setup

  const light3= new THREE.AmbientLight(0xffffff, 2);
  light3.position.set(0,0,0);
  scene.add(light3);    
    
  const light = new THREE.DirectionalLight(0xffffff, .5);
  light.position.set(0, 100, 100);
  scene.add(light);     
    
  //Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth * 1.0, container.clientHeight * 1.0);
  renderer.setPixelRatio(window.devicePixelRatio);

  container.appendChild(renderer.domElement);

  //Load Models
  let loader = new THREE.GLTFLoader();
    
  loader.load("obj/cystoscope.gltf", function(gltf) {
    scene.add(gltf.scene);
    cystoscope = gltf.scene;
    animate();
  });
    
}


function animate() {
    
    
  grid.position.set(0,-2,0);
  cystoscope.position.set(0,-2,0);    
    
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
    
}

init();

function onWindowResize() {
  camera.aspect = container.clientWidth * 1.0/ container.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(container.clientWidth * 1.0, container.clientHeight);
}

window.addEventListener("resize", onWindowResize);

//Orbit Controls
  controls = new THREE.OrbitControls( camera, renderer.domElement);
