var scene, camera, renderer, controls, geometry, material,torusKnot;

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


//     radius — Default is 100.
// tube — Diameter of the tube. Default is 40.
// tubularSegments — Default is 64.
// radialSegments — Default is 8.
// p — This value determines, how many times the geometry winds around its axis of rotational symmetry. Default is 2.
// q — This value determines, how many times the geometry winds around a circle in the interior of the torus. Default is 3.


    controls = new THREE.OrbitControls(camera, renderer.domElement);

    geometry = new THREE.TorusKnotBufferGeometry( 20, 50, 3, 16, 10, 5);
    material = new THREE.MeshBasicMaterial( { color: 0xffff00, wireframe: true, morphTargets: true } );
    torusKnot = new THREE.Mesh( geometry, material );
    scene.add( torusKnot );

    window.addEventListener('resize', function() {
      var WIDTH = window.innerWidth,
          HEIGHT = window.innerHeight;
      renderer.setSize(WIDTH, HEIGHT);
      camera.aspect = WIDTH / HEIGHT;
      camera.updateProjectionMatrix();
    });

    document.body.appendChild( renderer.domElement );
}

function animate() {

    requestAnimationFrame( animate );
    torusKnot.rotation.x += .01;
    torusKnot.rotation.y += 0.01;
    renderer.render( scene, camera );

    controls.update

}



