import { DrumStick } from "./if.ts";

export const sticksTama: ReadonlyArray<DrumStick> = [
    {
        name: "H214-B",
        part_number: "H214-B",
        maker: "Tama",
        tip_shape: "Ball",
        tip_material: "Wood",
        material: "Hickory",
        taper: "Unknown",
        length_mm: 406,
        diameter_mm: 14.0,
    },
    {
        name: "H214-P",
        part_number: "H214-P",
        maker: "Tama",
        tip_shape: "Teardrop",
        tip_material: "Wood",
        material: "Hickory",
        taper: "Unknown",
        length_mm: 406,
        diameter_mm: 14.0,
    }
] as const;