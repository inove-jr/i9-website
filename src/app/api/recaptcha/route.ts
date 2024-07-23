import { NextRequest } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ message: "Apenas requisições POST" }),
      { status: 405 },
    );
  }

  const { token } = await req.json();
  const secretKey: string | undefined = process.env.RECAPTCHA_SECRET;

  if (!token) {
    return new Response(JSON.stringify({ message: "Token não encontrado!" }), {
      status: 405,
    });
  }

  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
    );

    if (response.data.success) {
      return new Response(JSON.stringify({ message: "Successo" }), {
        status: 200,
      });
    } else {
      return new Response(
        JSON.stringify({ message: "Não foi possível verificar" }),
        {
          status: 405,
        },
      );
    }
  } catch (e) {
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
}
