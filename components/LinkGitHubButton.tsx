import IconBrandGithub from 'https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-github.tsx';

export default function LinkGitHubButton() {
  return (
    <button class='border border-slate-300 rounded-md p-2 px-3 ml-2'>
      <a href='https://github.com/plesio/find-drumsticks'>
        <IconBrandGithub class='w-6 h-6' />
      </a>
    </button>
  );
}
