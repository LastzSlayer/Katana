// Google Apps Script for Katana migration form
// 1. Open your Google Sheet.
// 2. Extensions > Apps Script.
// 3. Paste this code.
// 4. Deploy > New deployment > Web app.
// 5. Execute as: Me.
// 6. Who has access: Anyone.
// 7. Copy the Web App URL into migration.html.

const SHEET_NAME = "Migration Applications";

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME)
    || SpreadsheetApp.getActiveSpreadsheet().insertSheet(SHEET_NAME);

  const data = e.parameter;

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Timestamp",
      "Player Name",
      "Discord / Contact",
      "Current Server",
      "Current Alliance",
      "Kill Ranking",
      "Preferred Alliance",
      "Total Power",
      "Hero Power",
      "HQ Level",
      "AR Research",
      "T10s",
      "Unit Special Training",
      "Notes"
    ]);
  }

  sheet.appendRow([
    new Date(),
    data.player_name || "",
    data.discord_contact || "",
    data.current_server || "",
    data.current_alliance || "",
    data.kill_ranking || "",
    data.preferred_alliance || "",
    data.total_power || "",
    data.hero_power || "",
    data.hq_level || "",
    data.ar_research || "",
    data.t10s || "",
    data.unit_special_training || "",
    data.notes || ""
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: "success" }))
    .setMimeType(ContentService.MimeType.JSON);
}
