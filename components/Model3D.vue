<script setup lang="ts">
import * as THREE from "three";
import { onMounted, ref } from "vue";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { loadGLTFModel } from "~/lib/model";

import Text from "./Text.vue";

const refContainer = ref();
const refRenderer = ref();
const loading = ref(true);
const catURL = new URL("../public/tom.glb", import.meta.url);

function easeOutCirc(x: number) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}

const init = () => {
  const handleWindowResize = () => {
    const { value: renderer } = refRenderer;
    const { value: container } = refContainer;
    if (container && renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      renderer.setSize(scW, scH);
    }
  };

  window.addEventListener("resize", handleWindowResize, false);

  const { value: container } = refContainer;
  if (container) {
    const scW = container.clientWidth;
    const scH = container.clientHeight;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(scW, scH);
    renderer.outputEncoding = THREE.sRGBEncoding;
    refRenderer.value = renderer;

    const scene = new THREE.Scene();
    scene.position.set(-0.5, 0.5, 0);

    const target = new THREE.Vector3(-0.5, 1.2, 0);
    const initialCameraPosition = new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI)
    );

    const camera = new THREE.PerspectiveCamera(12, scW / scH, 0.001, 1000);

    const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
    scene.add(ambientLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.target = target;

    loadGLTFModel(scene, catURL.href).then(() => {
      container.appendChild(renderer.domElement);
      loading.value = false;
      animate();
    });

    let req = null;
    let frame = 0;

    const animate = () => {
      req = requestAnimationFrame(animate);
      frame = frame <= 100 ? frame + 1 : frame;

      if (frame <= 100) {
        const p = initialCameraPosition;
        const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;

        camera.position.y = 10;
        camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
        camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
        camera.lookAt(target);
      } else {
        controls.update();
      }
      renderer.render(scene, camera);
    };
  }
};

onMounted(() => init());
</script>

<template>
  <section
    ref="refContainer"
    class="m-auto w-[280px] md:w-[480px] lg:w-[640px] h-[280px] md:h-[480px] lg:h-[640px] my-[-20px] md:my-[-60px] lg:my-[-120px] relative"
  >
    <Text
      v-if="loading"
      class="text-center grid h-full items-center justify-center"
    >
      Loading...
    </Text>
  </section>
</template>
