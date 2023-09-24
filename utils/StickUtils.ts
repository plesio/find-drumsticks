import { Signal } from '@preact/signals';
import { DrumStick } from './if.ts';

const fetchStickListUrl = 'https://raw.githubusercontent.com/plesio/find-drumsticks/main/stick_data.json';

export function fetchStickList(stickListRaw: Signal<DrumStick[]>, isRefresh = false) {
  if (isRefresh) {
    stickListRaw.value = [];
  }
  fetch(fetchStickListUrl)
    .then((res) => res.json())
    .then((json: DrumStick[]) => {
      stickListRaw.value = json;
      // add cache.
      if ('caches' in window) {
        caches.open('drumstick-json').then((cache) => {
          cache.put(fetchStickListUrl, new Response(JSON.stringify(json)));
        });
      }
    });
}

/**  */
export function inchesToMillimeters(inches: number): number {
  const millimeters = inches * 25.4;
  // xx.x mm 表記になるように小数点第一位で四捨五入する。
  return Math.round(millimeters * 10) / 10;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function filterByExcludeMakers(stickList: DrumStick[], excludeMakers: string[] = []): DrumStick[] {
  if (!excludeMakers || excludeMakers?.length === 0) {
    return stickList;
  } else {
    const set = new Set(excludeMakers);
    return stickList.filter((stick) => !set.has(stick.maker));
  }
}

export function filterByName(stickList: DrumStick[], stickName = ''): DrumStick[] {
  if (stickName) {
    return stickList.filter((stick) => stick.name.toLocaleLowerCase().includes(stickName.toLocaleLowerCase()));
  }
  return stickList;
}

export function filterByTipShape(stickList: DrumStick[], tipShapes: string[] = []): DrumStick[] {
  if (!tipShapes || tipShapes?.length === 0) {
    return stickList;
  } else {
    const set = new Set(tipShapes);
    return stickList.filter((stick) => set.has(stick.tip_shape));
  }
}

export function filterByMaterial(stickList: DrumStick[], material = ''): DrumStick[] {
  if (!material) {
    return stickList;
  } else {
    const set = new Set([material]);
    return stickList.filter((stick) => set.has(stick.material));
  }
}

export function filterByLengthMin(stickList: DrumStick[], minMm?: number): DrumStick[] {
  if (!minMm) return stickList;
  else {
    return stickList.filter((stick) => stick.length_mm >= minMm);
  }
}

export function filterByLengthMax(stickList: DrumStick[], maxMm?: number): DrumStick[] {
  if (!maxMm) return stickList;
  else {
    return stickList.filter((stick) => stick.length_mm <= maxMm);
  }
}

export function filterByDiameterMin(stickList: DrumStick[], minMm?: number): DrumStick[] {
  if (!minMm) return stickList;
  else {
    return stickList.filter((stick) => stick.diameter_mm >= minMm);
  }
}

export function filterByDiameterMax(stickList: DrumStick[], maxMm?: number): DrumStick[] {
  if (!maxMm) return stickList;
  else {
    return stickList.filter((stick) => stick.diameter_mm <= maxMm);
  }
}
