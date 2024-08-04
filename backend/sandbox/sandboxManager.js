
/**
 * Title: Sandbox Manager
 * Description: Manages secure sandbox environments for running user-generated code.
 * Status: Finalized
 * Author: Reece Dixon
 * Date Created: 2024-08-05
 * Path: /sandbox/sandboxManager.js
 * Proprietary: YES - **NOT FOR PUBLIC ACCESS**
 */

const { exec } = require('child_process');

class SandboxManager {
    runInSandbox(command, callback) {
        exec(`sandbox-exec -f sandbox_profile.sb ${command}`, (error, stdout, stderr) => {
            if (error) {
                callback(`Error: ${stderr}`);
            } else {
                callback(stdout);
            }
        });
    }
}

module.exports = SandboxManager;
                