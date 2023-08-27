export interface DrumStick {
  maker: Makers;
  name: string;
  material: string;
  tip: TipShapes;
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
  //Pearl: "Pearl",
  Yamaha: "Yamaha",
  Ahead: "Ahead",
  //Meinl: "Meinl",
  //Sabian: "Sabian",
} as const;

export type Makers = typeof Makers[keyof typeof Makers];


export const TipShapes = {
  Round: "Round",
  Barrel: "Barrel",
  Acorn: "Acorn",
  Oval: "Oval",
  Teardrop: "Teardrop",
  Triangle: "Triangle",
  Reverse_Teardrop: "Reverse_Teardrop",
  Reverse_Triangle: "Reverse_Triangle",
} as const

export type TipShapes = typeof TipShapes[keyof typeof TipShapes];

export const TaperType = {
  Long: "Long",
  Medium: "Medium",
  Short: "Short",
  None: "None",
} as const;

export type TaperType = typeof TaperType[keyof typeof TaperType];
