import type { Signal } from "@preact/signals";
import { signal } from "@preact/signals";
import { sticksVirFirth } from "../utils/vic_firth.ts";
import { DrumStick, Makers } from "../utils/if.ts";
import { StickFilterParams } from "./StickFilter.tsx";
import { useCallback, useEffect, useMemo, useState } from "preact/hooks";

export interface Props {
  filterParam: Signal<StickFilterParams>;
}

// const debugMode = true;
const fetchStickListUrl =
  "https://raw.githubusercontent.com/plesio/find-drumsticks/main/stick_data.json";

export default function StickTable(props: Props) {
  const [stickListRaw, setStickListRaw] = useState<DrumStick[]>([]);

  const fetchStickList = useCallback(() => {
    fetch(fetchStickListUrl)
      .then((res) => res.json())
      .then((json) => {
        setStickListRaw(json);
        // add cache.
        if ("caches" in window) {
          caches.open("drumstick-json").then((cache) => {
            cache.put(fetchStickListUrl, new Response(JSON.stringify(json)));
          });
        }
      });
  }, []);

  useEffect(() => {
    // if (debugMode) {
    //   setStickListRaw([...sticksVirFirth]);
    //   return;
    // }
    if ("caches" in window) {
      caches.open("drumstick-json").then((cache) => {
        cache
          .match(fetchStickListUrl)
          .then((res) => {
            if (res)
              res.json().then((json) => {
                if (json.length > 0) setStickListRaw(json);
                else fetchStickList();
              });
          })
          .catch((err) => {
            fetchStickList();
          });
      });
    } else {
      fetchStickList();
    }
  }, []);

  const stickList: DrumStick[] = useMemo(() => {
    const maker = props.filterParam.value.maker;

    let list: DrumStick[] = (() => {
      if (maker?.length === 0) {
        return stickListRaw;
      } else {
        return stickListRaw.filter((stick) => maker.includes(stick.maker));
      }
    })();

    const name = props.filterParam.value.name;
    list = (() => {
      if (name) {
        return list.filter((stick) => stick.name.includes(name));
      }
      return list;
    })();

    return list;
  }, [props.filterParam.value, stickListRaw]);

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
  );
}
