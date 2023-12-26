# Three.js

## 安装

```bash
npm install three --save

npm install @types/three --save-dev
```

## 起步

```ts
// 场景
const scene = new THREE.Scene();

// 照相机
const camera = new THREE.PerspectiveCamera();
camera.position.z = 10;
camera.position.y = 1;

// 立方体
const geometry = new THREE.BoxGeometry(); // 几何体
const material = new THREE.MeshBasicMaterial({ color: 0x29783a }); // 材质
const cube = new THREE.Mesh(geometry, material); // 合并
scene.add(cube);

// 网格
const gridHelper = new THREE.GridHelper();
scene.add(gridHelper);

// 创建渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(800, 800);
document.body.appendChild(renderer.domElement);

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  renderer.render(scene, camera);
}

animate();
```

## 轨道控制器

```ts
// highlight-start
import { OrbitControls } from "three/examples/jsm/Addons.js";

// 创建轨道控制器
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // 添加阻尼效果
// highlight-end

function animate() {
  requestAnimationFrame(animate);
  // highlight-next-line
  controls.update();
  renderer.render(scene, camera);
}

animate();
```

## 坐标轴

```ts
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);
```
