// When the "Download Resume" button is clicked, download your PDF file
document.addEventListener("DOMContentLoaded", function() {
  const downloadBtn = document.getElementById("downloadBtn");
  if (downloadBtn) {
    downloadBtn.addEventListener("click", function(e) {
      e.preventDefault();
      const link = document.createElement("a");
      link.href = "pruthviraj.pdf"; // PDF file should be in the same folder
      link.download = "PRUTHVIRAJ_Resume.pdf";
      link.click();
    });
  }
});
