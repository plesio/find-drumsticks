import { inchesToMillimeters } from '../StickUtils.ts';
import { DrumStick } from '../if.ts';

export const sticksAhead: ReadonlyArray<DrumStick> = [
  // A
  {
    name: '5A',
    part_number: '5A',
    maker: 'Ahead',
    tip_shape: 'Unknown',
    tip_material: 'Nylon',
    material: 'Metal',
    taper: 'Medium',
    diameter_mm: inchesToMillimeters(0.540),
    length_mm: inchesToMillimeters(16.00),
  },
  {
    name: 'FATBEAT 5A',
    part_number: 'FB-5A',
    maker: 'Ahead',
    tip_shape: 'Unknown',
    tip_material: 'Nylon',
    material: 'Metal',
    taper: 'Medium',
    diameter_mm: inchesToMillimeters(0.540),
    length_mm: inchesToMillimeters(16.25),
  },
  {
    name: '7A',
    part_number: '7A',
    maker: 'Ahead',
    tip_shape: 'Unknown',
    tip_material: 'Nylon',
    material: 'Metal',
    taper: 'Medium',
    diameter_mm: inchesToMillimeters(0.540),
    length_mm: inchesToMillimeters(15.69),
  },
  // B
  {
    name: '2B',
    part_number: '2B',
    maker: 'Ahead',
    tip_shape: 'Unknown',
    tip_material: 'Nylon',
    material: 'Metal',
    taper: 'Long',
    diameter_mm: inchesToMillimeters(0.595),
    length_mm: inchesToMillimeters(16.00),
  },
  {
    name: '5B',
    part_number: '5B',
    maker: 'Ahead',
    tip_shape: 'Unknown',
    tip_material: 'Nylon',
    material: 'Metal',
    taper: 'Long',
    diameter_mm: inchesToMillimeters(0.595),
    length_mm: inchesToMillimeters(16.00),
  },
  {
    name: '5B Rock',
    part_number: '5BR',
    maker: 'Ahead',
    tip_shape: 'Unknown',
    tip_material: 'Nylon',
    material: 'Metal',
    taper: 'Short',
    diameter_mm: inchesToMillimeters(0.595),
    length_mm: inchesToMillimeters(16.00),
  },
  // -- Signature
  {
    name: 'Lars Ulrich Signature',
    part_number: 'LU-SGL',
    maker: 'Ahead',
    tip_shape: 'Unknown',
    tip_material: 'Nylon',
    material: 'Metal',
    taper: 'Long',
    diameter_mm: inchesToMillimeters(0.595),
    length_mm: inchesToMillimeters(16.25),
  },
  {
    name: 'Frank Zummo Signature',
    part_number: 'FZ',
    maker: 'Ahead',
    tip_shape: 'Unknown',
    tip_material: 'Nylon',
    material: 'Metal',
    taper: 'Long',
    diameter_mm: inchesToMillimeters(0.595),
    length_mm: inchesToMillimeters(16.63),
  },
];
