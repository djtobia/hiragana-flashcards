import { type Image } from "@/models/image"

export default function hiragana(): Image[] {
  const ha = createHiragana('https://upload.wikimedia.org/wikipedia/commons/6/66/Japanese_Hiragana_kyokashotai_HA.svg', 'ha')
  const i = createHiragana('https://upload.wikimedia.org/wikipedia/commons/c/ca/Japanese_Hiragana_kyokashotai_I.svg', 'i')
  const e = createHiragana('https://upload.wikimedia.org/wikipedia/commons/a/a9/Japanese_Hiragana_kyokashotai_E.svg', 'e')
  const ko = createHiragana('https://upload.wikimedia.org/wikipedia/commons/7/71/Japanese_Hiragana_kyokashotai_KO.svg', 'ko')
  const ni = createHiragana('https://upload.wikimedia.org/wikipedia/commons/5/52/Japanese_Hiragana_kyokashotai_NI.svg', 'ni');
  const ho = createHiragana('https://upload.wikimedia.org/wikipedia/commons/2/25/Japanese_Hiragana_kyokashotai_HO.svg', 'ho')
  const n = createHiragana('https://upload.wikimedia.org/wikipedia/commons/7/71/Japanese_Hiragana_kyokashotai_N.svg', 'n')
  const go = createHiragana('https://upload.wikimedia.org/wikipedia/commons/e/e9/Japanese_Hiragana_kyokashotai_GO.svg', 'go')
  const wa = createHiragana('https://upload.wikimedia.org/wikipedia/commons/d/d5/Hiragana_letter_Wa.svg', 'wa')
  const ka = createHiragana('https://upload.wikimedia.org/wikipedia/commons/f/f0/Hiragana_letter_Ka.svg', 'ka')
  const ri = createHiragana('https://upload.wikimedia.org/wikipedia/commons/7/7f/Hiragana_letter_Ri.svg', 'ri')
  const ma = createHiragana('https://upload.wikimedia.org/wikipedia/commons/1/1d/Hiragana_letter_Ma.svg', 'ma')
  const su = createHiragana('https://upload.wikimedia.org/wikipedia/commons/2/24/Hiragana_letter_Su.svg', 'su')
  const ga = createHiragana('https://upload.wikimedia.org/wikipedia/commons/c/c2/Japanese_Hiragana_kyokashotai_GA.svg', 'ga')
  const se = createHiragana('https://upload.wikimedia.org/wikipedia/commons/a/a2/Japanese_Hiragana_kyokashotai_SE.svg', 'se')
  const mi = createHiragana('https://upload.wikimedia.org/wikipedia/commons/6/65/Hiragana_letter_Mi.svg', 'mi')
  const no = createHiragana('https://upload.wikimedia.org/wikipedia/commons/c/ce/Hiragana_letter_No.svg', 'no')
  const shi = createHiragana('https://upload.wikimedia.org/wikipedia/commons/6/61/Japanese_Hiragana_kyokashotai_SI.svg', 'shi')
  const na = createHiragana('https://upload.wikimedia.org/wikipedia/commons/4/4d/Japanese_Hiragana_kyokashotai_NA.svg', 'na')
  const ta = createHiragana('https://upload.wikimedia.org/wikipedia/commons/4/43/Japanese_Hiragana_kyokashotai_TA.svg', 'ta')
  const de = createHiragana('https://upload.wikimedia.org/wikipedia/commons/d/db/Hiragana_letter_De.svg', 'de')
  const so = createHiragana('https://upload.wikimedia.org/wikipedia/commons/c/c5/Hiragana_letter_So.svg', 'so')
  const a = createHiragana('https://upload.wikimedia.org/wikipedia/commons/6/67/Japanese_Hiragana_kyokashotai_A.svg', 'a')
  const to = createHiragana('https://upload.wikimedia.org/wikipedia/commons/2/23/Hiragana_letter_To.svg', 'to')
  const u = createHiragana('https://upload.wikimedia.org/wikipedia/commons/a/ae/Japanese_Hiragana_kyokashotai_small_U.png', 'u')
  const sa = createHiragana('https://upload.wikimedia.org/wikipedia/commons/8/89/Japanese_Hiragana_kyokashotai_SA.svg', 'sa')
  const za = createHiragana('https://upload.wikimedia.org/wikipedia/commons/5/58/Japanese_Hiragana_kyokashotai_ZA.svg', 'za')
  const chi = createHiragana('https://upload.wikimedia.org/wikipedia/commons/1/13/Hiragana_letter_Ti.svg', 'chi')
  const ji = createHiragana('https://upload.wikimedia.org/wikipedia/commons/d/d4/Hiragana_letter_Di.svg', 'ji')
  return [ha, i, e, ko, ni, ho, n, go, wa, ka, ri, ma, su, ga, se, mi, no, shi, na, ta, de, so, a, to, u, sa, za, chi, ji]
}

function createHiragana(src: string, character: string): Image {
  const hiragana: Image = {
    src,
    character
  }
  return hiragana;
}