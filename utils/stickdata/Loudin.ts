import { DrumStick } from '../if.ts';

// -- ハードオフでよくみかける謎のスティック
export const sticksLoudin: ReadonlyArray<DrumStick> = [
  {
    name: 'DS400/5A',
    part_number: 'DS400/5A',
    maker: 'Loudin',
    tip_shape: 'Teardrop',
    tip_material: 'Wood',
    material: 'Maple',
    taper: 'Unknown',
    length_mm: 406,
    diameter_mm: 14.3,
  },
  {
    name: 'DS400/7A',
    part_number: 'DS400/7A',
    maker: 'Loudin',
    tip_shape: 'Round',
    tip_material: 'Wood',
    material: 'Maple',
    taper: 'Unknown',
    length_mm: 404,
    diameter_mm: 14.6, // なんで 7Aのほうが太いんだｗｗｗ
  },
  {
    name: 'DS400/5B',
    part_number: 'DS400/5B',
    maker: 'Loudin',
    tip_shape: 'Oval',
    tip_material: 'Wood',
    material: 'Maple',
    taper: 'Unknown',
    length_mm: 407,
    diameter_mm: 15,
  },
] as const;
