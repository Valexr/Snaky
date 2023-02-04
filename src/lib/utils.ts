const clamp = (min: number, num: number, max: number) => Math.min(Math.max(num, min), max);

export { clamp }