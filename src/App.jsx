import { useState } from "react"

function App () {
  const [todos,setTodos] = useState([])
  const [title,setTitle] = useState("")
  const [body,setBody] = useState("")
  const handleSubmit = (e) => {
     e.preventDefault()
    
     if(title.length !== 0 && body.length !== 0) {
      const newTodo = {
        id:Math.random()*10,
        body,
        title
      }
       setTodos((prev) => {
      return [...prev,newTodo]
     })
     const musicAdd = new Audio("./add-music.mp3")
     musicAdd.play()
     }
     
    
 }
 const deleteId = (id) => {
   setTodos((prev) => {
    return prev.filter((todo) => {
    return todo.id !== id
       })
    
   })
   const musicDelete = new Audio("./delete-music.mp3")
    musicDelete.play()

 }

  return (
    <div className="container">
      <h1 className="title-todo">Todo List</h1>
      <form onSubmit={handleSubmit}>
         <input  type="text" placeholder="title" onChange={(e) => setTitle(e.target.value)}/>  
        <input type="text" placeholder="body" onChange={(e) => setBody(e.target.value)}/>
       
       <button className="add_btn">add</button>
      </form>
      <ul className="list">
        {todos.map((todo) => {
          return (
            <li key={todo.id} className="item">
              <h3>{todo.title}</h3>
              <p>{todo.body}</p>
              <button className="list-btn" onClick={() => deleteId(todo.id)}>delete </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default App