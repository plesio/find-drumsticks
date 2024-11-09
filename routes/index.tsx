import { signal, useSignal } from '@preact/signals';
import StickTable from '../islands/StickTable.tsx';
import StickFilter, { StickFilterParams } from '../islands/StickFilter.tsx';

import { useEffect, useState } from 'preact/hooks';
import FilterButton from '../components/FilterButton.tsx';
import { DrumStick } from '../utils/if.ts';
import RefreshButton from '../islands/RefreshButton.tsx';
import AboutButton from '../components/AboutButton.tsx';
import AboutModal from '../components/AboutModal.tsx';
import LinkGitHubButton from '../components/LinkGitHubButton.tsx';

export default function Home() {
  // コンテンツの入力値を保持する
  const filterParam = useSignal<StickFilterParams>({
    exclude_makers: [],
    tips: [],
  });
  const stickListRaw = useSignal<DrumStick[]>([]);

  useEffect(() => {
    //  --
    if ('caches' in window) {
      caches.open('drumstick-json').then((cache) => {
        cache.match('filterParam').then((res) => {
          if (res) {
            res.json().then((json) => {
              filterParam.value = json;
            });
          }
        });
      });
    }
  }, []);

  return (
    <>
      <div class='p-4 mx-auto max-w-screen-lg'>
        <p class={'text-2xl font-bold'}>Find Your Favorite Drum Sticks</p>
      </div>
      <div class='p-4 mx-auto max-w-screen-lg'>
        <div class='mb-1 flex justify-end'>
          <FilterButton />
          <AboutButton />
          <RefreshButton
            stickListRaw={stickListRaw}
            filterParam={filterParam}
          />
          <LinkGitHubButton />
        </div>
        <AboutModal />
        <StickFilter filterParam={filterParam} />
        <StickTable filterParam={filterParam} stickListRaw={stickListRaw} />
      </div>
    </>
  );
}
