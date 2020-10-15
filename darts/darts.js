//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (x, y) => {
  let radius = Math.sqrt(x * x + y * y)

  return radius <= 1 ? 10 : radius <= 5 ? 5 : radius <= 10 ? 1 : 0
}
