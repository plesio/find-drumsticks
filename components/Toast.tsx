import { CloseIcon } from './svg/CloseIcon.tsx';

export function Toast(props: { message: string; clickClose: () => void }) {
  return (
    <div
      class='pointer-events-auto w-96 max-w-full rounded-lg bg-blue-400 text-sm text-primary-700'
      id='toast-filter'
      role='alert'
      style={{ position: 'absolute', bottom: 0, right: 0 }}
    >
      <div class='flex items-center justify-between rounded-t-lg  border-primary-200 px-4 pb-2 pt-2.5 text-primary-700'>
        <p class='flex items-center font-bold text-primary-700'>
          {props.message}
        </p>
        <div class='flex items-center'>
          <button
            type='button'
            class='ml-2 box-content rounded-none border-none opacity-80 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none'
            aria-label='Close'
          >
            <span class='w-[1em] focus:opacity-100' onClick={props.clickClose}>
              <CloseIcon />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
