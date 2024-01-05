# Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification 
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support old browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod build


# Foody 

/**
* Header
*  - Logo
*  - Nav Items
*  Body
*   - Search
*   - RestaurantContainer
*    - RestaurantCard
*     - Img
*     - Name of Res, Star Rating, cuisine, delivery time 
*     Footer
*      - Copyright
*      - Links
*      - Address
*      - Contact
*      
**/


# React Hooks

- Normal JS functions wrote by Facebook Devs
- useState()
- useEffect()


# 2 types of Routing in web apps
- Client Side Routing
- Server Side Routing
  
  # Chunking/ Bundling/ Dynamic Imports / Lazy Loading / On DEmand Loading


  # Redux Toolkit
  - Install @reduxjs/toolkit and react-redux
  - Build our store
  - Connect our store to our app
  - Slice (cartSlice)
  - dispatch()
  - Selector


# Types of testing (developer)
- Unit Testing 
- Integration Testing
- End to End Testing - e2e testing

# Setting up Testing in our app
- Install React Testing Library
- Install jest
- Install Babel dependencies
- Configure Babel
- Configure Parcel Config file to disable default babel transpilation
- Jest configuration
- install jsdom library
- Install @babel/preset-react  to enable jsx while testing the component
- Include @babel/preset-react  inside  babel config
- Install @testing-library/jest-dom

# Testing imp points

- act function -> act fn returns promise as it is async fn , inside it we render the component
- whenever there is state update , fetch fn used in component wrap render fn inside act fn 
- import {act} from "react-dom/test-utils"
- it("should xyz",async()=>{
-   await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
- }) 