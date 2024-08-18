/* eslint-disable react/jsx-props-no-spreading */

"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { env } from "@/env";

const formSchema = z.object({
  nome: z.string().min(1, { message: "Nome é obrigatório" }),
  email: z.string().email({ message: "Email inválido" }),
  mensagem: z.string().min(1, { message: "Mensagem é obrigatória" }),
  reCAPTCHA: z.boolean().refine((value) => value === true, {
    message: "Confirme que você não é um robô",
  }),
});

type FormSchemaType = z.infer<typeof formSchema>;

export function ContactForm() {
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      mensagem: "",
      reCAPTCHA: false,
    },
  });

  const onSubmit = (data: FormSchemaType) => {
    console.log(data);
    // Limpar os campos do formulário após o envio
    form.reset();
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-4 flex w-full flex-col space-y-8 font-secondary text-black-600"
      >
        <FormField
          control={form.control}
          name="nome"
          render={({ field }) => (
            <FormItem>
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
            <FormItem>
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
        <div className="flex items-start justify-between align-middle">
          <FormField
            control={form.control}
            name="reCAPTCHA"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <ReCAPTCHA
                    sitekey={env.NEXT_PUBLIC_GOOGLE_RECAPTCHA}
                    onChange={() => field.onChange(true)}
                    onExpired={() => field.onChange(false)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="my-auto h-10 w-28 self-end bg-blue-900 text-lg shadow-xl drop-shadow-xl"
            type="submit"
          >
            Enviar
          </Button>
        </div>
      </form>
    </Form>
  );
}
