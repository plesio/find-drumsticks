import { Signal } from "@preact/signals";
import { DrumStick } from "./if.ts";

const fetchStickListUrl =
    "https://raw.githubusercontent.com/plesio/find-drumsticks/main/stick_data.json";

export function fetchStickList(stickListRaw: Signal<DrumStick[]>, isRefresh = false) {
    if (isRefresh) {
        stickListRaw.value = [];
    }
    fetch(fetchStickListUrl)
        .then((res) => res.json())
        .then((json: DrumStick[]) => {
            stickListRaw.value = (json);
            // add cache.
            if ("caches" in window) {
                caches.open("drumstick-json").then((cache) => {
                    cache.put(fetchStickListUrl, new Response(JSON.stringify(json)));
                });
            }
        });
};