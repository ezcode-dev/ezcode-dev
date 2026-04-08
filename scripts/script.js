document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("terminal-input");
    const outputArea = document.getElementById("terminal-output");

    // Only run terminal logic if the input field exists (i.e., on index.html)
    if (inputField && outputArea) {
        
        // Keep focus on input naturally
        document.addEventListener("click", () => inputField.focus());

        inputField.addEventListener("keydown", function(e) {
            if (e.key === "Enter") {
                const command = this.value.trim().toLowerCase();
                
                if (command) {
                    executeCommand(command);
                }
                this.value = "";
            }
        });

        function executeCommand(cmd) {
            appendOutput(`admin@3ZCOD3:~$ ${cmd}`, "user-cmd");

            switch(cmd) {
                case "help":
                    appendOutput("AVAILABLE SYSTEM MODULES:");
                    appendOutput("  <span class='highlight'>services</span>  - Access hardware/software operations");
                    appendOutput("  <span class='highlight'>downloads</span> - Open secure file repository");
                    appendOutput("  <span class='highlight'>tutorials</span> - Access system modification guides");
                    appendOutput("  <span class='highlight'>clear</span>     - Flush terminal buffer");
                    break;
                case "services":
                    appendOutput("Establishing secure connection to /services...");
                    setTimeout(() => window.location.href = "pages/services.html", 600);
                    break;
                case "downloads":
                    appendOutput("Mounting remote file system...");
                    setTimeout(() => window.location.href = "pages/downloads.html", 600);
                    break;
                case "tutorials":
                    appendOutput("Loading knowledge base...");
                    setTimeout(() => window.location.href = "pages/tutorials.html", 600);
                    break;
                case "clear":
                    outputArea.innerHTML = "";
                    break;
                default:
                    appendOutput(`ERR: Command '${cmd}' not recognized. Type 'help' for directory.`, "error");
            }
        }

        function appendOutput(text, className = "") {
            const p = document.createElement("p");
            p.innerHTML = text;
            if (className) p.classList.add(className);
            outputArea.appendChild(p);
            
            // Auto-scroll to bottom
            window.scrollTo(0, document.body.scrollHeight);
        }
    }
});
