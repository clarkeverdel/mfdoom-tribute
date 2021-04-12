import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import React, { useEffect, useRef, useState } from 'react'

// https://codesandbox.io/s/brave-violet-l9r01k94pm?from-embed=&file=/src/ThreeScene.js
// let OBJLoader
// let MTLLoader

const Mask = () => {

    const mount: any = useRef<HTMLDivElement | Function>(null!)
    const controls: any = useRef<HTMLDivElement>(null!)
    const [isAnimating, setAnimating] = useState(true)

    useEffect(() => {
        let width: number = mount.current.clientWidth
        let height: number = mount.current.clientHeight
        let frameId: number
    
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer({ antialias: true })
        const geometry = new THREE.BoxGeometry(1, 1, 1)
        const material = new THREE.MeshBasicMaterial({ color: 0xff00ff })

        const ambientLight = new THREE.AmbientLight( 0xcccccc, 0.4 );
        scene.add( ambientLight );
        

        const pointLight = new THREE.PointLight( 0xffffff, 0.8 );
        camera.add( pointLight );

        scene.add(camera)

    
        // camera.position.z = 2
        // scene.add(cube)
        renderer.setClearColor('#231f20')
        renderer.setSize(width, height)

        const mtlLoader = new MTLLoader()

        let freedomMesh: any

        mtlLoader.load("./static/models/MFDoom_v2.mtl", materials => {
            materials.preload()

            //Load Object Now and Set Material
            const objLoader = new OBJLoader()
            objLoader.setMaterials(materials)

            objLoader.load("./static/models/MFDoom_v2.obj",
                object => {
                    freedomMesh = object
                    freedomMesh.position.setY(150) //or  this
                    freedomMesh.scale.set(2, 2, 1)

                    // freedomMesh.geometry.center()

                    scene.add(freedomMesh)
                },
                xhr => {
                    console.log((xhr.loaded / xhr.total) * 100 + "% loaded")
                },
                // called when loading has errors
                error => {
                    console.log("An error happened" + error)
                }
            )
        })
    
        const renderScene = () => {
          renderer.render(scene, camera)
        }
    
        const handleResize = ():void => {
          width = mount.current.clientWidth
          height = mount.current.clientHeight
          renderer.setSize(width, height)
          camera.aspect = width / height
          camera.updateProjectionMatrix()
          renderScene()
        }
        
        const animate = ():void  => {
            if(freedomMesh){
                freedomMesh.rotation.x += 0.001
                freedomMesh.rotation.y += 0.001
            }
    
          renderScene()
          frameId = window.requestAnimationFrame(animate)
        }
    
        const start = (): void => {
          if (!frameId) {
            frameId = requestAnimationFrame(animate)
          }
        }
    
        const stop = (): void => {
          cancelAnimationFrame(frameId)
          frameId = 0
        }
    
        mount.current.appendChild(renderer.domElement)
        window.addEventListener('resize', handleResize)
        start()
    
        controls.current = { start, stop }
        
        return () => {
          stop()
          window.removeEventListener('resize', handleResize)
          mount.current.removeChild(renderer.domElement)
    
        //   scene.remove(cube)
          geometry.dispose()
          material.dispose()
        }
    }, [])
    
    useEffect(() => {
        if (isAnimating) {
          controls.current.start()
        } else {
          controls.current.stop()
        }
    }, [isAnimating])


    // const addModels = () => {
    //     // -----Step 1--------
    //     const geometry = new THREE.BoxGeometry(5, 5, 5);
    //     const material = new THREE.MeshBasicMaterial({
    //       color: "#0F0"
    //     });
    //     this.cube = new THREE.Mesh(geometry, material);
    //     this.scene.add(this.cube);

    //     var mtlLoader = new MTLLoader();
    //     mtlLoader.setBaseUrl("./static/models/");

    //     mtlLoader.load("MFDoom_v2.mtl", materials => {
    //         materials.preload();
    //         console.log("Material loaded");

    //         //Load Object Now and Set Material
    //         const objLoader = new OBJLoader();
    //         objLoader.setMaterials(materials);
    //         objLoader.load("./static/models/MFDoom_v2.obj",
    //             object => {
    //                 this.freedomMesh = object;
    //                 this.freedomMesh.position.setY(3); //or  this
    //                 this.freedomMesh.scale.set(0.02, 0.02, 0.02);
    //                 this.scene.add(this.freedomMesh);
    //             },
    //             xhr => {
    //                 console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    //             },
    //             // called when loading has errors
    //             error => {
    //                 console.log("An error happened" + error);
    //             }
    //         );
    //     });
    // }

    // useEffect(() => {
    //     init();
    // }, [])
    
    return <>
        <div ref={mount} onClick={() => setAnimating(!isAnimating)} style={{ position: 'fixed', left: 0, top: 0, bottom: 0, right: 0}} />
    </>
}

export default Mask