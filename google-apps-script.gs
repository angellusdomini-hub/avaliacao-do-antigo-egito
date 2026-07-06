const SPREADSHEET_ID = "COLE_AQUI_O_ID_DA_PLANILHA";
const SHEET_NAME = "Respostas";

function doPost(e) {
  const payload = JSON.parse(e.postData.contents || "{}");
  const sheet = getSheet_();
  ensureHeader_(sheet);

  sheet.appendRow([
    new Date(),
    payload.student || "",
    payload.turma || "",
    payload.score || 0,
    payload.max || 2.5,
    payload.elapsedSeconds || 0,
    JSON.stringify(payload.answers || [])
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function getSheet_() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  return spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
}

function ensureHeader_(sheet) {
  if (sheet.getLastRow() > 0) return;

  sheet.appendRow([
    "Data e hora",
    "Estudante",
    "Turma",
    "Nota",
    "Valor total",
    "Tempo em segundos",
    "Respostas detalhadas"
  ]);
  sheet.setFrozenRows(1);
}
