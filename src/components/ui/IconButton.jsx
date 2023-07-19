import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

import { ICON_DRAW_VECTOR } from './constants';

export default function IconButton({ onClick, invisible = false, type, className = '' }) {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={twMerge(
        classNames({
          [`w-6 h-6 text-white cursor-pointer stroke-gray-400`]: true,
          invisible,
        }),
        className
      )}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={ICON_DRAW_VECTOR[type]} />
    </svg>
  );
}
