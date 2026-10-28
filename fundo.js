(() => {
    const c = document.createElement('canvas'); c.className = 'bg'; document.body.prepend(c); const x = c.getContext('2d'); let W, H, S = [];
    const rs = () => { W = c.width = innerWidth; H = c.height = innerHeight; S = Array.from({ length: Math.min(300, W * H / 5000 | 0) }, () => ({ x: Math.random() * W, y: Math.random() * H, z: Math.random() * .8 + .2, p: Math.random() * 6 })) }; rs(); onresize = rs;
    (function f(t) {
        x.fillStyle = '#05030f'; x.fillRect(0, 0, W, H);
        for (const [cx, cy, col] of [[.28, .3, '90,40,160'], [.8, .8, '160,60,50']]) { const X = W * cx + Math.sin(t / 9000 + cx * 9) * 70, Y = H * cy + Math.cos(t / 11000) * 50, g = x.createRadialGradient(X, Y, 0, X, Y, W * .5); g.addColorStop(0, `rgba(${col},.32)`); g.addColorStop(1, `rgba(${col},0)`); x.fillStyle = g; x.fillRect(0, 0, W, H) }
        x.fillStyle = '#fff'; for (const s of S) { s.x -= s.z * .18; if (s.x < 0) s.x = W; x.globalAlpha = .35 + .65 * Math.abs(Math.sin(t / 1600 + s.p)); x.fillRect(s.x, s.y, s.z * 2, s.z * 2) }
        x.globalAlpha = 1; requestAnimationFrame(f)
    })(0)
})();