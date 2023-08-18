const attendanceForm = document.getElementById("attendanceForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const startBtn = document.getElementById("startBtn");
const endBtn = document.getElementById("endBtn");
const qrCodeDiv = document.getElementById("qrcode");

let startTime, endTime, name, email;

startBtn.addEventListener("click", () => {
  name = nameInput.value;
  email = emailInput.value;
  startTime = new Date();
  alert("Job started!");
});

endBtn.addEventListener("click", () => {
  if (!startTime) {
    alert("Please start the job first.");
    return;
  }

  endTime = new Date();
  generateQRCode();
  alert("Job ended!");

  startTime = null;
  endTime = null;
  name = null;
  email = null;
});

function generateQRCode() {
  const qrCodeData = `Name: ${name}\nEmail: ${email}\nStart Time: ${startTime}\nEnd Time: ${endTime || "Not ended"}`;

  // Clear previous QR code if exists
  qrCodeDiv.innerHTML = "";

  // Create a new QRCode instance
  const qrcode = new QRCode(qrCodeDiv, {
    text: qrCodeData,
    width: 128,
    height: 128,
  });
}
