// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// Port for Vue App
const PORT = 5173;

/**
 * This method is called when your extension is activated
 * Your extension is activated the very first time the command is executed
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	context.subscriptions.push(
    vscode.commands.registerCommand('sickdevices.openView', () => {
      // Create and show a new webview
      const panel = vscode.window.createWebviewPanel(
        'showdevices', // Identifies the type of the webview. Used internally
        'Sick Devices', // Title of the panel displayed to the user
        vscode.ViewColumn.One, // Editor column to show the new webview panel in.
        {
					enableScripts: true,
					// This maps localhost:3000 in the webview to the express server port on the remote host.
					portMapping: [
							{ webviewPort: PORT, extensionHostPort: PORT}
					]
    		}
      );
	
			// And set its HTML content
			panel.webview.html = getWebviewContent();
    })
  );
}

function getWebviewContent() {
  return `<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Sick Devices</title>
		</head>
		<body>
			<iframe src="http://127.0.0.1:${PORT}" width="100%" height="1000"></iframe>
		</body>
		</html>`;
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
