// Access the global pdfjsLib injected via script tag in index.html
declare global {
  interface Window {
    pdfjsLib: any;
  }
}

// We rely on window.pdfjsLib being available via the CDN script
const getPdfLib = () => {
  if (typeof window !== 'undefined' && window.pdfjsLib) {
    return window.pdfjsLib;
  }
  throw new Error("PDF.js library not loaded");
};

export const extractTextFromPDF = async (file: File): Promise<string> => {
  try {
    const pdfjs = getPdfLib();
    const arrayBuffer = await file.arrayBuffer();
    
    // Load the document
    const loadingTask = pdfjs.getDocument({ data: arrayBuffer });
    const pdf = await loadingTask.promise;
    let fullText = '';

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      const pageText = textContent.items.map((item: any) => item.str).join(' ');
      fullText += pageText + '\n';
    }

    return fullText;
  } catch (error) {
    console.error("Error parsing PDF:", error);
    throw new Error("Failed to parse PDF file.");
  }
};

export const parseLinkedInData = (text: string) => {
  const cleanText = text.replace(/\s+/g, ' ').trim();
  const data: any = {};

  // Extract Email
  const emailMatch = cleanText.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/);
  if (emailMatch) data.email = emailMatch[0];

  // Extract Phone (Simple heuristics)
  const phoneMatch = cleanText.match(/(\+?\d[\d -]{8,12}\d)/);
  if (phoneMatch) data.phone = phoneMatch[0];

  // Extract LinkedIn URL
  const linkedinMatch = cleanText.match(/(www\.linkedin\.com\/in\/[^\s]+)/);
  if (linkedinMatch) {
    let url = linkedinMatch[0];
    if (!url.startsWith('http')) url = 'https://' + url;
    data.linkedin = url;
  }

  // Attempt to find Summary
  // LinkedIn summaries often appear after "Summary" or "About"
  const summaryMatch = cleanText.match(/(?:Summary|About)\s+(.*?)\s+(?:Experience|Education|Skills)/i);
  if (summaryMatch && summaryMatch[1].length > 20) {
    data.summary = summaryMatch[1].trim();
  }

  return data;
};