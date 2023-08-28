import { DrumStick } from "../if.ts";

export const sticksLosCabos: ReadonlyArray<DrumStick> = [
    {
        name: "5A",
        part_number: "LCD5AH",
        maker: "LosCabos",
        tip_shape: "Acorn",
        tip_material: "Wood",
        material: "Hickory",
        taper: "Medium",
        length_mm: 406,
        diameter_mm: 14.6,
    },
] as const;