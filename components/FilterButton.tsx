import IconAdjustmentsHorizontal from 'https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/adjustments-horizontal.tsx';

export default function FilterButton() {
  return (
    <button class='border border-slate-300 rounded-md p-2'>
      <a href='#modal_filter'>
        <IconAdjustmentsHorizontal class='w-6 h-6' />
      </a>
    </button>
  );
}
