export interface Image {
  src: string
  character: string
}

export function instantiateImages(): Image[] {
  const ha: Image = { src: '/hiragana/ha.png', character: 'ha' }
  const i: Image = { src: '/hiragana/i.png', character: 'i' }
  return [ha, i]
}
