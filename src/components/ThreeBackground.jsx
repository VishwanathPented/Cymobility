import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const mountRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    let animationFrameId;
    let renderer, geometry, material;
    const currentMount = mountRef.current;
    
    try {
      if (!currentMount) return;
      
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      currentMount.appendChild(renderer.domElement);

      geometry = new THREE.BufferGeometry();
      const particlesCount = 2000;
      const posArray = new Float32Array(particlesCount * 3);

      for(let i = 0; i < particlesCount * 3; i++) {
          posArray[i] = (Math.random() - 0.5) * 15;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      
      material = new THREE.PointsMaterial({
          size: 0.02,
          color: 0x00cccc,
          transparent: true,
          opacity: 0.8,
          blending: THREE.AdditiveBlending
      });

      const particlesMesh = new THREE.Points(geometry, material);
      scene.add(particlesMesh);

      camera.position.z = 3;

      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;

      const onDocumentMouseMove = (event) => {
          mouseX = (event.clientX - windowHalfX);
          mouseY = (event.clientY - windowHalfY);
      };

      document.addEventListener('mousemove', onDocumentMouseMove);

      const clock = new THREE.Clock();

      const animate = () => {
          animationFrameId = requestAnimationFrame(animate);
          
          targetX = mouseX * 0.001;
          targetY = mouseY * 0.001;

          particlesMesh.rotation.y += 0.001;
          particlesMesh.rotation.x += 0.0005;

          particlesMesh.rotation.y += 0.05 * (targetX - particlesMesh.rotation.y);
          particlesMesh.rotation.x += 0.05 * (targetY - particlesMesh.rotation.x);

          renderer.render(scene, camera);
      };

      animate();

      const handleResize = () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
      };
      
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        document.removeEventListener('mousemove', onDocumentMouseMove);
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        
        if (currentMount && renderer && currentMount.contains(renderer.domElement)) {
          currentMount.removeChild(renderer.domElement);
        }
        
        if (geometry) geometry.dispose();
        if (material) material.dispose();
        if (renderer) renderer.dispose();
      };
    } catch (err) {
      console.error("THREE_JS_ERROR", err);
      setErrorMsg(err.toString());
    }
  }, []);

  if (errorMsg) {
    return <div style={{ color: 'red', zIndex: 9999, position: 'absolute' }}>Error: {errorMsg}</div>;
  }

  return <div ref={mountRef} className="three-canvas-container" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none' }} />;
};

export default ThreeBackground;
