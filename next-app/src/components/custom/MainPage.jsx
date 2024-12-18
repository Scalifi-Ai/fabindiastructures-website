import { bannerData, landingData } from "@/data/landing";
import { Mails, MoveRight, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "../ui/aspect-ratio";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";
import { Banner } from "./Banner";

export const MainPage = () => {
  return (
    <>
      <Banner bannerData={bannerData?.banner} />
      <div className="bg-sky-950 text-white p-10">
        <div className="container grid sm:grid-cols-2 gap-4 place-items-center">
          <h2 className="w-full h-24 sm:border-e border-sky-900 flex items-center pe-6">
            {landingData?.requestQuote}
          </h2>
          <Link href="mailto:aryan@pjfabindia.com">
            <Button
              className="bg-white text-gray-900 text-base w-fit hover:bg-opacity-80 hover:bg-white"
            >
              <Mails className="h-6 w-6 mr-2 text-gray-600" />
              Request a Quote
            </Button>
          </Link>
        </div>
      </div>
      <div className="container md:p-16 p-5">
        <h3 className="text-4xl text-gray-400 mb-16">
          {landingData?.features?.title}
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {landingData?.features?.data?.map((item, index) => (
            <div
              className="grid grid-flow-col gap-4 place-content-baseline"
              key={`feature${index}`}
            >
              {item.icon}
              <div>
                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                <p className="font-light">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Separator className="container" />

      <div className="container md:p-16 p-5">
        <h3 className="text-xl text-sky-950 font-bold">
          {landingData?.whatsNew?.title}
        </h3>
        <h4 className="text-4xl lg:w-3/4 text-gray-400 mb-16 leading-snug">
          {landingData?.whatsNew?.subTitle}
        </h4>
        <div className="grid lg:grid-cols-3 gap-8">
          {landingData?.whatsNew?.data?.map((item, index) => {
            if (index <= 5)
              return (
                <Card className="shadow-none" key={`whatsNew${index}`}>
                  <AspectRatio ratio={4 / 3}>
                    <CardHeader>
                      <Image
                        src={item.img}
                        alt={item?.alt}
                        className="w-full object-contain transition duration-300 ease-in-out hover:scale-110 rounded-lg"
                        sizes="300px"
                        width={100}
                        height={400}
                        priority={true}
                      />
                    </CardHeader>
                  </AspectRatio>
                  <CardContent>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription className="mt-3">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="flex justify-between flex-wrap">
                    <Link href={item.link}>
                      <Button
                        variant="link"
                        className="text-sky-950 hover:text-sky-900 text-base p-0"
                      >
                        {item.buttonLabel}
                        <MoveRight className="ms-2" />
                      </Button>
                    </Link>
                    <Link href={`tel:${item.mobile}`}>
                      <Button
                        variant="outline"
                        className="text-sky-950 hover:text-sky-900 text-base"
                      >
                        <Phone className="w-4 h-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              );
          })}
        </div>
      </div>

      <div className="container md:p-16 p-5">
        <h3 className="text-xl text-sky-950 font-bold">
          {landingData?.solutions?.title}
        </h3>
        <h4 className="text-4xl lg:w-1/2 text-gray-400 mb-16 leading-snug">
          {landingData?.solutions?.subTitle}
        </h4>
        <div className="grid lg:grid-cols-3 gap-8">
          {landingData?.solutions?.data?.map((item, index) => {
            if (index <= 5)
              return (
                <Card
                  className="shadow-none flex items-stretch flex-col overflow-hidden"
                  key={`solutions${index}`}
                >
                  <AspectRatio ratio={4 / 3}>
                    <CardHeader>
                      <Image
                        src={item.img}
                        alt={item?.alt}
                        className="w-full object-contain transition duration-300 ease-in-out hover:scale-110 rounded-lg"
                        sizes="400px"
                        width={100}
                        height={200}
                        priority={true}
                      />
                    </CardHeader>
                  </AspectRatio>
                  <CardContent>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription className="mt-3">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="flex justify-between flex-wrap">
                    <Link href={item.link}>
                      <Button
                        variant="link"
                        className="text-sky-950 hover:text-sky-900 text-base p-0"
                      >
                        {item.buttonLabel}
                        <MoveRight className="ms-2" />
                      </Button>
                    </Link>
                    <Link href={`tel:${item.mobile}`}>
                      <Button
                        variant="outline"
                        className="text-sky-950 hover:text-sky-900 text-base"
                      >
                        <Phone className="w-4 h-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              );
          })}
        </div>
        <div className="flex justify-center gap-4 m-8">
          <Link href={"/solutions"}>
            <Button
              variant="ghost"
              className="text-sky-950 hover:text-sky-900 text-base"
            >
              All solutions
              <MoveRight className="ms-2" />
            </Button>
          </Link>
        </div>
      </div>

      <div className="bg-gray-50 md:p-16 p-5 text-center">
        <h3 className="text-xl text-sky-950 font-bold">
          {landingData?.customers?.title}
        </h3>
        <h4 className="text-4xl text-gray-400 mb-8 leading-snug">
          {landingData?.customers?.subTitle}
        </h4>
        <div className="flex items-baseline justify-center flex-wrap gap-10">
          {landingData?.customers?.data?.map((item, index) => (
            <div
              className="aspect-square p-3 hadow-none"
              key={`solutions${index}`}
            >
              <Image
                src={item.img}
                alt={item?.alt}
                sizes="300px"
                width={100}
                height={100}
                priority={true}
                className="mix-blend-darken"
              />
            </div>
          ))}
        </div>
      </div>
      <Separator className="container" />
    </>
  );
};
