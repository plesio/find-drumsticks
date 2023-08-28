import { DrumStick } from "../if.ts";

export const sticksZildjian: ReadonlyArray<DrumStick> = [
    {
        name: "5A Natural",
        part_number: "LAZLZ5A",
        maker: "Zildjian",
        tip_shape: "Oval",
        tip_material: "Wood",
        material: "Hickory",
        taper: "Unknown",
        length_mm: 406,
        diameter_mm: 14.2,
    },
] as const;