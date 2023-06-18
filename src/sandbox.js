function showTab(event, tabId) {
    event.preventDefault();

    // Hide all tab contents
    const tabContents = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabContents.length; i++) {
      tabContents[i].style.display = 'none';
    }

    // Remove 'active' class from all tab links
    const tabLinks = document.getElementsByTagName('a');
    for (let i = 0; i < tabLinks.length; i++) {
      tabLinks[i].classList.remove('active');
      tabLinks[i].classList.remove('text-blue-600');
      tabLinks[i].classList.remove('border-blue-600');
      tabLinks[i].classList.add('text-gray-500');
      tabLinks[i].classList.add('border-transparent');
    }

    // Show the selected tab content
    document.getElementById(tabId).style.display = 'block';

    // Add 'active' class to the clicked tab link
    event.target.classList.add('active');
    event.target.classList.add('text-blue-600');
    event.target.classList.add('border-blue-600');
    event.target.classList.remove('text-gray-500');
    event.target.classList.remove('border-transparent');
  }

  const responseContainer = document.getElementById("response-container");
  const urlInput = document.getElementById("url-input");
  const submitButton = document.getElementById("submit-button");
  
  submitButton.addEventListener("click", () => {
    const url = urlInput.value;
  
    // Simulate server response
    setTimeout(() => {
      showResponseMessage(`Shortened URL: <a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`);
    }, 2000);
  });
  
  // showing response messages
  function showResponseMessage(message) {
    const responseContainer = document.getElementById("response-container");
    const newMessage = document.createElement("div");
    newMessage.innerHTML = message;
    newMessage.classList.add("bg-white", "p-4", "rounded-md", "mt-4"); // Add Tailwind CSS classes for styling
    responseContainer.appendChild(newMessage);
    responseContainer.classList.remove("hidden");
  }

  // loader effect
  const loader = document.getElementById('loader');
  const shortenButton = document.getElementById('shortenButton');
  
  shortenButton.addEventListener('click', () => {
    loader.style.width = '100%';
    setTimeout(() => {
      loader.style.width = '0';
    }, 2000); // Adjust the duration (in milliseconds) as needed
  });
  