# COMP 3612 - F1 API Project
## Overview
This repository holds the code for an F1 API which aims to provide endpoints for the following data:
1. Circuits
2. Constructors
3. Drivers
4. Races
5. Results

As of December 7th, 2024 the API is currently hosted on glitch.com. All requests will be returned with the JSON data or an applicable JSON error.

## Technologies used
- Node.js
- Express.js


## TESTING
- https://star-pattern-appalachiosaurus.glitch.me/api/circuits
- https://star-pattern-appalachiosaurus.glitch.me/api/circuits/1
- https://star-pattern-appalachiosaurus.glitch.me/api/constructors
- https://star-pattern-appalachiosaurus.glitch.me/api/constructors/mclaren
- https://star-pattern-appalachiosaurus.glitch.me/api/coNSTruCTors/mclaren
- https://star-pattern-appalachiosaurus.glitch.me/api/constructors/javascript
- https://star-pattern-appalachiosaurus.glitch.me/api/constructorResults/mclaren/2023
- https://star-pattern-appalachiosaurus.glitch.me/api/constructorResults/MERCEDES/2020
- https://star-pattern-appalachiosaurus.glitch.me/api/constructorResults/mclaren/2040
- https://star-pattern-appalachiosaurus.glitch.me/api/constructorResults/comp3612/2023
- https://star-pattern-appalachiosaurus.glitch.me/api/drivers
- https://star-pattern-appalachiosaurus.glitch.me/api/drivers/hamilton
- https://star-pattern-appalachiosaurus.glitch.me/api/drivers/HAMilton
- https://star-pattern-appalachiosaurus.glitch.me/api/drivers/randy
- https://star-pattern-appalachiosaurus.glitch.me/api/driverResults/piastre/2023
- https://star-pattern-appalachiosaurus.glitch.me/api/driverResults/piastre/2002
- https://star-pattern-appalachiosaurus.glitch.me/api/races/season/2023
- https://star-pattern-appalachiosaurus.glitch.me/api/races/seasoning/2023
- https://star-pattern-appalachiosaurus.glitch.me/api/races/season/2032
- https://star-pattern-appalachiosaurus.glitch.me/api/results/race/1100
- https://star-pattern-appalachiosaurus.glitch.me/api/results/race/1756348576
- https://star-pattern-appalachiosaurus.glitch.me/api/results/season/2023
- https://star-pattern-appalachiosaurus.glitch.me/api/results/season/2034

### NOTE:
- /api/constructors/javascript **WILL RETURN AN ERROR** due to invalid constructor "javascript"
- /api/constructorResults/mclaren/2040 **WILL RETURN AN ERROR** due to the invalid year "2024"
- /api/constructorResults/comp3612/2023 **WILL RETURN AN ERROR** due to invalid consturctorRef "comp3612"
- /api/drivers/randy **WILL RETURN AN ERROR** due to invalid driver Reference "randy"
- /api/driverResults/piastre/2002 **WILL RETURN AN ERROR** due to invalid name + year
- /api/races/seasoning/2023 **WILL RETURN AN ERROR** due to invalid API endpoint "seasoning"
- /api/races/season/2032 **WILL RETURN AN ERROR** due to invalid season "2032"
- /api/results/race/1756348576 **WILL RETURN AN ERROR** due to invalid raceID "1756348576"
- /api/results/season/2034 **WILL RETURN AN ERROR** due to invalid year "2034"
