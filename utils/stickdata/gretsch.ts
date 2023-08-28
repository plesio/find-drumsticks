import { DrumStick } from "../if.ts";

export const sticksGretsch: ReadonlyArray<DrumStick> = [
    {
        name: "Tatsuya Nakamura Signature",
        part_number: "GR-TN101B",
        maker: "GRETSCH",
        tip_shape: "Barrel",
        tip_material: "Nylon",
        material: "Hickory",
        taper: "Unknown",
        length_mm: 400,
        diameter_mm: 14.0,
    },
] as const;