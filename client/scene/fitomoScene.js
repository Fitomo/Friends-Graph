var scene, camera, renderer, controls, geometry, material,torusKnot, projector, sphere, dirLight;
var mouse = { x: 0, y: 0 };
var targetList = [];

init();
animate();

function init() {  
    scene = new THREE.Scene();
    var WIDTH = window.innerWidth;
    var HEIGHT = window.innerHeight;
    camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 0.1, 20000);
    camera.position.set(100,200,0)
    scene.add(camera);
    // render the scene
    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(WIDTH, HEIGHT);
// radius — Default is 100.
// tube — Diameter of the tube. Default is 40.
// tubularSegments — Default is 64.
// radialSegments — Default is 8.
// p — This value determines, how many times the geometry winds around its axis of rotational symmetry. Default is 2.
// q — This value determines, how many times the geometry winds around a circle in the interior of the torus. Default is 3.
    addSceneElements();
    addLights();
    projector = new THREE.Projector();

    controls = new THREE.OrbitControls(camera, renderer.domElement);

    window.addEventListener('mousedown', onDocumentMouseDown, false);
    window.addEventListener('resize', function() {
      var WIDTH = window.innerWidth,
          HEIGHT = window.innerHeight;
      renderer.setSize(WIDTH, HEIGHT);
      camera.aspect = WIDTH / HEIGHT;
      camera.updateProjectionMatrix();
    });
    // create a function to start at one node and then generate friends in a radius around it
    // (how do I create links between the nodes?)
    // do I need user data to procedualy generate different objects?
    //fs how do I create labels for each object.
    // can I atach links to a users profile from that object.
    // 

    document.body.appendChild( renderer.domElement );

}

function addLights() {
    dirLight = new THREE.DirectionalLight(0xFFFAAD, 0.7);
    dirLight.position.set(1200, 500, 600);
    scene.add(dirLight);
    scene.add( new THREE.AmbientLight( 0x222222 ) );
}

function onDocumentMouseDown( event ) {
  mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
  var vector = new THREE.Vector3( mouse.x, mouse.y, 1 );
  projector.unprojectVector( vector, camera );
  var ray = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );
  var intersects = ray.intersectObjects( targetList );  
  if ( intersects.length > 0 )
  {
    // move camera to object clicked
    camera.position.set(intersects[0].point.x,intersects[0].point.y, intersects[0].point.z + 10)
  }
}

function addSceneElements(){
    geometry = new THREE.SphereGeometry( 2, 20, 25 );
    material = new THREE.MeshBasicMaterial( {color: 0xffff00, wireframe:true, reflectivity:10} );
    sphere = new THREE.Mesh( geometry, material );
    scene.add( sphere );
    targetList.push(sphere);

    var bluePoint = new THREE.PointLight(0x0033ff, 3, 150);
    bluePoint.position.set( 70, 5, 70 );
    scene.add(bluePoint);
    scene.add(new THREE.PointLightHelper(bluePoint, 3));
}

function animate() {

    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    controls.update

}



