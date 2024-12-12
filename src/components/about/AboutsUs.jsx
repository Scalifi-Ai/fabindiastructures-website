"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { aboutUs } from "@/data/aboutus";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { PhoneInput } from "../ui/phone-input";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Username is required.",
  }),
  email: z
    .string()
    .min(1, {
      message: "Email is required.",
    })
    .email(),
  phone: z.string({ required_error: "Phone no. is required" }).min(1, {
    message: "Phone no. is required.",
  }),
  query: z
    .string()
    .min(10, {
      message: "Requirement text must be at least 10 characters.",
    })
    .max(160, {
      message: "Requirement text must not be longer than 30 characters.",
    }),
});
export const AboutsUs = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      query: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
  }
  return (
    <>
      <div className="bg-sky-950 text-white md:p-10">
        <div className="container flex flex-col items-center justify-center gap-6">
          <h2 className="md:text-4xl text-2xl">{aboutUs?.title}</h2>
          <p className="border-b">{aboutUs.description}</p>
        </div>
      </div>
      <div className="container md:p-16 p-5 flex flex-col gap-4">
        <h3 className="text-3xl text-gray-400">{aboutUs.profile.title}</h3>
        {aboutUs.profile.description?.map((item, index) => (
          <p key={`aboutUsProfile${index}`}>{item}</p>
        ))}
        <h3 className="text-3xl text-gray-400">{aboutUs.strength.title}</h3>
        {aboutUs.strength.description?.map((item, index) => (
          <p key={`aboutUsstrength${index}`}>{item}</p>
        ))}
      </div>
      <h3 className="text-3xl text-center text-gray-400 my-4">
        {aboutUs.gallery.title}
      </h3>
      <div className="grid md:grid-cols-3 px-5 gap-4 place-content-center place-items-center">
        {aboutUs.gallery.img?.map((item, index) => {
          return (
            <Image
              src={item.path}
              alt={item?.alt}
              className="w-full object-contain"
              sizes="1920px"
              width={200}
              height={400}
              priority={true}
            />
          );
        })}
      </div>
      <div className="container md:p-16 p-5">
        <h3 className="text-3xl text-center text-gray-400 mb-16">
          {aboutUs.whyChoose?.title}
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {aboutUs.whyChoose?.data?.map((item, index) => (
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
      <div className="container flex flex-col gap-4">
        <h3 className="text-3xl text-center text-gray-400 mt-8">Contact Us</h3>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 text-base"
          >
            <div className="container px-5 my-4">
              <div className="grid items-start md:grid-cols-1 gap-x-6 gap-y-9">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold text-base">
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Enter name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold text-base">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Enter email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold text-base">
                        Phone No.
                      </FormLabel>
                      <FormControl>
                        <PhoneInput
                          {...field}
                          placeholder="Enter phone number"
                          defaultCountry="IN"
                          international
                          countryCallingCodeEditable={false}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="query"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold text-base">
                        Requirements
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter your requirements"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="my-8">
                <Button type="submit" className="bg-sky-950">
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};
