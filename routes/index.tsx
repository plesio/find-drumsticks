import {useSignal} from "@preact/signals";
import StickTable from "../islands/StickTable.tsx";
import StickFilter, {StickFilterParams} from "../islands/StickFilter.tsx";

export default function Home() {
  // コンテンツの入力値を保持する
  const filterParam = useSignal<StickFilterParams>({maker: [], tips: []});

  return (
    <>
      <div class="p-4 mx-auto max-w-screen-md">
        <p class={"text-2xl font-bold"}>Find Your Favorite Drum Sticks</p>
      </div>
      <div class="p-4 mx-auto max-w-screen-md">
        <StickFilter filterParam={filterParam} />
        <StickTable filterParam={filterParam} />
      </div>
    </>
  );
}
