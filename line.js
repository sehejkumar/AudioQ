"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLineNumber = void 0;
const vscode_1 = require("vscode");
function getLine(editor) {
  return editor.selection.active.line + 1; //default starts with line at zero so we must add one
}
function displayLine() {
  const editor = vscode_1.window.activeTextEditor;

    if (editor) {
      const currentLine = getLine(editor);
      vscode_1.window.showInformationMessage(`Line ${currentLine.toString()}`);
    } else {
      vscode_1.window.showInformationMessage("No active window");
    }
}
exports.getLineNumber = displayLine();
//# sourceMappingURL=line.js.map
