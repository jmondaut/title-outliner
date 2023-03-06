function getOutline() {
    const title = document.querySelector("title");
    const h1s = document.getElementsByTagName("h1");
    let outlineOutput = [title.textContent];
    for(let nodeIndex = 0; nodeIndex < h1s.length; nodeIndex++){
        outlineOutput.push(h1s[nodeIndex].textContent);
    }
    return outlineOutput;
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message === "GETOULINE" ) {
            const outline = getOutline();
            sendResponse(JSON.stringify(outline));
        }
    }
);