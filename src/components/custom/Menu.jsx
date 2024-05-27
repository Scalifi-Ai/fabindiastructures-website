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

import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { Home, Lightbulb, MenuIcon } from "lucide-react";
import Image from "next/image";

const components = [
  {
    title: "All Products",
    href: "/products/",
    description: "Take a look at all our products.",
  },
  {
    title: "Pagoda Tents",
    href: "/products/pagoda-tents",
    description:
      "Pagoda Tent features structures with widths of 2x2m, 2.5×2.5m, and 3x3m, the eave height is 2.6m.",
  },
  {
    title: "Military Tents",
    href: "/products/military-tents",
    description: "Military tents with high-strength aluminium alloy tubes",
  },
  {
    title: "Sports Arena",
    href: "/products/military-tents",
    description:
      "Sports event tents with special widths, lengths, and different roof heights.",
  },
  {
    title: "Double Decker Tents",
    href: "/products/military-tents",
    description:
      "Double decker design to make area utilization ratio more than 200%.",
  },
  {
    title: "Warehouses",
    href: "/products/military-tents",
    description: "Large warehouse movable structure to occupy all your goods.",
  },
  {
    title: "Shelter",
    href: "/products/military-tents",
    description: "Shelter tents with flexible dimensions.",
  },
];

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
                  <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-center rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/solutions"
                          >
                            <Lightbulb className="h-6 w-6" />
                            <div className="mb-2 mt-4 text-lg font-medium">
                              All Solutions
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              High-quality, product safety, efficiency, flexible
                              and diversified services
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem
                        href="/solutions/event-tents"
                        title="Events Space"
                      >
                        Wide range of structures perfectly suited for events
                      </ListItem>
                      <ListItem
                        href="/solutions/commercial-tents"
                        title="Commercial Space"
                      >
                        Wide range of structures perfectly suited for events
                      </ListItem>
                      <ListItem
                        href="/solutions/quick-and-easy-deployment"
                        title="Quick Deployment Space"
                      >
                        Wide range of structures perfectly suited for events
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {components.map((component) => (
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
                  <Link href="/about-us" passHref>
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
        <Image
          src="/logo.svg"
          width={0}
          height={0}
          alt="fab india logo"
          className="w-[80px] h-[40px]"
        />
      </div>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
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
