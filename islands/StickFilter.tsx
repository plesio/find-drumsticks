import type { Signal } from '@preact/signals';
import { useSignal } from '@preact/signals';
import { IS_BROWSER } from '$fresh/runtime.ts';
import { Makers, MaterialTypeArray, TipShapes, TipShapesArray } from '../utils/if.ts';
import { useCallback } from 'preact/hooks';
import { CloseIcon } from '../components/svg/CloseIcon.tsx';
import { Toast } from '../components/Toast.tsx';
import ExcludeMakersFilter from './ExcludeMakersFilter.tsx';

export interface StickFilterParams {
  name?: string;
  material?: string;
  exclude_makers: Makers[];
  tips: TipShapes[];
  diameter_mm_min?: number;
  diameter_mm_max?: number;
  length_mm_min?: number;
  length_mm_max?: number;
}

export interface Props {
  filterParam: Signal<StickFilterParams>;
}

// フィルターの仕様に変更を入れるたびに数字を変えること.
const CURRENT_FILTER_PARAM_VERSION = 1;

const LENGTH_MAX = 440.0;
const LENGTH_MIN = 350.0;
const DIAMETER_MAX = 20.0;
const DIAMETER_MIN = 10.0;

export default function StickFilter(props: Props) {
  const lengthMax = useSignal(props.filterParam.value.length_mm_max ?? LENGTH_MAX);
  const lengthMin = useSignal(props.filterParam.value.length_mm_min ?? LENGTH_MIN);
  const diameterMax = useSignal(props.filterParam.value.diameter_mm_max ?? DIAMETER_MAX);
  const diameterMin = useSignal(props.filterParam.value.diameter_mm_min ?? DIAMETER_MIN);
  const excludeMakers = useSignal(props.filterParam.value.exclude_makers ?? []);
  //
  const toastMessage = useSignal('');
  const isToastVisible = useSignal(false);

  const showToast = useCallback((message: string) => {
    toastMessage.value = message;
    isToastVisible.value = true;
    setTimeout(() => {
      isToastVisible.value = false;
    }, 3000);
  }, []);

  const handleChangeParam = (isForce = false) => {
    if (isForce === false) return;
    // 各 value と select の値を強制的に更新する（ロードセーブ用
    lengthMax.value = props.filterParam.value.length_mm_max ?? LENGTH_MAX;
    lengthMin.value = props.filterParam.value.length_mm_min ?? LENGTH_MIN;
    diameterMax.value = props.filterParam.value.diameter_mm_max ?? DIAMETER_MAX;
    diameterMin.value = props.filterParam.value.diameter_mm_min ?? DIAMETER_MIN;
    excludeMakers.value = props.filterParam.value.exclude_makers ?? [];
    // --
    const tip_shape_select = document.getElementById('stick_tip_shape');
    if (tip_shape_select && tip_shape_select instanceof HTMLSelectElement) {
      tip_shape_select.value = props.filterParam.value.tips[0] ?? '';
    }
    const material_select = document.getElementById('stick_material');
    if (material_select && material_select instanceof HTMLSelectElement) {
      material_select.value = props.filterParam.value.material ?? '';
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
    if (!tipShape || !TipShapesArray.map((it) => `${it}`).includes(tipShape)) {
      props.filterParam.value = { ...props.filterParam.value, tips: [] };
    } else {
      props.filterParam.value = { ...props.filterParam.value, tips: [tipShape as TipShapes] };
    }
    //console.log(props.filterParam.value);
    // props が変化したことを通知する
    handleChangeParam();
  }, []);

  const handleOnChangeMaterial = useCallback((e: Event) => {
    const target = e.target as HTMLInputElement;
    const material = target.value ?? '';
    if (!material || !MaterialTypeArray.map((it) => `${it}`).includes(material)) {
      props.filterParam.value = { ...props.filterParam.value, material: undefined };
    } else {
      props.filterParam.value = { ...props.filterParam.value, material };
    }
    //console.log(props.filterParam.value);
    // props が変化したことを通知する
    handleChangeParam();
  }, []);

  const handleInputLengthMin = useCallback((e: Event) => {
    const target = e.target as HTMLInputElement;
    const length_mm_min = Number(target.value) ?? LENGTH_MIN;
    lengthMin.value = length_mm_min;
  }, []);

  const handleChangeLengthMin = useCallback((e: Event) => {
    const target = e.target as HTMLInputElement;
    const length_mm_min = Number(target.value) ?? LENGTH_MIN;
    lengthMin.value = length_mm_min;
    props.filterParam.value = { ...props.filterParam.value, length_mm_min };
    //console.log(props.filterParam.value);
    // props が変化したことを通知する
    handleChangeParam();
    // 表示を操作する.
  }, []);

  const handleInputLengthMax = useCallback((e: Event) => {
    const target = e.target as HTMLInputElement;
    const length_mm_max = Number(target.value) ?? LENGTH_MAX;
    lengthMax.value = length_mm_max;
  }, []);

  const handleChangeLengthMax = useCallback((e: Event) => {
    const target = e.target as HTMLInputElement;
    const length_mm_max = Number(target.value) ?? LENGTH_MAX;
    lengthMax.value = length_mm_max;
    props.filterParam.value = { ...props.filterParam.value, length_mm_max };
    //console.log(props.filterParam.value);
    // props が変化したことを通知する
    handleChangeParam();
    // 表示を操作する.
  }, []);

  const handleInputDiameterMin = useCallback((e: Event) => {
    const target = e.target as HTMLInputElement;
    const diameter_mm_min = Number(target.value) ?? DIAMETER_MIN;
    diameterMin.value = diameter_mm_min;
  }, []);

  const handleChangeDiameterMin = useCallback((e: Event) => {
    const target = e.target as HTMLInputElement;
    const diameter_mm_min = Number(target.value) ?? DIAMETER_MIN;
    diameterMin.value = diameter_mm_min;
    props.filterParam.value = { ...props.filterParam.value, diameter_mm_min };
    //console.log(props.filterParam.value);
    // props が変化したことを通知する
    handleChangeParam();
    // 表示を操作する.
  }, []);

  const handleInputDiameterMax = useCallback((e: Event) => {
    const target = e.target as HTMLInputElement;
    const diameter_mm_max = Number(target.value) ?? DIAMETER_MAX;
    diameterMax.value = diameter_mm_max;
  }, []);

  const handleChangeDiameterMax = useCallback((e: Event) => {
    const target = e.target as HTMLInputElement;
    const diameter_mm_max = Number(target.value) ?? DIAMETER_MAX;
    diameterMax.value = diameter_mm_max;
    props.filterParam.value = { ...props.filterParam.value, diameter_mm_max };
    //console.log(props.filterParam.value);
    // props が変化したことを通知する
    handleChangeParam();
    // 表示を操作する.
  }, []);

  const handleChangeExludeMakers = useCallback((exclude_maker: Makers, type: 'ADD' | 'DELETE') => {
    let exclude_makers = props.filterParam.value.exclude_makers ?? [];
    if (type === 'ADD') {
      exclude_makers.push(exclude_maker);
    } else {
      exclude_makers = exclude_makers.filter((maker) => maker !== exclude_maker);
    }

    props.filterParam.value = { ...props.filterParam.value, exclude_makers };
    //console.log(props.filterParam.value);
    // props が変化したことを通知する
    handleChangeParam();
    // 表示を操作する.`
  }, []);

  // --
  const handleOnClickLoad = (e: Event) => {
    // --
    if (!IS_BROWSER) return;
    //
    const filterParamFromLs = localStorage?.getItem('filterParam');
    if (filterParamFromLs) {
      const loadData: StickFilterParams & { version: number } = JSON.parse(filterParamFromLs);
      const { version, ...filterParam } = loadData;
      if (loadData.version !== CURRENT_FILTER_PARAM_VERSION) {
        return;
      }
      props.filterParam.value = filterParam;
      handleChangeParam(true);
      showToast('Loaded');
    }
  };

  const handleOnClickSave = (e: Event) => {
    // --
    if (!IS_BROWSER) return;
    //
    const saveData = {
      version: CURRENT_FILTER_PARAM_VERSION,
      ...props.filterParam.value,
    };
    localStorage?.setItem('filterParam', JSON.stringify(saveData));
    showToast('Saved');
  };

  const onClickCloseToast = useCallback(() => {
    isToastVisible.value = false;
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
                    <CloseIcon />
                  </a>
                </button>
              </div>

              {/* Save Load */}
              <div class='pt-4 pb-2 px-4'>
                <div class='flex justify-between'>
                  <button role='button' class='w-20 bg-blue-500 text-white border border-blue-500 rounded-md me-auto' onClick={handleOnClickLoad}>Load</button>

                  <button role='button' class='w-20 bg-red-500 text-white border border-blue-500 rounded-md ms-auto' onClick={handleOnClickSave}>Save</button>
                </div>
              </div>

              <div class='pb-2 px-4'>
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
                  <option selected value=''>Choose a tip shape</option>
                  {TipShapesArray.map((tip) => {
                    return <option value={tip}>{tip}</option>;
                  })}
                </select>
              </div>

              <div class='pb-2 px-4'>
                <label
                  for='stick_material'
                  class='block text-sm font-bold text-slate-900'
                >
                  Material Filter
                </label>
                <select
                  id='stick_material'
                  class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  onChange={handleOnChangeMaterial}
                >
                  <option selected value=''>Choose a Stick Material</option>
                  {MaterialTypeArray.map((material) => {
                    return <option value={material}>{material}</option>;
                  })}
                </select>
              </div>

              <div class='pb-2 px-4'>
                <label
                  for='stick_length_min_range'
                  class='block text-sm font-bold text-slate-900'
                >
                  Length Min Range [{lengthMin.value}]
                </label>

                <span class='align-center'>
                  <input type='number' class='w-6/2 border border-slate-300 rounded-md' value={lengthMin.value} min={LENGTH_MIN} max={LENGTH_MAX} step='0.1' onChange={handleChangeLengthMin} />
                  <span class='mx-2'></span>
                  <input
                    id='stick_length_min_range'
                    value={lengthMin.value}
                    type='range'
                    class='transparent h-[8px] w-3/6 cursor-pointer
  appearance-none border-transparent bg-neutral-200 dark:bg-neutral-600'
                    min={LENGTH_MIN}
                    max={LENGTH_MAX}
                    step='0.5'
                    onChange={handleChangeLengthMin}
                    onInput={handleInputLengthMin}
                  />
                </span>
              </div>

              <div class='pb-2 px-4'>
                <label
                  for='stick_length_max_range'
                  class='block text-sm font-bold text-slate-900'
                >
                  Length Max Range [{lengthMax.value}]
                </label>

                <span class='align-center'>
                  <input type='number' class='w-6/2 border border-slate-300 rounded-md' value={lengthMax.value} min={LENGTH_MIN} max={LENGTH_MAX} step='0.5' onChange={handleChangeLengthMax} />
                  <span class='mx-2'></span>
                  <input
                    id='stick_length_max_range'
                    value={lengthMax.value}
                    type='range'
                    class='transparent h-[8px] w-3/6 cursor-pointer
  appearance-none border-transparent bg-neutral-200 dark:bg-neutral-600'
                    min={LENGTH_MIN}
                    max={LENGTH_MAX}
                    step='0.5'
                    onChange={handleChangeLengthMax}
                    onInput={handleInputLengthMax}
                  />
                </span>
              </div>

              <div class='pb-2 px-4'>
                <label
                  for='stick_diameter_min_range'
                  class='block text-sm font-bold text-slate-900'
                >
                  Diameter Min Range [{diameterMin.value}]
                </label>

                <span class='align-center'>
                  <input type='number' class='w-6/2 border border-slate-300 rounded-md' value={diameterMin.value} min={DIAMETER_MIN} max={DIAMETER_MAX} step='0.1' onChange={handleChangeDiameterMin} />
                  <span class='mx-2'></span>
                  <input
                    id='stick_diameter_min_range'
                    value={diameterMin.value}
                    type='range'
                    class='transparent h-[8px] w-3/6 cursor-pointer
  appearance-none border-transparent bg-neutral-200 dark:bg-neutral-600'
                    min={DIAMETER_MIN}
                    max={DIAMETER_MAX}
                    step='0.1'
                    onChange={handleChangeDiameterMin}
                    onInput={handleInputDiameterMin}
                  />
                </span>
              </div>

              <div class='pb-2 px-4'>
                <label
                  for='stick_diameter_max_range'
                  class='block text-sm font-bold text-slate-900'
                >
                  Diameter Max Range [{diameterMax.value}]
                </label>

                <span class='align-center'>
                  <input type='number' class='w-6/2 border border-slate-300 rounded-md' value={diameterMax.value} min={DIAMETER_MIN} max={DIAMETER_MAX} step='0.1' onChange={handleChangeDiameterMax} />
                  <span class='mx-2'></span>
                  <input
                    id='stick_diameter_max_range'
                    value={diameterMax.value}
                    type='range'
                    class='transparent h-[8px] w-3/6 cursor-pointer appearance-none border-transparent bg-neutral-200 dark:bg-neutral-600'
                    min={DIAMETER_MIN}
                    max={DIAMETER_MAX}
                    step='0.1'
                    onChange={handleChangeDiameterMax}
                    onInput={handleInputDiameterMax}
                  />
                </span>
              </div>

              {/* Name Filter (last order) */}
              <div class='pb-2 px-4'>
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

              {/* Exclude Makers */}
              <div class='pb-2 px-4'>
                <ExcludeMakersFilter excludeMakers={excludeMakers.value} handleChangeExludeMakers={handleChangeExludeMakers} />
              </div>
            </div>
          </div>
        </div>
        {isToastVisible.value ? <Toast message={toastMessage.value} clickClose={onClickCloseToast} /> : null}
      </div>
    </>
  );
}
