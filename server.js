function copyCode(elementId) {
    const codeElement = document.getElementById(elementId);
    const codeText = codeElement.innerText;
  
    navigator.clipboard.writeText(codeText)
      .then(() => {
        alert('Code copied to clipboard!');
      })
      .catch(err => {
        console.error('Unable to copy: ', err);
      });
  }
  