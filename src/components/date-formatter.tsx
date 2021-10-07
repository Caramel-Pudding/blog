import { memo, FC } from "react";
import { parseISO, format } from "date-fns";

interface IDateFormatterProps {
  readonly dateString: string;
}

export const DateFormatter: FC<IDateFormatterProps> = memo(({ dateString }) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL	d, yyyy")}</time>;
});
