import { useState, useEffect, SetStateAction } from "react";
import { useQuery } from "react-query";
import { IUser } from "../interfaces/user";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const useUsers = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  //const userCollectionRef = collection(db, "users");

  const { isLoading, error, data } = useQuery("usersData", () =>
    fetch("https://random-data-api.com/api/hjghj/random_user").then((res) =>
      res.json()
    )
  );

  useEffect(() => {
    if (!data) return;

    setUsers(data);
  }, [data]);

  //   useEffect(() => {
  //     getDocs(userCollectionRef)
  //       .then((res) => {
  //         const data = res.docs.map((ob) => ({ ...ob.data(), id: ob.id }));

  //         console.log(data);
  //         setUsers(data as SetStateAction<IUser[]>);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, [users]);

  return {
    users,
    error,
    isLoading,
  };
};

export default useUsers;
