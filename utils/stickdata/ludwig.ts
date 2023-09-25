import { DrumStick } from '../if.ts';

//https://www.ludwig-drums.com
// 全然スティックの記載ない。サウンドハウスとかのほうがよっぽど詳しいのだが・・・

// https://www.nonaka.com/catalog/pdf/concertpercussion_c_02.pdf カタログあった....日本語のだけど
export const sticksLudwig: ReadonlyArray<DrumStick> = [
  {
    name: 'L-5A',
    part_number: 'L-5A',
    maker: 'Ludwig',
    tip_shape: 'Teardrop',
    tip_material: 'Wood',
    material: 'Hickory',
    taper: 'Unknown',
    length_mm: 405,
    diameter_mm: 14.5,
  },
  {
    name: 'L-5AN',
    part_number: 'L-5AN',
    maker: 'Ludwig',
    tip_shape: 'Teardrop',
    tip_material: 'Nylon',
    material: 'Hickory',
    taper: 'Unknown',
    length_mm: 405,
    diameter_mm: 14.5,
  },
  {
    name: 'L-7A',
    part_number: 'L-7A',
    maker: 'Ludwig',
    tip_shape: 'Teardrop',
    tip_material: 'Wood',
    material: 'Hickory',
    taper: 'Unknown',
    length_mm: 390,
    diameter_mm: 12.7,
  },
  {
    name: 'L-5B',
    part_number: 'L-5B',
    maker: 'Ludwig',
    tip_shape: 'Teardrop',
    tip_material: 'Wood',
    material: 'Hickory',
    taper: 'Unknown',
    length_mm: 410,
    diameter_mm: 15,
  },
  {
    name: 'L-JAZZ',
    part_number: 'L-JAZZ',
    maker: 'Ludwig',
    tip_shape: 'Barrel',
    tip_material: 'Wood',
    material: 'Hickory',
    taper: 'Unknown',
    length_mm: 410,
    diameter_mm: 14.0,
  },
  {
    name: 'L-ROCK',
    part_number: 'L-ROCK',
    maker: 'Ludwig',
    tip_shape: 'Teardrop',
    tip_material: 'Wood',
    material: 'Hickory',
    taper: 'Unknown',
    length_mm: 416,
    diameter_mm: 14.0,
  },
] as const;
