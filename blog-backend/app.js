const express = require("express");
const path = require("path");
const app = express();
const port = process.env.blog2_PORT || 8080;
const cors = require("cors");
const postRoutes = require("./routes/postRoutes");
const userRoutes = require("./routes/userRoutes");
const commentRoutes = require("./routes/commentRoutes");
const adminRoutes = require("./routes/adminRoutes");
const categoryRoutes = require("./routes/categoryRoutes");

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.get("/test", (req, res) => {
  res.send("Hello World!");
});
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/admin", adminRoutes);

app.get("*splat", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port https://localhost:${port}`);
});
