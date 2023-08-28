import { sticksCanopus } from "./stickdata/canopus.ts";
import { sticksPearl } from "./stickdata/pearl.ts";
import { sticksTama } from "./stickdata/tama.ts";
import { sticksVirFirth } from "./stickdata/vic_firth.ts";

export const AllSticks = [
  ...sticksVirFirth,
  ...sticksCanopus,
  ...sticksTama,
  ...sticksPearl
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
  VicFirth: "VicFirth",
  Zildjian: "Zildjian",
  ProMark: "ProMark",
  Vater: "Vater",
  RegalTip: "RegalTip",
  Wincent: "Wincent",
  Tama: "Tama",
  Pearl: "Pearl",
  Yamaha: "Yamaha",
  Ahead: "Ahead",
  Meinl: "Meinl",
  //Sabian: "Sabian",
  Canopus: "Canopus",
} as const;

export type Makers = typeof Makers[keyof typeof Makers];

export const TipShapes = {
  Round: "Round",
  Ball: "Ball",
  Barrel: "Barrel",
  Acorn: "Acorn",
  Oval: "Oval",
  Teardrop: "Teardrop",
  Triangle: "Triangle",
  Reverse_Teardrop: "Reverse_Teardrop",
  Reverse_Triangle: "Reverse_Triangle",
  Unknown: "Unknown",
} as const

export type TipShapes = typeof TipShapes[keyof typeof TipShapes];

export const TipMaterials = {
  Wood: "Wood",
  Nylon: "Nylon",
  Metal: "Metal",
} as const

export type TipMaterials = typeof TipMaterials[keyof typeof TipMaterials];

export const TaperType = {
  Long: "Long",
  Medium: "Medium",
  Short: "Short",
  None: "None",
  Unknown: "Unknown",
} as const;

export type TaperType = typeof TaperType[keyof typeof TaperType];

export const MaterialType = {
  Maple: "Maple",
  Hickory: "Hickory",
  Oak: "Oak",
}

export type MaterialType = typeof MaterialType[keyof typeof MaterialType];
