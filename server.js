function copyCode(elementId) {
    const codeElement = document.getElementById(elementId);
    const codeText = codeElement.innerText;
  
    navigator.clipboard.writeText(codeText)
      .then(() => {
        console.log('Code copied successfully!');
      })
      .catch(err => {
        console.error('Unable to copy: ', err);
      });
  }
  