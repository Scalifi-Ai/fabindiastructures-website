'use client';

import { MoveRight, icons } from "lucide-react";
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
import Icon from "../ui/ Icon";
export const Products = ({ products }) => {
  console.log("Products", products);
  return (
    <>
      <div className="container md:p-16 p-5">
        <h3 className="text-xl text-sky-950 font-bold">
          {products?.section_title}
        </h3>
        <h4 className="text-4xl lg:w-3/4 text-gray-400 mb-16 leading-snug">
          {products?.section_description}
        </h4>
        <div className="grid lg:grid-cols-3 gap-8">
          {products?.products?.map((item, index) => (
            <Card className="shadow-none flex flex-col justify-between" key={`${item.id}`}>
              <CardHeader>
                <Image
                  src={item?.product_page?.product_media?.[0]?.url ? `${process?.env?.NEXT_PUBLIC_STRAPI_SERVER_URL ?? "http://127.0.0.1:1337"}${item?.product_page?.product_media[0]?.url}` : "/fallback.svg"}
                  alt={item?.product_page?.product_media?.[0]?.alternativeText ?? item.title}
                  className="w-full object-contain transition duration-300 ease-in-out hover:scale-110 rounded-lg"
                  sizes="300px"
                  width={100}
                  height={50}
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
                {item.card_action.map((action, index) => {
                  let icon = action?.has_icon && action?.['extra_data']?.icon ? action['extra_data'].icon : "";

                  return (
                    action.type === "link" ?
                      <Link
                        href={action?.is_relation ? item?.product_page?.page_config?.url : action?.href}
                        key={`action-${index}`}
                      >
                        <Button
                          variant={action?.variant ?? "link"}
                          className={`text-sky-950 hover:text-sky-900 text-base ${action?.variant === "link" ? "px-0" : ""} flex items-center justify-center gap-2`}
                        >
                          {action?.has_label ? action?.label : ""}
                          {action?.has_icon ? <Icon icon={icon} size={18} /> : <></>}
                        </Button>
                      </Link>
                      :
                      <Button
                        variant={action?.variant ?? "link"}
                        className={`text-sky-950 hover:text-sky-900 text-base ${action?.variant === "link" ? "px-0" : ""} flex items-center justify-center gap-2`}
                        onClick={() => { }}
                        key={`action-${index}`}
                      >
                        {action?.has_label ? action?.label : ""}
                        {action?.has_icon ? <Icon icon={icon} size={18} /> : <></>}
                      </Button>
                  )
                })}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};
