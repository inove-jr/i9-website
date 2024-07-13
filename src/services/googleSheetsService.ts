import { getGoogleSheetsClient } from "../utils/googleSheetsConexion";

const { GOOGLE_SHEET_ID } = process.env;

if (!GOOGLE_SHEET_ID) {
  throw new Error("Erro ao carregar as variáveis de ambiente");
}

export const getSheetData = async (range: string, sheetName: string) => {
  const sheets = getGoogleSheetsClient();

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: GOOGLE_SHEET_ID,
    range: `${sheetName}!${range}`,
  });

  return response.data.values;
};
