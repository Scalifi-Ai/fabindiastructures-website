import { landingData } from "@/data/landing";
import { MoveRight, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
export const Products = () => {
  return (
    <>
      <div className="container md:p-16 p-5">
        <h3 className="text-xl text-sky-950 font-bold">
          {landingData?.whatsNew?.title}
        </h3>
        <h4 className="text-4xl lg:w-3/4 text-gray-400 mb-16 leading-snug">
          {landingData?.whatsNew?.subTitle}
        </h4>
        <div className="grid lg:grid-cols-3 gap-8">
          {landingData?.whatsNew?.data?.map((item, index) => (
            <Card className="shadow-none" key={`whatsNew${index}`}>
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
          ))}
        </div>
      </div>
    </>
  );
};
