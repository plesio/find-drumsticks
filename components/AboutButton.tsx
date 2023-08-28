import IconHelpOctagon from 'https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/help-octagon.tsx';

export default function AboutButton() {
  return (
    <button class='border border-slate-300 rounded-md p-2 mx-2'>
      <a href='#modal_about'>
        <IconHelpOctagon class='w-6 h-6' />
      </a>
    </button>
  );
}
