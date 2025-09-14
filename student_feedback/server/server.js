const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const studentRoutes = require("./login_routes/student");
const facultyRoutes = require("./login_routes/faculty");
const adminRoutes = require("./login_routes/admin");
const dashboardRoutes = require("./dashboard_routes/faculty");
const subjectRoutes =require("./dashboard_routes/subjects");
const studentFeedbackRoutes=require("./dashboard_routes/feedbackSubmit");
const adminDashboardRoutes = require("./dashboard_routes/admin");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/student", studentRoutes);
app.use("/api/faculty", facultyRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/faculty", dashboardRoutes);
app.use("/api/student", subjectRoutes);
app.use("/api/student",studentFeedbackRoutes);
app.use("/api/admin/dashboard", adminDashboardRoutes);

app.listen(3001, () => {
  console.log("🚀 Server running on http://localhost:3001");
});


// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");

// // Route imports
// const studentRoutes = require("./login_routes/student");
// const facultyRoutes = require("./login_routes/faculty");
// const adminRoutes = require("./login_routes/admin"); // Updated with dashboard routes
// const dashboardRoutes = require("./dashboard_routes/faculty");
// const subjectRoutes = require("./dashboard_routes/subjects");
// const studentFeedbackRoutes = require("./dashboard_routes/feedbackSubmit");

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// // ------------------ API Routes ------------------ //
// app.use("/api/student", studentRoutes);
// app.use("/api/faculty", facultyRoutes);
// app.use("/api/admin", adminRoutes);          // includes dashboard endpoints
// app.use("/api/faculty", dashboardRoutes);
// app.use("/api/student", subjectRoutes);
// app.use("/api/student", studentFeedbackRoutes);

// // ------------------ Start Server ------------------ //
// const PORT = 3001;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });
