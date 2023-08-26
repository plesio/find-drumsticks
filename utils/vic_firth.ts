import {DrumStickMetaIf} from "./if.ts";

export const sticksVirFirth: ReadonlyArray<DrumStickMetaIf> = [
  {
    name: "American Classic 5A",
    maker: "VicFirth",
    tip: "Teardrop",
    material: "Hickory",
    taper: "Medium",
    length_mm: 407,
    diameter_mm: 14.4,
  },
  {
    name: "American Classic 5B",
    maker: "VicFirth",
    tip: "Teardrop",
    material: "Hickory",
    taper: "Medium",
    length_mm: 407,
    diameter_mm: 15.1,
  }
] as const;