const express = require("express");
const cors = require("cors");
const placeRoutes = require("./routes/places");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/places", placeRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
