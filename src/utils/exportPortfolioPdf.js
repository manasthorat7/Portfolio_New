export const exportPortfolioPdf = async () => {
  try {
    // 1. Enable PDF export mode to trigger CSS overrides
    document.body.classList.add('pdf-export-mode');

    // 2. Wait for DOM and Framer Motion to settle
    // A slightly longer timeout ensures all animations snap to their final state
    await new Promise((resolve) => setTimeout(resolve, 800));

    // 3. Trigger the browser's native print dialog
    window.print();

  } catch (error) {
    console.error('Error triggering print dialog:', error);
  } finally {
    // 4. Restore normal mode
    // We use a small delay here so the browser captures the state properly 
    // before the print dialog fully takes over on some browsers.
    setTimeout(() => {
      document.body.classList.remove('pdf-export-mode');
    }, 100);
  }
};
