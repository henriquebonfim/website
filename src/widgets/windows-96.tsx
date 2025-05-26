import { SECTION_ITEMS } from '#/shared/constants';
import React, { useState, type ChangeEvent, type FC } from 'react';

interface Windows96Props {
  title?: string;
  children?: React.ReactNode;
  onMinimize?: () => void;
  onMaximize?: () => void;
  onClose?: () => void;
}

/**
 * Windows96 - A retro-styled, responsive window component using Tailwind CSS.
 * All styles are handled via Tailwind utility classes for maintainability and responsiveness.
 */
export const Windows96: FC<Windows96Props> = ({
  title = 'Help Window: Range Slide',
  children,
  onMinimize,
  onMaximize,
  onClose,
}) => {
  const [range, setRange] = useState(5);

  // Clamp range value to [1, 100] for safety
  const handleRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = Math.max(1, Math.min(100, Number(e.target.value)));
    setRange(val);
  };

  return (
    <section
      id={SECTION_ITEMS.WINDOWS_96}
      className="flex h-full w-full flex-col gap-4"
    >
      <div className="mx-auto w-full max-w-2xl rounded-none bg-[#c0c0c0] p-1 font-sans text-[11px] text-black shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#dfdfdf,inset_-2px_-2px_#808080,inset_2px_2px_#ffffff]">
        {/* Title Bar */}
        <div className="flex items-center justify-between bg-gradient-to-r from-[#000080] to-[#1084d0] px-1 py-0.5 select-none">
          <div className="mr-6 truncate text-[11px] font-bold text-white">
            {title}
          </div>
          <div className="flex">
            {/* Window Controls */}
            <button
              type="button"
              aria-label="Minimize"
              className="ml-0.5 box-border flex min-h-[14px] min-w-[16px] cursor-pointer items-center justify-center border-none bg-[#c0c0c0] p-0 text-[8px] font-bold shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#ffffff,inset_-2px_-2px_#808080,inset_2px_2px_#dfdfdf] active:shadow-[inset_-1px_-1px_#ffffff,inset_1px_1px_#0a0a0a,inset_-2px_-2px_#dfdfdf,inset_2px_2px_#808080]"
              onClick={onMinimize}
            >
              <strong>_</strong>
            </button>
            <button
              type="button"
              aria-label="Maximize"
              className="ml-0.5 box-border flex min-h-[14px] min-w-[16px] cursor-pointer items-center justify-center border-none bg-[#c0c0c0] p-0 text-[8px] font-bold shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#ffffff,inset_-2px_-2px_#808080,inset_2px_2px_#dfdfdf] active:shadow-[inset_-1px_-1px_#ffffff,inset_1px_1px_#0a0a0a,inset_-2px_-2px_#dfdfdf,inset_2px_2px_#808080]"
              onClick={onMaximize}
            >
              <strong>□</strong>
            </button>
            <button
              type="button"
              aria-label="Close"
              className="ml-0.5 box-border flex min-h-[14px] min-w-[16px] cursor-pointer items-center justify-center border-none bg-[#c0c0c0] p-0 text-[8px] font-bold shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#ffffff,inset_-2px_-2px_#808080,inset_2px_2px_#dfdfdf] active:shadow-[inset_-1px_-1px_#ffffff,inset_1px_1px_#0a0a0a,inset_-2px_-2px_#dfdfdf,inset_2px_2px_#808080]"
              onClick={onClose}
            >
              <strong>×</strong>
            </button>
          </div>
        </div>

        {/* Window Body */}
        <div className="m-2 flex flex-col items-center gap-4 text-center">
          {children}
          <div className="flex w-full max-w-xs items-center gap-2">
            <label
              htmlFor="old-range"
              className="mr-1 text-[11px] whitespace-nowrap"
            >
              range:
            </label>
            <label htmlFor="old-range" className="text-[11px]">
              Low
            </label>
            <input
              id="old-range"
              type="range"
              min={1}
              max={100}
              value={range}
              onChange={handleRangeChange}
              aria-label="range"
              className="win96-thumb border-inset h-1.5 flex-1 cursor-pointer appearance-none rounded-none border border-[#808080] bg-gradient-to-r from-blue-700 to-[#c0c0c0] outline-none"
              style={{
                background: `linear-gradient(to right, #0000ff 0%, #0000ff ${(range / 100) * 100}%, #c0c0c0 ${(range / 100) * 100}%, #c0c0c0 100%)`,
              }}
            />
            <label htmlFor="old-range" className="text-[11px]">
              High
            </label>
          </div>
        </div>

        {/* Status Bar */}
        <div className="mx-0.5 flex gap-0.5 text-[11px]">
          <p className="m-0 flex-1 truncate px-2 py-0.5 shadow-[inset_-1px_-1px_#dfdfdf,inset_1px_1px_#808080]">
            Press F1 for help
          </p>
          <p className="m-0 flex-1 truncate px-2 py-0.5 shadow-[inset_-1px_-1px_#dfdfdf,inset_1px_1px_#808080]">
            GPU Usage: 5%
          </p>
          <p className="m-0 flex-1 truncate px-2 py-0.5 shadow-[inset_-1px_-1px_#dfdfdf,inset_1px_1px_#808080]">
            CPU Usage: 14%
          </p>
        </div>
      </div>
    </section>
  );
};
