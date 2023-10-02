function toggleBackgroundColor(elementId, color1, color2) {
  const element = document.getElementById(elementId);
  if (element) {
    const currentColor = element.style.backgroundColor;

    if (currentColor === color1) {
      element.style.backgroundColor = color2;
    } else {
      element.style.backgroundColor = color1;
    }
  }
}

// Function to add a class name to an element
function addClass(element, className) {
  if (element && className) {
    element.classList.add(className);
  }
}

// Function to remove a class name from an element
function removeClass(element, className) {
  if (element && className) {
    element.classList.remove(className);
  }
}

// Example usage:
const myElement = document.getElementById("toggleBtn"); // Replace 'myElement' with the actual ID or reference to your element
const myElement2 = document.getElementById("toggleBtn2"); // Replace 'myElement' with the actual ID or reference to your element

// Adding a class name to the element
addClass(myElement, "left");
addClass(myElement2, "left");

// Removing a class name from the element
removeClass(myElement, "right");
removeClass(myElement2, "right");

function toggleClassOnClick() {
  const element = document.getElementById("toggleBtn"); // Replace 'myButton' with the ID of your element
  const wrapper = document.getElementById("toggleWrapper"); // Replace 'myButton' with the ID of your element
  if (element) {
    element.addEventListener("click", function () {
      element.classList.toggle("left"); // Toggle the 'highlight' class
      wrapper.classList.toggle("toggle-blue");
    });
  }
  console.log("Clicked");
}

// Call the function to set up the event listener
toggleClassOnClick();

function toggleClassOnClick2() {
  const element = document.getElementById("toggleBtn2"); // Replace 'myButton' with the ID of your element
  const wrapper = document.getElementById("toggleWrapper2"); // Replace 'myButton' with the ID of your element
  if (element) {
    element.addEventListener("click", function () {
      element.classList.toggle("left"); // Toggle the 'highlight' class
      wrapper.classList.toggle("toggle-blue");
    });
  }
  console.log("Clicked");
}

// Call the function to set up the event listener
toggleClassOnClick2();

function switchClasses(element1Id, element2Id, class1, class2) {
  const element1 = document.getElementById(element1Id);
  const changeDisplay2 = document.getElementById("display1a");
  const changeDisplay4 = document.getElementById("display4");
  const element2 = document.getElementById(element2Id);
  // const changeDisplay3 = document.getElementById("display3");

  element1.addEventListener("click", function () {
    element1.classList.remove(class1);
    element1.classList.add(class2);

    changeDisplay2.classList.remove(class2);
    changeDisplay2.classList.add(class1);

    element2.classList.remove(class2);
    element2.classList.add(class1);

    changeDisplay4.classList.remove(class1);
    changeDisplay4.classList.add(class2);
  });

  element2.addEventListener("click", function () {
    element2.classList.remove(class1);
    element2.classList.add(class2);

    changeDisplay4.classList.remove(class2);
    changeDisplay4.classList.add(class1);

    element1.classList.remove(class2);
    element1.classList.add(class1);

    changeDisplay2.classList.remove(class1);
    changeDisplay2.classList.add(class2);
  });
}

// Call the function to set up the click event listeners
switchClasses("display1", "display3", "show", "hide");

document.addEventListener("DOMContentLoaded", function () {
  const captureButton = document.getElementById("display1");

  captureButton.addEventListener("click", function () {
    chrome.desktopCapture.chooseDesktopMedia(
      ["screen", "window"],
      (streamId) => {
        if (streamId) {
          // Use the selected stream for screen capture
          const constraints = {
            audio: false,
            video: {
              mandatory: {
                chromeMediaSource: "desktop",
                chromeMediaSourceId: streamId,
              },
            },
          };

          navigator.mediaDevices
            .getUserMedia(constraints)
            .then((stream) => {
              // You can use the 'stream' for your purposes, such as displaying it in a video element or sending it to a server.
            })
            .catch((error) => {
              console.error("Error accessing screen capture:", error);
            });
        } else {
          console.error("Screen capture permission denied.");
        }
      }
    );
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var closeButton = document.getElementById("closeButton");

  closeButton.addEventListener("click", function () {
    window.close(); // Close the popup
  });
});
