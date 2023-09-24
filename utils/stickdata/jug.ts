import { DrumStick } from '../if.ts';

// JUG - 島村楽器オリジナルブランド
// 350mm より小さいスティックが存在するが、これを加えてしまうと
// フィルターの幅が広がりすぎるので、除外することにする... 無念
export const sticksJug: ReadonlyArray<DrumStick> = [
  {
    name: 'JH350JAZZ',
    part_number: 'JUG-JH350JAZZ',
    maker: 'JUG',
    tip_shape: 'Oval',
    tip_material: 'Wood',
    material: 'Hickory',
    taper: 'Unknown',
    length_mm: 350,
    diameter_mm: 12.5,
  },
  {
    name: 'JH350ROCK',
    part_number: 'JUG-JH350ROCK',
    maker: 'JUG',
    tip_shape: 'Barrel',
    tip_material: 'Wood',
    material: 'Hickory',
    taper: 'Unknown',
    length_mm: 350,
    diameter_mm: 12.5,
  },
] as const;
