import { DrumStick } from '../if.ts';

export const sticksLudwig: ReadonlyArray<DrumStick> = [
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
] as const;
