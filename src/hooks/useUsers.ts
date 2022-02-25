import { useState, useEffect, SetStateAction } from "react";

import { IUser } from "../interfaces/user";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const useUsers = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const userCollectionRef = collection(db, "users");

  useEffect(() => {
    getDocs(userCollectionRef)
      .then((res) => {
        const data = res.docs.map((ob) => ({ ...ob.data(), id: ob.id }));

        setUsers(data as SetStateAction<IUser[]>);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return {
    users,
  };
};

export default useUsers;
