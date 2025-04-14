import { Car } from "@/types/Car";
import Image from "next/image";
import { FC } from "react";

const CarCard = ({ carData }: { carData: Car }) => {
  console.log(carData);

  return (
    <article className="bg-secondary-default rounded-2xl flex flex-row relative gap font-workSan sm:fllightex-col">
      <section className="hidden sm:block rounded-md w-2/3 bg-accent-dark pl-1 text-xs">
        {carData.id}
      </section>
      <section className="sm:hidden absolute left-0 bottom-0 rounded-bl-2xl  bg-accent- text-sm  size-6 flex justify-center items-center">
        <p>{carData.id}</p>
      </section>
      <header className="p-2">
        <h1 className="text-lg font-spaceGrotesk font-semibold leading-7">
          {carData.make} {carData.model}
        </h1>
        <p className="text-xs">{carData.year}</p>
      </header>
      <section className="p-2">
        <Image
          src={carData.image}
          alt={carData.make + " " + carData.model}
          width={200}
          height={200}
        />
      </section>
      <footer className="p-2 text-sm">
        <h2>{carData.engine}</h2>
      </footer>
    </article>
  );
};

export default CarCard;
