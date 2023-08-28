import { DrumStick } from "../if.ts";

export const sticksMeinl: ReadonlyArray<DrumStick> = [
    {
        name: "Concert SD1",
        part_number: "SB113",
        maker: "Meinl",
        tip_shape: "Round",
        tip_material: "Wood",
        material: "Maple",
        taper: "Medium",
        length_mm: 416,
        diameter_mm: 16.1,
    },
    {
        name: "Concert SD2",
        part_number: "SB114",
        maker: "Meinl",
        tip_shape: "Barrel",
        tip_material: "Wood",
        material: "Maple",
        taper: "Long",
        length_mm: 407,
        diameter_mm: 16.0,
    },
    {
        name: "Concert SD4",
        part_number: "SB115",
        maker: "Meinl",
        tip_shape: "Barrel",
        tip_material: "Wood",
        material: "Maple",
        taper: "Medium",
        length_mm: 403,
        diameter_mm: 13.8,
    },
    {
        name: "Concert HD1",
        part_number: "SB129",
        maker: "Meinl",
        tip_shape: "Round",
        tip_material: "Wood",
        material: "Hickory",
        taper: "Medium",
        length_mm: 416,
        diameter_mm: 16.1,
    },
    {
        name: "Concert HD2",
        part_number: "SB130",
        maker: "Meinl",
        tip_shape: "Barrel",
        tip_material: "Wood",
        material: "Hickory",
        taper: "Long",
        length_mm: 406,
        diameter_mm: 16.0,
    },
    {
        name: "Concert HD4",
        part_number: "SB131",
        maker: "Meinl",
        tip_shape: "Barrel",
        tip_material: "Wood",
        material: "Hickory",
        taper: "Medium",
        length_mm: 403,
        diameter_mm: 13.8,
    },
] as const;