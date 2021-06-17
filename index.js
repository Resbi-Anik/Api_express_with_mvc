import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

let bike = [
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

app.post("/bikes/new-bike", (req, res) => {
  let newBike = bike
  newBike.push(req.body)
  bike=newBike
  res.send(bike);
});

app.delete("/bikes/:id",(req,res)=>{
  let removeBikeId=parseInt(req.params.id);
  let restBike = bike.filter(val => val.id!==removeBikeId)
  console.log(restBike);
  res.send(restBike)
})

app.put("/bikes/:id",(req,res)=>{
  let updateBikeId=parseInt(req.params.id);
  let updatedBike = bike.filter(val => val.id===updateBikeId )
  updatedBike[0].name="walton"
  console.log(bike);
})

app.listen(PORT, () => {
  console.log(`server is listening at PORT ${PORT}`);
});
