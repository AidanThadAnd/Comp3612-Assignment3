const fs = require("fs")
const path = require("path")
const express = require("express")
const app = express()

//Base case "/" returns a welcome message
app.get("/api", (req,resp)=>{resp.send("Welcome to the Formula 1 API")})

function readJson(fileName){
    const jsonPath = path.join("../", "data", fileName)
    const jsonData = fs.readFileSync(jsonPath, "utf8")
    return JSON.parse(jsonData)
}

//Circuits APIs
const circuitFileName="circuits.json"
const circuits = readJson(circuitFileName)

//handle request for all circuits
app.get("/api/circuits", (req,resp)=>{resp.json(circuits)})
//handle request for specific circuit
app.get("/api/circuits/:id", (req,resp)=>{
    const id = req.params.id

    const foundCircuits = circuits.filter(c=>c.circuitId==id)

    if(foundCircuits.length==0){
        return resp.json({error: {message: "Value not found or Incorrect query string values"}})
    }

    resp.json(foundCircuits) 
}
)




//constructors APIs
const constructorFileName="constructors.json"
const constructors = readJson(constructorFileName)

//handle request for all constructors
app.get("/api/constructors", (req,resp)=>{resp.json(constructors)})
//handle request for specific constructor
app.get("/api/constructors/:ref", (req,resp)=>{
    const ref = req.params.ref
    const foundConstructors=constructors.filter(c=>c.constructorRef=ref)

    if(foundConstructors.length==0)
        return resp.json({error: {message: "Value not found or Incorrect query string values"}})

    resp.json(foundConstructors) //assignment you will need error
}
)





//Drivers APIs
const driverFileName="drivers.json"
const drivers = readJson(driverFileName)
//handle request for all drivers
app.get("/api/drivers", (req,resp)=>{resp.json(drivers)})
//handle request for specific driver
app.get("/api/drivers/:ref", (req,resp)=>{
    const ref = req.params.ref
    console.log(ref)
    const foundDrivers=drivers.filter(d=>d.driverRef=ref)

    if(foundDrivers.length==0)
        return resp.json({error: {message: "Value not found or Incorrect query string values"}})
    resp.json(foundDrivers) 
})

//races APIs
const raceFileName = "races.json"
const races = readJson(raceFileName)

//handle request for specific race season
app.get("/api/races/season/:year", (req,resp)=>{
    const season = req.params.year

    const foundRace = races.filter(r=>r.year==season)

    if(foundRace.length==0)
        return resp.json({error: {message: "Value not found or Incorrect query string values"}})
    resp.json(foundRace)
})

//handle request for specific race id
app.get("/api/races/id/:id", (req,resp)=>{
    const id = req.params.id

    const foundRace = races.filter(r=>r.id==id)

    if(foundRace.length==0)
        return resp.json({error: {message: "Value not found or Incorrect query string values"}})
    resp.json(foundRace)
})

//results APIs
const resultsFileName = "results.json"
const results = readJson(resultsFileName)

//ConstructorsResults for season
app.get("/api/constructorResults/:constructorRef/:season", (req,resp)=>{
    const season = req.params.season
    const constructorRef = req.params.constructorRef

    const foundConstructorResults = results.filter(r=>(r.constructor.ref == constructorRef && r.race.year == season))

    if(foundConstructorResults.length==0)
        return resp.json({error: {message: "Value not found or Incorrect query string values"}})

    resp.json(foundConstructorResults)
})

//DriverResults for season
app.get("/api/driverResults/:driverRef/:season", (req,resp)=>{
    const season = req.params.season
    const driverRef = req.params.driverRef

    const foundDriverResults = results.filter(r=>(r.driver.ref == driverRef && r.race.year == season))

    if(foundDriverResults.length==0)
        return resp.json({error: {message: "Value not found or Incorrect query string values"}})

    resp.json(foundDriverResults)
})


//RaceResults for raceId
app.get("/api/results/race/:id", (req,resp)=>{
    const id = req.params.id

    const foundRaceResults = results.filter(r=>(r.race.id == id))

    if(foundRaceResults.length==0)
        return resp.json({error: {message: "Value not found or Incorrect query string values"}})

    resp.json(foundRaceResults)
})

//SeasonResults
app.get("/api/results/season/:year", (req,resp)=>{
    const season = req.params.year

    const foundSeasonResults = results.filter(r=>(r.race.year == season))

    if(foundSeasonResults.length==0)
        return resp.json({error: {message: "Value not found or Incorrect query string values"}})

    resp.json(foundSeasonResults)
})


app.listen(3000,()=>console.log("Server started"))
