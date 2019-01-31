import {
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  Geometry,
  Material,
  Object3D,
  BoxGeometry,
  MeshNormalMaterial,
  Mesh
} from "three";

export class EntryPoint {
  private camera: PerspectiveCamera;

  private scene: Scene;
  private renderer: WebGLRenderer;
  private geometry: Geometry;
  private material: Material;
  private mesh: Object3D;

  private win: Window;

  private frameId: any;

  constructor(win: Window) {
    this.win = win;
    this.camera = new PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.01,
      10
    );
    this.camera.position.z = 1;

    this.scene = new Scene();

    this.geometry = new BoxGeometry(0.2, 0.2, 0.2);
    this.material = new MeshNormalMaterial();

    this.mesh = new Mesh(this.geometry, this.material);
    this.scene.add(this.mesh);
    this.camera.position.z = 0.2 * 1.44;

    this.renderer = new WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);
  }



  public animate(_: any) {
    this.frameId = this.win.requestAnimationFrame(now => this.animate(now));

    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.05;

    this.renderer.render(this.scene, this.camera);
  }

  public stopAnimation() {
    this.win.cancelAnimationFrame( this.frameId );
    this.frameId = undefined;
    // Note: no need to worry if the loop has already been cancelled
    // cancelAnimationFrame() won't throw an error
  }

  public startAnimation() {
    if (this.frameId === undefined) {
      this.frameId = this.win.requestAnimationFrame(now => this.animate(now));
    }
    // cancelAnimationFrame( this.frameId );
    // Note: no need to worry if the loop has already been cancelled
    // cancelAnimationFrame() won't throw an error
  }
}
