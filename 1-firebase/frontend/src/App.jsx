import { useState, useEffect } from "react"
import { db } from './firebaseConfig'
import { collection, getDocs } from 'firebase/firestore' 

export default function App() {

  // Manage the data from firestore database
  const [users, setUsers] = useState([]);
  const userCollectionRef = collection(db, "users")

  // Load data while loading page
  useEffect(() => {
    // Function to fetch data from database to user and vice-versa
    const getUsers = async () => {
      const data = await  getDocs(userCollectionRef);
      console.log(data)
    }
    getUsers();
  }, [])

  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}