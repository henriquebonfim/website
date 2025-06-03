import React, {
  useCallback,
  useMemo,
  useState,
  type ChangeEvent,
  type FC,
} from 'react';

interface Windows96Props {
  title?: string;
  children?: React.ReactNode;
  className?: string;
}

/**
 * Retro-styled, accessible window component with a range slider and status bar.
 * @param props - Windows96Props
 * @returns JSX.Element
 */
export const Windows96: FC<Windows96Props> = ({
  title = 'Help Topics: Location',
  className = '',
  children,
}) => {
  const [range, setRange] = useState<number>(5);

  const handleRangeChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const val = Math.max(1, Math.min(100, Number(e.target.value)));
    setRange(val);
  }, []);

  const Range = useMemo(
    () => (
      <div
        className="m-auto flex w-full max-w-xs items-center gap-2"
        role="none"
      >
        {/* DISABLED LABEL FOR ARCHIVE PURPOSES
      <label htmlFor="old-range" className="mr-1 text-[11px] whitespace-nowrap">
        range:
      </label>
       */}
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
            background: `linear-gradient(to right, #0000ff 0%, #0000ff ${range}%, #c0c0c0 ${range}%, #c0c0c0 100%)`,
          }}
        />
        <label htmlFor="old-range" className="text-[11px]">
          High
        </label>
      </div>
    ),
    [range, handleRangeChange],
  );

  return (
    <section
      className="flex h-full w-full flex-col gap-4 p-3 sm:p-0"
      aria-label="Windows 96 Retro Window"
      role="region"
      aria-live="polite"
      aria-atomic="true"
    >
      <main
        className="mx-auto h-full w-full max-w-2xl rounded-none bg-[#c0c0c0] p-1 font-sans text-[11px] text-black shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#dfdfdf,inset_-2px_-2px_#808080,inset_2px_2px_#ffffff]"
        role="main"
        aria-label={title}
      >
        <header
          className="flex items-center justify-between bg-gradient-to-r from-[#000080] to-[#1084d0] px-1 py-0.5 select-none"
          role="none"
          aria-hidden="true"
        >
          <h1
            className="mr-6 truncate text-[11px] font-bold text-white"
            role="none"
          >
            {title}
          </h1>
          <div className="flex" role="none">
            <div
              className="ml-0.5 box-border flex h-1 min-h-[14px] min-w-[16px] cursor-pointer items-center justify-center border-none bg-[#c0c0c0] p-0 text-[8px] font-bold shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#ffffff,inset_-2px_-2px_#808080,inset_2px_2px_#dfdfdf] active:shadow-[inset_-1px_-1px_#ffffff,inset_1px_1px_#0a0a0a,inset_-2px_-2px_#dfdfdf,inset_2px_2px_#808080]"
              role="none"
            >
              <strong className="font-mono font-extrabold">_</strong>
            </div>
            <div
              className="ml-0.5 box-border flex min-h-[14px] min-w-[16px] cursor-pointer items-center justify-center border-none bg-[#c0c0c0] p-0 text-[8px] font-bold shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#ffffff,inset_-2px_-2px_#808080,inset_2px_2px_#dfdfdf] active:shadow-[inset_-1px_-1px_#ffffff,inset_1px_1px_#0a0a0a,inset_-2px_-2px_#dfdfdf,inset_2px_2px_#808080]"
              role="none"
            >
              <strong className="font-mono font-extrabold">□</strong>
            </div>
            <div
              className="ml-0.5 box-border flex min-h-[14px] min-w-[16px] cursor-pointer items-center justify-center border-none bg-[#c0c0c0] p-0 text-[8px] font-bold shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#ffffff,inset_-2px_-2px_#808080,inset_2px_2px_#dfdfdf] active:shadow-[inset_-1px_-1px_#ffffff,inset_1px_1px_#0a0a0a,inset_-2px_-2px_#dfdfdf,inset_2px_2px_#808080]"
              role="none"
            >
              <strong className="font-mono font-extrabold">×</strong>
            </div>
          </div>
        </header>
        <div className={`${className} m-1`} role="none">
          {children}
        </div>
        <div
          className="mx-0.5 flex flex-col gap-0.5 text-[11px] sm:flex-row"
          role="row"
          aria-label="Window: Status Bar"
        >
          <p className="m-0 truncate px-2 py-0.5 shadow-[inset_-1px_-1px_#dfdfdf,inset_1px_1px_#808080]">
            Press F1 for help
          </p>
          <div
            className="m-0 flex-1 truncate px-2 py-0.5 shadow-[inset_-1px_-1px_#dfdfdf,inset_1px_1px_#808080]"
            role="slider"
            aria-label="CPU Usage Range"
            aria-valuemin={1}
            aria-valuemax={100}
            aria-valuenow={range}
            aria-valuetext={`${range}%`}
            aria-orientation="horizontal"
            aria-live="polite"
            aria-atomic="true"
            title={`CPU Usage: ${range}%`}
          >
            {Range}
          </div>
          <p
            className="m-0 truncate px-2 py-0.5 shadow-[inset_-1px_-1px_#dfdfdf,inset_1px_1px_#808080]"
            role="status"
            aria-live="polite"
            aria-atomic="true"
            aria-label={`CPU Usage: ${range}%`}
            title={`CPU Usage: ${range}%`}
          >
            CPU Usage: {range}%
          </p>
        </div>
      </main>
    </section>
  );
};
