import Image from "next/image";

interface Props {
  title: string;
  img: string;
}

const LearningCard = ({ title, img }: Props) => {
  return (
    <div className="flex min-h-40 flex-col items-center justify-center gap-3 rounded-3xl border border-border px-3 py-7  hover:shadow-md sm:min-h-44 sm:py-8 md:min-h-48 md:py-9 hover-animation">
      <Image
        src={img}
        alt={title}
        width={60}
        height={60}
        className="h-12 w-12 object-contain sm:h-14 sm:w-14 md:h-15 md:w-15"
      />

      <h3 className="text-center text-sm font-medium text-foreground sm:text-base">
        {title}
      </h3>
    </div>
  );
};

export default LearningCard;
