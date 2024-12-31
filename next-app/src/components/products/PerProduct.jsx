"use client";
import { allProducts } from "@/data/products";
import { BookOpenText, Box, Mails, ReceiptText } from "lucide-react";
import Markdown from "markdown-to-jsx";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { DataTable } from "../custom/DataTable";
import { getColumns } from "@/lib/utils";

export const PerProduct = ({ productPage }) => {
  console.log("productPage", productPage);

  return (
    <>
      <div className="bg-sky-950 text-white md:p-10">
        <div className="container grid sm:grid-cols-2 gap-4 place-items-center">
          <h2 className="w-full md:text-4xl text-2xl h-24 flex items-center pe-6">
            {productPage?.title}
          </h2>
        </div>
      </div>
      <div className="container md:p-16 p-5 flex flex-col gap-8 text-justify">
        <div className="grid md:grid-cols-2">
          <div className=" flex flex-col gap-4 mx-3">
            <div className="bg-zinc-50">
              {productPage?.product_media && productPage?.product_media !== null && productPage?.product_media?.length > 0 &&
                <Image
                  src={productPage?.product_media[0]?.url ? `${process?.env?.NEXT_PUBLIC_STRAPI_SERVER_URL ?? "http://127.0.0.1:1337"}${productPage?.product_media[0]?.url}` : "/fallback.svg"}
                  alt={productPage?.product_media[0]?.alternativeText ?? productPage?.title}
                  className="w-full aspect-square object-contain "
                  sizes="900px"
                  width={100}
                  height={200}
                  priority={true}
                />
              }
            </div>
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
                    General Details
                  </h2>
                </AccordionTrigger>
                <AccordionContent>
                  {/* {productPage?.general_details} */}
                  <Markdown
                    options={{
                      overrides: {
                        ul: {
                          props: {
                            className: "ps-5 list-disc"
                          }
                        }
                      }
                    }}
                  >
                    {productPage?.general_details}
                  </Markdown>
                </AccordionContent>
              </AccordionItem>
              {productPage?.product_specifications !== undefined && productPage?.product_specifications !== null && productPage?.product_specifications?.length > 0 &&
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    <h2 className="text-xl font-semibold flex items-center gap-3 text-sky-950">
                      <BookOpenText />
                      {/* {allProducts[params]?.specifications?.title} */}
                      Product Specifications
                    </h2>
                  </AccordionTrigger>
                  <AccordionContent>
                    <DataTable
                      data={productPage?.product_specifications}
                      columns={getColumns(
                        productPage?.product_specifications
                      )}
                    />
                  </AccordionContent>
                </AccordionItem>
              }
              {productPage?.drawing_3d !== null && productPage?.drawing_3d !== undefined &&
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    <h2 className="text-xl font-semibold flex items-center gap-3 text-sky-950">
                      <Box />
                      3D Drawing
                    </h2>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="bg-zinc-50">
                      <Image
                        src={productPage?.drawing_3d?.url ? `${process?.env?.NEXT_PUBLIC_STRAPI_SERVER_URL ?? "http://127.0.0.1:1337"}${productPage?.drawing_3d?.url}` : "/fallback.svg"}
                        alt={productPage?.drawing_3d?.alternativeText ?? `${productPage?.title} 3D Drawing`}
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
              }
            </Accordion>
          </div>
          <div>
            <Link href="mailto:aryan@pjfabindia.com">
              <Button variant="default" className="bg-sky-950 text-base w-fit">
                <Mails className="h-6 w-6 mr-2" />
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
