var q = document.getElementById('q'),
    // s = window.screen,
    w = q.width = window.innerWidth,
    h = q.height = window.innerHeight,
    p = Array(256).join(1).split(''),
    c = q.getContext('2d'),
    m = Math;
setInterval(function() {
    // w = q.width = window.innerWidth;
    // h = q.height = window.innerHeight;
    c.fillStyle = 'rgba(0, 0, 0, 0.05)';
    c.fillRect(0, 0, w, h);
    c.fillStyle='rgba(0,255,0,1)';
    p = p.map(function(v, i) {
        r = m.random();
        c.fillText(String.fromCharCode(m.floor(2720+r*33)), i*10, v);
        v += 10;
        return v > 768 + r * 1e4?0 : v;
    });
}, 33);