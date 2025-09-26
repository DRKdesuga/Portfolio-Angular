import { Component, ElementRef, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';

type Star = {
  x: number; y: number;
  vx: number; vy: number;
  r: number;
  baseA: number;
  twPhase: number;
  twSpeed: number;
  layer: 0 | 1;
};

@Component({
  selector: 'app-particle-background',
  standalone: true,
  templateUrl: './particle-background.html',
  styleUrls: ['./particle-background.scss']
})
export class ParticleBackground implements OnInit, OnDestroy {
  @ViewChild('nebula', { static: true }) nebulaRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('stars', { static: true }) starsRef!: ElementRef<HTMLCanvasElement>;

  private nctx!: CanvasRenderingContext2D;
  private sctx!: CanvasRenderingContext2D;

  private rafId = 0;
  private t0 = 0;
  private stars: Star[] = [];
  private reduceMotion = typeof window !== 'undefined'
    && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  private cleanup: () => void = () => {};

  constructor(private zone: NgZone) {}

  ngOnInit() {
    const ncv = this.nebulaRef.nativeElement;
    const scv = this.starsRef.nativeElement;

    const nctx = ncv.getContext('2d', { alpha: true })!;
    const sctx = scv.getContext('2d', { alpha: true })!;
    this.nctx = nctx; this.sctx = sctx;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      for (const cv of [ncv, scv]) {
        const { clientWidth: w, clientHeight: h } = cv;
        cv.width = Math.max(1, Math.floor(w * dpr));
        cv.height = Math.max(1, Math.floor(h * dpr));
        const ctx = cv === ncv ? nctx : sctx;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }
    };
    resize();
    window.addEventListener('resize', resize);

    this.initStars(scv.clientWidth, scv.clientHeight);

    this.zone.runOutsideAngular(() => {
      const loop = (t: number) => {
        this.rafId = requestAnimationFrame(loop);
        if (!this.t0) this.t0 = t;
        const dt = (t - this.t0) / 1000;
        this.draw(dt);
      };
      if (this.reduceMotion) {
        this.draw(0);
      } else {
        this.rafId = requestAnimationFrame(loop);
      }
    });

    this.cleanup = () => {
      cancelAnimationFrame(this.rafId);
      window.removeEventListener('resize', resize);
    };
  }

  ngOnDestroy() {
    this.cleanup();
  }

  private initStars(w: number, h: number) {
    const COUNT_NEAR = this.reduceMotion ? 100 : 220;
    const COUNT_FAR  = this.reduceMotion ? 80  : 160;

    const rnd = (a: number, b: number) => Math.random() * (b - a) + a;

    const mkStar = (layer: 0 | 1): Star => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: rnd(-0.12, 0.12) * (layer === 0 ? 0.6 : 1.2),
      vy: rnd(-0.12, 0.12) * (layer === 0 ? 0.6 : 1.2),
      r: layer === 0 ? rnd(0.9, 1.6) : rnd(1.2, 2.4),
      baseA: rnd(0.4, 0.9),
      twPhase: Math.random() * Math.PI * 2,
      twSpeed: rnd(0.7, 1.4) * (layer === 0 ? 0.6 : 1.0),
      layer
    });

    this.stars = [
      ...Array.from({ length: COUNT_FAR },  () => mkStar(0)),
      ...Array.from({ length: COUNT_NEAR }, () => mkStar(1)),
    ];
  }

  private draw(dt: number) {
    const ncv = this.nebulaRef.nativeElement;
    const scv = this.starsRef.nativeElement;
    const W = ncv.clientWidth;
    const H = ncv.clientHeight;

    this.drawNebula(this.nctx, W, H, dt);
    this.drawStars(this.sctx, scv, dt);
  }

  private drawNebula(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
    ctx.clearRect(0, 0, w, h);

    const cx = w * 0.5, cy = h * 0.45;
    const driftX = Math.sin(t * 0.05) * 60;
    const driftY = Math.cos(t * 0.04) * 45;

    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    ctx.globalAlpha = 0.35;

    this.radialBlob(ctx, cx - 240 + driftX, cy - 110 + driftY, Math.max(w, h) * 0.70, [
      { c: 'rgba(167,139,250,0.12)', s: 0.0 },
      { c: 'rgba(139,92,246,0.22)',  s: 0.38 },
      { c: 'rgba(88,28,135,0.00)',   s: 1.0 }
    ]);

    this.radialBlob(ctx, cx + 260 - driftX * 0.5, cy + 140 - driftY * 0.5, Math.max(w, h) * 0.60, [
      { c: 'rgba(147,197,253,0.09)', s: 0.0 },
      { c: 'rgba(124,58,237,0.20)',  s: 0.42 },
      { c: 'rgba(30,27,75,0.00)',    s: 1.0 }
    ]);

    this.radialBlob(ctx, cx - 20 + driftX * 0.25, cy + 50 + driftY * 0.2, Math.max(w, h) * 0.48, [
      { c: 'rgba(236,72,153,0.08)', s: 0.0 },
      { c: 'rgba(99,102,241,0.18)', s: 0.55 },
      { c: 'rgba(15,23,42,0.00)',   s: 1.0 }
    ]);

    ctx.restore();

    ctx.save();
    const fade = ctx.createLinearGradient(0, 0, 0, h);
    fade.addColorStop(0, 'rgba(0,0,0,0.00)');
    fade.addColorStop(1, 'rgba(0,0,0,0.22)');
    ctx.fillStyle = fade;
    ctx.fillRect(0, 0, w, h);
    ctx.restore();
  }

  private radialBlob(
    ctx: CanvasRenderingContext2D,
    x: number, y: number, r: number,
    stops: { c: string; s: number }[]
  ) {
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    for (const st of stops) g.addColorStop(st.s, st.c);
    ctx.beginPath();
    ctx.fillStyle = g;
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  private drawStars(ctx: CanvasRenderingContext2D, cv: HTMLCanvasElement, t: number) {
    const w = cv.clientWidth;
    const h = cv.clientHeight;

    ctx.clearRect(0, 0, w, h);

    for (const s of this.stars) {
      if (!this.reduceMotion) {
        s.x += s.vx;
        s.y += s.vy;
      }
      if (s.x < -5) s.x = w + 5;
      if (s.x > w + 5) s.x = -5;
      if (s.y < -5) s.y = h + 5;
      if (s.y > h + 5) s.y = -5;

      const tw = Math.sin(s.twPhase + t * s.twSpeed) * 0.5 + 0.8;
      const alpha = Math.min(1, Math.max(0, s.baseA * tw * (s.layer === 0 ? 0.9 : 1.05)));

      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${alpha})`;
      ctx.fill();
    }
  }
}
