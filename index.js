import express from "express";

const app = express();
const PORT = 3000;

const bike = [
  {
    id: 1,
    name: "Honda",
  },
  {
    id: 2,
    name: "Yamaha",
  },
];

app.get("/", (req, res) => {
  res.send("get request");
});

app.get("/bikes", (req, res) => {
  res.send(bike);
});

app.get("/bikes/:id", (req, res) => {
  const bikeById = parseInt(req.params.id);
  const getBike = bike.find((val) => val.id === bikeById);
  res.send(getBike);
});

app.listen(PORT, () => {
  console.log(`server is listening at PORT ${PORT}`);
});
