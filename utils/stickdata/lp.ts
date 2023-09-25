import { inchesToMillimeters } from '../StickUtils.ts';
import { DrumStick } from '../if.ts';

export const sticksLP: ReadonlyArray<DrumStick> = [
  {
    name: 'LP248B Timbale Stick',
    part_number: 'LP248B',
    maker: 'LP',
    tip_shape: 'None',
    tip_material: 'Wood',
    material: 'Hickory',
    taper: 'None',
    length_mm: 381,
    diameter_mm: 9.5,
  },
  {
    name: 'LP248C Timbale Stick',
    part_number: 'LP248C',
    maker: 'LP',
    tip_shape: 'None',
    tip_material: 'Wood',
    material: 'Hickory',
    taper: 'None',
    length_mm: 422,
    diameter_mm: 11.1,
  },
  // -- LP Tito Puente Timbale Stick.
  {
    name: 'Tito Puente 13 Timbale Stick',
    part_number: 'LP655',
    maker: 'LP',
    tip_shape: 'None',
    tip_material: 'Wood',
    material: 'Hickory',
    taper: 'None',
    length_mm: inchesToMillimeters(13.0),
    diameter_mm: 13.0,
  },
  {
    name: 'Tito Puente 15 Timbale Stick',
    part_number: 'LP656',
    maker: 'LP',
    tip_shape: 'None',
    tip_material: 'Wood',
    material: 'Hickory',
    taper: 'None',
    length_mm: inchesToMillimeters(15.0),
    diameter_mm: 13.0,
  },
] as const;
