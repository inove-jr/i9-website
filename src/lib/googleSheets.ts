import { google } from "googleapis";
import { env } from "../env";

const { GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_SHEET_ID } = env;

export const googleClientSheets = () => {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: GOOGLE_CLIENT_EMAIL,
      private_key: GOOGLE_PRIVATE_KEY.split(String.raw`\n`).join("\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
};

export const getSheetData = async (range: string, sheetName: string) => {
  const sheets = googleClientSheets();

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: GOOGLE_SHEET_ID,
    range: `${sheetName}!${range}`,
  });

  return response.data.values;
};
