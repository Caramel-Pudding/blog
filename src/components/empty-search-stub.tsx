import { memo, FC } from "react";
import cn from "classnames";

export const EmptySearchStub: FC = memo(() => (
  <div className={cn("text-3xl", "font-bold")}>Ничего не найдено</div>
));
