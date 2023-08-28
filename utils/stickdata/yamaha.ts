import { DrumStick } from "../if.ts";

export const sticksYamaha: ReadonlyArray<DrumStick> = [
    {
        name: "YS2BN",
        part_number: "YS2BN",
        maker: "Yamaha",
        tip_shape: "Oval",
        tip_material: "Nylon",
        material: "Hickory",
        taper: "Unknown",
        length_mm: 406,
        diameter_mm: 16.0,
    },
] as const;