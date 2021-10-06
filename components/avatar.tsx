import { memo, FC } from "react";
import Image from "next/image";

interface IAvatarProps {
  readonly name: string;
  readonly picture: string;
}

export const Avatar: FC<IAvatarProps> = memo(({ name, picture }) => {
  return (
    <div className="flex items-center">
      <Image
        alt={name}
        className="w-12 h-12 rounded-full mr-4"
        height={48}
        src={picture}
        width={48}
      />
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
});
