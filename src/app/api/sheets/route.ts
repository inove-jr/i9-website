import { getSheetData } from "@/services/googleSheetsService";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const range = searchParams.get("range");
  const sheetName = searchParams.get("sheetName");

  if (!range || !sheetName) {
    return new Response(
      JSON.stringify({
        message: "Parâmetros 'range' e 'sheetName' são obrigatórios",
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      },
    );
  }

  try {
    const data = await getSheetData(range, sheetName);
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("GET sheets error:", error);
    return new Response(
      JSON.stringify({ message: "Erro ao recuperar dados da planilha" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
