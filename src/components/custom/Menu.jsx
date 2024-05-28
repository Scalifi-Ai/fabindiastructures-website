"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { menuList } from "@/data/menu";
import { aboutUsPath, solutionsPath } from "@/data/path";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { Lightbulb, MenuIcon } from "lucide-react";
import Image from "next/image";
import { Separator } from "../ui/separator";

export const Menu = () => {
  const isDesktop = useMediaQuery("(min-width:575px)");
  if (isDesktop)
    return (
      <div className="border-b sticky top-0 z-10 bg-white">
        <div className="flex items-center gap-x-10 p-2 container max-w-5xl">
          <Link href="/">
            <Image
              src="/logo.svg"
              width={80}
              height={40}
              alt="fab india logo"
              className="w-[80px] h-[40px]"
            />
          </Link>
          <div className="flex flex-wrap">
            <NavigationMenu>
              <NavigationMenuList className="flex-wrap">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sky-950">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-center rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href={menuList.solutions.allSolutions.link}
                          >
                            <Lightbulb className="h-6 w-6" />
                            <div className="mb-2 mt-4 text-lg font-medium text-sky-950">
                              {menuList.solutions.allSolutions.title}
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              {menuList.solutions.allSolutions.description}
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      {menuList.solutions.list.map((item, index) => (
                        <ListItem
                          href={item.link}
                          title={item.title}
                          key={`solutionsMenuList${index}`}
                        >
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sky-950">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] text-sky-950">
                      {menuList.products.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href={aboutUsPath.basePath} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
    );

  return (
    <Sheet>
      <div className="flex items-center border-b sticky top-0 z-10 bg-white p-3">
        <SheetTrigger className="">
          <MenuIcon />
        </SheetTrigger>
        <Link href="/">
          <Image
            src="/logo.svg"
            width={0}
            height={0}
            alt="fab india logo"
            className="w-[80px] h-[40px]"
          />
        </Link>
      </div>
      <SheetContent
        side="left"
        className="w-[250px] bg-neutral-50 min-h-screen flex flex-col p-0 md:pt-0 pt-12"
      >
        <SheetHeader>
          <SheetTitle className="text-left text-zinc-500 px-5">
            Fab India Structures
          </SheetTitle>
          <Separator />
          <SheetDescription className="px-5 text-sky-950">
            {
              <div className="flex flex-col items-start justify-start gap-4">
                <h4 className="text-xl font-semibold">Solutions</h4>
                <Link href={solutionsPath.basePath}>All Solutions</Link>
                {menuList.solutions.list.map((component) => (
                  <Link
                    key={component.title}
                    href={component.link}
                    className="text-sky-950"
                  >
                    {component.title}
                  </Link>
                ))}
                <h4 className="text-xl font-semibold">Products</h4>
                {menuList.products.map((component) => (
                  <Link
                    key={component.title}
                    href={component.href}
                    className="text-sky-950"
                  >
                    {component.title}
                  </Link>
                ))}
                <h4 className="text-xl font-semibold">
                  <Link href={aboutUsPath.basePath} className="text-sky-950">
                    About us
                  </Link>
                </h4>
              </div>
            }
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

const ListItem = ({ className, title, children, ...props }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};
ListItem.displayName = "ListItem";
