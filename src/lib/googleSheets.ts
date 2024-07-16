import { google } from "googleapis";
const { GOOGLE_SHEET_ID } = process.env;

export const googleClientSheets = () => {
  const { GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY } = process.env;

  if (!GOOGLE_CLIENT_EMAIL || !GOOGLE_PRIVATE_KEY) {
    throw new Error(
      "Não foi possivel carregar as variaveis de ambiente da Google Cloud",
    );
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: GOOGLE_CLIENT_EMAIL,
      private_key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
};

if (!GOOGLE_SHEET_ID) {
  throw new Error("Erro ao carregar as variáveis de ambiente");
}

export const getSheetData = async (range: string, sheetName: string) => {
  const sheets = googleClientSheets();

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: GOOGLE_SHEET_ID,
    range: `${sheetName}!${range}`,
  });

  return response.data.values;
};
