#Katie's POI Favorites Map
Let me first start by saying, I had a lot of fun working on this take home challenge. It was a joy to develop! 

##My Process
As a visual person, the first thing I did in starting the challenge was to sketch out on graph paper a mockup of the desired UI. Drawing a design helps me engage with the different parts of the system, see how the pieces fit together and start thinking about components, user flow and shared state.

After gaining a better grasp of what the feature looks like and does, I created a diagram of component architecture outlining shared state properties and event handlers. I also considered the best choice for storing favorite list data, and appropriate naming. I choose to use the variable name favoriteList and favorite, but if other types of places are added, it might be worth renaming to savedPlaces, and savedPlace. 

To encourage an extensible pattern, I broke out the Map from the Favorite List, and created a Controller to hold shared state properties, callback functions and act as container in rendering
* `<MapView/>`
* `<List/>`

I choose to use functional components instead of class based components in React to reduce boilerplate logic, and take advantage of hooks. In this iteration I choose to use callback functions in handling state, but I easily could have extracted state logic into react hook context which could simplify things as the feature expands and needs to hold other state variables.

Reading latitude and longitude as your favorite place is not exactly user friendly, so I used mapbox reverse geocode api to get access to the locations POI feature information.  I did not write a test to test the status of the API call response, which ideally should be done. I did add logic into the list item to handle the cases when no location meta data is returned.

###Styling
I included Semantic UI React library. I think they do a great job of making clean and sharp looking UI components. Semantic UI can add unneeded complexity with their built in css rules and own component structure; however, due to the scope of the project and timing I decided to use them as a dependency.

###Testing
I’d like to address the elephant in the room on my lack of robust testing. I was a bit paralzed in my perfection for wanting this area to be complete, but to be transparent, I’ve had limited exposure to Jest/Enzyme React UI testing, and struggled with library syntax. Practice is my motto, and after my first foregin attempt in getting the included tests to run, to my last attempt at writing the ListItem tests, the testing code has become more familiar to me. Considering I currently work at a company that manually tests UI components every sprint release, I’m ready for automated testing! I would love to grow in this area and include it in part of my development process.