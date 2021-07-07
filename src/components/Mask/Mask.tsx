import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { VRButton } from 'three/examples/jsm/webxr/VRButton';

import React, { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

// https://codesandbox.io/s/brave-violet-l9r01k94pm?from-embed=&file=/src/ThreeScene.js
// let OBJLoader
// let MTLLoader

// Declare "dat.gui" object --> external script UMD module
declare const dat: any;

const Mask = () => {
    const mount: any = useRef<HTMLDivElement | Function>(null!);
    const controls: any = useRef<HTMLDivElement>(null!);
    const [isAnimating, setAnimating] = useState(true);

    useEffect(() => {
        let width: number = mount.current.clientWidth;
        let height: number = mount.current.clientHeight;
        let frameId: number;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        // const geometry = new THREE.BoxGeometry(1, 1, 1)
        const material = new THREE.MeshBasicMaterial({ color: 0xff00ff });

        // Controls
        const orbitControls = new OrbitControls(camera, renderer.domElement);
        orbitControls.enableZoom = true;
        orbitControls.enablePan = true;
        // orbitControls.addEventListener('change', renderScene)

        // Axes Helper
        const axesHelper = new THREE.AxesHelper(5);
        scene.add(axesHelper);

        const ambientLight = new THREE.AmbientLight( 0xcccccc, 0.4 );
        scene.add( ambientLight );


        const pointLight = new THREE.PointLight( 0xffffff, 0.8 );
        camera.add( pointLight );

        scene.add(camera);

        // GUI
        const gui: any = (typeof window !== 'undefined' && dat) && new dat.GUI();


        camera.position.z = 2;
        // scene.add(cube)
        renderer.setClearColor('#231f20');
        renderer.setSize(width, height);

        const mtlLoader = new MTLLoader();

        let freedomMesh: any;

        mtlLoader.load("./static/models/MFDoom_v2.mtl", materials => {
            materials.preload();

            //Load Object Now and Set Material
            const objLoader = new OBJLoader();
            objLoader.setMaterials(materials);

            objLoader.load("./static/models/MFDoom_v2.obj",
                object => {
                    freedomMesh = object;
                    // freedomMesh.position.setY(150) //or  this
                    // freedomMesh.scale.set(2, 2, 1)

                    // freedomMesh.geometry.center()

                    scene.add(freedomMesh);

                    showGUI();
                },
                xhr => {
                    console.warn((xhr.loaded / xhr.total) * 100 + "% loaded");
                },
                // called when loading has errors
                error => {
                    throw new Error("An error happened" + error);
                }
            );
        });

        const showGUI = () => {
          if (gui) {
            const freedomMeshFolder = gui.addFolder('freedomMesh');

            // Rotation axis controls
            const rotationFolder = freedomMeshFolder.addFolder('Rotation')
            ;['x', 'y', 'z'].forEach(axis => {
              rotationFolder.add(freedomMesh.rotation, axis, 0, Math.PI * 2, 0.01);
            });
            rotationFolder.open();

            // Position controls
            const positionFolder = freedomMeshFolder.addFolder('Position')
            ;['x', 'y', 'z'].forEach(axis => {
              positionFolder.add(freedomMesh.position, axis, 0, 1000, 0.01);
            });
            positionFolder.open();

            // Scale controls
            const scaleFolder = freedomMeshFolder.addFolder('scale')
            ;['x', 'y', 'z'].forEach(axis => {
              scaleFolder.add(freedomMesh.scale, axis, -100, 100, 0.01);
            });
            scaleFolder.open();

            freedomMeshFolder.open();
          }
        };

        const renderScene = () => {
          renderer.render(scene, camera);
        };

        const handleResize = ():void => {
          width = mount.current.clientWidth;
          height = mount.current.clientHeight;
          renderer.setSize(width, height);
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
          renderScene();
        };

        const animate = ():void  => {
            // if(freedomMesh){
            //     freedomMesh.rotation.x += 0.001
            //     freedomMesh.rotation.y += 0.001
            // }
            orbitControls.update();
          renderScene();
          frameId = window.requestAnimationFrame(animate);
        };

        const start = (): void => {
          if (!frameId) {
            frameId = requestAnimationFrame(animate);
          }
          // showGUI()
        };

        const stop = (): void => {
          cancelAnimationFrame(frameId);
          frameId = 0;
        };

        // Append to dom
        mount.current.appendChild(renderer.domElement);
        document.body.appendChild(VRButton.createButton(renderer));

        // Enable XR for renderer
        renderer.xr.enabled = true;

        window.addEventListener('resize', handleResize);
        start();

        controls.current = { start, stop };

        // Animation loop for XR
        renderer.setAnimationLoop(() => {
            renderer.render( scene, camera );
        });

        return () => {
          stop();
          window.removeEventListener('resize', handleResize);
          mount.current.removeChild(renderer.domElement);
          gui.destroy();

          // scene.remove(freedomMesh)
          // geometry.dispose()
          material.dispose();
        };
    }, []);

    useEffect(() => {
        if (isAnimating) {
          controls.current.start();
        } else {
          controls.current.stop();
        }
    }, [isAnimating]);

    return <>
        <div ref={mount} onClick={() => setAnimating(!isAnimating)} style={{
          overflow: 'hidden',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          right: 0
        }} />
        <Script src="https://unpkg.com/three@0.126.1/examples/js/libs/dat.gui.min.js"></Script>
    </>;
};

export default Mask;
