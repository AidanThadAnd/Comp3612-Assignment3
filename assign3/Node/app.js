const fs = require("fs")
const path = require("path")
const express = require("express")
const app = express()

//Base case "/" returns a welcome message
app.get("/", (req,resp)=>{resp.send("Welcome to the Formula 1 API")})


//Circuits APIs
const circuitFileName="circuits.json"
const circuitJsonPath = path.join("../", "data", circuitFileName)

const circuitJsonData = fs.readFileSync(circuitJsonPath, "utf8")
const circuits = JSON.parse(circuitJsonData)

//handle request for all circuits
app.get("/circuits", (req,resp)=>{resp.json(circuits)})
//handle request for specific circuit
app.get("/circuits/:id", (req,resp)=>{
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
const constructorJsonPath = path.join("../", "data", constructorFileName)

const constructorJsonData = fs.readFileSync(constructorJsonPath, "utf8")
const constructors = JSON.parse(constructorJsonData)

//handle request for all constructors
app.get("/constructors", (req,resp)=>{resp.json(constructors)})
//handle request for specific constructor
app.get("/constructors/:ref", (req,resp)=>{
    const ref = req.params.ref
    const foundConstructors=constructors.filter(c=>c.constructorRef=ref)

    if(foundConstructors.length==0)
        return resp.json({error: {message: "Value not found or Incorrect query string values"}})

    resp.json(foundConstructors) //assignment you will need error
}
)





//Drivers APIs
const driverFileName="drivers.json"
const driverJsonPath = path.join("../", "data", driverFileName)

const driverJsonData = fs.readFileSync(driverJsonPath, "utf8")
const drivers = JSON.parse(driverJsonData)

//handle request for all drivers
app.get("/drivers", (req,resp)=>{resp.json(drivers)})
//handle request for specific driver
app.get("/drivers/:ref", (req,resp)=>{
    const ref = req.params.ref
    console.log(ref)
    const foundDrivers=drivers.filter(d=>d.driverRef=ref)

    if(foundDrivers.length==0)
        return resp.json({error: {message: "Value not found or Incorrect query string values"}})
    resp.json(foundDrivers) 
})

//races APIs
const raceFileName = "races.json"
const raceJsonPath = path.join("../", "data", raceFileName)

const raceJsonData = fs.readFileSync(raceJsonPath, "utf8")
const races = JSON.parse(raceJsonData)

app.get("/races", (req,resp)=>{resp.json(races)})
//handle request for specific races
app.get("/races/season/:year", (req,resp)=>{
    const season = req.params.year

    const foundRace = races.filter(r=>r.year==season)

    if(foundRace.length==0)
        return resp.json({error: {message: "Value not found or Incorrect query string values"}})
    resp.json(foundRace)
})

app.get("/races/id/:id", (req,resp)=>{
    const id = req.params.id

    const foundRace = races.filter(r=>r.id==id)

    if(foundRace.length==0)
        return resp.json({error: {message: "Value not found or Incorrect query string values"}})
    resp.json(foundRace)
})

//results APIs
const resultsFileName = "results.json"
const resultsJsonPath = path.join("../", "data", resultsFileName)

const resultsJsonData = fs.readFileSync(resultsJsonPath, "utf8")
const results = JSON.parse(resultsJsonData)

//ConstructorsResults
app.get("/constructorResults/:constructorRef/:season", (req,resp)=>{
    const season = req.params.season
    const constructorRef = req.params.constructorRef

    const foundConstructorResults = results.filter(r=>(r.constructor.ref == constructorRef && r.race.year == season))

    if(foundConstructorResults.length==0)
        return resp.json({error: {message: "Value not found or Incorrect query string values"}})

    resp.json(foundConstructorResults)
})

//DriverResults
app.get("/driverResults/:driverRef/:season", (req,resp)=>{
    const season = req.params.season
    const driverRef = req.params.driverRef

    const foundDriverResults = results.filter(r=>(r.driver.ref == driverRef && r.race.year == season))

    if(foundDriverResults.length==0)
        return resp.json({error: {message: "Value not found or Incorrect query string values"}})

    resp.json(foundDriverResults)
})


//RaceResults
app.get("/results/race/:id", (req,resp)=>{
    const id = req.params.id

    const foundRaceResults = results.filter(r=>(r.race.id == id))

    if(foundRaceResults.length==0)
        return resp.json({error: {message: "Value not found or Incorrect query string values"}})

    resp.json(foundRaceResults)
})

//SeasonResults
app.get("/results/season/:year", (req,resp)=>{
    const season = req.params.year

    const foundSeasonResults = results.filter(r=>(r.race.year == season))

    

    if(foundSeasonResults.length==0)
        return resp.json({error: {message: "Value not found or Incorrect query string values"}})

    resp.json(foundSeasonResults)
})


app.listen(3000,()=>console.log("Server started"))
