import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import React from 'react';

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type Header19Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header19 = (props: Header19Props) => {
  const { heading, description, buttons, image } = {
    ...Header19Defaults,
    ...props,
  } as Props;
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <img src={image.src} className="w-full object-cover" alt={image.alt} />
          </div>
          <div className="order-1 lg:order-2">
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">{heading}</h1>
            <p className="md:text-md">{description}</p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button key={index} {...button}>
                  {button.title}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Header19Defaults: Header19Props = {
  heading: "ScentCraft — A New Experience for Perfume Lifecycle Management",
  description:
    "ScentCraft aims to streamline and optimize the perfume creation process by offering powerful tools for fragrance inspiration management, formula design, and global regulatory compliance.",
  buttons: [{ title: "Button" }, { title: "Button", variant: "secondary" }],
  image: {
    src: "/images/2024-11-a-minimalist-perfume-bottle-with-a-blank.jpeg",
    alt: "Relume placeholder image",
  },
};

