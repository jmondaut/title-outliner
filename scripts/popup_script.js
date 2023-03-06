function addOutlineToPage(outline){
    let root = document.getElementById("root");
    let outlineText = document.createElement("p");
    outlineText.textContent = outline;
    root.append(outlineText);
}

function getOutline(){
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "GETOULINE"}).then(response => {
            if (!response) {
                return;
            }
            addOutlineToPage(response);
        });
    });
}


window.addEventListener('DOMContentLoaded', () => {
    getOutline();
});
