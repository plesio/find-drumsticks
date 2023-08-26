import type {Signal} from "@preact/signals";
import { signal } from "@preact/signals";
import {sticksVirFirth} from "../utils/vic_firth.ts";
import {DrumStickMetaIf, Makers} from "../utils/if.ts";
import {StickFilterParams} from "./StickFilter.tsx";

export interface Props {
  filterParam: Signal<StickFilterParams>
}

export default function StickTable(props: Props) {

  // Props が変更されたら再描画する
  signal(props);

  let stickList: DrumStickMetaIf[] = (() => {
    const maker = props.filterParam.value.maker;

    let list: DrumStickMetaIf[] = (() => {
      if (maker?.length === 0) {
        return [
          ...sticksVirFirth
        ]
      } else {
        let res = [];
        if (maker?.includes(Makers.VicFirth)) {
          res = [...res, ...sticksVirFirth]
        }
        return res;
      }
    })();

    const name = props.filterParam.value.name;
    list = (()=>{
      if(name){
        return list.filter((stick)=>stick.name.includes(name))
      }
      return list;
    })();

    return list;
  })();

  return (
    <table class="table-auto border-collapse border border-slate-400">
      <thead>
      <tr class="border border-slate-300">
        <th class="w-32 text-left">Maker</th>
        <th class="w-64 text-left">Name</th>
        <th class="w-32 text-left">Tip</th>
        <th class="w-32 text-left">Material</th>
        <th class="w-32 text-left">Diameter(mm)</th>
        <th class="w-32 text-left">Length(mm)</th>
      </tr>
      </thead>
      <tbody>
      {
        stickList.map((stick) => {
          return (
            <tr class="border border-slate-300 ">
              <td class="min-w-min">{stick.maker}</td>
              <td class="min-w-min">{stick.name}</td>
              <td class="min-w-min">{stick.tip}</td>
              <td class="min-w-min">{stick.material}</td>
              <td class="min-w-min">{stick.diameter_mm}</td>
              <td class="min-w-min">{stick.length_mm}</td>
            </tr>
          )
        })
      }
      </tbody>
    </table>
  );
}
