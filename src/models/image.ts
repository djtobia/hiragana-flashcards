export interface Image {
  src: string
  character: string
}

export function instantiateImages(): Image[] {
  const ha: Image = {
    src: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Japanese_Hiragana_kyokashotai_HA.svg',
    character: 'ha'
  }
  const i: Image = {
    src: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Japanese_Hiragana_kyokashotai_I.svg',
    character: 'i'
  }
  const e: Image = {
    src: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Japanese_Hiragana_kyokashotai_E.svg',
    character: 'e'
  }

  const ko: Image = {
    src: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Japanese_Hiragana_kyokashotai_KO.svg',
    character: 'ko'
  }
  const ni: Image = {
    src: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Japanese_Hiragana_kyokashotai_NI.svg',
    character: 'ni'
  }

  const ho: Image = {
    src: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Japanese_Hiragana_kyokashotai_HO.svg',
    character: 'ho'
  }

  const n: Image = {
    src: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Japanese_Hiragana_kyokashotai_N.svg',
    character: 'n'
  }

  const go: Image = {
    src: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Japanese_Hiragana_kyokashotai_GO.svg',
    character: 'go'
  }
  return [ha, i, e, ko, ni, ho, n, go]
}
