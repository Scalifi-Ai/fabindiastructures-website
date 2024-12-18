import { allProducts } from "@/data/products";
import { getColumns } from "@/lib/utils";
import { BookOpenText, Box, Mails, ReceiptText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DataTable } from "../custom/DataTable";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export const PerProduct = ({ params }) => {
  if (params in allProducts === false) {
    notFound();
  }

  return (
    <>
      <div className="bg-sky-950 text-white md:p-10">
        <div className="container grid sm:grid-cols-2 gap-4 place-items-center">
          <h2 className="w-full md:text-4xl text-2xl h-24 flex items-center pe-6">
            {allProducts[params]?.title}
          </h2>
        </div>
      </div>
      <div className="container md:p-16 p-5 flex flex-col gap-8 text-justify">
        <div className="grid md:grid-cols-2">
          <div className=" flex flex-col gap-4 mx-3">
            <div className="bg-zinc-50">
              <Image
                src={allProducts[params]?.img}
                alt={allProducts[params]?.alt}
                className="w-full aspect-square object-contain "
                sizes="900px"
                width={100}
                height={200}
                priority={true}
              />
            </div>
            <Link href="mailto:aryan@pjfabindia.com">
              <Button variant="default" className="bg-sky-950 text-base w-fit">
                <Mails className="h-6 w-6 mr-2" />
                Request a Quote
              </Button>
            </Link>
          </div>
          <div className="flex flex-col gap-4 px-3 border-s">
            <Separator />
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h2 className="text-xl font-semibold flex items-center gap-3 text-sky-950">
                    <ReceiptText />
                    {allProducts[params]?.details?.title}
                  </h2>
                </AccordionTrigger>
                <AccordionContent>
                  {allProducts[params]?.details?.description?.map(
                    (item, index) => (
                      <p key={`productDesc${index}`} className="my-3 text-base">
                        {item}
                      </p>
                    )
                  )}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <h2 className="text-xl font-semibold flex items-center gap-3 text-sky-950">
                    <BookOpenText />
                    {allProducts[params]?.specifications?.title}
                  </h2>
                </AccordionTrigger>
                <AccordionContent>
                  <DataTable
                    data={allProducts[params]?.specifications?.table}
                    columns={getColumns(
                      allProducts[params]?.specifications?.table
                    )}
                  />
                </AccordionContent>
              </AccordionItem>
              {allProducts[params]?.["3dDrawing"]?.img && (
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    <h2 className="text-xl font-semibold flex items-center gap-3 text-sky-950">
                      <Box />
                      {allProducts[params]?.["3dDrawing"]?.title}
                    </h2>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="bg-zinc-50">
                      <Image
                        src={allProducts[params]?.["3dDrawing"]?.img}
                        alt={allProducts[params]?.alt}
                        className="w-full aspect-square object-contain "
                        sizes="900px"
                        width={100}
                        height={200}
                        priority={true}
                      />
                      <Separator />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};
