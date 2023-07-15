import React, { useEffect, useRef } from 'react';

const CanvasAnimation = () => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const linesRef = useRef([]);
  const posRef = useRef({ x: 0, y: 0 });
  const fRef = useRef(null);

  useEffect(() => {
    const init = () => {
      const E = {
        debug: true,
        friction: 0.5,
        trails: 90,
        size: 35,
        dampening: 0.25,
        tension: 0.98,
      };

      const Node = function () {
        this.x = 0;
        this.y = 0;
        this.vy = 0;
        this.vx = 0;
      };

      const n = function (e) {
        this.init(e || {});
      };
      n.prototype = {
        init: function (e) {
          this.phase = e.phase || 0;
          this.offset = e.offset || 0;
          this.frequency = e.frequency || 0.001;
          this.amplitude = e.amplitude || 1;
        },
        update: function () {
          this.phase += this.frequency;
          return this.offset + Math.sin(this.phase) * this.amplitude;
        },
      };

      const Line = function (e) {
        this.init(e || {});
      };
      Line.prototype = {
        init: function (e) {
          this.spring = e.spring + 0.1 * Math.random() - 0.05;
          this.friction = E.friction + 0.01 * Math.random() - 0.005;
          this.nodes = [];
          for (let n = 0; n < E.size; n++) {
            const t = new Node();
            t.x = posRef.current.x;
            t.y = posRef.current.y;
            this.nodes.push(t);
          }
        },
        update: function () {
          let e = this.spring;
          let t = this.nodes[0];
          t.vx += (posRef.current.x - t.x) * e;
          t.vy += (posRef.current.y - t.y-70) * e;
          for (let n = 0, i = this.nodes.length; n < i; n++) {
            t = this.nodes[n];
            if (n > 0) {
              const o = this.nodes[n - 1];
              t.vx += (o.x - t.x) * e;
              t.vy += (o.y - t.y) * e;
              t.vx += o.vx * E.dampening;
              t.vy += o.vy * E.dampening;
            }
            t.vx *= this.friction;
            t.vy *= this.friction;
            t.x += t.vx;
            t.y += t.vy;
            e *= E.tension;
          }
        },
        draw: function () {
          let n = this.nodes[0].x;
          let i = this.nodes[0].y;
          ctxRef.current.beginPath();
          ctxRef.current.moveTo(n, i);
          for (let a = 1, o = this.nodes.length - 2; a < o; a++) {
            const e = this.nodes[a];
            const t = this.nodes[a + 1];
            n = 0.5 * (e.x + t.x);
            i = 0.5 * (e.y + t.y);
            ctxRef.current.quadraticCurveTo(e.x, e.y, n, i);
          }
          const e = this.nodes[this.nodes.length - 2];
          const t = this.nodes[this.nodes.length - 1];
          ctxRef.current.quadraticCurveTo(e.x, e.y, t.x, t.y);
          ctxRef.current.stroke();
          ctxRef.current.closePath();
        },
      };

      const onMousemove = (e) => {
        const createLines = () => {
          const lines = [];
          for (let i = 0; i < E.trails; i++)
            lines.push(new Line({ spring: 0.45 + (i / E.trails) * 0.025 }));
          linesRef.current = lines;
        };

        const handleMouseMove = (e) => {
          if (e.touches) {
            posRef.current.x = e.touches[0].pageX;
            posRef.current.y = e.touches[0].pageY;
          } else {
            posRef.current.x = e.clientX;
            posRef.current.y = e.clientY;
          }
          e.preventDefault();
        };

        const handleTouchMove = (e) => {
          if (e.touches.length === 1) {
            posRef.current.x = e.touches[0].pageX;
            posRef.current.y = e.touches[0].pageY;
          }
        };

        document.removeEventListener('mousemove', onMousemove);
        document.removeEventListener('touchstart', onMousemove);
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('touchmove', handleMouseMove);
        document.addEventListener('touchstart', handleTouchMove);
        handleMouseMove(e);
        createLines();
        render();
      };

      const render = () => {
        if (ctxRef.current.running) {
          ctxRef.current.globalCompositeOperation = 'source-over';
          ctxRef.current.clearRect(0, 0, ctxRef.current.canvas.width, ctxRef.current.canvas.height);
          ctxRef.current.globalCompositeOperation = 'lighter';
          ctxRef.current.strokeStyle = `hsla(${Math.round(fRef.current.update())}, 90%, 50%, 0.25)`;
          ctxRef.current.lineWidth = 1;
          for (let i = 0; i < E.trails; i++) {
            const line = linesRef.current[i];
            line.update();
            line.draw();
          }
          ctxRef.current.frame++;
          window.requestAnimationFrame(render);
        }
      };

      const resizeCanvas = () => {
        ctxRef.current.canvas.width = window.innerWidth - 20;
        ctxRef.current.canvas.height = 860;
      };

      const renderCanvas = () => {
        ctxRef.current = canvasRef.current.getContext('2d');
        ctxRef.current.running = true;
        ctxRef.current.frame = 1;
        fRef.current = new n({
          phase: Math.random() * 2 * Math.PI,
          amplitude: 85,
          frequency: 0.0015,
          offset: 285,
        });
        document.addEventListener('mousemove', onMousemove);
        document.addEventListener('touchstart', onMousemove);
        document.body.addEventListener('orientationchange', resizeCanvas);
        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('focus', () => {
          if (!ctxRef.current.running) {
            ctxRef.current.running = true;
            render();
          }
        });
        window.addEventListener('blur', () => {
          ctxRef.current.running = true;
        });
        resizeCanvas();
      };

      renderCanvas();
    };

    init();
  }, []);

  return <canvas ref={canvasRef} id="canvas" className='rainer'></canvas>;
};

export default CanvasAnimation;
