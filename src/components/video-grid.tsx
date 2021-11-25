import { memo, FC } from "react";
import cn from "classnames";
import { IVideo } from "@/types/media";

interface VideosProps {
  readonly title: string;
  readonly videos: ReadonlyArray<IVideo>;
}

export const VideoGrid: FC<VideosProps> = memo(({ title, videos }) => (
  <article>
    <h2 className={cn("text-4xl", "text-center", "mb-8")}>{title}</h2>
    <section
      className={cn(
        "grid",
        "justify-items-center",
        "grid-cols-1",
        "lg:grid-cols-2",
        "gap-12",
        "mb-24"
      )}
    >
      {videos.map((video: IVideo) => (
        <iframe
          key={video.title}
          allow="fullscreen;"
          className="w-full"
          frameBorder="0"
          height="400"
          loading="lazy"
          src={video.url}
          title={video.title}
        />
      ))}
    </section>
  </article>
));
