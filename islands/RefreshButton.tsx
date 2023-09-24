import { DrumStick } from '../utils/if.ts';
import { fetchStickList } from '../utils/StickUtils.ts';
import { Signal } from '@preact/signals';
import { StickFilterParams } from './StickFilter.tsx';
import { useCallback } from 'preact/hooks';

import IconRefresh from 'https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/refresh.tsx';

interface Props {
  stickListRaw: Signal<DrumStick[]>;
  filterParam: Signal<StickFilterParams>;
}

export default function RefreshButton(props: Props) {
  const refresh = useCallback(() => {
    fetchStickList(props.stickListRaw, true);
    props.filterParam.value = { exclude_makers: [], tips: [] };
    if ('caches' in window) {
      caches.open('drumstick-json').then((cache) => {
        cache.delete('filterParam');
      });
    }
  }, []);
  return (
    <button class='border border-slate-300 rounded-md p-2' onClick={refresh}>
      <IconRefresh class={`${props.stickListRaw.value.length === 0 ? 'animate-spin text-blue-500' : ''} w-6 h-6`} />
    </button>
  );
}
