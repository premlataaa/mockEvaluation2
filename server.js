const express = rquire("express");

app.listen(PORT, ()=>{
    console.log("Server started")
    connectDB();
});

