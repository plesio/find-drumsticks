import type { Signal } from "@preact/signals";
import { signal } from "@preact/signals";
import { sticksVirFirth } from "../utils/vic_firth.ts";
import { Makers, TipShapes } from "../utils/if.ts";

export interface StickFilterParams {
  name?: string;
  material?: string;
  maker: Makers[];
  tips: TipShapes[];
  diameter_mm_min?: number;
  diameter_mm_max?: number;
  length_mm_min?: number;
  length_mm_max?: number;
}

export interface Props {
  filterParam: Signal<StickFilterParams>;
}

export default function StickFilter(props: Props) {
  const handleOnChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const name = target.value ?? undefined;
    //console.log(name);
    props.filterParam.value = { ...props.filterParam.value, name };
    // props が変化したことを通知する
    signal(props);
  };

  return (
    <div class="pb-2 text-right">
      <input
        type="text"
        class="border border-slate-300 rounded-md"
        placeholder="filter by name"
        onChange={handleOnChange}
      />
    </div>
  );
}
