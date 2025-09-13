// import ProductCard from "./ProductCard.jsx"
// import "./ProductCard.css"
import "./App.css"
import { useState } from "react"
// import "./Avatar.css"
// import Avatar from "./Avatar.jsx"
// import BlogPost from "./BlogPost.jsx"
function App() {


  // const productname="Face Wash"
  // const price=200
  // const isavailable=true
  // const isnotavailable=false
  // const name="Varshini"
  // const Course="B-tech(CSE)"
  // const rollNo="24VV1A0523"
  // const bloodGroup="B+ve"
  // const dOB="08-07-2007"
  // const photo="./OIP.webp"
  // const product=[
  //   {
  //     productname:"Product 1",
  //     price:2000,
  //     isavailable:true,
  //   },
  //   {
  //     productname:"Product 2",
  //     price:3000,
  //     isavailable:true,
  //   },
  //   {
  //     productname:"Product 3",
  //     price:4000,
  //     isavailable:true,
  //   }
  // ]
  // const posts=[
  //   {
  //     id:1,
  //     author:"Varshini",
  //     title:"Brave Girl",
  //     Description:"Files  "
  //   },
  //   {
  //     id:2,
  //     author:"Varshini",
  //     title:"Brave Girl",
  //     Description:" Fire"
  //   },
  //   {
  //     id:3,
  //     author:"Varshini",
  //     title:"Brave Girl",
  //     Description:"Inside"
  //   },]

  const [count, setCount] = useState(0)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [formData, setformData] = useState(
    {
      email: "",
      password: ""
    })


   const handleIncrement=()=>{
     setCount((prevCount)=>prevCount+1)
     console.log(count)
   }
  const handleEmail = (event) => {
    setEmail(event.target.value)
  }
  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  // const handleClick=(name)=>
  // {
  //   console.log("You clicked the button")

  //   alert("hello" +name)
  //   // alert(`hello ${name}`)
  //   }
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Email: ${formData.email}\nPassword:${formData.password}\n You are logged in`)
  }
  

  //   }
    const handleChange=(event)=>
     {
      setformData({
      ...formData,
       [event.target.name]:event.target.value
     }
    )
    }

  return (
    <div className="var">
      <p>{count}</p>
      <button onClick={handleSubmit}>submit</button>
      <button onClick={handleIncrement}>increment</button>
      {/* <Avatar name={name} course={Course} RollNo={rollNo} bloodGroup={bloodGroup} dOB={dOB} />
    {/*<ProductCard rname={productname} cost={price} avl={isavailable}/>*/}

      {/* {
    posts.map((Post)=>(
      <BlogPost
      Key={Post.id}
      author={Post.author}
      title={Post.title}
      description={Post.Description}/>
      )
    )
  }
   */}
      {/* <p> I am a button</p> */}
      {/* <input type="text" name="myName" placeholder="Type your name" onChange={handleChange} /> */}
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" placeholder="Enter your email" onChange={handleChange} />
        < input type="password" name="password" placeholder="Enter password" onChange={handleChange} />
        <button type="submit"> Login</button>
        {/* <button onClick={() =>handleClick("varshini")}>Click me</button> */}
        </form> 
    </div>
  )

}
  export default App
