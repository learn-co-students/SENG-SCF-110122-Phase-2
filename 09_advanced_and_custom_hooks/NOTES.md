useRef: hook provided to us by React
allows us to save data without component re-render
allows us to target JSX/HTML element "the React way"

Step 1: import { useRef } from 'react'
Step 2: const inputRef = useRef()
Step 3: attach ref prop to element  = variable from step 2


custom hooks should:
1. always start with "use"
2. always be a function aka useForm()
3. pretty much always return an object
ES6 syntax this is an object => {data, updateData, reset}

Context API - react-router-dom library built on Context API
.Provider and .Consumer

what?? why?? how??

Context API is a centralized/global state => allows us to avoid prop drilling
Redux library does something similar
HOC to wrap APP (inside of index.js) or components inside of APP => children get those values

I. Creating Context (either in App or from an external file)
 (don't need to import createContext)
1. const userContext = React.createContext(initialVal) // invoke createContext and set to variable
2. userContext.Provider HOC // we will create a Consumer and a Provider
// we will need to import the file to use this if its defined elsewhere
// wrap the part of the app that needs the data inside the provider
// anything NOT inside of the Provider won't have access to the data
// also need the value prop to pass the global data aka:
<UserContext.Provider value={{user}}>
   <child components go in here>
</UserContext.Provider>

II Accessing Context Data (from whichever component that you want to give access)
3. import useContext from 'react' // and also import file that will give us the state/data. In this case, UserContext
4. const user = useContext(UserContext) // save useContext(UserContext) to variable and pass as an argument the context that "owns" the state
5. inside the function, use object destructuring to access data from value prop aka:
const { user } = useContext(UserContext)