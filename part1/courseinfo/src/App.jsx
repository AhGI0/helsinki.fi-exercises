import Content from "./pages/Content"
import Header from "./pages/Header"
import Total from "./pages/Total"

function App() {
  // i added some constants here 
  const course = 'Half Stack application development'
  // i put all data in one array of object
 let parts= [ 
    {name:"Fundamentals of React",exercises:10}, 
    {name:"Using props to pass data",exercises:7}, 
    {name:"State of component",exercises:14}, 
 ]
  return (
    <>
    <Header course={course}/> 
    <Content parts={parts} />
    <Total parts={parts}/> 
    </>
  )
}

export default App
