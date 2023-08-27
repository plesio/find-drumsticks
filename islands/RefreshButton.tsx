import { DrumStick } from "../utils/if.ts";
import { fetchStickList } from "../utils/StickUtils.ts";
import { Signal } from "@preact/signals";
import { StickFilterParams } from "./StickFilter.tsx";
import { useCallback } from "preact/hooks";

interface Props {
  stickListRaw: Signal<DrumStick[]>;
  filterParam: Signal<StickFilterParams>;
}

export default function RefreshButton(props: Props) {
  const refresh = useCallback(() => {
    fetchStickList(props.stickListRaw, true);
    props.filterParam.value = { maker: [], tips: [] };
    if ("caches" in window) {
      caches.open("drumstick-json").then((cache) => {
        cache.delete("filterParam");
      });
    }
  }, []);
  return (
    <button class="border border-slate-300 rounded-md p-2" onClick={refresh}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
      >
        <path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z" />
      </svg>
    </button>
  );
}
