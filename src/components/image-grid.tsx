import { memo, FC } from "react";
import cn from "classnames";
import Image from "next/image";
import { IImage } from "@/types/media";

interface PhotosProps {
  readonly title: string;
  readonly images: ReadonlyArray<IImage>;
}

export const ImageGrid: FC<PhotosProps> = memo(({ title, images }) => {
  return (
    <article>
      <h2 className={cn("text-4xl", "text-center", "mb-8")}>{title}</h2>
      <section
        className={cn(
          "grid",
          "grid-cols-1",
          "lg:grid-cols-2",
          "xl:grid-cols-3",
          "gap-4",
          "mb-24"
        )}
      >
        {images.map((image: IImage) => (
          <Image
            key={image.url}
            alt={image.title || "Author Image"}
            className={cn("rounded-3xl")}
            height={450}
            src={`/assets/bio/${image.url}`}
            width={400}
          />
        ))}
      </section>
    </article>
  );
});
