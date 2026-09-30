import Image from "next/image";

interface Props {
  name: string;
  role: string;
  img: string;
  quote: string;
}

const TestimonialCard = ({ name, role, img, quote }: Props) => {
  return (
    <div className="space-y-6 bg-white p-3 md:p-6 rounded-3xl">
      <Image src={img} alt={name} width={100} height={100} />
      <div className="">
        <h3 className="text-heading-xs font-semibold text-shuttlegray-950">
          {name}
        </h3>
        <p className="text-body-l text-primary-800 satoshi-regular">{role}</p>
      </div>
      <p className="text-body-l text-shuttlegray-700 satoshi-regular">
        &quot;{quote}&quot;
      </p>
    </div>
  );
};

export default TestimonialCard;
