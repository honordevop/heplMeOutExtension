document.addEventListener("DOMContentLoaded", () => {
  // GET THE SELECTORS OF THE BUTTONS
  const startVideoButton = document.querySelector("button#start_video");
  const stopVideoButton = document.querySelector("button#stop_video");
  //   const overlay = document.getElementById("overlay");

  // adding event listeners

  startVideoButton.addEventListener("click", () => {
    // Show the overlay while screen capture is in progress
    // overlay.classList.remove("hidden");
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "request_recording" },
        function (response) {
          if (!chrome.runtime.lastError) {
            console.log(response);
          } else {
            console.log(chrome.runtime.lastError, "error line 14");
            // overlay.classList.add("hidden"); // Hide overlay on error
          }
        }
      );
    });
  });

  stopVideoButton.addEventListener("click", () => {
    // overlay.classList.add("hidden"); // Hide overlay on error
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "stopvideo" },
        function (response) {
          if (!chrome.runtime.lastError) {
            console.log(response);
          } else {
            console.log(chrome.runtime.lastError, "error line 27");
          }
        }
      );
    });
  });
});
