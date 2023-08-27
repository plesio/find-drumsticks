/**
 * ドラムスティックのデータ情報をJSON形式に変換するだけの処理を呼び出す
 * @author Plesiosaurus
 */

import { AllSticks, DrumStick } from "./if.ts";

const convert = () => {
    console.log('convertStickData2Json')
    const stickList: ReadonlyArray<DrumStick> = [...AllSticks];
    const json = JSON.stringify(stickList, null, 2);
    Deno.writeFileSync('./stick_data.json', new TextEncoder().encode(json));
}

convert();