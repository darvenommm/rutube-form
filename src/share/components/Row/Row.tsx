export interface IRowCreateElementData {
  index: number;
  realIndex: number;
  text?: string;
}

interface IRowProps {
  start: number;
  end: number;
  createElement: (data: IRowCreateElementData) => JSX.Element;
  texts?: string[];
}

export const Row = ({
  start,
  end,
  createElement,
  texts,
}: IRowProps): JSX.Element => {
  texts = texts ?? [];

  const count = end - start + 1;
  const realCount = count < 0 ? 0 : count;

  return (
    <>
      {Array.from({ length: realCount })
        .map((_, index) => start + index)
        .map((index, realIndex) =>
          createElement({ index, realIndex, text: texts[realIndex] }),
        )}
    </>
  );
};
