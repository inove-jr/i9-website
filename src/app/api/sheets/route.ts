import type { NextApiRequest, NextApiResponse } from "next";
import { getSheetData } from "../../../services/googleSheetsService";
import { NextResponse } from "next/server";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  const url = new URL(req.url as string, `http://${req.headers.host}`);
  const range = url.searchParams.get("range");
  const sheetName = url.searchParams.get("sheetName");

  try {
    const data = await getSheetData(range as string, sheetName as string);
    // console.log("Dados obtidos:", data);
    return NextResponse.json({ data }, { status: 200 });
    // return res.status(200).json({ data });
  } catch (error) {
    console.error("GET sheets error:", error);
    return res.status(500).json({ message: "Erro ao acessar o Google Sheets" });
  }
};
