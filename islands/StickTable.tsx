import type { Signal } from '@preact/signals';
import { AllSticks, DrumStick } from '../utils/if.ts';
import { StickFilterParams } from './StickFilter.tsx';
import { useEffect } from 'preact/hooks';
import { fetchStickList, filterByDiameterMax, filterByDiameterMin, filterByExcludeMakers, filterByLengthMax, filterByLengthMin, filterByMaterial, filterByName, filterByTipShape } from '../utils/StickUtils.ts';

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

  // パフォーマンス的に微妙だけど、値が変化するたびに随時再描画することにする。
  const stickList: DrumStick[] = filterTableData(stickListRaw.value, filterParam.value);

  //
  return (
    <>
      <table class='table-auto border-collapse border border-slate-400'>
        <thead>
          <tr class='border border-slate-300'>
            <th class='w-32 text-left whitespace-nowrap'>Maker</th>
            <th class='w-64 text-left whitespace-nowrap'>Name</th>
            <th class='w-32 text-left whitespace-nowrap'>T-Shape</th>
            <th class='w-32 text-left whitespace-nowrap'>T-Mat.</th>
            <th class='w-32 text-left whitespace-nowrap'>Material</th>
            {/* <th class='w-32 text-left whitespace-nowrap'>Taper</th> */}
            <th class='w-32 text-left whitespace-nowrap'>Diameter(mm)</th>
            <th class='w-32 text-left whitespace-nowrap'>Length(mm)</th>
          </tr>
        </thead>
        <tbody>
          {stickList.map((stick) => {
            return (
              <tr class='border border-slate-300'>
                <td class='min-w-min whitespace-nowrap' name='maker'>{stick.maker}</td>
                <td class='min-w-min whitespace-nowrap'>{stick.name}</td>
                <td class='min-w-min' name='t-shape'>{stick.tip_shape}</td>
                <td class='min-w-min' name='t-mat'>{stick.tip_material}</td>
                <td class='min-w-min' name='material'>{stick.material}</td>
                {/* <td class='min-w-min'>{stick.taper}</td> */}
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

function filterTableData(listRaw: DrumStick[], param: StickFilterParams) {
  let list: DrumStick[] = filterByExcludeMakers(listRaw, param.exclude_makers);

  // -- names
  list = filterByName(list, param.name);

  // -- tip shape
  list = filterByTipShape(list, param.tips);

  // -- material
  list = filterByMaterial(list, param.material);

  // -- length
  list = filterByLengthMin(list, param.length_mm_min);
  list = filterByLengthMax(list, param.length_mm_max);

  // -- diameter
  list = filterByDiameterMin(list, param.diameter_mm_min);
  list = filterByDiameterMax(list, param.diameter_mm_max);

  return list;
}
