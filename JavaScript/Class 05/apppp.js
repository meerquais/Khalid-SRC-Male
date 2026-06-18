function onEdit(e) {
  if (!e) return;

  const ss = e.source;

  const sheet = ss.getActiveSheet();

  /* ===============================
  
  
  
       1) TIMESTAMPS — Puppuccino sheet
  
  
  
       Checkbox: column G (6) starting row 27
  
  
  
       Timestamp: column H (7)
  
  
  
       =============================== */

  const tsSheetName = "Puppuccino";

  const checkboxCol = 6; // G

  const timeCol = 7; // H

  const startRow = 27;

  if (sheet.getName() === tsSheetName) {
    const row = e.range.getRow();

    const col = e.range.getColumn();

    if (col === checkboxCol && row >= startRow) {
      const timestampCell = sheet.getRange(row, timeCol);

      if (e.value === "TRUE") {
        if (!timestampCell.getValue()) {
          timestampCell.setValue(new Date());
        }
      } else if (e.value === "FALSE") {
        timestampCell.clearContent();
      }
    }
  }

  /* ===============================
  
  
  
       3) CLEAR MEMBER ROW — Puppuccino sheet
  
  
  
       Trigger: Column P checkbox
  
  
  
       =============================== */

  if (sheet.getName() === "Members") {
    const row = e.range.getRow();

    const col = e.range.getColumn();

    if (col === 16) {
      // Column P

      const trigger = sheet.getRange(row, 16);

      if (trigger.getValue() === true) {
        const colsToClear = [1, 2, 5, 6, 7, 8, 9, 10, 11, 12, 13];

        // A,B,E,F,G,H,I,J,K,L,M

        colsToClear.forEach((c) => {
          const cell = sheet.getRange(row, c);

          if (!cell.getFormula()) {
            cell.clearContent();
          }
        });

        // Reset N & O

        sheet.getRange(row, 14).setValue(false);

        sheet.getRange(row, 15).setValue(false);

        // Reset P

        trigger.setValue(false);
      }
    }
  }

  /* ===============================
  
  
  
       2) AUTO SORT — Members sheet
  
  
  
       =============================== */

  const sheetName = "Members";

  const headerRow = 7;

  const lastColumn = 20;

  if (sheet.getName() !== sheetName) return;

  if (sheet.getFilter()) {
    sheet.getFilter().remove();
  }

  const lastRow = sheet.getLastRow();

  if (lastRow <= headerRow) return;

  const range = sheet.getRange(
    headerRow + 1,

    1,

    lastRow - headerRow,

    lastColumn,
  );

  range.sort({ column: 1, ascending: true });
}
