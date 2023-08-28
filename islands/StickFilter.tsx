import type { Signal } from '@preact/signals';
import { signal, useSignal } from '@preact/signals';
import { Makers, TipShapes, TipShapesArray } from '../utils/if.ts';
import { useCallback } from 'preact/hooks';

export interface StickFilterParams {
  name?: string;
  material?: string;
  maker: Makers[];
  tips: TipShapes[];
  diameter_mm_min?: number;
  diameter_mm_max?: number;
  length_mm_min?: number;
  length_mm_max?: number;
}

export interface Props {
  filterParam: Signal<StickFilterParams>;
}

export default function StickFilter(props: Props) {
  const lengthMax = useSignal(props.filterParam.value.length_mm_max ?? 450.0);
  const lengthMin = useSignal(props.filterParam.value.length_mm_min ?? 360.0);

  const handleChangeParam = () => {
    if ('caches' in window) {
      caches.open('drumstick-json').then((cache) => {
        cache.put(
          'filterParam',
          new Response(JSON.stringify(props.filterParam.value)),
        );
      });
    }
  };

  const handleOnChangeName = useCallback((e: Event) => {
    const target = e.target as HTMLInputElement;
    const name = target.value ?? undefined;
    props.filterParam.value = { ...props.filterParam.value, name };
    //console.log(props.filterParam.value);
    // props が変化したことを通知する
    handleChangeParam();
  }, []);

  const handleOnChangeTipShape = useCallback((e: Event) => {
    const target = e.target as HTMLInputElement;
    const tipShape = target.value ?? '';
    if (!tipShape || !TipShapesArray.map((it) => `${it}`).includes(tipShape)) return;
    props.filterParam.value = { ...props.filterParam.value, tips: [tipShape as TipShapes] };
    //console.log(props.filterParam.value);
    // props が変化したことを通知する
    handleChangeParam();
  }, []);

  const handleInputLengthMin = useCallback((e: Event) => {
    const target = e.target as HTMLInputElement;
    const length_mm_min = Number(target.value) ?? 360;
    lengthMin.value = length_mm_min;
  }, []);

  const handleChangeLengthMin = useCallback((e: Event) => {
    const target = e.target as HTMLInputElement;
    const length_mm_min = Number(target.value) ?? 360;
    lengthMin.value = length_mm_min;
    props.filterParam.value = { ...props.filterParam.value, length_mm_min };
    //console.log(props.filterParam.value);
    // props が変化したことを通知する
    handleChangeParam();
    // 表示を操作する.
  }, []);

  const handleInputLengthMax = useCallback((e: Event) => {
    const target = e.target as HTMLInputElement;
    const length_mm_max = Number(target.value) ?? 450;
    lengthMax.value = length_mm_max;
  }, []);

  const handleChangeLengthMax = useCallback((e: Event) => {
    const target = e.target as HTMLInputElement;
    const length_mm_max = Number(target.value) ?? 450;
    lengthMax.value = length_mm_max;
    props.filterParam.value = { ...props.filterParam.value, length_mm_max };
    //console.log(props.filterParam.value);
    // props が変化したことを通知する
    handleChangeParam();
    // 表示を操作する.
  }, []);

  return (
    <>
      <div id='modal_filter' class='hidden target:block'>
        <div class='block  w-full h-full bg-black/70 fixed top-0 left-0 overflow-y-auto'>
          <a href='#' class='block w-full h-full cursor-default'></a>

          <div class='xs:max-w-xs md:w-full mx-auto lg:w-3/4 xs:p-4 md:px-4 lg:px-auto md:my-4 lg:my-10 relative -top-full'>
            <div class='bg-white rounded-lg shadow-lg'>
              <div class='absolute top-2 right-1/2'>
                <button type='button' class='' aria-label='Close'>
                  <a href='#' class='block w-full h-full cursor-default'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      class='h-6 w-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </a>
                </button>
              </div>
              <div class='p-4'>
                <label
                  for='stick_name'
                  class='block text-sm font-bold text-slate-900'
                >
                  Name Filter
                </label>
                <input
                  id='stick_name'
                  type='text'
                  class='w-full border border-slate-300 rounded-md'
                  onChange={handleOnChangeName}
                />
              </div>
              <div class='pb-4 px-4'>
                <label
                  for='stick_tip_shape'
                  class='block text-sm font-bold text-slate-900'
                >
                  Tip Shape Filter
                </label>
                <select
                  id='stick_tip_shape'
                  class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  onChange={handleOnChangeTipShape}
                >
                  <option selected>Choose a tip shape</option>
                  {TipShapesArray.map((tip) => {
                    return <option value={tip}>{tip}</option>;
                  })}
                </select>
              </div>

              <div class='p-4'>
                <label
                  for='stick_length_min_range'
                  class='block text-sm font-bold text-slate-900'
                >
                  Length Min Range [{lengthMin.value}]
                </label>
                <input
                  id='stick_length_min_range'
                  value={lengthMin.value}
                  type='range'
                  class='transparent h-[4px] w-full cursor-pointer
  appearance-none border-transparent bg-neutral-200 dark:bg-neutral-600'
                  min='360.0'
                  max='440.0'
                  step='0.1'
                  onChange={handleChangeLengthMin}
                  onInput={handleInputLengthMin}
                />
              </div>

              <div class='p-4'>
                <label
                  for='stick_length_max_range'
                  class='block text-sm font-bold text-slate-900'
                >
                  Length Max Range [{lengthMax.value}]
                </label>
                <input
                  id='stick_length_max_range'
                  value={lengthMax.value}
                  type='range'
                  class='transparent h-[4px] w-full cursor-pointer
  appearance-none border-transparent bg-neutral-200 dark:bg-neutral-600'
                  min='360.0'
                  max='440.0'
                  step='0.1'
                  onChange={handleChangeLengthMax}
                  onInput={handleInputLengthMax}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
