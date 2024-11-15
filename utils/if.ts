import { sticksAhead } from './stickdata/ahead.ts';
import { sticksCanopus } from './stickdata/canopus.ts';
import { sticksDrumCity } from './stickdata/drumcity.ts';
import { sticksGretsch } from './stickdata/gretsch.ts';
import { sticksInnovativePercussion } from './stickdata/innovativepercussion.ts';
import { sticksJug } from './stickdata/jug.ts';
import { sticksLerni } from './stickdata/lerni.ts';
import { sticksLosCabos } from './stickdata/loscabos.ts';
import { sticksLoudin } from './stickdata/Loudin.ts';
import { sticksLP } from './stickdata/lp.ts';
import { sticksLudwig } from './stickdata/ludwig.ts';
import { sticksMeinl } from './stickdata/meinl.ts';
import { sticksPearl } from './stickdata/pearl.ts';
import { sticksPlaywood } from './stickdata/playwood.ts';
import { sticksProMark } from './stickdata/promark.ts';
import { sticksPromuco } from './stickdata/promuco.ts';
import { sticksRegalTip } from './stickdata/regaltip.ts';
import { sticksRohema } from './stickdata/rohema.ts';
import { sticksTama } from './stickdata/tama.ts';
import { sticksVater } from './stickdata/vater.ts';
import { sticksVirFirth } from './stickdata/vicfirth.ts';
import { sticksWincent } from './stickdata/wincent.ts';
import { sticksYamaha } from './stickdata/yamaha.ts';
import { sticksZildjian } from './stickdata/zildjian.ts';

export const AllSticks = [
  ...sticksVirFirth,
  ...sticksProMark,
  ...sticksMeinl,
  ...sticksCanopus,
  ...sticksTama,
  ...sticksPearl,
  ...sticksVater,
  ...sticksZildjian,
  ...sticksRegalTip,
  ...sticksWincent,
  ...sticksYamaha,
  ...sticksLerni,
  ...sticksLosCabos,
  ...sticksLudwig,
  ...sticksGretsch,
  ...sticksPlaywood,
  ...sticksPromuco,
  ...sticksInnovativePercussion,
  ...sticksRohema,
  ...sticksAhead,
  ...sticksLP,
  ...sticksDrumCity,
  ...sticksJug,
  ...sticksLoudin,
] as const;

export interface DrumStick {
  maker: Makers;
  name: string;
  part_number: string;
  material: MaterialType;
  tip_shape: TipShapes;
  tip_material: TipMaterials;
  taper: TaperType;
  length_mm: number;
  diameter_mm: number;
}

export const Makers = {
  VicFirth: 'VicFirth',
  Zildjian: 'Zildjian',
  ProMark: 'ProMark',
  Vater: 'Vater',
  RegalTip: 'RegalTip',
  Wincent: 'Wincent',
  Tama: 'Tama',
  Pearl: 'Pearl',
  Yamaha: 'Yamaha',
  Ahead: 'Ahead',
  Meinl: 'Meinl',
  //Sabian: "Sabian",
  Canopus: 'Canopus',
  Lerni: 'Lerni',
  Ludwig: 'Ludwig',
  LosCabos: 'LosCabos',
  PLAYWOOD: 'PLAYWOOD',
  GRETSCH: 'GRETSCH',
  Promuco: 'Promuco',
  LP: 'LP',
  InnovativePercussion: 'InnovativePercussion',
  Rohema: 'Rohema',
  KMK: 'KMK',
  DrumCity: 'DrumCity',
  JUG: 'JUG',
  //XCEL: 'XCEL', 今国内流通してないっぽい？ https://www.xceldrumsticks.com/product/xcel-speedsticks/
  Loudin: 'Loudin', // ハードオフでよくみかけるアレ
} as const;

export type Makers = typeof Makers[keyof typeof Makers];
export const MakersArray = Object.values(Makers);

export const TipShapes = {
  Round: 'Round',
  Barrel: 'Barrel',
  Acorn: 'Acorn',
  Oval: 'Oval',
  Teardrop: 'Teardrop',
  //Triangle: 'Triangle',
  R_Teardrop: 'R_Teardrop',
  //Reverse_Triangle: 'Reverse_Triangle',
  None: 'None',
  Unknown: 'Unknown',
} as const;

export type TipShapes = typeof TipShapes[keyof typeof TipShapes];
export const TipShapesArray = Object.values(TipShapes);

export const TipMaterials = {
  Wood: 'Wood',
  Nylon: 'Nylon',
  Metal: 'Metal',
  Other: 'Other',
} as const;

export type TipMaterials = typeof TipMaterials[keyof typeof TipMaterials];

export const TaperType = {
  ExtraLong: 'ExtraLong',
  Long: 'Long',
  Medium: 'Medium',
  Short: 'Short',
  None: 'None',
  Unknown: 'Unknown',
} as const;

export type TaperType = typeof TaperType[keyof typeof TaperType];

export const MaterialType = {
  Maple: 'Maple',
  Hickory: 'Hickory',
  Oak: 'Oak',
  Birch: 'Birch',
  GoldenCitrine: 'GoldenCitrine',
  Hornbeam: 'Hornbeam',
  Metal: 'Metal',
};

export type MaterialType = typeof MaterialType[keyof typeof MaterialType];
export const MaterialTypeArray = Object.values(MaterialType);
