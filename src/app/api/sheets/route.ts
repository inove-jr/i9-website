import { getSheetData } from "@/lib/googleSheets";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const range = searchParams.get("range");
  const sheetName = searchParams.get("sheetName");

  if (!range || !sheetName) {
    return NextResponse.json(
      { error: "Parâmetros 'range' e 'sheetName' são obrigatório" },
      { status: 400 },
    );
  }

  try {
    const data = await getSheetData(range, sheetName);
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("GET sheets error:", error);
    return NextResponse.json(
      { error: "Erro ao recuperar dados da planilha" },
      { status: 500 },
    );
  }
}
