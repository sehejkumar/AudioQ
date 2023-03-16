
import {  TextEditor,TextLine, window } from "vscode"; //imports from vscode

function getLine(editor: TextEditor | undefined): number{ //getLine function to get the line number
    return editor!.selection.active.line+1; //return the active line and since default starts with line at zero so we must add one 
}

export function displayLine(): void{ //display the line
    const editor : TextEditor | undefined = window.activeTextEditor; //define the active text editor
     if(editor){ //if there is an editor
        const currentLine: number  = getLine(editor); //set a variable to the getLine
        window.showInformationMessage(`Line ${currentLine.toString()}`); //show info message while setting line number to string variable
     }else{
        window.showInformationMessage('No active window');
     }
}




export const getLineNumber = displayLine(); //export line number;


