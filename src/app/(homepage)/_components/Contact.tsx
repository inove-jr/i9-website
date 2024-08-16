/* eslint-disable react/jsx-props-no-spreading */

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import { env } from "@/env";

// Definir o esquema de validação com Zod
const formSchema = z.object({
  nome: z.string().min(1, { message: "Nome é obrigatório" }),
  email: z.string().email({ message: "Email inválido" }),
  mensagem: z.string().min(1, { message: "Mensagem é obrigatória" }),
});

// Definir os tipos baseados no schema do Zod
type FormSchemaType = z.infer<typeof formSchema>;

export function Contact() {
  // Usar useForm com validação via zodResolver
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      mensagem: "",
    },
  });

  // Função para manipular envio do formulário
  const onSubmit = (data: FormSchemaType) => {
    console.log(data);
    // Limpar os campos do formulário após o envio
    form.reset();
  };

  return (
    <section className="flex h-auto w-full flex-col items-center justify-center border-y-4 border-solid border-orange bg-blue-900 font-secondary text-white-100 lg:h-screen lg:flex-row">
      <div className="order-1 flex size-full flex-col items-center justify-start bg-white px-4 py-8 lg:order-2 lg:w-1/2 lg:p-16">
        <h2 className="decorated-border w-full text-start text-2xl font-semibold text-blue-900 lg:text-4xl">
          CONTATE-NOS
        </h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-4 flex w-full flex-col space-y-8 font-secondary text-black-600"
          >
            <FormField
              control={form.control}
              name="nome"
              render={({ field }) => (
                <FormItem className="">
                  <FormControl>
                    <Input
                      placeholder="Nome"
                      {...field}
                      className="h-14 rounded-xl border-solid border-gray-300 text-base font-medium shadow-md shadow-black-400 drop-shadow-xl placeholder:text-gray-600"
                    />
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
                  <FormControl>
                    <Input
                      placeholder="E-mail"
                      {...field}
                      className="h-14 rounded-xl border-solid border-gray-300 text-base font-medium shadow-md shadow-black-400 drop-shadow-xl placeholder:text-gray-600"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="mensagem"
              render={({ field }) => (
                <FormItem className="">
                  <FormControl>
                    <Textarea
                      placeholder="Sua mensagem"
                      {...field}
                      className="h-40 w-full resize-none rounded-xl border-solid border-gray-300 p-2 text-base font-medium shadow-md shadow-black-400 drop-shadow-xl placeholder:text-gray-600"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="h-10 w-28 self-end bg-blue-900 text-lg shadow-xl drop-shadow-xl"
              type="submit"
            >
              Enviar
            </Button>
          </form>
        </Form>
      </div>
      <div className="order-2 flex size-full flex-col justify-center rounded-lg lg:order-1 lg:w-1/2 lg:pl-20">
        <GoogleMapsEmbed
          apiKey={env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}
          height={400}
          width="100%"
          mode="place"
          q="place_id:ChIJuR5TowFxcwcRB6aLNgcVjek"
          loading="lazy"
        />
      </div>
    </section>
  );
}
