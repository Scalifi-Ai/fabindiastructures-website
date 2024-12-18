import { allSolutions } from "@/data/solutions";
import { getColumns } from "@/lib/utils";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DataTable } from "../custom/DataTable";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export const PerSolution = ({ params }) => {
  if (params in allSolutions === false) {
    notFound();
  }

  return (
    <>
      <div className="bg-sky-950 text-white md:p-10">
        <div className="container grid sm:grid-cols-2 gap-4 place-items-center">
          <h2 className="w-full md:text-4xl text-2xl h-24 flex items-center pe-6">
            {allSolutions[params]?.title}
          </h2>
        </div>
      </div>
      <div className="container md:p-16 p-5 flex flex-col gap-8">
        {allSolutions[params]?.features?.map((item, index) => (
          <div key={`solutionFeatures${index}`}>
            <h3 className="font-bold text-xl mb-3">{item.title}</h3>
            <p className="">{item.description}</p>
          </div>
        ))}
        <div className="bg-zinc-50 p-4">
          <h3 className="md:text-3xl text-xl text-center">
            {allSolutions[params]?.details.title}
          </h3>
          <Tabs
            defaultValue={allSolutions[params]?.details?.tabs[0]?.value}
            className="text-center my-3"
          >
            <TabsList>
              {allSolutions[params]?.details?.tabs?.map((item, index) => (
                <TabsTrigger value={item.value} key={`solutionTabs${index}`}>
                  {item.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {allSolutions[params]?.details?.tabs?.map((item, index) => (
              <TabsContent
                className="relative"
                value={item.value}
                key={`solutionTabsContent${index}`}
              >
                <div className="flex items-center justify-center my-3">
                  <Image
                    src={item.content.img}
                    alt={item.content.alt}
                    className="lg:w-1/2 md:w-3/4 w-full aspect-video"
                    sizes="900px"
                    width={100}
                    height={200}
                    priority={true}
                  />
                </div>
                {item.content.description.map((desc, index) => (
                  <p
                    key={`solutionTabsDesc${index}`}
                    className="text-left my-3 text-base"
                  >
                    {desc}
                  </p>
                ))}
                <DataTable
                  data={item.content.table}
                  columns={getColumns(item.content.table)}
                />
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {allSolutions[params]?.products?.map((item, index) => (
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
              <CardFooter className="flex justify-end flex-wrap">
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
        <h3 className="md:text-3xl text-xl text-center">
          {allSolutions[params]?.prices?.title}
        </h3>
        <DataTable
          data={allSolutions[params]?.prices?.data}
          columns={getColumns(allSolutions[params]?.prices?.data)}
        />
      </div>
    </>
  );
};
