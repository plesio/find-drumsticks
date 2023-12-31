import { DrumStick } from '../if.ts';

export const sticksMeinl: ReadonlyArray<DrumStick> = [
  {
    name: 'Standard 7A',
    part_number: 'SB100',
    maker: 'Meinl',
    tip_shape: 'Acorn',
    tip_material: 'Wood',
    material: 'Hickory',
    taper: 'Unknown',
    length_mm: 406,
    diameter_mm: 13.6,
  },
  {
    name: 'Standard 5A',
    part_number: 'SB101',
    maker: 'Meinl',
    tip_shape: 'Acorn',
    tip_material: 'Wood',
    material: 'Hickory',
    taper: 'Unknown',
    length_mm: 406,
    diameter_mm: 14.4,
  },
  {
    name: 'Standard 5B',
    part_number: 'SB102',
    maker: 'Meinl',
    tip_shape: 'Acorn',
    tip_material: 'Wood',
    material: 'Hickory',
    taper: 'Unknown',
    length_mm: 406,
    diameter_mm: 15.1,
  },
  {
    name: 'Standard Long 5A',
    part_number: 'SB103',
    maker: 'Meinl',
    tip_shape: 'Acorn',
    tip_material: 'Wood',
    material: 'Hickory',
    taper: 'Unknown',
    length_mm: 419,
    diameter_mm: 14.4,
  },
  {
    name: 'Standard Long 5B',
    part_number: 'SB104',
    maker: 'Meinl',
    tip_shape: 'Acorn',
    tip_material: 'Wood',
    material: 'Hickory',
    taper: 'Unknown',
    length_mm: 419,
    diameter_mm: 15.1,
  },
  // Hybrid
  {
    name: 'Hybrid 7A',
    part_number: 'SB105',
    maker: 'Meinl',
    tip_shape: 'Barrel',
    tip_material: 'Wood',
    material: 'Hickory',
    taper: 'Unknown',
    length_mm: 406,
    diameter_mm: 13.6,
  },
  {
    name: 'Hybrid 5A',
    part_number: 'SB106',
    maker: 'Meinl',
    tip_shape: 'Barrel',
    tip_material: 'Wood',
    material: 'Hickory',
    taper: 'Unknown',
    length_mm: 413, // https://www.meinlstickandbrush.jp/product-page/sb106-hyb5a にそう書いてあるからそうなんだろう.
    diameter_mm: 14.4,
  },
  {
    name: 'Hybrid 5B',
    part_number: 'SB107',
    maker: 'Meinl',
    tip_shape: 'Barrel',
    tip_material: 'Wood',
    material: 'Hickory',
    taper: 'Unknown',
    length_mm: 413,
    diameter_mm: 15.1,
  },
  // Heavy
  {
    name: 'Heavy 5A',
    part_number: 'SB108',
    maker: 'Meinl',
    tip_shape: 'Acorn',
    tip_material: 'Wood',
    material: 'Hickory',
    taper: 'Unknown',
    length_mm: 419,
    diameter_mm: 14.6,
  },
  {
    name: 'Heavy 5B',
    part_number: 'SB109',
    maker: 'Meinl',
    tip_shape: 'Acorn',
    tip_material: 'Wood',
    material: 'Hickory',
    taper: 'Unknown',
    length_mm: 419,
    diameter_mm: 15.4,
  },
  {
    name: 'Heavy 2B',
    part_number: 'SB110',
    maker: 'Meinl',
    tip_shape: 'Acorn',
    tip_material: 'Wood',
    material: 'Hickory',
    taper: 'Unknown',
    length_mm: 419,
    diameter_mm: 15.9,
  },
  // Big Apple
  {
    name: 'Big Apple Bop 7A',
    part_number: 'SB111',
    maker: 'Meinl',
    tip_shape: 'Acorn',
    tip_material: 'Wood',
    material: 'Hickory',
    taper: 'Long',
    length_mm: 406,
    diameter_mm: 13.7,
  },
  {
    name: 'Big Apple Swing 5B',
    part_number: 'SB112',
    maker: 'Meinl',
    tip_shape: 'Acorn',
    tip_material: 'Wood',
    material: 'Hickory',
    taper: 'Unknown',
    length_mm: 406,
    diameter_mm: 15.2,
  },
  // Concert
  {
    name: 'Concert SD1',
    part_number: 'SB113',
    maker: 'Meinl',
    tip_shape: 'Round',
    tip_material: 'Wood',
    material: 'Maple',
    taper: 'Medium',
    length_mm: 416,
    diameter_mm: 16.1,
  },
  {
    name: 'Concert SD2',
    part_number: 'SB114',
    maker: 'Meinl',
    tip_shape: 'Barrel',
    tip_material: 'Wood',
    material: 'Maple',
    taper: 'Long',
    length_mm: 407,
    diameter_mm: 16.0,
  },
  {
    name: 'Concert SD4',
    part_number: 'SB115',
    maker: 'Meinl',
    tip_shape: 'Barrel',
    tip_material: 'Wood',
    material: 'Maple',
    taper: 'Medium',
    length_mm: 403,
    diameter_mm: 13.8,
  },
  //   {}, SB116 はマレットなので除外.
  {
    name: 'Timbales Sticks 5/16',
    part_number: 'SB117',
    maker: 'Meinl',
    tip_shape: 'None',
    tip_material: 'Wood',
    material: 'Hickory',
    taper: 'None',
    length_mm: 405,
    diameter_mm: 8.0,
  },
  {
    name: 'Timbales Sticks 3/8',
    part_number: 'SB118',
    maker: 'Meinl',
    tip_shape: 'None',
    tip_material: 'Wood',
    material: 'Hickory',
    taper: 'None',
    length_mm: 405,
    diameter_mm: 10,
  },
  {
    name: 'Timbales Sticks 1/2',
    part_number: 'SB119',
    maker: 'Meinl',
    tip_shape: 'None',
    tip_material: 'Wood',
    material: 'Hickory',
    taper: 'None',
    length_mm: 405,
    diameter_mm: 12.5,
  },
  //   {}, SB120 はマレット付き両サイドスティックなので除外.
  // Standard Long
  {
    name: 'Standard Long 7A',
    part_number: 'SB121',
    maker: 'Meinl',
    tip_shape: 'Acorn',
    tip_material: 'Wood',
    material: 'Hickory',
    taper: 'Unknown',
    length_mm: 419,
    diameter_mm: 13.6,
  },
  {
    name: 'Big Apple Swing 7A',
    part_number: 'SB122',
    maker: 'Meinl',
    tip_shape: 'Acorn',
    tip_material: 'Wood',
    material: 'Hickory',
    taper: 'Long',
    length_mm: 406,
    diameter_mm: 13.7,
  },
  {
    name: 'Big Apple Bop 7A',
    part_number: 'SB123',
    maker: 'Meinl',
    tip_shape: 'Acorn',
    tip_material: 'Wood',
    material: 'Maple',
    taper: 'Long',
    length_mm: 406,
    diameter_mm: 13.7,
  },
  {
    name: 'Big Apple Swing 5B',
    part_number: 'SB124',
    maker: 'Meinl',
    tip_shape: 'Acorn',
    tip_material: 'Wood',
    material: 'Maple',
    taper: 'Long',
    length_mm: 406,
    diameter_mm: 15.2,
  },
  //   {}, SB125 はコンガスティックなので除外.
  // Timbales
  {
    name: 'Timbales Sticks 1/2 Long',
    part_number: 'SB126',
    maker: 'Meinl',
    tip_shape: 'None',
    tip_material: 'Wood',
    material: 'Hickory',
    taper: 'None',
    length_mm: 419,
    diameter_mm: 12.5,
  },
  {
    name: 'Timbales Sticks 7/16',
    part_number: 'SB127',
    maker: 'Meinl',
    tip_shape: 'None',
    tip_material: 'Wood',
    material: 'Hickory',
    taper: 'None',
    length_mm: 405,
    diameter_mm: 11.1,
  },
  {
    name: 'Timbales Sticks 7/16 Long',
    part_number: 'SB128',
    maker: 'Meinl',
    tip_shape: 'None',
    tip_material: 'Wood',
    material: 'Hickory',
    taper: 'None',
    length_mm: 419,
    diameter_mm: 11.1,
  },
  // Concert 再び
  {
    name: 'Concert HD1',
    part_number: 'SB129',
    maker: 'Meinl',
    tip_shape: 'Round',
    tip_material: 'Wood',
    material: 'Hickory',
    taper: 'Medium',
    length_mm: 416,
    diameter_mm: 16.1,
  },
  {
    name: 'Concert HD2',
    part_number: 'SB130',
    maker: 'Meinl',
    tip_shape: 'Barrel',
    tip_material: 'Wood',
    material: 'Hickory',
    taper: 'Long',
    length_mm: 406,
    diameter_mm: 16.0,
  },
  {
    name: 'Concert HD4',
    part_number: 'SB131',
    maker: 'Meinl',
    tip_shape: 'Barrel',
    tip_material: 'Wood',
    material: 'Hickory',
    taper: 'Medium',
    length_mm: 403,
    diameter_mm: 13.8,
  },
  // Hybrid 再び
  {
    name: 'Hybrid 8A',
    part_number: 'SB132',
    maker: 'Meinl',
    tip_shape: 'Barrel',
    tip_material: 'Wood',
    material: 'Hickory',
    taper: 'Long',
    length_mm: 413,
    diameter_mm: 14.1,
  },
  {
    name: 'Hybrid 9A',
    part_number: 'SB133',
    maker: 'Meinl',
    tip_shape: 'Barrel',
    tip_material: 'Wood',
    material: 'Hickory',
    taper: 'Long',
    length_mm: 413,
    diameter_mm: 14.7,
  },
  {
    name: 'Hybrid 7A Hard Maple',
    part_number: 'SB134',
    maker: 'Meinl',
    tip_shape: 'Barrel',
    tip_material: 'Wood',
    material: 'Maple',
    taper: 'Long',
    length_mm: 413,
    diameter_mm: 13.6,
  },
  {
    name: 'Hybrid 8A Hard Maple',
    part_number: 'SB135',
    maker: 'Meinl',
    tip_shape: 'Barrel',
    tip_material: 'Wood',
    material: 'Maple',
    taper: 'Long',
    length_mm: 413,
    diameter_mm: 14.1,
  },
  {
    name: 'Hybrid 5A Hard Maple',
    part_number: 'SB136',
    maker: 'Meinl',
    tip_shape: 'Barrel',
    tip_material: 'Wood',
    material: 'Maple',
    taper: 'Long',
    length_mm: 413,
    diameter_mm: 14.4,
  },
  {
    name: 'Hybrid 9A Hard Maple',
    part_number: 'SB137',
    maker: 'Meinl',
    tip_shape: 'Barrel',
    tip_material: 'Wood',
    material: 'Maple',
    taper: 'Long',
    length_mm: 413,
    diameter_mm: 14.7,
  },
  {
    name: 'Hybrid 5B Hard Maple',
    part_number: 'SB138',
    maker: 'Meinl',
    tip_shape: 'Barrel',
    tip_material: 'Wood',
    material: 'Maple',
    taper: 'Long',
    length_mm: 413,
    diameter_mm: 15.1,
  },
  // Sig.
  {
    name: 'SB600-LUKE HOLLAND',
    part_number: 'SB600',
    maker: 'Meinl',
    tip_shape: 'Round',
    tip_material: 'Wood',
    material: 'Hickory',
    taper: 'Short',
    length_mm: 411,
    diameter_mm: 14.7,
  },
  {
    name: 'SB601-CALVIN RODGERS',
    part_number: 'SB601',
    maker: 'Meinl',
    tip_shape: 'Round',
    tip_material: 'Wood',
    material: 'Hickory',
    taper: 'Long',
    length_mm: 419,
    diameter_mm: 14.2,
  },
] as const;
