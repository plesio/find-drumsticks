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
    {
        name: "O-JIRO Signature",
        part_number: "YCSOJ",
        maker: "Yamaha",
        tip_shape: "Unknown",
        tip_material: "Wood",
        material: "Hickory",
        taper: "Unknown",
        length_mm: 406,
        diameter_mm: 14.0,
    },
    {
        name: "George Otsuka Signature",
        part_number: "YCSGO",
        maker: "Yamaha",
        tip_shape: "Round",
        tip_material: "Wood",
        material: "Hickory",
        taper: "Unknown",
        length_mm: 400,
        diameter_mm: 16.0,
    }
] as const;