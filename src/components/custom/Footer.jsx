"use client";
import { footerData } from "@/data/footer";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "../ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-neutral-300 bg-sky-950 text-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-8">
        <div className="my-8">
          <Image
            src="/logo.svg"
            width={0}
            height={0}
            alt="fab india logo"
            className="w-[100px] h-[80px]"
          />
        </div>
        <Separator className="bg-sky-900" />
        <div className="grid grid-col-3 md:grid-flow-col gap-8 pt-8">
          <div>
            <h5 className="text-xl font-semibold">
              {footerData?.solutions?.title}
            </h5>
            <ul className="leading-loose">
              {footerData?.solutions?.data?.map((item, index) => (
                <li className="my-3" key={`footerSolutions${index}`}>
                  <Link href={item?.link} className="hover:text-gray-400">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-xl font-semibold">
              {footerData?.products?.title}
            </h5>
            <ul className="leading-loose">
              {footerData?.products?.data?.map((item, index) => (
                <li className="my-3" key={`footerProducts${index}`}>
                  <Link href={item?.link} className="hover:text-gray-400">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-xl font-semibold">
              {footerData?.contact?.title}
            </h5>
            <ul className="leading-loose">
              <li className="my-3">
                <span>Address : </span>
                {footerData?.contact?.address}
              </li>
              <li className="my-3">
                <span>Phone No. 1 : </span>
                <Link
                  href={`tel:${footerData?.contact?.phoneOne}`}
                  className="hover:text-gray-400"
                >
                  {footerData?.contact?.phoneOne}
                </Link>
              </li>
              <li className="my-3">
                <span>Phone No. 2 : </span>
                <Link
                  href={`tel:${footerData?.contact?.phoneTwo}`}
                  className="hover:text-gray-400"
                >
                  {footerData?.contact?.phoneTwo}
                </Link>
              </li>
              <li className="my-3">
                <span>Email : </span>
                <Link
                  href={`mailto:${footerData?.contact?.email}`}
                  className="hover:text-gray-400"
                >
                  {footerData?.contact?.email}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between pt-10 pb-5 sm:flex-row border-t border-sky-900">
          <div className="flex gap-4 items-center">
            {footerData?.socialMedia?.map((item, index) => (
              <Link
                href={item.link}
                className="hover:text-gray-400"
                key={`socialIcons${index}`}
              >
                {item.icon}
              </Link>
            ))}
          </div>
          <p className="text-sm text-center pt-3">
            Copyright &copy; {currentYear} Fab India
          </p>
        </div>
      </div>
    </footer>
  );
}
