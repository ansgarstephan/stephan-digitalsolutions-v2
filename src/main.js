import './style.css';
import * as THREE from 'three';

const canvas = document.querySelector('#bg');

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const scene = new THREE.Scene();

// Fullscreen plane with a simple shader-like gradient using MeshBasicMaterial color for now
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

const geometry = new THREE.PlaneGeometry(2, 2);
const material = new THREE.MeshBasicMaterial({ color: 0x0b0f14 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

function resize() {
  renderer.setSize(window.innerWidth, window.innerHeight, false);
}
window.addEventListener('resize', resize);
resize();

function animate() {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();
