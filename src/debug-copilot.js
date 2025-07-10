// Debug script to find CopilotKit class names
window.findCopilotKitClasses = function() {
  const allElements = document.querySelectorAll('*');
  const copilotClasses = new Set();
  
  allElements.forEach(el => {
    if (el.className && typeof el.className === 'string') {
      el.className.split(' ').forEach(className => {
        if (className.toLowerCase().includes('copilot')) {
          copilotClasses.add(className);
        }
      });
    }
  });
  
  console.log('Found CopilotKit classes:', Array.from(copilotClasses));
  return Array.from(copilotClasses);
};

// Auto-run on load
setTimeout(() => {
  window.findCopilotKitClasses();
}, 2000);
