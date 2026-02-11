import { useCallback, useRef } from "react";

type SoundType = "hover" | "click" | "whoosh" | "pop" | "success";

const SOUND_CONFIG: Record<SoundType, { freq: number; duration: number; type: OscillatorType; gain: number }> = {
  hover: { freq: 800, duration: 0.06, type: "sine", gain: 0.03 },
  click: { freq: 600, duration: 0.08, type: "triangle", gain: 0.05 },
  whoosh: { freq: 400, duration: 0.15, type: "sine", gain: 0.04 },
  pop: { freq: 1200, duration: 0.05, type: "sine", gain: 0.04 },
  success: { freq: 880, duration: 0.12, type: "sine", gain: 0.05 },
};

export const useSoundEffect = () => {
  const ctxRef = useRef<AudioContext | null>(null);
  const enabledRef = useRef(true);

  const getCtx = () => {
    if (!ctxRef.current) {
      ctxRef.current = new AudioContext();
    }
    return ctxRef.current;
  };

  const play = useCallback((type: SoundType = "hover") => {
    if (!enabledRef.current) return;
    try {
      const ctx = getCtx();
      const config = SOUND_CONFIG[type];
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.type = config.type;
      osc.frequency.setValueAtTime(config.freq, ctx.currentTime);

      if (type === "whoosh") {
        osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + config.duration);
      } else if (type === "success") {
        osc.frequency.setValueAtTime(660, ctx.currentTime);
        osc.frequency.setValueAtTime(880, ctx.currentTime + 0.06);
      }

      gainNode.gain.setValueAtTime(config.gain, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + config.duration);

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + config.duration);
    } catch {
      // Silently fail if audio isn't available
    }
  }, []);

  const toggle = useCallback(() => {
    enabledRef.current = !enabledRef.current;
    return enabledRef.current;
  }, []);

  return { play, toggle, isEnabled: () => enabledRef.current };
};
