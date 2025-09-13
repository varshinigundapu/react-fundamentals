import ProductCard from "./ProductCard.jsx"
import "./ProductCard.css"
import "./App.css"
import "./Avatar.css"
import Avatar from "./Avatar.jsx"
import BlogPost from "./BlogPost.jsx"
function App() {

  
const productname="Face Wash"
const price=200
const isavailable=true
const isnotavailable=false
const name="Varshini"
const Course="B-tech(CSE)"
const rollNo="24VV1A0523"
const bloodGroup="B+ve"
const dOB="08-07-2007"
const photo="./OIP.webp"
const product=[
  {
    productname:"Product 1",
    price:2000,
    isavailable:true,
  },
  {
    productname:"Product 2",
    price:3000,
    isavailable:true,
  },
  {
    productname:"Product 3",
    price:4000,
    isavailable:true,
  }
]
const posts=[
  {
    id:1,
    author:"Varshini",
    title:"Brave Girl",
    Description:"Files  "
  },
  {
    id:2,
    author:"Varshini",
    title:"Brave Girl",
    Description:" Fire"
  },
  {
    id:3,
    author:"Varshini",
    title:"Brave Girl",
    Description:"Inside"
  },]


return (
  <div className="var">
    {/*<Avatar name={name} course={Course} RollNo={rollNo} bloodGroup={bloodGroup} dOB={dOB} />*/}
    {/*<ProductCard rname={productname} cost={price} avl={isavailable}/>*/}
    
  {
    posts.map((Post)=>(
      <BlogPost
      Key={Post.id}
      author={Post.author}
      title={Post.title}
      description={Post.Description}/>
      )
    )
  }
  
  
    

  </div>
)
}

export default App
