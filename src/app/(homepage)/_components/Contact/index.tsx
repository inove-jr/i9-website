import { GoogleMapsEmbed } from "@next/third-parties/google";
import { env } from "@/env";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section className="flex h-auto w-full flex-col items-center justify-center border-y-4 border-solid border-orange bg-blue-900 font-secondary text-white-100 lg:h-screen lg:flex-row">
      <div className="order-1 flex size-full flex-col items-center justify-start bg-white px-4 py-8 lg:order-2 lg:w-1/2 lg:p-16">
        <h2 className="decorated-border w-full text-start text-2xl font-semibold text-blue-900 lg:text-4xl">
          CONTATE-NOS
        </h2>
        <ContactForm />
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
