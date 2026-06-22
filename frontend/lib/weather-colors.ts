export function getWeatherGlow(
  temp: number
) {
  if (temp > 35) {
    return "shadow-[0_0_30px_rgba(251,146,60,0.2)]";
  }

  if (temp > 25) {
    return "shadow-[0_0_30px_rgba(250,204,21,0.2)]";
  }

  if (temp > 15) {
    return "shadow-[0_0_30px_rgba(96,165,250,0.2)]";
  }

  return "shadow-[0_0_30px_rgba(192,132,252,0.2)]";
}