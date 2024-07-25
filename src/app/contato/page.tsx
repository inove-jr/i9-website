"use client";

import ReCAPTCHA from "react-google-recaptcha";
import React, { useState, useRef } from "react";
import { env } from "@/env";

export default function FormularioContato() {
  const { NEXT_PUBLIC_GOOGLE_RECAPTCHA } = env;
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  async function handleCaptchaSubmissions(token: string | null) {
    try {
      if (token) {
        await fetch("/api/recaptcha", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });
        setIsVerified(true);
      }
    } catch (e) {
      setIsVerified(false);
    }
  }

  // TODO: Função handleSubmit do form Rota POST para google sheets

  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <div>
        {/* Todo o formulario aqui */}
        <form className="flex flex-col items-center">
          <input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            type="text"
            placeholder="Nome"
            className="mb-2"
          />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="E-mail"
            className="mb-2"
          />

          <input
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            type="text"
            placeholder="Sua mensagem"
            className="mb-2"
          />

          {/* ReCAPTCHA */}
          <ReCAPTCHA
            sitekey={NEXT_PUBLIC_GOOGLE_RECAPTCHA || ""}
            onChange={(token: string | null) => handleCaptchaSubmissions(token)}
            onExpired={() => setIsVerified(false)}
            className="mb-2"
          ></ReCAPTCHA>

          <button
            type="submit"
            className="mb-2 me-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            disabled={!isVerified}
          >
            Enviar
          </button>
        </form>
      </div>
    </main>
  );
}
