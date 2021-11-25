import { memo, FC } from "react";
import Image from "next/image";
import cn from "classnames";
import { resumeUrl } from "@/consts/socials";

export const BioHead: FC = memo(() => (
  <article
    className={cn("flex", "flex-col", "lg:flex-row", "items-center", "mb-12")}
  >
    <section
      className={cn("w-full", "lg:w-1/2", "mr-0", "lg:mr-8", "text-center")}
    >
      <Image
        alt="Author Image"
        className={cn("rounded-3xl")}
        height={600}
        src="/assets/bio/portrait.jpg"
        width={500}
      />
    </section>
    <section className={cn("w-full", "lg:w-1/2")}>
      <h2 className={cn("text-5xl", "text-center", "mb-8")}>
        Привет, я - Антон!
      </h2>
      <div className={cn("text-justify", "mb-8")}>
        Меня зовут Антон Назаров. С 2017 года идентифицирую себя как iOS
        разработчик. Посидел в Apple (контрактором), Glovo, Tiffany &amp; Co,
        Autodesk. Умею в реактивщину, графику и, конечно, в хорошую архитектуру.
      </div>
      <div className={cn("text-xl", "text-center", "mb-8")}>
        <a className="underline" href={resumeUrl}>
          Мое резюме
        </a>
        .
      </div>
      <div className={cn("text-justify", "mb-8")}>
        Своим талантом считаю умение подмечать неудобную правду и не бояться ее
        высмеивать, поэтому и существует этот блог. Основополагающим делом жизни
        является публичное говорение ртом. Получается это у меня хорошо, поэтому
        я успел стать преподавателем в универе, автором подкаста,
        стендап-комиком, докладчиком, ведущим зала и ведущим корпоратива. Вот
        портфолио моих выступлений, а если вам захочется разбавить свое
        мероприятие нескучным контентом, просто пишите в телеграмм.
      </div>
    </section>
  </article>
));
