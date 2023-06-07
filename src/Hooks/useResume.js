import myCV from '../Data/DerekPesaCV.pdf'
import '../styles/page.css'
 
const useResume = () => {
    const downloadCv = () => {
        // Fetch the PDF file
        fetch(myCV)
        .then(response => response.blob())
        .then(blob => {
            // Create a temporary URL for the Blob
            const url = URL.createObjectURL(blob);
    
            // Create a link element and set the necessary attributes
            const link = document.createElement('a');
            link.href = url;
            link.download = 'file.pdf';
    
            // Simulate a click event on the link to trigger the download
            link.click();
    
            // Clean up by revoking the temporary URL
            URL.revokeObjectURL(url);
        });
    };
    
  return { downloadCv }
}

export default useResume