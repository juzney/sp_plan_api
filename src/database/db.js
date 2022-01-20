const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/Plane", () =>
{
  
    console.log("mongodb connected");
})