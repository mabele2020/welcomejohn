function doPost(e) {
    var sheet = SpreadsheetApp.openById("YOUR_SPREADSHEET_ID").getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([data.name, data.email]);
    
    return ContentService.createTextOutput(JSON.stringify({ status: "success" })).setMimeType(ContentService.MimeType.JSON);
}