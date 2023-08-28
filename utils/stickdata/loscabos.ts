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
    {
        name: "2B Maple",
        part_number: "2B Maple",
        maker: "LosCabos",
        tip_shape: "Teardrop",
        tip_material: "Wood",
        material: "Maple",
        taper: "Long",
        length_mm: 413,
        diameter_mm: 16.0,
    },
    {
        name: "Concert Maple",
        part_number: "Concert Maple",
        maker: "LosCabos",
        tip_shape: "Round",
        tip_material: "Wood",
        material: "Maple",
        taper: "Unknown",
        length_mm: 406,
        diameter_mm: 16.1,
    }
] as const;