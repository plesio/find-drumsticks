import type { Signal } from "@preact/signals";
import { signal } from "@preact/signals";
import { Makers, TipShapes } from "../utils/if.ts";
import { useCallback } from "preact/hooks";

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
  const handleChangeParam = () => {
    if ("caches" in window) {
      caches.open("drumstick-json").then((cache) => {
        cache.put(
          "filterParam",
          new Response(JSON.stringify(props.filterParam.value))
        );
      });
    }
  };

  const handleOnChangeName = useCallback((e: Event) => {
    const target = e.target as HTMLInputElement;
    const name = target.value ?? undefined;
    props.filterParam.value = { ...props.filterParam.value, name };
    //console.log(props.filterParam.value);
    // props が変化したことを通知する
    handleChangeParam();
  }, []);

  return (
    <>
      <div id="modal_filter" class="hidden target:block">
        <div class="block w-full h-full bg-black/70 fixed top-0 left-0">
          <a href="#" class="block w-full h-full cursor-default"></a>
          <div class="w-3/4 mx-auto mt-20 relative -top-full">
            <div class="bg-white rounded-lg shadow-lg">
              <div class="p-4">
                <label class="block text-sm font-bold text-slate-900">
                  Name Filter
                </label>
                <input
                  type="text"
                  class="w-full border border-slate-300 rounded-md"
                  onChange={handleOnChangeName}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
