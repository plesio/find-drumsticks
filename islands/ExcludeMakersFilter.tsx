import { useCallback } from 'preact/hooks';
import { Makers, MakersArray } from '../utils/if.ts';

type Props = {
  excludeMakers: Makers[];
  handleChangeExludeMakers: (excludeMaker: Makers, type: 'ADD' | 'DELETE') => void;
};

export default function ExcludeMakersFilter(props: Props) {
  const handleOnClick = useCallback((e: Event) => {
    const target = e.target as HTMLInputElement;
    const maker = target.value as Makers;
    const type = target.checked ? 'ADD' : 'DELETE';
    props.handleChangeExludeMakers(maker, type);
  }, []);

  return (
    <>
      <label class='block text-sm font-bold text-slate-900'>
        Exclude Makers Filter
      </label>

      {MakersArray.map((maker) => {
        return (
          <label>
            <input type='checkbox' value={maker} checked={props.excludeMakers.includes(maker)} onClick={handleOnClick} />
            <span class='text-sm ml-0.5 mr-2'>{maker}</span>
          </label>
        );
      })}
    </>
  );
}
