const attendanceForm = document.getElementById("attendanceForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const startBtn = document.getElementById("startBtn");
const endBtn = document.getElementById("endBtn");

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
  const duration = endTime - startTime;

  // Create and download an Excel file (simplified)
  const excelData = `Name,Email,Start Time,End Time,Duration\n${name},${email},${startTime},${endTime},${duration}`;
  const blob = new Blob([excelData], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "attendance.csv";
  link.click();

  startTime = null;
  endTime = null;
  name = null;
  email = null;

  alert("Job ended!");
});
