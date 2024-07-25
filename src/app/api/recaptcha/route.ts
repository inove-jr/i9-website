import { NextRequest } from "next/server";
import axios from "axios";
import { z } from "zod";
import { env } from "@/env";

const schema = z.object({
  token: z.string(),
});

export async function POST(req: NextRequest) {
  try {
    const { token } = schema.parse(await req.json());
    const secretKey = env.GOOGLE_RECAPTCHA;

    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
    );

    if (response.data.success)
      return Response.json(response.data, { status: 200 });
    else return Response.json(response.data, { status: 400 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json(error.issues, { status: 400 });
    }
    return Response.json(error, { status: 500 });
  }
}
