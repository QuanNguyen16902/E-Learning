const buckets = new Map<string, { count: number; ts: number }>();
export function rateLimit(limit = 30, windowMs = 60_000) {
  return (key: string) => {
    const now = Date.now();
    const b = buckets.get(key) ?? { count: 0, ts: now };
    if (now - b.ts > windowMs) {
      b.count = 0;
      b.ts = now;
    }
    b.count++;
    buckets.set(key, b);
    if (b.count > limit) return false;
    return true;
  };
}
