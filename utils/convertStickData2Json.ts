/**
 * ドラムスティックのデータ情報をJSON形式に変換するだけの処理を呼び出す
 * @author Plesiosaurus
 */

import { DrumStick } from "./if.ts";
import { sticksVirFirth } from "./vic_firth.ts";

const convert = () => {
    console.log('convertStickData2Json')
    const stickList: ReadonlyArray<DrumStick> = [...sticksVirFirth];
    const json = JSON.stringify(stickList, null, 2);
    Deno.writeFileSync('./stick_data.json', new TextEncoder().encode(json));
}

convert();