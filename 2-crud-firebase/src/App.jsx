import { useState, useEffect } from "react";
import { db } from "./firebseConfig";
import { collection, getDocs } from "firebase/firestore";

export default function App() {

  const [users, setUsers] = useState([]);
  const userCollectionRef = collection(db, "users");  

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      {users.map(user => (
        <div key={user.id}>
          <p>{user.name}</p>
        </div>
      ))}
    </div>
  );
}
