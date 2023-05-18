import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { Scroll } from '@angular/router';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss']
})
export class AnimationsComponent implements AfterViewInit, OnInit {
  directionalLight!: THREE.DirectionalLight;
  ambientLight!: THREE.AmbientLight;
  renderer!: THREE.WebGLRenderer;
  scene!: THREE.Scene;
  private now = Date.now();
  private moveRight = true;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.loadModel();
    this.createSzene();
    this.startRenderingLoop();
    for (let index = 0; index < 5000; index++) {
      this.addStars();
    }
  }

  // Reference to the canvas element
  @ViewChild('canvas')
  private canvasRef!: ElementRef;


  // Cube properties
  @Input() public rotationSpeedX: number = 0.001; // Cube rotation speed on X axis
  @Input() public rotationSpeedY: number = 0.0005; // Cube rotation speed on Y axis
  @Input() public moveSpeedX: number = -0.1; // Cube move speed on X axis
  @Input() public moveSpeedY: number = -0.01; // Cube move speed on Y axis
  @Input() public size: number = 200; // Cube size
  @Input() public texture: Array<string> = ['assets/img/earth.jpg']; // Cube texture

  // Stage properties
  @Input() public cameraZ: number = 1500; // Camera Z position
  @Input() public cameraY: number = 400; // Camera Y position
  @Input() public cameraX: number = 400; // Camera X position
  @Input() public fieldOfView: number = 1; // Camera field of view
  // (only objects between near and far clipping pane are rendered)
  @Input('nearClipping') public nearClippingPane: number = 0.1; // Camera near clipping pane
  @Input('farClipping') public farClippingPane: number = 10000; // Camera far clipping pane

  // Helper properties
  private camera!: THREE.PerspectiveCamera;
  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }
  private loader = new THREE.TextureLoader();
  private geometryEarth = new THREE.SphereGeometry(10, 64, 64);
  private geometryMoon = new THREE.SphereGeometry(2, 64, 64);
  private earthMaterial = new THREE.MeshStandardMaterial({ color: '#39ff14', wireframe: false, map: this.loader.load(this.texture[0]) }); // Standard Material for light and shadow
  private moonMaterial = new THREE.MeshStandardMaterial({ color: '#39ff14', wireframe: true }); // Standard Material for light and shadow
  private earth: THREE.Mesh = new THREE.Mesh(this.geometryEarth, this.earthMaterial);
  private moon: THREE.Mesh = new THREE.Mesh(this.geometryMoon, this.moonMaterial);
  private satelite: THREE.Group = new THREE.Group();


  private loadModel() {
    let loader = new GLTFLoader();
    loader.load('assets/models/satelite.gltf', (gltf) => {
      let satelite = gltf.scene;
      satelite.scale.set(0.1, 0.1, 0.1);
      this.satelite = satelite;
      this.scene.add(satelite);
    });
  }

  private createSzene() {
    // Setting the scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color('#121212');
    this.scene.add(this.earth);
    this.scene.add(this.moon);

    //let gridHelper = new THREE.GridHelper(200, 50);
    //this.scene.add(gridHelper)

    //let spaceTexture = new THREE.TextureLoader().load('/assets/img/bg.jpeg');
    //this.scene.background = spaceTexture;

    // Setting the camera
    let aspectRatio = this.getAspectRatio();
    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      aspectRatio,
      this.nearClippingPane,
      this.farClippingPane
    );
    this.camera.position.z = this.cameraZ;
    this.camera.position.y = this.cameraY;
    this.camera.position.x = this.cameraX;

    // Light properties
    this.directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
    this.directionalLight.position.set(600, 200, 0);
    this.directionalLight.target.position.set(0, 0, 0);

    //this.ambientLight = new THREE.AmbientLight(0xffffff);
    this.scene.add(this.directionalLight);
  }


  private getAspectRatio() {
    // The canvas is resized by CSS, so we need to get its size from there
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }



  private animate() {
    this.earth.rotation.y -= this.rotationSpeedY;

    this.moon.rotation.y += this.rotationSpeedY * 5;
    this.moon.position.x = 15 * Math.sin((Date.now() - this.now) * 0.0001);
    this.moon.position.z = 15 * Math.cos((Date.now() - this.now) * 0.0001);

    this.satelite.rotation.x += this.rotationSpeedY * 5;

    this.satelite.position.x = 20 * Math.sin((Date.now() - this.now) * 0.0001);
    this.satelite.position.y = 20 * Math.cos((Date.now() - this.now) * 0.0001);

    //this.moveCamera();
  }


  private moveCamera() {
      let time = Date.now();
      if (time - this.now < 10000) {
        this.camera.position.x += 0.05;
        this.camera.position.z -= 0.05;
        this.camera.rotation.y += 0.0000001;
      }
      if (time - this.now > 10000 && time - this.now < 17000) {
        this.camera.rotation.y += 0.00001;
        this.camera.position.x -= 0.05;
        this.camera.position.z += 0.05;
      }
  }


  private startRenderingLoop() {
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    let controls = new OrbitControls(this.camera, this.renderer.domElement);
    controls.enabled = false;
    controls.update();


    let component: AnimationsComponent = this;
    (function render() {
      requestAnimationFrame(render);
      component.animate();
      component.renderer.render(component.scene, component.camera);
    }());
  }


  private addStars() {
    let geometry = new THREE.SphereGeometry(0.01, 24, 24);
    let material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    let star = new THREE.Mesh(geometry, material);
    let [x, y, z] = Array(3).fill(0).map(() => THREE.MathUtils.randFloatSpread(400));
    star.position.set(x, y, z - 400);
    this.scene.add(star);
  };


  /**
   * This method is automatically invoked when the window is resized.
   * It must update the camera and renderer to account for new aspect ratios.
   */
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: any) {
    
  }
}
