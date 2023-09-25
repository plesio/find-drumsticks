import { DrumStick } from '../if.ts';

// コマキ通商が国内で展開するオリジナルブランド
export const sticksKmk: ReadonlyArray<DrumStick> = [
  {
    name: 'Practice Stick KK-AA',
    part_number: 'KK-AA',
    maker: 'KMK',
    tip_shape: 'Round',
    tip_material: 'Wood',
    material: 'Oak',
    taper: 'Unknown',
    length_mm: 423,
    diameter_mm: 19.0,
  },
  {
    name: 'Practice Stick KK-B',
    part_number: 'KK-B',
    maker: 'KMK',
    tip_shape: 'Oval',
    tip_material: 'Wood',
    material: 'Oak',
    taper: 'Unknown',
    length_mm: 415,
    diameter_mm: 16.0,
  },
  {
    name: 'Practice Stick KK-C',
    part_number: 'KK-C',
    maker: 'KMK',
    tip_shape: 'Oval',
    tip_material: 'Wood',
    material: 'Oak',
    taper: 'Unknown',
    length_mm: 406,
    diameter_mm: 15.0,
  },
] as const;
