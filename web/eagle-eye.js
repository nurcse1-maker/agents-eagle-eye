(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  function __accessProp(key) {
    return this[key];
  }
  var __toCommonJS = (from) => {
    var entry = (__moduleCache ??= new WeakMap).get(from), desc;
    if (entry)
      return entry;
    entry = __defProp({}, "__esModule", { value: true });
    if (from && typeof from === "object" || typeof from === "function") {
      for (var key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(entry, key))
          __defProp(entry, key, {
            get: __accessProp.bind(from, key),
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
          });
    }
    __moduleCache.set(from, entry);
    return entry;
  };
  var __moduleCache;

  // bridge.ts
  var exports_bridge = {};

  // shared/palette.ts
  var ICON_COLOR = {
    doc: [52, 150, 255],
    search: [40, 175, 255],
    code: [178, 82, 255],
    mail: [150, 160, 235],
    chart: [255, 168, 52],
    image: [52, 242, 112],
    bell: [150, 160, 235],
    globe: [150, 226, 255],
    pencil: [52, 172, 255],
    api: [150, 160, 235],
    gear: [88, 255, 82],
    database: [255, 162, 52],
    check: [255, 172, 62]
  };
  var DUST_PALETTE = [
    [70, 150, 255],
    [170, 90, 255],
    [255, 170, 70],
    [70, 255, 150],
    [120, 230, 255],
    [235, 240, 255]
  ];

  // shared/status.ts
  var STATUS = {
    running: { label: "Running", dot: [46, 255, 150], power: 1, flow: 1, spin: 1, tokenRate: 300, ticks: true },
    thinking: { label: "Thinking", dot: [255, 196, 78], power: 0.9, flow: 0.6, spin: 2.2, tokenRate: 110, ticks: true },
    waiting: { label: "Waiting", dot: [255, 184, 82], power: 0.62, flow: 0.25, spin: 0.35, tokenRate: 0, ticks: false },
    idle: { label: "Idle", dot: [44, 200, 255], power: 0.7, flow: 0.2, spin: 0.3, tokenRate: 0, ticks: false },
    completed: { label: "Completed", dot: [118, 228, 255], power: 0.3, flow: 0, spin: 0, tokenRate: 0, ticks: false },
    stopped: { label: "Stopped", dot: [118, 126, 160], power: 0.04, flow: 0, spin: 0, tokenRate: 0, ticks: false },
    offline: { label: "Offline", dot: [118, 126, 160], power: 0.04, flow: 0, spin: 0, tokenRate: 0, ticks: false }
  };
  var FINISHED = new Set(["completed", "stopped", "offline"]);
  var LIVE = new Set(["running", "thinking", "waiting"]);
  var NEXT_STATUS = {
    running: ["thinking", "completed", "waiting", "running"],
    thinking: ["running", "completed"],
    waiting: ["running", "thinking"],
    idle: ["running", "waiting"],
    completed: ["idle", "running"],
    stopped: ["running"],
    offline: ["running"]
  };
  var GREY = [112, 120, 156];

  // shared/defaults.ts
  var col = (icon) => [...ICON_COLOR[icon]];
  var DEFAULT_AGENTS = [
    { id: "planner", name: "Planner Agent", icon: "doc", status: "running", tokens: 312000, seconds: 501, x: 467, y: 158, radius: 66, color: col("doc") },
    { id: "research", name: "Research Agent", icon: "search", status: "running", tokens: 423000, seconds: 734, x: 198, y: 298, radius: 62, color: col("search") },
    { id: "code", name: "Code Agent", icon: "code", status: "running", tokens: 621000, seconds: 948, x: 735, y: 315, radius: 64, color: col("code") },
    { id: "email", name: "Email Agent", icon: "mail", status: "stopped", tokens: 0, seconds: 0, x: 117, y: 473, radius: 48, color: col("mail") },
    { id: "analysis", name: "Analysis Agent", icon: "chart", status: "thinking", tokens: 198000, seconds: 392, x: 777, y: 568, radius: 60, color: col("chart") },
    { id: "vision", name: "Vision Agent", icon: "image", status: "running", tokens: 391000, seconds: 716, x: 101, y: 637, radius: 60, color: col("image") },
    { id: "notify", name: "Notification Agent", icon: "bell", status: "stopped", tokens: 0, seconds: 0, x: 815, y: 763, radius: 42, color: col("bell") },
    { id: "web", name: "Web Agent", icon: "globe", status: "completed", tokens: 154000, seconds: 462, x: 128, y: 886, radius: 61, color: col("globe") },
    { id: "writer", name: "Writer Agent", icon: "pencil", status: "idle", tokens: 42000, seconds: 131, x: 805, y: 922, radius: 57, color: col("pencil") },
    { id: "api", name: "API Agent", icon: "api", status: "offline", tokens: 0, seconds: 0, x: 98, y: 1108, radius: 43, color: col("api") },
    { id: "executor", name: "Executor Agent", icon: "gear", status: "running", tokens: 512000, seconds: 1083, x: 724, y: 1084, radius: 61, color: col("gear") },
    { id: "db", name: "DB Agent", icon: "database", status: "running", tokens: 287000, seconds: 557, x: 350, y: 1170, radius: 61, color: col("database") },
    { id: "qa", name: "QA Agent", icon: "check", status: "waiting", tokens: 0, seconds: 0, x: 660, y: 1270, radius: 57, color: col("check") }
  ];

  // shared/format.ts
  var pad2 = (n) => n < 10 ? "0" + n : "" + n;
  function fmtTokens(n) {
    if (n >= 1e6)
      return (n / 1e6).toFixed(2) + "M";
    if (n >= 1000)
      return Math.floor(n / 1000) + "K";
    return String(Math.floor(n));
  }
  function fmtTime(sec) {
    const s = Math.floor(sec);
    const h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60);
    if (h > 0)
      return `${h}:${pad2(m)}:${pad2(s % 60)}`;
    return `${m}:${pad2(s % 60)}`;
  }

  // shared/rng.ts
  function seeded(seed) {
    let s = seed >>> 0;
    return () => {
      s = s + 1831565813 >>> 0;
      let t = s;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }

  // agent-network.ts
  var DESIGN_W = 1024;
  var DESIGN_H = 1536;
  var DESIGN_CX = 512;
  var DESIGN_CY = 755;
  var CENTER_R = 135;
  var LAUNCH_CHARGE = 0.55;
  var LAUNCH_FLY = 0.8;
  var LAUNCH = LAUNCH_CHARGE + LAUNCH_FLY;
  var NOVA_CHARGE = 1.15;
  var NOVA_AFTER = 3.6;
  var FONT = 'Inter, "Segoe UI", system-ui, -apple-system, Roboto, "Helvetica Neue", sans-serif';
  var TAU = Math.PI * 2;
  var clamp = (v, a = 0, b = 1) => v < a ? a : v > b ? b : v;
  var lerp = (a, b, t) => a + (b - a) * t;
  var damp = (a, b, lambda, dt) => a + (b - a) * (1 - Math.exp(-lambda * dt));
  var easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
  var mix = (a, b, t) => [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];
  var lighten = (c, t) => mix(c, [255, 255, 255], t);
  var rgba = (c, a) => `rgba(${Math.round(c[0])},${Math.round(c[1])},${Math.round(c[2])},${clamp(a).toFixed(3)})`;
  var rnd = (a, b) => a + Math.random() * (b - a);
  var FLARE_STOPS = [
    [0, [255, 205, 255]],
    [0.14, [226, 118, 255]],
    [0.38, [168, 92, 255]],
    [0.62, [84, 152, 255]],
    [0.84, [96, 232, 255]],
    [1, [255, 215, 255]]
  ];
  var FLARE_LUT = Array.from({ length: 65 }, (_, i) => {
    const h = i / 64;
    for (let k = 1;k < FLARE_STOPS.length; k++) {
      const [h1, c1] = FLARE_STOPS[k];
      if (h <= h1) {
        const [h0, c0] = FLARE_STOPS[k - 1];
        return mix(c0, c1, (h - h0) / (h1 - h0));
      }
    }
    return FLARE_STOPS[FLARE_STOPS.length - 1][1];
  });
  var flareCol = (h) => FLARE_LUT[Math.round(clamp(h) * 64)];
  var FLARE_RAILS = [-0.92, -0.5, -0.12, 0.18, 0.55, 0.9];

  class Spring {
    x;
    target;
    k;
    c;
    v = 0;
    constructor(x = 0, target = 0, k = 170, c = 14) {
      this.x = x;
      this.target = target;
      this.k = k;
      this.c = c;
    }
    step(dt) {
      const n = Math.max(1, Math.ceil(dt / 0.008));
      const h = dt / n;
      for (let i = 0;i < n; i++) {
        this.v += (this.k * (this.target - this.x) - this.c * this.v) * h;
        this.x += this.v * h;
      }
      return this.x;
    }
  }
  var spriteCache = new Map;
  function glowSprite(c) {
    const q = [(c[0] >> 3 << 3) + 4, (c[1] >> 3 << 3) + 4, (c[2] >> 3 << 3) + 4];
    const key = q.join(",");
    let s = spriteCache.get(key);
    if (!s) {
      s = document.createElement("canvas");
      s.width = s.height = 96;
      const g = s.getContext("2d");
      const grad = g.createRadialGradient(48, 48, 0, 48, 48, 48);
      grad.addColorStop(0, rgba(q, 1));
      grad.addColorStop(0.2, rgba(q, 0.55));
      grad.addColorStop(0.5, rgba(q, 0.14));
      grad.addColorStop(1, rgba(q, 0));
      g.fillStyle = grad;
      g.fillRect(0, 0, 96, 96);
      spriteCache.set(key, s);
    }
    return s;
  }
  function drawGlow(ctx, x, y, r, c, a) {
    if (a <= 0.004 || r <= 0.5)
      return;
    ctx.globalAlpha = clamp(a);
    ctx.drawImage(glowSprite(c), x - r, y - r, r * 2, r * 2);
    ctx.globalAlpha = 1;
  }
  function gearPath() {
    const p = new Path2D;
    const teeth = 8, ro = 10.4, ri = 7.9, step = TAU / teeth;
    const pts = [];
    for (let i = 0;i < teeth; i++) {
      const a0 = i * step;
      for (const [da, r] of [[-0.3, ri], [-0.17, ro], [0.17, ro], [0.3, ri]]) {
        pts.push([12 + Math.cos(a0 + da * step * 2) * r, 12 + Math.sin(a0 + da * step * 2) * r]);
      }
    }
    p.moveTo(pts[0][0], pts[0][1]);
    for (let i = 1;i < pts.length; i++)
      p.lineTo(pts[i][0], pts[i][1]);
    p.closePath();
    p.moveTo(15.2, 12);
    p.arc(12, 12, 3.2, 0, TAU);
    return p;
  }
  var P = {
    doc: new Path2D("M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4 M13 2l6 6v2 M13 2v6h6 M8 9h2 M8 13h5 M8 17h2"),
    code: new Path2D("M8 7l-5 5 5 5 M16 7l5 5-5 5 M14 4l-4 16"),
    api: new Path2D("M9 8l-4 4 4 4 M15 8l4 4-4 4 M13.5 5.5l-3 13"),
    mailBox: new Path2D("M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"),
    image: new Path2D("M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z M21 15l-5-5L5 21"),
    bell: new Path2D("M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9 M13.7 21a2 2 0 0 1-3.4 0"),
    pencil: new Path2D("M17 3a2.85 2.85 0 0 1 4 4L7.5 20.5 2 22l1.5-5.5z M15 5l4 4"),
    db: new Path2D("M12 8c4.4 0 8-1.3 8-3s-3.6-3-8-3-8 1.3-8 3 3.6 3 8 3z M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5 M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"),
    box: new Path2D("M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"),
    gear: gearPath(),
    brain: [
      "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
      "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
      "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",
      "M17.599 6.5a3 3 0 0 0 .399-1.375",
      "M6.003 5.125A3 3 0 0 0 6.401 6.5",
      "M3.477 10.896a4 4 0 0 1 .585-.396",
      "M19.938 10.5a4 4 0 0 1 .585.396",
      "M6 18a4 4 0 0 1-1.967-.516",
      "M19.967 17.484A4 4 0 0 1 18 18"
    ].map((d) => new Path2D(d))
  };
  function drawBrain(ctx) {
    for (const p of P.brain)
      ctx.stroke(p);
  }
  var widthCache = new Map;
  function measure(ctx, font, str) {
    const key = font + "|" + str;
    let w = widthCache.get(key);
    if (w === undefined) {
      ctx.font = font;
      w = ctx.measureText(str).width;
      if (widthCache.size > 600)
        widthCache.clear();
      widthCache.set(key, w);
    }
    return w;
  }
  function mountAgentNetwork(container, options = {}) {
    const opts = {
      simulate: true,
      maxDpr: 2,
      background: true,
      timeScale: 1,
      flare: true,
      orchestrator: { name: "Orchestrator", model: "Claude 4.1" },
      ...options
    };
    const reduced = options.reducedMotion ?? (typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches);
    const motion = reduced ? 0.35 : 1;
    const canvas = document.createElement("canvas");
    canvas.setAttribute("role", "img");
    canvas.setAttribute("aria-label", "AI agent orchestration network");
    Object.assign(canvas.style, {
      position: "absolute",
      inset: "0",
      width: "100%",
      height: "100%",
      display: "block",
      touchAction: "none",
      userSelect: "none",
      outline: "none"
    });
    if (getComputedStyle(container).position === "static")
      container.style.position = "relative";
    container.appendChild(canvas);
    const ctx = canvas.getContext("2d", { alpha: !opts.background ? true : false });
    let W = 1, H = 1, dpr = 1, S = 1, LW = DESIGN_W, LH = DESIGN_H, stretchX = 1, stretchY = 1;
    let cxL = LW / 2, cyL = LH / 2;
    let agents = [];
    let dust = [];
    const sparks = [];
    const ripples = [];
    const flareP = [];
    const flare = {
      th: -0.95,
      thT: -0.95,
      ph: -0.55,
      phT: -0.55,
      sc: 0.25,
      scT: 0.25,
      el: 1,
      elT: 1,
      di: 0,
      diT: 0,
      dn: 1,
      dnT: 1,
      next: 0,
      k: 0,
      kk: 0,
      acc: 0,
      wacc: 0,
      sacc: 0,
      wisps: 0,
      cx: 0,
      cy: 0,
      A: 1,
      B: 1,
      c: 1,
      s: 0,
      a0: 0,
      sA: 0,
      sB: 1,
      fax: 0,
      fay: 0,
      fbx: 0,
      fby: 0,
      nax: 0,
      nay: 0,
      nbx: 0,
      nby: 0
    };
    const fm = { th: -0.95, ph: -0.55, sc: 0.25, el: 1, di: 0, dn: 1 };
    const stars = Array.from({ length: 170 }, () => ({
      x: Math.random(),
      y: Math.random(),
      s: rnd(0.4, 1.6),
      ph: rnd(0, TAU),
      f: rnd(0.6, 2.4),
      z: rnd(0.2, 1)
    }));
    const center = {
      px: new Spring(0, 0, 60, 9),
      py: new Spring(0, 0, 60, 9),
      spawn: new Spring(0, 0, 120, 10),
      x: 0,
      y: 0,
      feed: 0,
      beat: 0,
      press: 0,
      pulseT: 0.8,
      shimmerT: 0,
      flash: 0
    };
    const ptr = {
      x: -9999,
      y: -9999,
      px: 0,
      py: 0,
      active: false,
      down: false,
      moved: false,
      id: -1,
      startX: 0,
      startY: 0,
      target: null,
      hover: null,
      dragging: () => false
    };
    let t = 0;
    let ft = 0;
    const FSLOW = 0.4;
    let last = 0;
    let raf = 0;
    let paused = false;
    let simT = 4;
    let destroyed = false;
    function buildAgents(specs) {
      const rand = seeded(7);
      agents = specs.map((spec, i) => makeAgent(spec, i, rand, LAUNCH + 0.3 + i * 0.22));
      layout(true);
    }
    function makeAgent(spec, i, rand, spawnAt) {
      const cfg = STATUS[spec.status];
      const strands = [];
      const K = 9;
      const side = rand() > 0.5 ? 1 : -1;
      for (let j = 0;j < K; j++) {
        const core = j === 0;
        strands.push({
          off: core ? 0 : j / (K - 1) * 2 - 1 + (rand() - 0.5) * 0.3,
          a1: (core ? 0.5 : rnd(0.25, 0.95)) * (rand() > 0.3 ? 1 : -1) * side,
          a2: (core ? 0.5 : rnd(0.25, 0.95)) * (rand() > 0.3 ? -1 : 1) * side,
          f1: rnd(0.4, 1.1),
          f2: rnd(0.4, 1.1),
          p1: rnd(0, TAU),
          p2: rnd(0, TAU),
          w: core ? 2 : rnd(0.5, 1.3),
          alpha: core ? 0.95 : rnd(0.18, 0.5),
          pts: new Array(8).fill(0)
        });
      }
      const accent = spec.color;
      return {
        spec,
        index: i,
        accent,
        r: spec.radius ?? 58,
        baseR: spec.radius ?? 58,
        hx: 0,
        hy: 0,
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        col: mix(accent, GREY, 1 - cfg.power),
        dot: cfg.dot,
        power: cfg.power,
        flow: cfg.flow,
        spin: cfg.spin,
        detail: cfg.power > 0.15 ? 1 : 0,
        spawn: new Spring(0, 0, 150, 11),
        spawnAt,
        spawned: false,
        hover: new Spring(1, 1, 220, 16),
        labelShift: new Spring(0, 0, 200, 18),
        tokens: spec.tokens,
        seconds: spec.seconds,
        introCount: 0,
        grow: 0,
        hit: 0,
        flash: 0,
        statusT: 99,
        tokText: "",
        timeText: "",
        tokFlash: 0,
        timeFlash: 0,
        lean: [0, 0],
        rest: FINISHED.has(spec.status) ? 1 : 0,
        phase: rnd(0, TAU),
        fs: rnd(0.8, 1.25),
        side,
        flip: false,
        strands,
        packets: [],
        spawnAcc: rnd(0, 1),
        launched: false,
        launchGrow: 0,
        charging: false,
        novaS: 1,
        novaL: 0,
        dragging: false,
        grabX: 0,
        grabY: 0
      };
    }
    function layout(snap = false) {
      S = Math.max(0.05, Math.min(W / DESIGN_W, H / DESIGN_H));
      LW = W / S;
      LH = H / S;
      stretchX = clamp(LW / DESIGN_W, 1, 1.7);
      stretchY = clamp(LH / DESIGN_H, 1, 1.7);
      cxL = LW / 2;
      cyL = LH / 2;
      for (const a of agents) {
        a.hx = cxL + (a.spec.x - DESIGN_CX) * stretchX;
        a.hy = cyL + (a.spec.y - DESIGN_CY) * stretchY;
        const lw = Math.max(measure(ctx, `600 24px ${FONT}`, a.spec.name), 175);
        if (a.hx > cxL)
          a.hx = Math.min(a.hx, Math.max(cxL + CENTER_R + a.r + 20, LW - 8 - a.r - 30 - lw));
        if (snap) {
          a.x = a.hx;
          a.y = a.hy;
        }
        a.flip = a.hx + a.r + 30 + lw > LW - 8 && a.hx > cxL;
      }
      const want = clamp(Math.round(LW * LH / (DESIGN_W * DESIGN_H) * 560 * (reduced ? 0.4 : 1)), 180, 900);
      if (dust.length === 0 || Math.abs(dust.length - want) / want > 0.25) {
        dust = Array.from({ length: want }, () => makeDust(true)).sort((a, b) => a.cls - b.cls);
      }
    }
    function makeDust(initial) {
      const ang = rnd(0, TAU);
      const maxR = Math.hypot(LW, LH) * 0.55;
      let x, y;
      if (initial) {
        x = rnd(-40, LW + 40);
        y = rnd(-40, LH + 40);
      } else {
        const rr = rnd(CENTER_R * 1.6, maxR);
        x = cxL + Math.cos(ang) * rr;
        y = cyL + Math.sin(ang) * rr * 1.1;
      }
      const dx = x - cxL, dy = y - cyL, d = Math.hypot(dx, dy) + 1;
      const vc = Math.sqrt(GM_CENTER / d) * rnd(0.45, 1.05) * motion;
      const dir = Math.random() < 0.88 ? 1 : -1;
      return {
        x,
        y,
        vx: -dy / d * vc * dir,
        vy: dx / d * vc * dir,
        s: rnd(0.7, 2.3),
        cls: Math.floor(Math.pow(Math.random(), 1.5) * DUST_PALETTE.length),
        ph: rnd(0, TAU),
        tf: rnd(0.8, 3),
        age: initial ? 5 : 0,
        big: Math.random() < 0.12
      };
    }
    const GM_CENTER = 260000;
    function resize() {
      if (destroyed)
        return;
      if (container.clientWidth < 2 || container.clientHeight < 2)
        return;
      const { clientWidth: w, clientHeight: h } = container;
      const nd = Math.min(window.devicePixelRatio || 1, opts.maxDpr);
      const pw = Math.round(w * nd), ph = Math.round(h * nd);
      const changed = pw !== canvas.width || ph !== canvas.height || w !== W || h !== H;
      dpr = nd;
      W = w;
      H = h;
      if (changed) {
        canvas.width = pw;
        canvas.height = ph;
        layout();
        if (!destroyed && last)
          draw();
      }
    }
    function addRipple(x, y, r0, r1, col, max = 1.2, w = 2.5) {
      if (ripples.length > 60)
        ripples.shift();
      ripples.push({ x, y, r0, r1, life: 0, max, col, w });
    }
    function burst(x, y, col, n, speed = 60) {
      for (let i = 0;i < n && sparks.length < 700; i++) {
        const a = rnd(0, TAU), sp = rnd(0.2, 1) * speed;
        sparks.push({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, life: 0, max: rnd(0.5, 1.3), size: rnd(0.8, 2.2), col });
      }
    }
    const fxList = [];
    let shake = 0;
    const WHITE = [255, 255, 255], WARM = [255, 196, 140];
    function sparkAt(x, y, vx, vy, max, size, col) {
      if (sparks.length < 900)
        sparks.push({ x, y, vx, vy, life: 0, max, size, col });
    }
    function newFx(kind, a, intro = false) {
      const f = { kind, a, t: 0, intro, acc: 0, fired: false, arrived: false, blasted: false, hx: 0, hy: 0, u: 0, trail: [], rays: [], clumps: [] };
      fxList.push(f);
      return f;
    }
    function startLaunch(a, intro) {
      newFx("launch", a, intro);
    }
    function startNova(a) {
      if (fxList.some((f) => f.kind === "nova" && f.a === a))
        return;
      const f = newFx("nova", a);
      for (let i = 0;i < 18; i++)
        f.rays.push({ ang: rnd(0, TAU), len: rnd(180, 460), w: rnd(1, 3.2) });
      for (let i = 0;i < 26; i++)
        f.clumps.push({ ang: rnd(0, TAU), dist: rnd(120, 360), size: rnd(14, 40), hot: Math.random() < 0.4, dir: Math.random() < 0.5 ? -1 : 1 });
    }
    function impact(a) {
      const c = lighten(a.accent, 0.25);
      addRipple(a.x, a.y, a.r * 0.7, a.r + 170, c, 1.2, 5);
      addRipple(a.x, a.y, a.r * 0.9, a.r + 300, a.accent, 1.9, 2.5);
      addRipple(a.x, a.y, a.r, a.r + 90, WHITE, 0.7, 3);
      for (let i = 0;i < 46; i++) {
        const an = rnd(0, TAU), sp = rnd(40, 260);
        sparkAt(a.x, a.y, Math.cos(an) * sp, Math.sin(an) * sp, rnd(0.6, 1.5), rnd(0.9, 2.4), i % 3 ? c : WHITE);
      }
      pulseAgent(a, 14);
      a.flash = 1;
      a.hit = 1.4;
      shake = Math.max(shake, 5 * motion);
      shockwave(a.x, a.y, 60);
    }
    function stepFx(dt) {
      shake = damp(shake, 0, 4.5, dt);
      for (let i = fxList.length - 1;i >= 0; i--) {
        const f = fxList[i], a = f.a;
        f.t += dt;
        const k = f.t;
        if (f.kind === "launch") {
          const ang = Math.atan2(a.y - center.y, a.x - center.x);
          const rx = center.x + Math.cos(ang) * CENTER_R, ry = center.y + Math.sin(ang) * CENTER_R;
          if (!f.fired) {
            f.fired = true;
            addRipple(center.x, center.y, CENTER_R * 0.98, CENTER_R + 300, lighten(a.accent, 0.2), 1.5, 4);
            shockwave(center.x, center.y, 45);
          }
          if (k < LAUNCH_CHARGE) {
            const e = k / LAUNCH_CHARGE;
            center.flash = Math.max(center.flash, 0.55 * e);
            center.feed = Math.min(1, center.feed + dt * 1.5);
            f.acc += dt * (70 + 160 * e);
            while (f.acc >= 1) {
              f.acc -= 1;
              const an = ang + rnd(-1, 1), d = rnd(50, 120);
              const px = rx + Math.cos(an) * d, py = ry + Math.sin(an) * d;
              const dx = rx - px, dy = ry - py, dl = Math.hypot(dx, dy) + 0.01;
              sparkAt(px, py, dx / dl * 210, dy / dl * 210, rnd(0.35, 0.7), rnd(0.9, 1.8), Math.random() < 0.5 ? WHITE : lighten(a.accent, 0.3));
            }
          } else if (k < LAUNCH) {
            const u = Math.pow((k - LAUNCH_CHARGE) / LAUNCH_FLY, 1.6);
            bez(a.strands[0].pts, u, tmp);
            f.hx = tmp[0];
            f.hy = tmp[1];
            f.u = u;
            f.trail.unshift(f.hx, f.hy);
            if (f.trail.length > 44)
              f.trail.length = 44;
            if (f.intro)
              a.launchGrow = u;
            for (let n = 0;n < 3; n++)
              sparkAt(f.hx, f.hy, rnd(-40, 40), rnd(-40, 40), rnd(0.3, 0.8), rnd(0.8, 1.8), n ? lighten(a.accent, 0.3) : WHITE);
          }
          if (k >= LAUNCH) {
            if (!f.arrived) {
              f.arrived = true;
              if (f.intro)
                a.launchGrow = 1;
              impact(a);
            }
            f.trail.length = Math.max(0, f.trail.length - 6);
          }
          if (k >= LAUNCH + 1)
            fxList.splice(i, 1);
        } else {
          if (k < NOVA_CHARGE) {
            const e = k / NOVA_CHARGE, e2 = e * e;
            a.charging = true;
            a.novaS = 1 - 0.26 * e2 + Math.sin(k * 70) * 0.014 * e2 * motion;
            a.novaL = 0.2 + 1.4 * e2;
            f.acc += dt * (40 + 220 * e2);
            while (f.acc >= 1) {
              f.acc -= 1;
              const an = rnd(0, TAU), d = a.r * rnd(1.8, 3.4);
              sparkAt(a.x + Math.cos(an) * d, a.y + Math.sin(an) * d, -Math.cos(an) * 280, -Math.sin(an) * 280, rnd(0.3, 0.6), rnd(0.9, 1.8), Math.random() < 0.5 ? WHITE : lighten(a.accent, 0.4));
            }
          } else if (!f.blasted) {
            f.blasted = true;
            a.charging = false;
            a.novaS = 1.45;
            a.novaL = 2.4;
            a.flash = 1;
            a.hit = 1.4;
            shake = Math.max(shake, 16 * motion);
            shockwave(a.x, a.y, 210);
            addRipple(a.x, a.y, a.r * 0.6, a.r + 520, WHITE, 2.6, 7);
            addRipple(a.x, a.y, a.r * 0.8, a.r + 360, lighten(a.accent, 0.3), 2, 4);
            addRipple(a.x, a.y, a.r, a.r + 220, WARM, 1.4, 3);
            for (let n = 0;n < 120; n++) {
              const an = rnd(0, TAU), sp = Math.pow(Math.random(), 0.6) * 560 + 60;
              const col = n % 4 === 0 ? WHITE : n % 4 === 1 ? WARM : lighten(a.accent, 0.3);
              sparkAt(a.x + Math.cos(an) * a.r * 0.5, a.y + Math.sin(an) * a.r * 0.5, Math.cos(an) * sp, Math.sin(an) * sp, rnd(0.9, 2.4), rnd(1, 3), col);
            }
          }
          if (k >= NOVA_CHARGE + NOVA_AFTER) {
            a.charging = false;
            fxList.splice(i, 1);
          }
        }
      }
    }
    function drawFx() {
      ctx.globalCompositeOperation = "lighter";
      for (const f of fxList) {
        const { a, t: k } = f;
        if (f.kind === "launch") {
          const ang = Math.atan2(a.y - center.y, a.x - center.x);
          const rx = center.x + Math.cos(ang) * CENTER_R, ry = center.y + Math.sin(ang) * CENTER_R;
          const lc = lighten(a.accent, 0.25);
          if (k < LAUNCH_CHARGE) {
            const e = k / LAUNCH_CHARGE;
            drawGlow(ctx, center.x, center.y, CENTER_R * (1.9 + 0.5 * e), a.accent, 0.28 * e);
            drawGlow(ctx, rx, ry, 24 + 70 * e * e, WHITE, 0.85 * e);
            drawGlow(ctx, rx, ry, 50 + 110 * e, lc, 0.55 * e);
          } else if (k < LAUNCH) {
            const q = clamp(1 - (k - LAUNCH_CHARGE) / 0.25);
            if (q > 0)
              drawGlow(ctx, rx, ry, 110, lc, 0.6 * q);
          }
          const n = f.trail.length / 2;
          for (let j = 0;j < n; j++) {
            const fr = 1 - j / n;
            drawGlow(ctx, f.trail[j * 2], f.trail[j * 2 + 1], 5 + 24 * fr, lc, 0.5 * fr);
          }
          if (k >= LAUNCH_CHARGE && k < LAUNCH) {
            drawGlow(ctx, f.hx, f.hy, 56, a.accent, 0.8);
            drawGlow(ctx, f.hx, f.hy, 26, WHITE, 1);
          }
          if (k >= LAUNCH) {
            const tb = k - LAUNCH;
            const q = clamp(1 - tb / 0.9);
            drawGlow(ctx, a.x, a.y, a.r * (2.5 + tb * 5), lc, q * q * 0.9);
            if (tb < 0.5)
              drawGlow(ctx, a.x, a.y, a.r * 1.7, WHITE, 1 - tb / 0.5);
            ctx.strokeStyle = rgba(WHITE, q * 0.7);
            ctx.lineWidth = 3 * q + 0.5;
            ctx.beginPath();
            ctx.arc(a.x, a.y, a.r * (1 + tb * 2.6), 0, TAU);
            ctx.stroke();
          }
        } else if (k < NOVA_CHARGE) {
          const e = k / NOVA_CHARGE, e2 = e * e;
          const hot = mix(a.accent, WHITE, 0.5);
          drawGlow(ctx, a.x, a.y, a.r * (1.8 + 2.2 * e2), hot, 0.3 + 0.6 * e2);
          drawGlow(ctx, a.x, a.y, a.r * (0.8 + e), WHITE, e2 * 0.9);
          ctx.lineWidth = 2;
          for (let j = 0;j < 3; j++) {
            const ph = (e * 1.6 + j / 3) % 1;
            ctx.strokeStyle = rgba(hot, (1 - ph) * 0.5 * e);
            ctx.beginPath();
            ctx.arc(a.x, a.y, a.r * (3.2 - 2.4 * ph), 0, TAU);
            ctx.stroke();
          }
        } else {
          const tb = k - NOVA_CHARGE;
          const cool = mix(a.accent, WHITE, 0.3);
          if (tb < 0.8) {
            const q = 1 - tb / 0.8;
            drawGlow(ctx, a.x, a.y, a.r * (6 + tb * 10), [255, 250, 240], q * q);
            drawGlow(ctx, a.x, a.y, Math.max(LW, LH) * 0.9, cool, 0.35 * q * q);
          }
          const ks = clamp(tb / 3);
          for (const [sc, al] of [[1, 0.22], [0.7, 0.14]]) {
            ctx.strokeStyle = rgba(cool, al * Math.pow(1 - ks, 1.5));
            ctx.lineWidth = 18 * (1 - ks) + 2;
            ctx.beginPath();
            ctx.arc(a.x, a.y, easeOutCubic(ks) * (a.r + 430) * sc, 0, TAU);
            ctx.stroke();
          }
          ctx.lineCap = "round";
          for (const r of f.rays) {
            const kr = clamp(tb / 1.6), er = easeOutCubic(kr);
            const al = Math.pow(1 - kr, 1.5) * 0.8;
            if (al < 0.01)
              continue;
            const c = Math.cos(r.ang), sn = Math.sin(r.ang);
            ctx.strokeStyle = rgba(WHITE, al);
            ctx.lineWidth = r.w * (1 - kr);
            ctx.beginPath();
            ctx.moveTo(a.x + c * (a.r * 0.5 + er * r.len * 0.45), a.y + sn * (a.r * 0.5 + er * r.len * 0.45));
            ctx.lineTo(a.x + c * (a.r * 0.7 + er * r.len), a.y + sn * (a.r * 0.7 + er * r.len));
            ctx.stroke();
          }
          const kc = clamp(tb / 3.2);
          const alc = 0.5 * Math.pow(1 - kc, 1.4);
          if (alc > 0.01) {
            for (const c of f.clumps) {
              const d = easeOutCubic(kc) * c.dist + a.r * 0.5, an = c.ang + kc * 0.5 * c.dir;
              drawGlow(ctx, a.x + Math.cos(an) * d, a.y + Math.sin(an) * d, c.size * (0.6 + kc * 0.9), c.hot ? WARM : cool, alc);
            }
          }
        }
      }
      ctx.globalCompositeOperation = "source-over";
    }
    function shockwave(x, y, strength) {
      for (const p of dust) {
        const dx = p.x - x, dy = p.y - y, d = Math.hypot(dx, dy) + 1;
        if (d > 520)
          continue;
        const f = strength / (1 + d / 90) * motion;
        p.vx += dx / d * f;
        p.vy += dy / d * f;
      }
      for (const a of agents) {
        const dx = a.x - x, dy = a.y - y, d = Math.hypot(dx, dy) + 1;
        if (d > 600 || d < 8)
          continue;
        const f = strength * 3.2 / (1 + d / 120);
        a.vx += dx / d * f;
        a.vy += dy / d * f;
      }
    }
    function pulseAgent(a, n = 6) {
      for (let i = 0;i < n && a.packets.length < 22; i++) {
        a.packets.push({
          si: Math.floor(Math.random() * a.strands.length),
          t: i % 2 ? 1 : 0,
          dir: i % 2 ? -1 : 1,
          spd: rnd(0.45, 0.8),
          size: rnd(1, 1.5),
          sparkT: 0
        });
      }
      a.hit = Math.min(1.4, a.hit + 0.5);
      addRipple(a.x, a.y, a.r, a.r + 70, a.col, 1, 2.5);
    }
    function setStatus(a, s) {
      if (a.spec.status === s)
        return;
      const prev = a.spec.status;
      const wake = STATUS[prev].power < 0.1 && STATUS[s].power > 0.1;
      const launch = (s === "running" || s === "thinking") && !LIVE.has(prev);
      const nova = s === "completed" && !FINISHED.has(prev);
      a.spec.status = s;
      a.statusT = 0;
      if (launch) {
        startLaunch(a, false);
        return;
      }
      if (nova) {
        startNova(a);
        return;
      }
      a.flash = 1;
      pulseAgent(a, wake ? 12 : 5);
      burst(a.x, a.y, STATUS[s].dot, wake ? 26 : 12, 90);
      addRipple(a.x, a.y, a.r * 0.8, a.r + 120, STATUS[s].dot, 1.4, 3);
    }
    function update(dt) {
      const time = t;
      center.spawn.target = time > 0.05 ? 1 : 0;
      center.spawn.step(dt);
      let ctx0 = 0, cty0 = 0;
      if (ptr.active) {
        const dx = ptr.x - cxL, dy = ptr.y - cyL, d = Math.hypot(dx, dy) + 1;
        const m = Math.min(12, d * 0.02);
        ctx0 = dx / d * m;
        cty0 = dy / d * m;
      }
      center.px.target = ctx0;
      center.py.target = cty0;
      center.px.step(dt);
      center.py.step(dt);
      center.x = cxL + center.px.x;
      center.y = cyL + center.py.x;
      center.feed = damp(center.feed, 0, 2.2, dt);
      center.flash = damp(center.flash, 0, 3, dt);
      center.press = damp(center.press, ptr.down && ptr.target === "center" ? 1 : 0, 12, dt);
      const active = agents.reduce((n, a) => n + (a.power > 0.3 ? 1 : 0), 0);
      const bpm = 0.55 + active * 0.04;
      center.beat = Math.pow(Math.max(0, Math.sin(time * TAU * bpm)), 8);
      center.pulseT -= dt;
      if (center.pulseT <= 0) {
        center.pulseT = 2.4 - Math.min(1.2, active * 0.1);
        addRipple(center.x, center.y, CENTER_R * 0.98, CENTER_R + 170, [110, 150, 255], 2.4, 3);
      }
      center.shimmerT += dt;
      for (const a of agents) {
        const cfg = STATUS[a.spec.status];
        if (!a.launched && time >= a.spawnAt - LAUNCH) {
          a.launched = true;
          startLaunch(a, true);
        }
        if (!a.spawned && time >= a.spawnAt) {
          a.spawned = true;
          a.spawn.target = 1;
        }
        a.spawn.step(dt);
        const isHover = ptr.hover === a;
        a.hover.target = a.dragging ? 1.12 : isHover ? 1.07 : 1;
        a.hover.step(dt);
        a.labelShift.target = isHover ? 5 : 0;
        a.labelShift.step(dt);
        a.statusT += dt;
        a.power = damp(a.power, cfg.power, 2.6, dt);
        a.rest = damp(a.rest, FINISHED.has(a.spec.status) && !a.charging ? 1 : 0, 3, dt);
        a.novaS = damp(a.novaS, 1, 4, dt);
        a.novaL = damp(a.novaL, 0, 1.6, dt);
        a.r = a.baseR * lerp(0.68, 1.1, clamp(a.power)) * lerp(1, 0.52, a.rest);
        a.flow = damp(a.flow, cfg.flow, 2.6, dt);
        a.spin = damp(a.spin, cfg.spin, 2.6, dt);
        a.detail = damp(a.detail, cfg.power > 0.15 ? 1 : 0, 4, dt);
        a.col = mix(a.col, mix(a.accent, GREY, 1 - clamp(a.power * 1.1)), 1 - Math.exp(-5 * dt));
        a.dot = mix(a.dot, cfg.dot, 1 - Math.exp(-6 * dt));
        a.hit = damp(a.hit, 0, 2.6, dt);
        a.flash = damp(a.flash, 0, 2.2, dt);
        a.tokFlash = damp(a.tokFlash, 0, 3.2, dt);
        a.timeFlash = damp(a.timeFlash, 0, 5, dt);
        a.grow = Math.max(clamp((time - (a.spawnAt + 0.2)) / 1.3), a.launchGrow);
        a.introCount = clamp((time - a.spawnAt) / 2);
        if (cfg.tokenRate > 0) {
          a.tokens += cfg.tokenRate * dt * (0.6 + Math.random() * 0.8);
          a.seconds += dt;
        }
        const fl = 7 * motion;
        const back = 1 + 0.08 * a.rest;
        const tx = cxL + (a.hx - cxL) * back + Math.sin(time * 0.5 * a.fs + a.phase) * fl * (1 - 0.6 * a.rest);
        const ty = cyL + (a.hy - cyL) * back + Math.cos(time * 0.43 * a.fs + a.phase * 1.7) * fl * 1.3 * (1 - 0.6 * a.rest);
        let fx, fy;
        if (a.dragging) {
          fx = 280 * (ptr.x - a.grabX - a.x) - 26 * a.vx;
          fy = 280 * (ptr.y - a.grabY - a.y) - 26 * a.vy;
        } else {
          fx = 55 * (tx - a.x) - 7 * a.vx;
          fy = 55 * (ty - a.y) - 7 * a.vy;
          if (ptr.active) {
            const dx = ptr.x - a.x, dy = ptr.y - a.y, d = Math.hypot(dx, dy) + 1;
            const m = (650 * a.power + 120) / (1 + d / 190 * (d / 190));
            fx += dx / d * m;
            fy += dy / d * m;
          }
          for (const b of agents) {
            if (b === a)
              continue;
            const dx = a.x - b.x, dy = a.y - b.y, d = Math.hypot(dx, dy) + 0.01;
            const dmin = a.r + b.r + 60;
            if (d < dmin) {
              const push = (dmin - d) * 28;
              fx += dx / d * push;
              fy += dy / d * push;
            }
          }
        }
        a.vx += fx * dt;
        a.vy += fy * dt;
        a.x += a.vx * dt;
        a.y += a.vy * dt;
        a.lean[0] = damp(a.lean[0], -a.vx * 0.05, 9, dt);
        a.lean[1] = damp(a.lean[1], -a.vy * 0.05, 9, dt);
        updateStrands(a, time);
        stepPackets(a, dt);
      }
      for (let i = sparks.length - 1;i >= 0; i--) {
        const s = sparks[i];
        s.life += dt;
        if (s.life >= s.max) {
          sparks[i] = sparks[sparks.length - 1];
          sparks.pop();
          continue;
        }
        s.vx *= 1 - 1.4 * dt;
        s.vy *= 1 - 1.4 * dt;
        s.x += s.vx * dt;
        s.y += s.vy * dt;
      }
      for (let i = ripples.length - 1;i >= 0; i--) {
        ripples[i].life += dt;
        if (ripples[i].life >= ripples[i].max) {
          ripples[i] = ripples[ripples.length - 1];
          ripples.pop();
        }
      }
      stepDust(dt);
      stepFlare(dt);
      stepFx(dt);
      if (opts.simulate) {
        simT -= dt;
        if (simT <= 0 && time > 4) {
          simT = rnd(4.5, 8.5);
          const a = agents[Math.floor(Math.random() * agents.length)];
          const off = STATUS[a.spec.status].power < 0.1;
          if (!off || Math.random() < 0.3) {
            const opts2 = NEXT_STATUS[a.spec.status];
            setStatus(a, opts2[Math.floor(Math.random() * opts2.length)]);
          }
        }
      }
    }
    function updateStrands(a, time) {
      const dx = a.x - center.x, dy = a.y - center.y;
      const dist = Math.hypot(dx, dy) + 0.001;
      const ang = Math.atan2(dy, dx);
      const ux = dx / dist, uy = dy / dist, nx = -uy, ny = ux;
      const rn = a.r * a.spawn.x;
      const len = Math.max(20, dist - CENTER_R - rn);
      const wob = 0.6 + 0.4 * motion;
      for (const s of a.strands) {
        const sa = ang + s.off * 0.2;
        const sx = center.x + Math.cos(sa) * CENTER_R * 0.985;
        const sy = center.y + Math.sin(sa) * CENTER_R * 0.985;
        const ex = a.x - ux * rn * 0.97 + nx * s.off * rn * 0.22;
        const ey = a.y - uy * rn * 0.97 + ny * s.off * rn * 0.22;
        const o1 = (s.a1 * 0.5 + Math.sin(time * s.f1 + s.p1) * 0.28 * wob) * len * 0.34;
        const o2 = (s.a2 * 0.5 + Math.sin(time * s.f2 + s.p2) * 0.28 * wob) * len * 0.34;
        const p = s.pts;
        p[0] = sx;
        p[1] = sy;
        p[2] = sx + Math.cos(sa) * len * 0.36 + nx * o1;
        p[3] = sy + Math.sin(sa) * len * 0.36 + ny * o1;
        p[4] = ex - ux * len * 0.36 + nx * o2;
        p[5] = ey - uy * len * 0.36 + ny * o2;
        p[6] = ex;
        p[7] = ey;
      }
    }
    function bez(p, u, out) {
      const m = 1 - u, a = m * m * m, b = 3 * m * m * u, c = 3 * m * u * u, d = u * u * u;
      out[0] = a * p[0] + b * p[2] + c * p[4] + d * p[6];
      out[1] = a * p[1] + b * p[3] + c * p[5] + d * p[7];
    }
    const tmp = [0, 0];
    function stepPackets(a, dt) {
      a.spawnAcc += dt * a.flow * 2.4 * a.grow;
      while (a.spawnAcc >= 1) {
        a.spawnAcc -= 1;
        if (a.packets.length < 16) {
          const out = Math.random() < 0.55;
          a.packets.push({
            si: Math.floor(Math.random() * a.strands.length),
            t: out ? 0 : 1,
            dir: out ? 1 : -1,
            spd: rnd(0.16, 0.34) * (0.7 + a.flow * 0.5),
            size: rnd(0.8, 1.4),
            sparkT: 0
          });
        }
      }
      for (let i = a.packets.length - 1;i >= 0; i--) {
        const k = a.packets[i];
        k.t += k.spd * k.dir * dt;
        const s = a.strands[k.si];
        bez(s.pts, clamp(k.t), tmp);
        k.sparkT -= dt;
        if (k.sparkT <= 0 && sparks.length < 600) {
          k.sparkT = 0.045;
          sparks.push({
            x: tmp[0],
            y: tmp[1],
            vx: rnd(-14, 14),
            vy: rnd(-14, 14),
            life: 0,
            max: rnd(0.5, 1.2),
            size: rnd(0.6, 1.4),
            col: k.dir > 0 ? a.col : mix(a.col, [190, 150, 255], 0.5)
          });
        }
        if (k.t >= 1 && k.dir > 0) {
          a.hit = Math.min(1.2, a.hit + 0.28);
          burst(tmp[0], tmp[1], a.col, 3, 40);
          a.packets.splice(i, 1);
        } else if (k.t <= 0 && k.dir < 0) {
          center.feed = Math.min(1, center.feed + 0.06);
          burst(tmp[0], tmp[1], a.col, 2, 30);
          a.packets.splice(i, 1);
        } else if (k.t > 1.01 || k.t < -0.01) {
          a.packets.splice(i, 1);
        }
      }
    }
    function stepDust(dt) {
      const hoverMass = ptr.active ? ptr.down ? 150000 : 26000 : 0;
      for (let i = 0;i < dust.length; i++) {
        const p = dust[i];
        p.age += dt;
        let dx = center.x - p.x, dy = center.y - p.y;
        let d2 = dx * dx + dy * dy + 1200;
        let inv = GM_CENTER / (d2 * Math.sqrt(d2));
        let ax = dx * inv, ay = dy * inv;
        const dc2 = dx * dx + dy * dy;
        if (dc2 < CENTER_R * CENTER_R * 0.72) {
          center.feed = Math.min(1, center.feed + 0.012);
          if (Math.random() < 0.3)
            burst(p.x, p.y, DUST_PALETTE[p.cls], 1, 25);
          dust[i] = Object.assign(makeDust(false), { cls: p.cls });
          continue;
        }
        for (const a of agents) {
          dx = a.x - p.x;
          dy = a.y - p.y;
          d2 = dx * dx + dy * dy + 500;
          inv = 9000 * (0.25 + a.power) * (a.dragging ? 3 : 1) / (d2 * Math.sqrt(d2));
          ax += dx * inv;
          ay += dy * inv;
        }
        if (hoverMass) {
          dx = ptr.x - p.x;
          dy = ptr.y - p.y;
          d2 = dx * dx + dy * dy + 900;
          inv = hoverMass / (d2 * Math.sqrt(d2));
          ax += dx * inv;
          ay += dy * inv;
        }
        p.vx += ax * dt * motion;
        p.vy += ay * dt * motion;
        const drag = Math.exp(-0.05 * dt);
        p.vx *= drag;
        p.vy *= drag;
        const sp = Math.hypot(p.vx, p.vy);
        if (sp > 240) {
          p.vx *= 240 / sp;
          p.vy *= 240 / sp;
        }
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        if (p.x < -260 || p.x > LW + 260 || p.y < -260 || p.y > LH + 260) {
          dust[i] = Object.assign(makeDust(false), { cls: p.cls });
        }
      }
    }
    const lp = [0, 0, 0, 0];
    function loopAt(s) {
      const a = flare.a0 + s * TAU;
      const ca = Math.cos(a), sa = Math.sin(a);
      const lx = flare.A * ca, ly = flare.B * sa;
      lp[0] = flare.cx + lx * flare.c - ly * flare.s;
      lp[1] = flare.cy + lx * flare.s + ly * flare.c;
      const gx = flare.B * ca, gy = flare.A * sa, gl = Math.hypot(gx, gy) || 1;
      lp[2] = (gx * flare.c - gy * flare.s) / gl;
      lp[3] = (gx * flare.s + gy * flare.c) / gl;
      const wd = CENTER_R * flare.sc * (0.1 * Math.sin(s * TAU * 2 + ft * 0.7) + 0.05 * Math.sin(s * TAU * 4 - ft * 0.6)) * (0.4 + 0.6 * flare.kk);
      lp[0] += lp[2] * wd;
      lp[1] += lp[3] * wd;
      return lp;
    }
    function flareOff(u, lane, amp, ph, kk, time) {
      const width = CENTER_R * flare.sc * 0.5 * (0.55 + 0.45 * kk) * (0.1 + 0.9 * Math.pow(Math.sin(Math.PI * u), 0.75));
      const sway = Math.sin(u * TAU * 1.4 + ph + time * 0.45) * amp;
      const turb = (Math.sin(u * 7 - time * 0.8 + ph * 1.3) + 0.5 * Math.sin(u * 15 + time * 1.2 + ph * 2.1)) * 0.15;
      return (lane * 0.35 + sway * 0.75 + turb) * width;
    }
    const fp = [0, 0];
    function strandAt(u, lane, amp, ph, kk, time) {
      const q = loopAt(lerp(flare.sA, flare.sB, u));
      const off = flareOff(u, lane, amp, ph, kk, time);
      fp[0] = q[0] + q[2] * off;
      fp[1] = q[1] + q[3] * off;
      return fp;
    }
    function stepFlare(dt) {
      if (!opts.flare)
        return;
      const R = CENTER_R, m = motion, fd = dt * FSLOW;
      ft += fd;
      const time = ft;
      const active = agents.reduce((n, a) => n + (a.power > 0.3 ? 1 : 0), 0);
      const target = active > 0 ? clamp(0.78 + active * 0.05) : 0.1;
      flare.k = damp(flare.k, target, active > 0 ? 1.4 : 0.8, dt);
      const kk = flare.kk = clamp(flare.k * clamp(center.spawn.x) + center.feed * 0.5);
      if (time >= flare.next) {
        flare.next = time + rnd(2.4, 5.5);
        flare.thT = clamp(flare.th + rnd(-1.6, 1.6), -2.6, 0.6);
        flare.phT = flare.thT + rnd(-0.6, 1.2);
        const r = Math.random();
        flare.scT = 0.35 * (r < 0.72 ? rnd(0.5, 0.8) : r < 0.88 ? rnd(0.85, 1) : rnd(0.3, 0.45));
        flare.elT = rnd(0.8, 1.25);
        flare.diT = rnd(-0.12, 0.12);
        const q = Math.random();
        flare.dnT = q < 0.75 ? rnd(0.6, 1.3) : q < 0.93 ? rnd(0.12, 0.3) : 0.03;
      }
      fm.th = damp(fm.th, flare.thT, 1.4, fd);
      flare.th = damp(flare.th, fm.th, 1.4, fd);
      fm.ph = damp(fm.ph, flare.phT, 1.3, fd);
      flare.ph = damp(flare.ph, fm.ph, 1.3, fd);
      fm.sc = damp(fm.sc, flare.scT, 1.8, fd);
      flare.sc = damp(flare.sc, fm.sc, 1.8, fd);
      fm.el = damp(fm.el, flare.elT, 1.4, fd);
      flare.el = damp(flare.el, fm.el, 1.4, fd);
      fm.di = damp(fm.di, flare.diT, 1.4, fd);
      flare.di = damp(flare.di, fm.di, 1.4, fd);
      fm.dn = damp(fm.dn, flare.dnT, 1.2, fd);
      flare.dn = damp(flare.dn, fm.dn, 1.2, fd);
      const sc = flare.sc * (1 + 0.05 * Math.sin(time * 0.8));
      const th = flare.th + Math.sin(time * 0.35) * 0.06;
      const D = R * (0.65 + 1.4 * sc + flare.di);
      flare.cx = center.x + Math.cos(th) * D;
      flare.cy = center.y + Math.sin(th) * D;
      flare.A = R * sc * (1.45 + 0.36 * kk) * flare.el;
      flare.B = R * sc * (1 + 0.2 * kk) / Math.sqrt(flare.el);
      const phi = flare.ph + Math.sin(time * 0.31) * 0.12;
      flare.c = Math.cos(phi);
      flare.s = Math.sin(phi);
      const N = 96;
      const a0Prev = flare.a0;
      flare.a0 = 0;
      let best = 1e9, bi = 0;
      for (let i = 0;i < N; i++) {
        const p = loopAt(i / N);
        const d = Math.hypot(p[0] - center.x, p[1] - center.y);
        if (d < best) {
          best = d;
          bi = i;
        }
      }
      const a0T = bi / N * TAU;
      flare.a0 = a0Prev + (((a0T - a0Prev + Math.PI) % TAU + TAU) % TAU - Math.PI) * (1 - Math.exp(-8 * dt));
      let sA = -1, sB = -1, pd = 0;
      for (let i = 0;i <= N; i++) {
        const q = loopAt(i / N);
        const d = Math.hypot(q[0] - center.x, q[1] - center.y) - R * 0.985;
        if (i > 0) {
          if (pd <= 0 && d > 0) {
            const f = -pd / (d - pd);
            sA = (i - 1 + f) / N;
          }
          if (pd > 0 && d <= 0) {
            const f = pd / (pd - d);
            sB = (i - 1 + f) / N;
          }
        }
        pd = d;
      }
      if (sA < 0 || sB < 0 || sB <= sA) {
        sA = 0;
        sB = 1;
      }
      const k10 = 1 - Math.exp(-10 * dt);
      flare.sA += (Math.max(0, sA - 1.5 / N) - flare.sA) * k10;
      flare.sB += (Math.min(1, sB + 1.5 / N) - flare.sB) * k10;
      let e = loopAt(flare.sA);
      flare.fax = e[0];
      flare.fay = e[1];
      let dx = e[0] - center.x, dy = e[1] - center.y, dl = Math.hypot(dx, dy) || 1;
      flare.nax = dx / dl;
      flare.nay = dy / dl;
      e = loopAt(flare.sB);
      flare.fbx = e[0];
      flare.fby = e[1];
      dx = e[0] - center.x;
      dy = e[1] - center.y;
      dl = Math.hypot(dx, dy) || 1;
      flare.nbx = dx / dl;
      flare.nby = dy / dl;
      flare.acc = Math.min(8, flare.acc + dt * 20 * kk * flare.dn * (0.5 + 0.5 * flare.sc) * m);
      while (flare.acc >= 1 && flareP.length < 90) {
        flare.acc -= 1;
        const rail = FLARE_RAILS[Math.floor(Math.random() * FLARE_RAILS.length)];
        flareP.push({
          kind: 0,
          u: rnd(0, 0.04),
          v: rnd(0.09, 0.24),
          lane: clamp(rail + (Math.random() + Math.random() + Math.random() - 1.5) * 0.22, -1.1, 1.1),
          amp: rnd(0.25, 1),
          ph: rnd(0, TAU),
          size: rnd(0.8, 2.4),
          hj: rnd(-0.12, 0.12),
          hot: Math.random() < 0.12,
          x: 0,
          y: 0,
          px: NaN,
          py: 0,
          vx: 0,
          vy: 0,
          life: 0,
          max: 9,
          col: flareCol(0)
        });
      }
      flare.wacc = Math.min(3, flare.wacc + dt * 1.8 * kk * flare.dn * (0.5 + 0.5 * flare.sc) * m);
      flare.wacc = 0;
      while (flare.wacc >= 1 && flare.wisps < 12) {
        flare.wacc -= 1;
        const u = rnd(0.08, 0.95);
        const p = loopAt(lerp(flare.sA, flare.sB, u));
        const side = Math.random() > 0.25 ? 1 : -1;
        const sp = rnd(5, 18), tg = rnd(-9, 9);
        flare.wisps++;
        flareP.push({
          kind: 1,
          u,
          v: 0,
          lane: 0,
          amp: 0,
          ph: rnd(0, TAU),
          size: rnd(24, 60) * (0.6 + 0.4 * flare.sc),
          hj: 0,
          hot: false,
          x: p[0] + p[2] * side * rnd(0, R * 0.12),
          y: p[1] + p[3] * side * rnd(0, R * 0.12),
          px: NaN,
          py: 0,
          vx: p[2] * side * sp - p[3] * tg,
          vy: p[3] * side * sp + p[2] * tg,
          life: 0,
          max: rnd(3.5, 7),
          col: flareCol(rnd(0.15, 0.8))
        });
      }
      flare.sacc = Math.min(3, flare.sacc + dt * 1.2 * kk * flare.dn * (0.5 + 0.5 * flare.sc) * m);
      while (flare.sacc >= 1 && sparks.length < 700) {
        flare.sacc -= 1;
        const u = rnd(0.05, 0.95);
        const p = loopAt(lerp(flare.sA, flare.sB, u));
        const sp = rnd(20, 90);
        sparks.push({
          x: p[0],
          y: p[1],
          vx: p[2] * sp + rnd(-20, 20),
          vy: p[3] * sp + rnd(-20, 20),
          life: 0,
          max: rnd(0.6, 1.5),
          size: rnd(0.8, 2),
          col: lighten(flareCol(u), 0.3)
        });
      }
      let wisps = 0;
      for (let i = flareP.length - 1;i >= 0; i--) {
        const p = flareP[i];
        p.life += fd;
        if (p.kind === 0) {
          p.u += p.v * fd * (1.55 - p.u * 0.85) * (0.55 + kk * 0.9) * m;
          if (p.u >= 1) {
            flareP[i] = flareP[flareP.length - 1];
            flareP.pop();
            continue;
          }
        } else {
          if (p.life >= p.max) {
            flareP[i] = flareP[flareP.length - 1];
            flareP.pop();
            continue;
          }
          wisps++;
          p.vx *= 1 - 0.55 * fd;
          p.vy *= 1 - 0.55 * fd;
          const wx = p.x - flare.cx, wy = p.y - flare.cy, wd = Math.hypot(wx, wy) + 1;
          p.vx += -wy / wd * 8 * fd + Math.sin(time * 0.8 + p.ph) * 5 * fd;
          p.vy += wx / wd * 8 * fd + Math.cos(time * 0.7 + p.ph * 1.7) * 5 * fd;
          p.x += p.vx * fd;
          p.y += p.vy * fd;
        }
      }
      flare.wisps = wisps;
    }
    function drawFlare(time) {
      if (!opts.flare || flareP.length === 0 && flare.kk < 0.02)
        return;
      const R = CENTER_R, kk = flare.kk;
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      for (let i = 0;i < 14; i++) {
        const u = (i + 0.5) / 14;
        const e = loopAt(lerp(flare.sA, flare.sB, u));
        const w = Math.sin(Math.PI * u);
        const sway = R * 0.28 + Math.sin(time * 0.7 + i * 1.9) * R * 0.22;
        drawGlow(ctx, e[0] + e[2] * sway, e[1] + e[3] * sway, R * flare.sc * (0.7 + 0.45 * w), flareCol(u * 0.9 + 0.05), (0.14 + 0.14 * w) * kk);
      }
      ctx.lineCap = "butt";
      ctx.lineWidth = 1.1;
      const SEG = 48, CH = 8;
      for (let r = 0;r < 3; r++) {
        const amp = 0.35 + 0.25 * r, ph = r * 2.1;
        for (let ch = 0;ch < CH; ch++) {
          const path = new Path2D;
          for (let i = 0;i <= SEG / CH; i++) {
            const u = (ch * (SEG / CH) + i) / SEG;
            const q = strandAt(u, 0, amp, ph, kk, time);
            if (i === 0)
              path.moveTo(q[0], q[1]);
            else
              path.lineTo(q[0], q[1]);
          }
          const uc = (ch + 0.5) / CH;
          const fl = 0.5 + 0.5 * Math.sin(time * 1.2 + uc * 11 + r * 2);
          ctx.strokeStyle = rgba(lighten(flareCol(uc), 0.55), (0.12 + 0.3 * fl) * kk * Math.sin(Math.PI * uc));
          ctx.stroke(path);
        }
      }
      ctx.lineCap = "round";
      const gain = clamp(kk * 1.9 * (0.55 + 0.45 * flare.dn));
      const NH = 8, NA = 3;
      const tails = [], heads = [];
      for (let i = 0;i < NH * NA; i++) {
        tails.push(new Path2D);
        heads.push(new Path2D);
      }
      const du = 0.016 * (0.6 + kk);
      let glows = 0;
      for (const p of flareP) {
        if (p.kind === 1) {
          const k = p.life / p.max;
          drawGlow(ctx, p.x, p.y, p.size * (0.8 + k * 0.7), p.col, Math.sin(Math.PI * Math.min(1, k)) * 0.26 * kk);
          continue;
        }
        const u = p.u;
        const core = 1 - Math.min(1, Math.abs(p.lane)) * 0.5;
        const a = Math.min(1, u * 9) * Math.min(1, (1 - u) * 6) * (0.3 + 0.55 * core) * gain * (0.75 + 0.25 * Math.sin(time * 2.5 + p.ph * 5));
        if (a < 0.08)
          continue;
        const hb = Math.min(NH - 1, Math.max(0, Math.floor(clamp(u + p.hj) * NH)));
        const ab = a < 0.3 ? 0 : a < 0.6 ? 1 : 2;
        const bi = hb * NA + ab;
        const h = strandAt(u, p.lane, p.amp, p.ph, kk, time);
        const hx = h[0], hy = h[1];
        const m1 = strandAt(Math.max(0, u - du), p.lane, p.amp, p.ph, kk, time);
        const x1 = m1[0], y1 = m1[1];
        const m2 = strandAt(Math.max(0, u - du * 2.4), p.lane, p.amp, p.ph, kk, time);
        tails[bi].moveTo(hx, hy);
        tails[bi].lineTo(x1, y1);
        tails[bi].lineTo(m2[0], m2[1]);
        heads[bi].moveTo(hx, hy);
        heads[bi].lineTo(x1, y1);
        if (p.hot && glows < 14) {
          glows++;
          drawGlow(ctx, hx, hy, p.size * 6, flareCol(u + p.hj), a * 0.6);
        }
      }
      const AA = [0.22, 0.45, 0.8];
      for (let hb = 0;hb < NH; hb++) {
        const c = lighten(flareCol((hb + 0.5) / NH), 0.3);
        for (let ab = 0;ab < NA; ab++) {
          const bi = hb * NA + ab;
          ctx.strokeStyle = rgba(c, AA[ab] * 0.45);
          ctx.lineWidth = 1.2;
          ctx.stroke(tails[bi]);
          ctx.strokeStyle = rgba(lighten(c, 0.2), AA[ab]);
          ctx.lineWidth = 2.1;
          ctx.stroke(heads[bi]);
        }
      }
      ctx.restore();
    }
    function drawFlareRoots(time) {
      if (!opts.flare || flare.kk < 0.02)
        return;
      const R = CENTER_R, kk = flare.kk;
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      ctx.lineCap = "round";
      const feet = [
        [flare.fax, flare.fay, flare.nax, flare.nay, 0],
        [flare.fbx, flare.fby, flare.nbx, flare.nby, 2.3]
      ];
      for (const [fx, fy, nx, ny, ph] of feet) {
        const pulse = 0.75 + 0.25 * Math.sin(time * 2 + ph) + center.feed * 0.3;
        drawGlow(ctx, fx, fy, R * 0.85 * flare.sc * (0.8 + 0.4 * kk), [255, 170, 255], 0.24 * kk * pulse);
        drawGlow(ctx, fx, fy, R * 0.36, [255, 245, 255], 0.285 * kk * pulse);
        const base = Math.atan2(ny, nx);
        for (let j = 0;j < 8; j++) {
          const h = Math.sin(j * 91.7 + ph) * 0.5 + 0.5;
          const ang = base + (j / 7 - 0.5) * 1.6 + Math.sin(time * 1.2 + j * 1.3 + ph) * 0.1;
          const len = R * (0.1 + 0.28 * h) * (0.6 + 0.4 * Math.sin(time * 2 + j * 2.1 + ph));
          const ca = Math.cos(ang), sa = Math.sin(ang);
          ctx.strokeStyle = rgba(lighten(flareCol(0.1 + h * 0.5), 0.5), 0.084 * kk * pulse);
          ctx.lineWidth = 0.7 + h * 1.1;
          ctx.beginPath();
          ctx.moveTo(fx + ca * 4, fy + sa * 4);
          ctx.lineTo(fx + ca * len, fy + sa * len);
          ctx.stroke();
        }
      }
      ctx.restore();
    }
    const BLOBS = [
      { x: 0.2, y: 0.1, r: 0.55, c: [150, 70, 255], a: 0.2, fx: 0.07, fy: 0.05 },
      { x: 0.55, y: 0.5, r: 0.7, c: [50, 90, 255], a: 0.16, fx: 0.05, fy: 0.06 },
      { x: 0.3, y: 0.88, r: 0.5, c: [255, 140, 50], a: 0.13, fx: 0.06, fy: 0.04 },
      { x: 0.02, y: 0.45, r: 0.4, c: [40, 255, 130], a: 0.11, fx: 0.05, fy: 0.07 },
      { x: 0.95, y: 0.28, r: 0.45, c: [60, 200, 255], a: 0.1, fx: 0.04, fy: 0.05 },
      { x: 0.9, y: 0.78, r: 0.45, c: [255, 150, 60], a: 0.08, fx: 0.05, fy: 0.05 }
    ];
    function drawBackground(time) {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 1;
      if (opts.background) {
        const g = ctx.createLinearGradient(0, 0, 0, H);
        g.addColorStop(0, "#03040f");
        g.addColorStop(0.5, "#050a22");
        g.addColorStop(1, "#030410");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, W, H);
      } else {
        ctx.clearRect(0, 0, W, H);
      }
      const pxo = ptr.active ? (ptr.x * S - W / 2) / W : 0;
      const pyo = ptr.active ? (ptr.y * S - H / 2) / H : 0;
      ctx.globalCompositeOperation = "lighter";
      const M = Math.max(W, H);
      for (let i = 0;i < BLOBS.length; i++) {
        const b = BLOBS[i];
        const bx = (b.x + Math.sin(time * b.fx * motion + i * 2) * 0.05 - pxo * 0.03) * W;
        const by = (b.y + Math.cos(time * b.fy * motion + i * 3) * 0.04 - pyo * 0.03) * H;
        const r = b.r * M * (1 + Math.sin(time * 0.2 + i) * 0.05);
        const g = ctx.createRadialGradient(bx, by, 0, bx, by, r);
        g.addColorStop(0, rgba(b.c, b.a));
        g.addColorStop(1, rgba(b.c, 0));
        ctx.fillStyle = g;
        ctx.fillRect(bx - r, by - r, r * 2, r * 2);
      }
      ctx.fillStyle = "#cfe0ff";
      for (const s of stars) {
        const a = (0.25 + 0.75 * (0.5 + 0.5 * Math.sin(time * s.f + s.ph))) * s.z * 0.8;
        ctx.globalAlpha = a;
        const x = s.x * W - pxo * 14 * s.z, y = s.y * H - pyo * 14 * s.z;
        ctx.fillRect(x, y, s.s, s.s);
      }
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
      if (opts.background) {
        const v = ctx.createRadialGradient(W / 2, H / 2, Math.min(W, H) * 0.35, W / 2, H / 2, Math.hypot(W, H) * 0.62);
        v.addColorStop(0, "rgba(0,0,0,0)");
        v.addColorStop(1, "rgba(0,0,8,0.6)");
        ctx.fillStyle = v;
        ctx.fillRect(0, 0, W, H);
      }
    }
    function drawDust(time) {
      ctx.globalCompositeOperation = "lighter";
      let cls = -1;
      for (const p of dust) {
        if (p.cls !== cls) {
          cls = p.cls;
          ctx.fillStyle = rgba(DUST_PALETTE[cls], 1);
        }
        const tw = 0.55 + 0.45 * Math.sin(time * p.tf + p.ph);
        const fade = clamp(p.age / 1.2);
        const al = tw * fade * 0.85;
        if (p.big) {
          drawGlow(ctx, p.x, p.y, p.s * 5, DUST_PALETTE[cls], al * 0.55);
          ctx.fillStyle = rgba(DUST_PALETTE[cls], 1);
        }
        ctx.globalAlpha = al;
        const sp = Math.hypot(p.vx, p.vy);
        if (sp > 70) {
          ctx.strokeStyle = ctx.fillStyle;
          ctx.lineWidth = p.s * 0.8;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x - p.vx * 0.05, p.y - p.vy * 0.05);
          ctx.stroke();
        } else {
          ctx.fillRect(p.x - p.s / 2, p.y - p.s / 2, p.s, p.s);
        }
      }
      ctx.globalAlpha = 1;
    }
    function drawStrands(a, time) {
      if (a.grow <= 0.001)
        return;
      const hl = (a.hover.x - 1) / 0.07;
      const amul = (0.1 + 0.9 * clamp(a.power)) * (1 + clamp(hl) * 0.8 + a.hit * 0.25);
      const first = a.strands[0].pts;
      const g = ctx.createLinearGradient(first[0], first[1], first[6], first[7]);
      g.addColorStop(0, rgba(mix(a.col, [160, 110, 255], 0.55), 1));
      g.addColorStop(0.5, rgba(mix(a.col, [90, 140, 255], 0.2), 1));
      g.addColorStop(1, rgba(lighten(a.col, 0.2), 1));
      ctx.globalCompositeOperation = "lighter";
      const N = 26;
      const maxI = Math.max(2, Math.floor(N * a.grow));
      ctx.strokeStyle = g;
      ctx.lineWidth = 7;
      ctx.globalAlpha = 0.055 * amul;
      ctx.beginPath();
      for (const s of a.strands)
        tracePath(s.pts, maxI, N);
      ctx.stroke();
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      for (let j = a.strands.length - 1;j >= 0; j--) {
        const s = a.strands[j];
        const wob = 0.75 + 0.25 * Math.sin(time * 1.6 + s.p1);
        ctx.lineWidth = s.w * (1 + clamp(hl) * 0.4);
        ctx.globalAlpha = clamp(s.alpha * amul * wob);
        ctx.beginPath();
        tracePath(s.pts, maxI, N);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
      for (const k of a.packets) {
        const s = a.strands[k.si];
        if (k.t > a.grow + 0.02)
          continue;
        const col = k.dir > 0 ? lighten(a.col, 0.35) : mix(lighten(a.col, 0.2), [200, 160, 255], 0.5);
        const vis = clamp(a.power * 1.2 + 0.1);
        for (let q = 5;q >= 1; q--) {
          const tt = clamp(k.t - k.dir * q * 0.012);
          bez(s.pts, tt, tmp);
          drawGlow(ctx, tmp[0], tmp[1], 5 * k.size * (1 - q * 0.12), col, (0.5 - q * 0.08) * vis);
        }
        bez(s.pts, clamp(k.t), tmp);
        drawGlow(ctx, tmp[0], tmp[1], 14 * k.size, col, 0.75 * vis);
        ctx.globalAlpha = vis;
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(tmp[0], tmp[1], 1.7 * k.size, 0, TAU);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }
    function tracePath(p, maxI, N) {
      for (let i = 0;i <= maxI; i++) {
        const u = i / N;
        const m = 1 - u, A = m * m * m, B = 3 * m * m * u, C = 3 * m * u * u, D = u * u * u;
        const x = A * p[0] + B * p[2] + C * p[4] + D * p[6];
        const y = A * p[1] + B * p[3] + C * p[5] + D * p[7];
        if (i === 0)
          ctx.moveTo(x, y);
        else
          ctx.lineTo(x, y);
      }
    }
    function strokeIcon(fn, col, size, time, act, alpha) {
      const sc = size / 24;
      ctx.save();
      ctx.scale(sc, sc);
      ctx.translate(-12, -12);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.globalCompositeOperation = "lighter";
      ctx.strokeStyle = rgba(col, 0.28 * alpha);
      ctx.lineWidth = 4.6;
      fn(ctx, time, act);
      ctx.strokeStyle = rgba(lighten(col, 0.3), alpha);
      ctx.lineWidth = 1.75;
      fn(ctx, time, act);
      ctx.restore();
    }
    function drawNode(a, time) {
      const sp = a.spawn.x;
      if (sp < 0.01)
        return;
      const sc = sp * a.hover.x * a.novaS;
      const r = a.r;
      const col = a.col;
      const act = clamp(a.power);
      const breath = 0.8 + 0.2 * Math.sin(time * 1.7 + a.phase);
      const light = clamp(a.hit * 0.5 + a.flash * 0.6 + (a.hover.x - 1) * 4 + a.novaL * 0.8);
      ctx.save();
      ctx.translate(a.x, a.y);
      ctx.scale(sc, sc);
      ctx.globalCompositeOperation = "lighter";
      drawGlow(ctx, 0, 0, r * 2.4, col, (0.5 * act + 0.12) * breath + light * 0.3);
      ctx.globalCompositeOperation = "source-over";
      const body = ctx.createRadialGradient(0, 0, 0, 0, 0, r);
      body.addColorStop(0, "rgba(10,14,46,0.93)");
      body.addColorStop(0.72, "rgba(5,8,30,0.93)");
      body.addColorStop(1, rgba(col, 0.2 + 0.2 * act));
      ctx.fillStyle = body;
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, TAU);
      ctx.fill();
      ctx.globalCompositeOperation = "lighter";
      const ringCol = lighten(col, 0.18 + light * 0.4);
      const ra = 0.25 + 0.75 * act;
      ctx.lineWidth = 15;
      ctx.strokeStyle = rgba(col, 0.1 * ra * breath);
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, TAU);
      ctx.stroke();
      ctx.lineWidth = 8;
      ctx.strokeStyle = rgba(col, 0.28 * ra + light * 0.2);
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, TAU);
      ctx.stroke();
      ctx.lineWidth = 3.2;
      ctx.strokeStyle = rgba(ringCol, 0.35 + 0.65 * ra);
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, TAU);
      ctx.stroke();
      ctx.lineWidth = 1.4;
      ctx.strokeStyle = rgba(col, 0.38 * ra);
      ctx.beginPath();
      ctx.arc(0, 0, r - 9, 0, TAU);
      ctx.stroke();
      const st = a.spec.status;
      if (act > 0.2) {
        ctx.lineCap = "round";
        if (st === "running" || st === "thinking") {
          const n = st === "thinking" ? 2 : 3;
          const sw = st === "thinking" ? 1.1 : 0.62;
          ctx.lineWidth = 2.2;
          ctx.strokeStyle = rgba(lighten(col, 0.3), 0.75 * act);
          for (let i = 0;i < n; i++) {
            const a0 = time * a.spin * (st === "thinking" ? 2.6 : 0.9) * (i % 2 ? -1 : 1) + i * TAU / n;
            ctx.beginPath();
            ctx.arc(0, 0, r + 11 + i % 2 * 3, a0, a0 + sw);
            ctx.stroke();
          }
          for (let i = 0;i < 3; i++) {
            const an = time * (0.8 + i * 0.35) * (i % 2 ? -1 : 1) + a.phase + i * 2.1;
            const rr = r + 22 + i * 5;
            drawGlow(ctx, Math.cos(an) * rr, Math.sin(an) * rr, 6, col, 0.9 * act);
          }
        } else if (st === "waiting") {
          ctx.setLineDash([2, 9]);
          ctx.lineDashOffset = -time * 8;
          ctx.lineWidth = 2.4;
          ctx.strokeStyle = rgba(col, 0.6 * (0.5 + 0.5 * Math.sin(time * 2.2)));
          ctx.beginPath();
          ctx.arc(0, 0, r + 12, 0, TAU);
          ctx.stroke();
          ctx.setLineDash([]);
        } else if (st === "idle") {
          const ph = (time * (st === "idle" ? 0.35 : 0.5) + a.phase) % 1;
          ctx.lineWidth = 2;
          ctx.strokeStyle = rgba(col, (1 - ph) * 0.5);
          ctx.beginPath();
          ctx.arc(0, 0, r + 4 + ph * 34, 0, TAU);
          ctx.stroke();
        }
      }
      if (st === "completed" && a.rest > 0.05) {
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.lineWidth = 2.2;
        ctx.strokeStyle = rgba(lighten(col, 0.35), 0.75 * a.rest);
        ctx.beginPath();
        ctx.moveTo(-r * 0.34, r * 0.02);
        ctx.lineTo(-r * 0.1, r * 0.28);
        ctx.lineTo(r * 0.38, -r * 0.26);
        ctx.stroke();
      }
      const core = (0.18 + 0.5 * act) * (0.85 + 0.15 * Math.sin(time * 2.4 + a.phase)) + light * 0.3;
      drawGlow(ctx, 0, 0, r * 0.62, lighten(col, 0.2), core);
      ctx.restore();
      ctx.globalCompositeOperation = "source-over";
    }
    function drawStatIcon(kind, x, y, col, time, live, alpha) {
      ctx.save();
      ctx.translate(x, y);
      ctx.lineCap = "round";
      if (kind === "tok") {
        ctx.fillStyle = rgba(col, alpha);
        const hs = [9, 16, 12];
        for (let i = 0;i < 3; i++) {
          const h = live ? hs[i] * (0.78 + 0.22 * Math.sin(time * 3 + i * 1.5)) : hs[i];
          const bx = -7 + i * 5.8;
          ctx.beginPath();
          ctx.roundRect ? ctx.roundRect(bx, 8 - h, 3.8, h, 1.6) : ctx.rect(bx, 8 - h, 3.8, h);
          ctx.fill();
        }
      } else {
        ctx.strokeStyle = rgba(col, alpha);
        ctx.lineWidth = 2.1;
        ctx.beginPath();
        ctx.arc(0, 1.5, 6.8, 0, TAU);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(-2.6, -8);
        ctx.lineTo(2.6, -8);
        ctx.stroke();
        const ang = live ? time * 1.6 - Math.PI / 2 : -Math.PI / 4;
        ctx.beginPath();
        ctx.moveTo(0, 1.5);
        ctx.lineTo(Math.cos(ang) * 4.4, 1.5 + Math.sin(ang) * 4.4);
        ctx.stroke();
      }
      ctx.restore();
    }
    function drawLabel(a, time) {
      const peek = clamp((a.hover.x - 1) / 0.07);
      const vis = clamp((a.spawn.x - 0.45) * 2.2) * (1 - a.rest * (1 - peek));
      if (vis <= 0.01)
        return;
      const d = a.detail;
      const side = a.flip ? -1 : 1;
      const x0 = a.x + side * (a.r * a.spawn.x * a.hover.x + 30) + side * a.labelShift.x + a.lean[0] * 0.6;
      const cy = a.y + 12 + a.lean[1] * 0.6;
      const intro = easeOutCubic(clamp((time - a.spawnAt - 0.1) / 0.9));
      const slide = (1 - intro) * 18 * side;
      const yName = cy + lerp(-4, -46, d);
      const yStat = cy + lerp(28, -12, d);
      const yTok = cy + 22;
      const yTime = cy + 54;
      const align = side > 0 ? "left" : "right";
      ctx.textAlign = align;
      ctx.textBaseline = "alphabetic";
      ctx.globalCompositeOperation = "source-over";
      const alpha = vis * intro;
      const nameFont = `600 24px ${FONT}`;
      ctx.font = nameFont;
      const nameA = lerp(0.62, 1, d) * alpha;
      const nameCol = mix([188, 196, 228], [255, 255, 255], d);
      ctx.fillStyle = rgba(nameCol, nameA);
      ctx.fillText(a.spec.name, x0 + slide, yName + 8);
      const cfg = STATUS[a.spec.status];
      const sFont = `500 20px ${FONT}`;
      const sw = measure(ctx, sFont, cfg.label);
      const dotX = side > 0 ? x0 + 8 : x0 - sw - 24;
      const txtX = side > 0 ? x0 + 28 : x0;
      const dotY = yStat + 1;
      const live = cfg.ticks;
      if (live) {
        const ph = (time * 0.9 + a.phase) % 1;
        ctx.globalCompositeOperation = "lighter";
        ctx.fillStyle = rgba(a.dot, (1 - ph) * 0.45 * alpha);
        ctx.beginPath();
        ctx.arc(dotX + slide, dotY, 7 + ph * 9, 0, TAU);
        ctx.fill();
      }
      ctx.globalCompositeOperation = "lighter";
      drawGlow(ctx, dotX + slide, dotY, 14, a.dot, (live ? 0.55 : 0.2) * alpha);
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = rgba(a.dot, alpha);
      ctx.beginPath();
      ctx.arc(dotX + slide, dotY, 6.2 + (live ? Math.sin(time * 4 + a.phase) * 0.5 : 0), 0, TAU);
      ctx.fill();
      ctx.font = sFont;
      const stCol = mix(lighten(a.dot, 0.12), [175, 180, 205], a.power < 0.2 ? 0.5 : 0);
      ctx.fillStyle = rgba(stCol, alpha * (0.7 + 0.3 * (a.statusT < 0.8 ? 1 : 0.9)));
      ctx.fillText(cfg.label, txtX + slide, yStat + 8);
      if (d > 0.02) {
        const da = alpha * d;
        const tokStr = fmtTokens(a.tokens * 0 + lerp(0, a.tokens, easeOutCubic(a.introCount)));
        const timeStr = fmtTime(lerp(0, a.seconds, easeOutCubic(a.introCount)));
        if (tokStr !== a.tokText) {
          if (a.tokText)
            a.tokFlash = 1;
          a.tokText = tokStr;
        }
        if (timeStr !== a.timeText) {
          if (a.timeText && a.introCount >= 1)
            a.timeFlash = 1;
          a.timeText = timeStr;
        }
        const iconCol = mix(lighten(a.accent, 0.35), [200, 215, 255], 0.2);
        const rowFont = `400 20px ${FONT}`;
        const rows = [
          [tokStr, "tok", yTok, a.tokFlash],
          [timeStr, "time", yTime, a.timeFlash]
        ];
        for (const [str, kind, y, fl] of rows) {
          const w = measure(ctx, rowFont, str);
          const ix = side > 0 ? x0 + 9 : x0 - w - 22;
          const tx = side > 0 ? x0 + 30 : x0;
          drawStatIcon(kind, ix + slide, y - 2, iconCol, time, live, da * 0.95);
          ctx.font = rowFont;
          ctx.fillStyle = rgba(mix([205, 214, 245], [255, 255, 255], fl), da * (0.82 + fl * 0.18));
          ctx.fillText(str, tx + slide, y + 6 - fl * 2);
        }
      }
    }
    function drawCenter(time) {
      const sp = center.spawn.x;
      if (sp < 0.01)
        return;
      const R = CENTER_R;
      const beat = center.beat;
      const sc = sp * (1 + beat * 0.012 + center.feed * 0.02 + center.press * 0.03);
      ctx.save();
      ctx.translate(center.x, center.y);
      ctx.scale(sc, sc);
      ctx.globalCompositeOperation = "lighter";
      const halo = [[[170, 80, 255], 0], [[60, 120, 255], 1], [[255, 150, 60], 2], [[60, 255, 140], 3]];
      for (const [c, i] of halo) {
        const an = time * 0.22 * motion + i * TAU / 4;
        drawGlow(ctx, Math.cos(an) * R * 0.95, Math.sin(an) * R * 0.95, R * 1.05, c, 0.38 + beat * 0.12 + center.feed * 0.2);
      }
      drawGlow(ctx, 0, 0, R * 2.3, [70, 110, 255], 0.36 + beat * 0.12 + center.feed * 0.18);
      ctx.globalCompositeOperation = "source-over";
      const body = ctx.createRadialGradient(0, -R * 0.2, R * 0.05, 0, 0, R);
      body.addColorStop(0, "rgba(12,16,70,0.97)");
      body.addColorStop(0.65, "rgba(14,20,92,0.96)");
      body.addColorStop(1, "rgba(46,60,180,0.92)");
      ctx.fillStyle = body;
      ctx.beginPath();
      ctx.arc(0, 0, R, 0, TAU);
      ctx.fill();
      ctx.globalCompositeOperation = "lighter";
      const rimStops = [
        [0, [168, 88, 255]],
        [0.2, [70, 150, 255]],
        [0.38, [60, 235, 255]],
        [0.54, [70, 255, 130]],
        [0.74, [255, 170, 60]],
        [0.88, [255, 110, 190]],
        [1, [168, 88, 255]]
      ];
      let rim;
      const conic = ctx.createConicGradient;
      if (typeof conic === "function") {
        const cg = conic.call(ctx, time * 0.25 * motion, 0, 0);
        for (const [o, c] of rimStops)
          cg.addColorStop(o, rgba(c, 1));
        rim = cg;
      } else {
        rim = rgba([90, 150, 255], 1);
      }
      ctx.strokeStyle = rim;
      ctx.lineWidth = 26;
      ctx.globalAlpha = 0.14 + beat * 0.08;
      ctx.beginPath();
      ctx.arc(0, 0, R, 0, TAU);
      ctx.stroke();
      ctx.lineWidth = 13;
      ctx.globalAlpha = 0.34;
      ctx.beginPath();
      ctx.arc(0, 0, R, 0, TAU);
      ctx.stroke();
      ctx.lineWidth = 5;
      ctx.globalAlpha = 1;
      ctx.beginPath();
      ctx.arc(0, 0, R, 0, TAU);
      ctx.stroke();
      ctx.lineWidth = 1.6;
      ctx.globalAlpha = 0.55;
      ctx.beginPath();
      ctx.arc(0, 0, R - 15, 0, TAU);
      ctx.stroke();
      ctx.globalAlpha = 1;
      const ticks = 90;
      for (let i = 0;i < ticks; i++) {
        const an = i / ticks * TAU + time * 0.08 * motion;
        const wave = 0.5 + 0.5 * Math.sin(an * 3 - time * 2.2);
        ctx.globalAlpha = 0.1 + wave * 0.55;
        ctx.fillStyle = "#9fc4ff";
        const rr = R + 17 + wave * 3;
        ctx.beginPath();
        ctx.arc(Math.cos(an) * rr, Math.sin(an) * rr, 1.1 + wave * 0.9, 0, TAU);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      for (let i = 0;i < 4; i++) {
        const sp2 = 0.55 / Math.pow(1 + i * 0.35, 1.5);
        const an = time * sp2 * (i % 2 ? -1 : 1) * motion + i * 1.7;
        const rr = R + 40 + i * 14;
        const mc = halo[i][0];
        drawGlow(ctx, Math.cos(an) * rr, Math.sin(an) * rr, 10, mc, 0.9);
        ctx.fillStyle = "#fff";
        ctx.globalAlpha = 0.9;
        ctx.beginPath();
        ctx.arc(Math.cos(an) * rr, Math.sin(an) * rr, 1.6, 0, TAU);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
      const bs = R * 0.64 / 24;
      ctx.save();
      ctx.translate(0, -R * 0.12);
      ctx.scale(bs * (1 + beat * 0.03), bs * (1 + beat * 0.03));
      ctx.translate(-12, -12);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      const bc = [52, 156, 255];
      drawGlow(ctx, 12, 12, 26, bc, 0.4 + beat * 0.3);
      ctx.strokeStyle = rgba(bc, 0.3);
      ctx.lineWidth = 3.6;
      drawBrain(ctx);
      ctx.strokeStyle = rgba(lighten(bc, 0.25), 0.95);
      ctx.lineWidth = 1.35;
      drawBrain(ctx);
      ctx.setLineDash([5, 34]);
      ctx.lineDashOffset = -time * 14;
      ctx.strokeStyle = "rgba(255,255,255,0.95)";
      ctx.lineWidth = 1.1;
      drawBrain(ctx);
      ctx.setLineDash([]);
      ctx.restore();
      ctx.globalCompositeOperation = "source-over";
      ctx.textAlign = "center";
      ctx.textBaseline = "alphabetic";
      ctx.font = `400 26px ${FONT}`;
      ctx.fillStyle = rgba([150, 190, 255], 0.88 + 0.12 * Math.sin(time * 1.5));
      ctx.fillText(opts.orchestrator.model, 0, R * 0.2 + 44);
      ctx.restore();
      ctx.globalCompositeOperation = "source-over";
    }
    function drawEffects() {
      ctx.globalCompositeOperation = "lighter";
      for (const s of sparks) {
        const k = 1 - s.life / s.max;
        drawGlow(ctx, s.x, s.y, s.size * 3.2, s.col, k * 0.8);
      }
      for (const r of ripples) {
        const k = r.life / r.max;
        const e = easeOutCubic(k);
        ctx.strokeStyle = rgba(r.col, (1 - k) * 0.55);
        ctx.lineWidth = r.w * (1 - k * 0.6);
        ctx.beginPath();
        ctx.arc(r.x, r.y, lerp(r.r0, r.r1, e), 0, TAU);
        ctx.stroke();
      }
      if (ptr.active && !ptr.dragging()) {
        const hot = ptr.down ? 1 : 0;
        const k = t * 0.8 % 1;
        ctx.strokeStyle = rgba([140, 180, 255], (1 - k) * (0.12 + hot * 0.3));
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(ptr.x, ptr.y, 60 - k * (hot ? 55 : 0) + (hot ? 0 : k * 24), 0, TAU);
        ctx.stroke();
      }
      ctx.globalCompositeOperation = "source-over";
    }
    function draw() {
      drawBackground(t);
      ctx.setTransform(dpr * S, 0, 0, dpr * S, 0, 0);
      if (shake > 0.2)
        ctx.translate(rnd(-shake, shake), rnd(-shake, shake));
      drawDust(t);
      for (const a of agents)
        drawStrands(a, t);
      drawFlare(ft);
      drawCenter(t);
      drawFlareRoots(ft);
      const order = [...agents].sort((p, q) => q.rest - p.rest || p.hover.x - q.hover.x || (p.dragging ? 1 : 0) - (q.dragging ? 1 : 0));
      for (const a of order)
        drawNode(a, t);
      for (const a of order)
        drawLabel(a, t);
      drawFx();
      drawEffects();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
    ptr.dragging = () => agents.some((a) => a.dragging);
    function toLayout(e) {
      const rect = canvas.getBoundingClientRect();
      return [(e.clientX - rect.left) / rect.width * LW, (e.clientY - rect.top) / rect.height * LH];
    }
    function hit(x, y) {
      if (Math.hypot(x - center.x, y - center.y) < CENTER_R)
        return "center";
      let best = null, bd = 1e9;
      for (const a of agents) {
        const d = Math.hypot(x - a.x, y - a.y);
        if (d < Math.max(a.r * 1.18 + 6, 26) && d < bd) {
          best = a;
          bd = d;
        }
      }
      return best;
    }
    const onMove = (e) => {
      if (ptr.down && e.pointerId !== ptr.id)
        return;
      const [x, y] = toLayout(e);
      ptr.x = x;
      ptr.y = y;
      ptr.active = true;
      if (ptr.down && Math.hypot(e.clientX - ptr.startX, e.clientY - ptr.startY) > 5)
        ptr.moved = true;
      if (!ptr.down) {
        ptr.hover = hit(x, y);
        canvas.style.cursor = ptr.hover ? "pointer" : "default";
      }
    };
    const onDown = (e) => {
      if (ptr.down || e.pointerType === "mouse" && e.button !== 0)
        return;
      const [x, y] = toLayout(e);
      ptr.x = x;
      ptr.y = y;
      ptr.active = true;
      ptr.down = true;
      ptr.moved = false;
      ptr.startX = e.clientX;
      ptr.startY = e.clientY;
      ptr.id = e.pointerId;
      try {
        canvas.setPointerCapture(e.pointerId);
      } catch {}
      const h = hit(x, y);
      ptr.target = h;
      if (h && h !== "center") {
        h.dragging = true;
        h.grabX = x - h.x;
        h.grabY = y - h.y;
        canvas.style.cursor = "grabbing";
      } else if (!h) {
        addRipple(x, y, 70, 6, [150, 180, 255], 0.7, 2);
      }
    };
    const onUp = (e) => {
      if (!ptr.down || e.pointerId !== ptr.id)
        return;
      const tgt = e.type === "pointercancel" ? null : ptr.target;
      ptr.down = false;
      try {
        canvas.releasePointerCapture(e.pointerId);
      } catch {}
      for (const a of agents)
        a.dragging = false;
      if (tgt && !ptr.moved) {
        if (tgt === "center") {
          opts.onOrchestratorClick?.();
          api.pulse();
          center.flash = 1;
          shockwave(center.x, center.y, 70);
        } else {
          opts.onAgentClick?.(tgt.spec);
          pulseAgent(tgt, 10);
          burst(tgt.x, tgt.y, tgt.col, 22, 100);
          shockwave(tgt.x, tgt.y, 55);
        }
      }
      ptr.target = null;
      ptr.hover = hit(ptr.x, ptr.y);
      canvas.style.cursor = ptr.hover ? "pointer" : "default";
    };
    const onLeave = () => {
      if (!ptr.down) {
        ptr.active = false;
        ptr.hover = null;
      }
    };
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerdown", onDown);
    canvas.addEventListener("pointerup", onUp);
    canvas.addEventListener("pointercancel", onUp);
    canvas.addEventListener("pointerleave", onLeave);
    function frame(now) {
      if (destroyed)
        return;
      raf = requestAnimationFrame(frame);
      if (container.clientWidth !== W || container.clientHeight !== H)
        resize();
      if (paused) {
        last = now;
        return;
      }
      const raw = Math.min(0.25, Math.max(0.001, (now - (last || now)) / 1000 * opts.timeScale));
      last = now;
      const n = Math.ceil(raw / 0.033);
      for (let i = 0;i < n; i++) {
        t += raw / n;
        update(raw / n);
      }
      draw();
    }
    const ro = typeof ResizeObserver === "function" ? new ResizeObserver(() => resize()) : null;
    ro?.observe(container);
    const onWin = () => resize();
    window.addEventListener("resize", onWin);
    resize();
    buildAgents((opts.agents ?? DEFAULT_AGENTS).map((s) => ({ ...s })));
    raf = requestAnimationFrame(frame);
    const api = {
      destroy() {
        destroyed = true;
        cancelAnimationFrame(raf);
        ro?.disconnect();
        window.removeEventListener("resize", onWin);
        canvas.remove();
      },
      resize,
      setPaused(p) {
        paused = p;
      },
      updateAgent(id, patch) {
        const a = agents.find((x) => x.spec.id === id);
        if (!a)
          return;
        if (patch.name !== undefined)
          a.spec.name = patch.name;
        if (patch.tokens !== undefined) {
          a.tokens = patch.tokens;
          a.spec.tokens = patch.tokens;
        }
        if (patch.seconds !== undefined) {
          a.seconds = patch.seconds;
          a.spec.seconds = patch.seconds;
        }
        if (patch.status !== undefined)
          setStatus(a, patch.status);
        if (patch.x !== undefined && patch.x !== a.spec.x || patch.y !== undefined && patch.y !== a.spec.y) {
          a.spec.x = patch.x ?? a.spec.x;
          a.spec.y = patch.y ?? a.spec.y;
          layout();
        }
      },
      addAgent(spec) {
        if (agents.some((x) => x.spec.id === spec.id))
          return;
        const a = makeAgent({ ...spec }, agents.length, seeded(7 + agents.length), t + LAUNCH);
        agents.push(a);
        layout();
        a.x = a.hx;
        a.y = a.hy;
      },
      setAgents(list) {
        t = 0;
        fxList.length = 0;
        buildAgents(list.map((s) => ({ ...s })));
      },
      pulse(id) {
        const targets = id ? agents.filter((a) => a.spec.id === id) : agents;
        addRipple(center.x, center.y, CENTER_R, CENTER_R + 260, [140, 170, 255], 1.6, 4);
        for (const a of targets)
          pulseAgent(a, 5);
      }
    };
    return api;
  }

  // shared/ring.ts
  var DESIGN_CX2 = 512;
  var DESIGN_CY2 = 755;
  var ringPlacement = (i, n, status) => {
    const angle = -110 * Math.PI / 180 + i / Math.max(1, n) * Math.PI * 2;
    const ring = n > 8 ? i % 2 === 0 ? 1 : 0.8 : 0.94;
    const quiet = status === "stopped" || status === "offline";
    return {
      x: Math.min(924, Math.max(100, DESIGN_CX2 + Math.cos(angle) * 380 * ring)),
      y: DESIGN_CY2 + Math.sin(angle) * 580 * ring,
      radius: quiet ? 45 : 60
    };
  };
  var toSpecs = (agents) => agents.map((a, i) => ({
    ...a,
    ...ringPlacement(i, agents.length, a.status),
    color: ICON_COLOR[a.icon]
  }));

  // view-switch.ts
  var VIEW_KEY = "eagleEye.view";
  var SEQ_KEY = "eagleEye.viewSeq";
  var asView = (v) => v === "2d" || v === "3d" ? v : undefined;
  var parseHash = (hash) => asView((hash ?? "").replace(/^#/, "").toLowerCase());
  var paneChanged = (viewSeq, lastSeq) => typeof viewSeq === "number" && Number.isFinite(viewSeq) && viewSeq > 0 && viewSeq !== lastSeq;
  var resolveView = (i) => {
    const pick = parseHash(i.hash) ?? (paneChanged(i.viewSeq, i.lastSeq) ? asView(i.view) : undefined) ?? asView(i.stored) ?? "2d";
    return pick === "3d" && !i.webgl2 ? "2d" : pick;
  };
  var failFallback = (current) => current === "3d" ? { view: "2d", persist: false } : undefined;
  var detectWebGL2 = (search = location.search) => {
    try {
      if (new URLSearchParams(search).get("renderer") === "2d")
        return false;
      const gl = document.createElement("canvas").getContext("webgl2", { failIfMajorPerformanceCaveat: true });
      if (!gl)
        return false;
      gl.getExtension("WEBGL_lose_context")?.loseContext();
      return true;
    } catch {
      return false;
    }
  };
  var readStored = (key) => {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  };
  var writeStored = (key, value) => {
    try {
      localStorage.setItem(key, value);
    } catch {}
  };
  var writeHash = (view) => {
    try {
      history.replaceState(null, "", `#${view}`);
    } catch {}
  };
  var loading;
  var load3DScript = (src = "eagle-eye-3d.js") => {
    if (window.__eagleEye3D)
      return Promise.resolve(true);
    if (loading)
      return loading;
    loading = new Promise((resolve) => {
      const s = document.createElement("script");
      s.src = src;
      s.onload = () => {
        s.onload = s.onerror = null;
        const ok = !!window.__eagleEye3D;
        if (!ok)
          loading = undefined;
        resolve(ok);
      };
      s.onerror = () => {
        s.remove();
        loading = undefined;
        resolve(false);
      };
      document.head.appendChild(s);
    });
    return loading;
  };

  // bridge.ts
  var root = document.getElementById("network");
  var root3d = document.getElementById("network3d");
  var badge = document.getElementById("badge");
  var tabsEl = document.getElementById("tabs");
  var noticeEl = document.getElementById("notice");
  var net;
  var mountKey = "";
  var rosterKey = "";
  var lastUpdate = 0;
  var sessionLabel = "";
  var apply2D = (state) => {
    const nextMount = `${state.demo}|${state.model}`;
    const nextRoster = state.agents.map((a) => a.id).join(",");
    if (!net || nextMount !== mountKey) {
      net?.destroy();
      mountKey = nextMount;
      rosterKey = nextRoster;
      net = mountAgentNetwork(root, {
        simulate: state.demo,
        orchestrator: { name: "Orchestrator", model: state.model },
        agents: state.demo ? undefined : toSpecs(state.agents)
      });
      if (current !== "2d")
        net.setPaused(true);
      return;
    }
    if (state.demo)
      return;
    const specs = toSpecs(state.agents);
    if (nextRoster !== rosterKey) {
      const had = new Set(rosterKey ? rosterKey.split(",") : []);
      rosterKey = nextRoster;
      if ([...had].some((id) => !specs.some((s) => s.id === id))) {
        net.setAgents(specs);
        return;
      }
      for (const s of specs)
        if (!had.has(s.id))
          net.addAgent(s);
    }
    for (const s of specs) {
      net.updateAgent(s.id, { status: s.status, tokens: s.tokens, seconds: s.seconds, name: s.name, x: s.x, y: s.y });
    }
  };
  var FADE_MS = 220;
  var DESTROY_3D_AFTER_MS = 120000;
  var reducedMotion = () => !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  var webgl2 = detectWebGL2();
  var tabButtons = {
    "2d": document.getElementById("tab-2d"),
    "3d": document.getElementById("tab-3d")
  };
  var viewEls = { "2d": root, "3d": root3d };
  var current;
  var lastState;
  var view3d;
  var pause2dTimer;
  var destroy3dTimer;
  var noticeTimer;
  var loadToken = 0;
  var notice = (text) => {
    noticeEl.textContent = text;
    noticeEl.classList.add("show");
    clearTimeout(noticeTimer);
    noticeTimer = setTimeout(() => noticeEl.classList.remove("show"), 6000);
  };
  if (!webgl2) {
    const forced = new URLSearchParams(location.search).get("renderer") === "2d";
    tabButtons["3d"].setAttribute("aria-disabled", "true");
    tabButtons["3d"].title = forced ? "3D view is switched off (?renderer=2d)" : "3D view needs WebGL2, which this browser does not provide";
  }
  var destroy3D = () => {
    clearTimeout(destroy3dTimer);
    try {
      view3d?.destroy();
    } catch (err) {
      console.error("eagle-eye: 3D destroy failed", err);
    }
    view3d = undefined;
    root3d.replaceChildren();
  };
  var fail3D = (why) => {
    destroy3D();
    notice(why);
    const fb = failFallback(current);
    if (fb)
      setView(fb.view, fb.persist);
  };
  root3d.addEventListener("eagle-eye-3d-fatal", () => fail3D("3D view lost its graphics context. Back to 2D."));
  var ensure3D = async () => {
    const token = ++loadToken;
    if (view3d) {
      view3d.setPaused(false);
      return;
    }
    const ok = await load3DScript();
    if (token !== loadToken || current !== "3d")
      return;
    if (!ok || !window.__eagleEye3D)
      return fail3D("3D view could not load. Staying on 2D.");
    if (view3d)
      return;
    try {
      view3d = window.__eagleEye3D.mount(root3d, { reducedMotion: reducedMotion() });
      if (lastState)
        view3d.update(lastState);
    } catch (err) {
      console.error("eagle-eye: 3D mount failed", err);
      fail3D("3D view failed to start. Staying on 2D.");
    }
  };
  var setView = (next, persist = true) => {
    if (next === "3d" && !webgl2)
      return;
    if (next === current)
      return;
    current = next;
    tabsEl.classList.toggle("is-3d", next === "3d");
    for (const v of ["2d", "3d"]) {
      const on = v === next;
      tabButtons[v].setAttribute("aria-selected", String(on));
      tabButtons[v].tabIndex = on ? 0 : -1;
      viewEls[v].classList.toggle("active", on);
    }
    if (persist) {
      writeStored(VIEW_KEY, next);
      writeHash(next);
    }
    clearTimeout(pause2dTimer);
    clearTimeout(destroy3dTimer);
    const delay = reducedMotion() ? 0 : FADE_MS;
    if (next === "2d") {
      net?.setPaused(false);
      loadToken++;
      pause2dTimer = setTimeout(() => view3d?.setPaused(true), delay);
      if (view3d)
        destroy3dTimer = setTimeout(destroy3D, DESTROY_3D_AFTER_MS);
    } else {
      pause2dTimer = setTimeout(() => net?.setPaused(true), delay);
      ensure3D();
    }
  };
  var onTabKey = (e) => {
    const order = ["2d", "3d"];
    const enabled = order.filter((v) => tabButtons[v].getAttribute("aria-disabled") !== "true");
    const at = enabled.indexOf(current ?? "2d");
    let to;
    if (e.key === "ArrowRight" || e.key === "ArrowDown")
      to = enabled[(at + 1) % enabled.length];
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp")
      to = enabled[(at - 1 + enabled.length) % enabled.length];
    else if (e.key === "Home")
      to = enabled[0];
    else if (e.key === "End")
      to = enabled[enabled.length - 1];
    if (!to)
      return;
    e.preventDefault();
    tabButtons[to].focus();
    setView(to);
  };
  for (const v of ["2d", "3d"]) {
    tabButtons[v].addEventListener("click", () => {
      if (tabButtons[v].getAttribute("aria-disabled") === "true")
        return;
      setView(v);
    });
  }
  tabsEl.addEventListener("keydown", onTabKey);
  window.addEventListener("hashchange", () => {
    const v = parseHash(location.hash);
    if (v)
      setView(v, false);
  });
  setView(resolveView({ hash: location.hash, stored: readStored(VIEW_KEY), webgl2 }), false);
  requestAnimationFrame(() => requestAnimationFrame(() => tabsEl.classList.add("ready")));
  var lastSeq = Number(readStored(SEQ_KEY)) || undefined;
  var firstState = true;
  var applyPane = (state) => {
    if (paneChanged(state.viewSeq, lastSeq)) {
      setView(resolveView({
        hash: firstState ? location.hash : null,
        view: asView(state.view),
        viewSeq: state.viewSeq,
        lastSeq,
        stored: current,
        webgl2
      }));
      lastSeq = state.viewSeq;
      writeStored(SEQ_KEY, String(lastSeq));
    }
    firstState = false;
  };
  window.__eagleEye = (state) => {
    lastUpdate = state.updatedAt;
    lastState = state;
    if (state.session !== sessionLabel) {
      sessionLabel = state.session;
      document.title = `Eagle Eye · ${state.session}`;
    }
    applyPane(state);
    apply2D(state);
    view3d?.update(state);
  };
  setInterval(() => {
    const s = document.createElement("script");
    s.src = `state.js?t=${Date.now()}`;
    s.onload = s.onerror = () => s.remove();
    document.head.appendChild(s);
    const stale = lastUpdate > 0 && Date.now() - lastUpdate > 8000;
    badge.textContent = `${sessionLabel || "Eagle Eye"} · ${lastUpdate === 0 ? "connecting…" : stale ? "session idle" : "live"}`;
    badge.className = stale || lastUpdate === 0 ? "badge" : "badge live";
  }, 1000);
})();
