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
import { zodResolver } from "@hookform/resolvers/zod";
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
      message: "Query must be at least 10 characters.",
    })
    .max(160, {
      message: "Query must not be longer than 30 characters.",
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

  // 2. Define a submit handler.
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
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
                    Query
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter a query"
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
  );
};
