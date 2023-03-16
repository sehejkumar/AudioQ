// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'; //import all vscode libraries
import { getLineNumber, displayLine } from './line'; //get line number variable

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	//lgrqj5dchy7hkfiox76txerfse6fcalhm4emf457wtoa2bhq5u3a
	console.log('Congratulations, your extension "AudioQ" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	
		let disposable = vscode.commands.registerCommand('AudioQ.getLineNumber', () => { //set disposable variable as commend register
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
			// getLineNumber; //call function
			displayLine(); //call function
		

	});

	context.subscriptions.push(disposable); //push
	
	

	

	

	

	
}

// This method is called when your extension is deactivated
export function deactivate() {}
