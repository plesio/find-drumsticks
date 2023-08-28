import type { Signal } from '@preact/signals';
import { AllSticks, DrumStick } from '../utils/if.ts';
import { StickFilterParams } from './StickFilter.tsx';
import { StateUpdater, useEffect, useMemo } from 'preact/hooks';
import { fetchStickList } from '../utils/StickUtils.ts';

interface Props {
  filterParam: Signal<StickFilterParams>;
  stickListRaw: Signal<DrumStick[]>;
}

const debugMode = true;

export default function StickTable(props: Props) {
  const { stickListRaw, filterParam } = props;

  useEffect(() => {
    if (debugMode) {
      stickListRaw.value = [...AllSticks];
      return;
    }
    if ('caches' in window) {
      caches.open('drumstick-json').then((cache) => {
        cache
          .match('fetchStickList')
          .then((res) => {
            if (res) {
              res.json().then((json) => {
                if (json.length > 0) stickListRaw.value = json;
                else fetchStickList(stickListRaw);
              });
            } else fetchStickList(stickListRaw);
          })
          .catch((err) => {
            fetchStickList(stickListRaw);
          });
      });
    } else {
      fetchStickList(stickListRaw);
    }
  }, []);

  if (stickListRaw.value.length === 0) return <div>loading...</div>;

  const stickList: DrumStick[] = (() => {
    const maker = filterParam.value.maker;

    let list: DrumStick[] = (() => {
      if (maker?.length === 0) {
        return stickListRaw.value;
      } else {
        return stickListRaw.value.filter((stick) => maker.includes(stick.maker));
      }
    })();

    // -- names
    const name = filterParam.value.name;
    list = (() => {
      if (name) {
        return list.filter((stick) => stick.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
      }
      return list;
    })();

    // -- tip shape
    const tips = filterParam.value.tips;
    list = (() => {
      if (!tips || tips.length === 0) return list;
      else {
        return list.filter((stick) => tips.includes(stick.tip_shape));
      }
    })();

    // -- length
    const length_mm_min = filterParam.value.length_mm_min;
    list = (() => {
      if (!length_mm_min) return list;
      else {
        return list.filter((stick) => stick.length_mm >= length_mm_min);
      }
    })();
    const length_mm_max = filterParam.value.length_mm_max;
    list = (() => {
      if (!length_mm_max) return list;
      else {
        return list.filter((stick) => stick.length_mm <= length_mm_max);
      }
    })();

    // -- diameter
    const diameter_mm_min = filterParam.value.diameter_mm_min;
    list = (() => {
      if (!diameter_mm_min) return list;
      else {
        return list.filter((stick) => stick.diameter_mm >= diameter_mm_min);
      }
    })();
    const diameter_mm_max = filterParam.value.diameter_mm_max;
    list = (() => {
      if (!diameter_mm_max) return list;
      else {
        return list.filter((stick) => stick.diameter_mm <= diameter_mm_max);
      }
    })();

    return list;
  })();

  //
  return (
    <>
      <table class='table-auto border-collapse border border-slate-400'>
        <thead>
          <tr class='border border-slate-300'>
            <th class='w-32 text-left whitespace-nowrap whitespace-nowrap'>Maker</th>
            <th class='w-64 text-left whitespace-nowrap'>Name</th>
            <th class='w-32 text-left whitespace-nowrap'>T-Shape</th>
            <th class='w-32 text-left whitespace-nowrap'>T-Mat.</th>
            <th class='w-32 text-left whitespace-nowrap'>Material</th>
            <th class='w-32 text-left whitespace-nowrap'>Taper</th>
            <th class='w-32 text-left whitespace-nowrap'>Diameter(mm)</th>
            <th class='w-32 text-left whitespace-nowrap'>Length(mm)</th>
          </tr>
        </thead>
        <tbody>
          {stickList.map((stick) => {
            return (
              <tr class='border border-slate-300 '>
                <td class='min-w-min'>{stick.maker}</td>
                <td class='min-w-min whitespace-nowrap'>{stick.name}</td>
                <td class='min-w-min'>{stick.tip_shape}</td>
                <td class='min-w-min'>{stick.tip_material}</td>
                <td class='min-w-min'>{stick.material}</td>
                <td class='min-w-min'>{stick.taper}</td>
                <td class='min-w-min'>{stick.diameter_mm}</td>
                <td class='min-w-min'>{stick.length_mm}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
