// Import the plugin metadata from plugin.json
const { name, description, version, enabled } = require("./plugin.json");

// Function to display plugin help information
function stylechangerHelp() {
    console.log(`Plugin Name: ${name}`);
    console.log(`Description: ${description}`);
    console.log(`Version: ${version}`);
    console.log(`Enabled: ${enabled}`);
    console.log("Core Plugins > Works from the changeStyle(styleTable, selector), selector: (.class) (element) (#id)");
}

// Function to initialize the plugin
function initializeStyleChanger() {
    if (enabled) {
        console.log(`${name} (v${version}) is now enabled.`);
        console.log("Ready for Style Changer!");
        // Not need for initializePlugin.
    } else {
        // Do not change anything if the plugin is disabled
        console.log(`${name} is currently disabled.`);
    }
}

function changeStyle(styleTable, selector) {
    if (enabled) {
        // Get the selected elements using the selector
        const elements = document.querySelectorAll(selector);
  
        // Apply styles from the styleTable to each element
        elements.forEach(element => {
          for (const property in styleTable) {
            element.style[property] = styleTable[property];
          }
        });
    } else {
        console.log("The Plugin is still Disabled.");
    }
}

// Example usage of the plugin functions
initializePlugin();
mypluginHelp();

// Export the functions if needed for external use
module.exports = {
    stylechangerHelp,
    initializeStyleChanger,
    changeStyle
};
