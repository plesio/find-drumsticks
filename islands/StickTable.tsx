import type { Signal } from "@preact/signals";
import { sticksVirFirth } from "../utils/vic_firth.ts";
import { DrumStick } from "../utils/if.ts";
import { StickFilterParams } from "./StickFilter.tsx";
import { StateUpdater, useEffect, useMemo } from "preact/hooks";
import { fetchStickList } from "../utils/StickUtils.ts";

interface Props {
  filterParam: Signal<StickFilterParams>;
  stickListRaw: Signal<DrumStick[]>;
}

// const debugMode = true;

export default function StickTable(props: Props) {
  const { stickListRaw, filterParam } = props;

  useEffect(() => {
    //
    // if (debugMode) {
    //   stickListRaw.value = [...sticksVirFirth];
    //   return;
    // }
    if ("caches" in window) {
      caches.open("drumstick-json").then((cache) => {
        cache
          .match("fetchStickList")
          .then((res) => {
            if (res)
              res.json().then((json) => {
                if (json.length > 0) stickListRaw.value = json;
                else fetchStickList(stickListRaw);
              });
            else fetchStickList(stickListRaw);
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
        return stickListRaw.value.filter((stick) =>
          maker.includes(stick.maker)
        );
      }
    })();

    const name = filterParam.value.name;
    list = (() => {
      if (name) {
        return list.filter((stick) =>
          stick.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
        );
      }
      return list;
    })();

    return list;
  })();

  //
  return (
    <>
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
          {stickList.map((stick) => {
            return (
              <tr class="border border-slate-300 ">
                <td class="min-w-min">{stick.maker}</td>
                <td class="min-w-min">{stick.name}</td>
                <td class="min-w-min">{stick.tip}</td>
                <td class="min-w-min">{stick.material}</td>
                <td class="min-w-min">{stick.diameter_mm}</td>
                <td class="min-w-min">{stick.length_mm}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
