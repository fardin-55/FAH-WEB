"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

function shieldShape(k: number) {
  const s = new THREE.Shape();
  s.moveTo(0, 1.3 * k);
  s.bezierCurveTo(0.5 * k, 1.1 * k, 1 * k, 1.05 * k, 1.1 * k, 1.05 * k);
  s.lineTo(1.1 * k, 0.2 * k);
  s.bezierCurveTo(1.1 * k, -0.6 * k, 0.6 * k, -1.1 * k, 0, -1.5 * k);
  s.bezierCurveTo(-0.6 * k, -1.1 * k, -1.1 * k, -0.6 * k, -1.1 * k, 0.2 * k);
  s.lineTo(-1.1 * k, 1.05 * k);
  s.bezierCurveTo(-0.9 * k, 1.05 * k, -0.5 * k, 1.1 * k, 0, 1.3 * k);
  return s;
}

function checkShape() {
  const s = new THREE.Shape();
  s.moveTo(-0.45, 0.02);
  s.lineTo(-0.34, 0.13);
  s.lineTo(-0.12, -0.09);
  s.lineTo(0.34, 0.38);
  s.lineTo(0.44, 0.27);
  s.lineTo(-0.12, -0.3);
  s.closePath();
  return s;
}

export default function SecurityShield({ height = 520 }: { height?: number }) {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    let W = Math.max(el.clientWidth, 1);
    let H = Math.max(el.clientHeight, 1);

    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(35, W / H, 0.1, 100);
    cam.position.set(0, 0, 7.5);

    const ren = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    ren.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    ren.setSize(W, H);
    ren.toneMapping = THREE.ACESFilmicToneMapping;
    ren.toneMappingExposure = 1.1;
    el.appendChild(ren.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 0.8));
    scene.add(new THREE.HemisphereLight(0xffffff, 0x0000ff, 0.5));

    const group = new THREE.Group();
    scene.add(group);

    const bodyGeo = new THREE.ExtrudeGeometry(shieldShape(1), {
      depth: 0.3, bevelEnabled: true, bevelThickness: 0.1,
      bevelSize: 0.09, bevelSegments: 8, curveSegments: 48,
    });
    bodyGeo.center();
    group.add(new THREE.Mesh(bodyGeo, new THREE.MeshPhysicalMaterial({
      color: 0x0c1826, metalness: 1, roughness: 0.22,
      clearcoat: 1, clearcoatRoughness: 0.1,
    })));

    const innerGeo = new THREE.ExtrudeGeometry(shieldShape(0.72), {
      depth: 0.04, bevelEnabled: true, bevelThickness: 0.03,
      bevelSize: 0.03, bevelSegments: 4, curveSegments: 48,
    });
    const inner = new THREE.Mesh(innerGeo, new THREE.MeshPhysicalMaterial({
      color: 0x06283f, metalness: 0.9, roughness: 0.3, clearcoat: 0.6,
    }));
    inner.position.set(0, 0.03, 0.24);
    group.add(inner);

    const check = new THREE.Mesh(
      new THREE.ExtrudeGeometry(checkShape(), {
        depth: 0.05, bevelEnabled: true, bevelThickness: 0.015,
        bevelSize: 0.015, bevelSegments: 3,
      }),
      new THREE.MeshStandardMaterial({
        color: 0x22e6ff, emissive: 0x22e6ff, emissiveIntensity: 1.6,
        metalness: 0.2, roughness: 0.3,
      })
    );
    check.position.set(0, 0.04, 0.31);
    group.add(check);

    const l1 = new THREE.PointLight(0x22e6ff, 40, 20);
    l1.position.set(3, 2.5, 4);
    const l2 = new THREE.PointLight(0x1b7cff, 30, 20);
    l2.position.set(-4, -2, 3);
    scene.add(l1, l2);

    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let mx = 0, my = 0, t = 0, raf = 0;
    const onMove = (e: PointerEvent) => {
      mx = e.clientX / window.innerWidth - 0.5;
      my = e.clientY / window.innerHeight - 0.5;
    };
    const onResize = () => {
      W = Math.max(el.clientWidth, 1);
      H = Math.max(el.clientHeight, 1);
      cam.aspect = W / H;
      cam.updateProjectionMatrix();
      ren.setSize(W, H);
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("resize", onResize);

    const loop = () => {
      raf = requestAnimationFrame(loop);
      if (!still) t += 0.01;
      const ty = Math.sin(t * 0.8) * 0.4 + mx * 0.8;
      const tx = my * 0.4;
      group.rotation.y += (ty - group.rotation.y) * 0.05;
      group.rotation.x += (tx - group.rotation.x) * 0.05;
      group.position.y = Math.sin(t * 1.2) * 0.07;
      ren.render(scene, cam);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", onResize);
      ren.dispose();
      if (el.contains(ren.domElement)) el.removeChild(ren.domElement);
    };
  }, []);

  return <div ref={host} style={{ width: "100%", height }} aria-hidden="true" />;
}
