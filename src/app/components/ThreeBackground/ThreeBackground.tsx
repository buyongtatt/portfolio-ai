"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create main helix group
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Create DNA double helix
    const helixGroup = new THREE.Group();
    const particleCount = 100;
    const radius = 10;
    const height = 40;
    const turns = 3;

    // Create two helixes
    for (let j = 0; j < 2; j++) {
      const points = [];
      for (let i = 0; i < particleCount; i++) {
        const angle = (i / particleCount) * Math.PI * 2 * turns;
        const y = (i / particleCount) * height - height / 2;
        const x = Math.cos(angle + j * Math.PI) * radius;
        const z = Math.sin(angle + j * Math.PI) * radius;
        points.push(new THREE.Vector3(x, y, z));
      }

      const lineMaterial = new THREE.LineBasicMaterial({
        color: j === 0 ? 0x8b5cf6 : 0x6366f1,
        transparent: true,
        opacity: 0.6,
      });
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(lineGeometry, lineMaterial);
      helixGroup.add(line);

      // Add glowing spheres
      points.forEach((point) => {
        const sphere = new THREE.Mesh(
          new THREE.SphereGeometry(0.2, 8, 8),
          new THREE.MeshBasicMaterial({
            color: j === 0 ? 0x8b5cf6 : 0x6366f1,
            transparent: true,
            opacity: 0.8,
          })
        );
        sphere.position.copy(point);
        helixGroup.add(sphere);
      });
    }

    mainGroup.add(helixGroup);

    // Add floating particles
    const particlesGroup = new THREE.Group();
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount2 = 200;
    const positions = new Float32Array(particleCount2 * 3);
    const velocities = new Float32Array(particleCount2 * 3);

    for (let i = 0; i < particleCount2 * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 100;
      positions[i + 1] = (Math.random() - 0.5) * 100;
      positions[i + 2] = (Math.random() - 0.5) * 100;

      velocities[i] = (Math.random() - 0.5) * 0.05;
      velocities[i + 1] = (Math.random() - 0.5) * 0.05;
      velocities[i + 2] = (Math.random() - 0.5) * 0.05;
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.2,
      color: 0x4c1d95,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    particlesGroup.add(particles);
    mainGroup.add(particlesGroup);

    // Add orbital rings
    const ringGeometry = new THREE.RingGeometry(15, 15.3, 80);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x6366f1,
      transparent: true,
      opacity: 0.3,
      side: THREE.DoubleSide,
    });

    for (let i = 0; i < 3; i++) {
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.rotation.x = Math.random() * Math.PI;
      ring.rotation.y = Math.random() * Math.PI;
      mainGroup.add(ring);
    }

    // Add energy field effect
    const energyGeometry = new THREE.SphereGeometry(20, 32, 32);
    const energyMaterial = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.1,
      wireframe: true,
    });
    const energyField = new THREE.Mesh(energyGeometry, energyMaterial);
    mainGroup.add(energyField);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x8b5cf6, 1, 100);
    const pointLight2 = new THREE.PointLight(0x6366f1, 1, 100);
    pointLight1.position.set(10, 10, 10);
    pointLight2.position.set(-10, -10, -10);
    scene.add(pointLight1, pointLight2);

    camera.position.z = 40;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate main group
      mainGroup.rotation.y += 0.003;

      // Gentle floating motion
      mainGroup.position.y = Math.sin(Date.now() * 0.001) * 0.5;

      // Update particle positions
      const positions = particles.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += velocities[i];
        positions[i + 1] += velocities[i + 1];
        positions[i + 2] += velocities[i + 2];

        // Reset particles that go too far
        if (Math.abs(positions[i]) > 50) velocities[i] *= -1;
        if (Math.abs(positions[i + 1]) > 50) velocities[i + 1] *= -1;
        if (Math.abs(positions[i + 2]) > 50) velocities[i + 2] *= -1;
      }
      particles.geometry.attributes.position.needsUpdate = true;

      // Pulse energy field
      energyField.scale.setScalar(1 + Math.sin(Date.now() * 0.001) * 0.1);

      // Animate lights
      const time = Date.now() * 0.001;
      pointLight1.intensity = 1 + Math.sin(time) * 0.5;
      pointLight2.intensity = 1 + Math.sin(time + Math.PI) * 0.5;

      renderer.render(scene, camera);
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    animate();

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ background: "linear-gradient(to bottom, #000000, #09090b)" }}
    />
  );
};

export default ThreeBackground;
