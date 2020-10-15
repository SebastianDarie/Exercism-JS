//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (str) => {
  const codons = {
    Methionine: ['AUG'],
    Phenylalanine: ['UUU', 'UUC'],
    Leucine: ['UUA', 'UUG'],
    Serine: ['UCU', 'UCC', 'UCA', 'UCG'],
    Tyrosine: ['UAU', 'UAC'],
    Cysteine: ['UGU', 'UGC'],
    Tryptophan: ['UGG'],
    STOP: ['UAA', 'UAG', 'UGA'],
  }

  if (!str) return []

  let proteins = []

  for (let i = 0; i < str.length; i += 3) {
    proteins.push(str.slice(i, i + 3))
  }

  let proteinArr = proteins.map((protein) => {
    for (let proteinName in codons) {
      if (codons[proteinName].includes(protein)) return proteinName
    }
  })

  if (proteinArr.some((protein) => !protein)) throw new Error('Invalid codon')

  let stop = proteinArr.findIndex((protein) => protein === 'STOP')

  return stop === -1 ? proteinArr : proteinArr.slice(0, stop)
}
