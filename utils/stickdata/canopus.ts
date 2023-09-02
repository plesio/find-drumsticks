import { DrumStick } from "../if.ts";

export const sticksCanopus: ReadonlyArray<DrumStick> = [
    // -- Signature --
    {
        name: "CP-AI AHITO INAZAWA MODEL",
        part_number: "CP-AI",
        maker: "Canopus",
        tip_shape: "Unknown",
        tip_material: "Wood",
        material: "Hickory",
        taper: "Unknown",
        length_mm: 410,
        diameter_mm: 13.8,
    },
    {
        name: "CP-KK KUHARA KAZUYUKI MODEL",
        part_number: "CP-KK",
        maker: "Canopus",
        tip_shape: "Unknown",
        tip_material: "Wood",
        material: "Hickory",
        taper: "Unknown",
        length_mm: 406,
        diameter_mm: 14.0,
    },
    {
        name: "CP-TH Kodachi",
        part_number: "CP-TH",
        maker: "Canopus",
        tip_shape: "Unknown",
        tip_material: "Wood",
        material: "Hickory",
        taper: "Unknown",
        length_mm: 403,
        diameter_mm: 13.0,
    }
] as const;