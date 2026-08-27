/**
 * GRAPHICO — Hardware-Accelerated Liquid Wave Canvas Engine
 * Slow-moving, abstract fluid waves in dark charcoal and subtle silver gradients.
 * Persists continuously across all pages without reloading or frame drops.
 */

class LiquidEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.time = 0;
    this.mouse = { x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 };
    this.waves = [
      { amplitude: 90, frequency: 0.0018, speed: 0.0006, color: 'rgba(32, 32, 40, 0.55)', offset: 0, yRatio: 0.35 },
      { amplitude: 120, frequency: 0.0012, speed: 0.00045, color: 'rgba(20, 20, 26, 0.75)', offset: 2.4, yRatio: 0.52 },
      { amplitude: 140, frequency: 0.0009, speed: 0.00035, color: 'rgba(15, 15, 20, 0.85)', offset: 4.1, yRatio: 0.7 },
      { amplitude: 70, frequency: 0.0022, speed: 0.0008, color: 'rgba(50, 52, 62, 0.3)', offset: 1.2, yRatio: 0.45 },
      { amplitude: 50, frequency: 0.0028, speed: 0.0011, color: 'rgba(120, 125, 140, 0.07)', offset: 3.5, yRatio: 0.28 } // Specular Silver Sheen
    ];

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize(), { passive: true });
    window.addEventListener('mousemove', (e) => {
      this.mouse.targetX = e.clientX / window.innerWidth;
      this.mouse.targetY = e.clientY / window.innerHeight;
    }, { passive: true });

    this.animate();
  }

  resize() {
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width * this.dpr;
    this.canvas.height = this.height * this.dpr;
    this.ctx.scale(this.dpr, this.dpr);
  }

  animate() {
    this.time += 1;
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.05;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.05;

    this.render();
    requestAnimationFrame(() => this.animate());
  }

  render() {
    const { ctx, width, height, time, mouse } = this;
    
    // Clear to Pure Pitch Black (#000000)
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, width, height);

    // Dynamic Ambient Silver Glow from Mouse
    const silverGlow = ctx.createRadialGradient(
      width * mouse.x, height * mouse.y, 0,
      width * mouse.x, height * mouse.y, width * 0.65
    );
    silverGlow.addColorStop(0, 'rgba(45, 48, 58, 0.18)');
    silverGlow.addColorStop(0.5, 'rgba(20, 20, 26, 0.08)');
    silverGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = silverGlow;
    ctx.fillRect(0, 0, width, height);

    // Render Layered Sinusoidal Wave Meshes
    for (let w = 0; w < this.waves.length; w++) {
      const wave = this.waves[w];
      ctx.beginPath();
      ctx.moveTo(0, height);

      const baseY = height * wave.yRatio + Math.sin(time * 0.001 + wave.offset) * 40;
      ctx.lineTo(0, baseY);

      // Smooth Cubic Bezier Curves across the viewport
      const step = Math.max(30, Math.floor(width / 35));
      for (let x = 0; x <= width + step; x += step) {
        const angle = x * wave.frequency + time * wave.speed + wave.offset + (mouse.x * 0.5);
        const y = baseY + 
          Math.sin(angle) * wave.amplitude + 
          Math.cos(angle * 0.5 + time * wave.speed * 0.7) * (wave.amplitude * 0.4);
        ctx.lineTo(x, y);
      }

      ctx.lineTo(width, height);
      ctx.closePath();

      // Fluid Wave Fill with Vertical Charcoal to Silver Gradient
      const grad = ctx.createLinearGradient(0, baseY - wave.amplitude, 0, height);
      grad.addColorStop(0, wave.color);
      grad.addColorStop(0.6, 'rgba(12, 12, 16, 0.9)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0.98)');

      ctx.fillStyle = grad;
      ctx.fill();

      // Specular Silver Edge Highlight
      ctx.strokeStyle = (w === 4) ? 'rgba(220, 225, 235, 0.18)' : 'rgba(255, 255, 255, 0.06)';
      ctx.lineWidth = (w === 4) ? 1.5 : 1;
      ctx.stroke();
    }

    // High-End Subtle Fluid Caustic Vignette
    const vignette = ctx.createRadialGradient(
      width * 0.5, height * 0.5, width * 0.2,
      width * 0.5, height * 0.5, width * 0.8
    );
    vignette.addColorStop(0, 'rgba(0, 0, 0, 0)');
    vignette.addColorStop(1, 'rgba(0, 0, 0, 0.7)');
    ctx.fillStyle = vignette;
    ctx.fillRect(0, 0, width, height);
  }
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.liquidEngine = new LiquidEngine('fluidCanvas');
});
