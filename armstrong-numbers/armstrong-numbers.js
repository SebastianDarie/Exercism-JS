//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (num) => {
  let digits = num.toString().split('')
  let power = num.toString().length

  const res = digits.reduce((prev, curr) => prev + Math.pow(curr, power), 0)

  return res === num
}
