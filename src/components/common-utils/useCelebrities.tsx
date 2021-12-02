import { FirebaseError } from "@firebase/util";
import * as React from "react";
import { firebaseService } from "../..";
import { onSnapshot, collection, query } from "@firebase/firestore";
import { ICelebrity } from "../../types";

export const useCelebrities = () => {
  const [data, setData] = React.useState<ICelebrity[] | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    const collectionRef = collection(firebaseService.db, "celebrities");
    const queryRef = query(collectionRef);
    onSnapshot(queryRef, (snapshot) => {
      const newCelebrities = [] as ICelebrity[];
      snapshot.forEach((doc) => {
        newCelebrities.push(doc.data() as ICelebrity);
      });
      setData(newCelebrities);
    });
  }, []);

  const getAllCelebrities = React.useCallback(async () => {
    try {
      setLoading(true);
      const celebrities =
        (await firebaseService.getCelebrities()) as ICelebrity[];
      setData(celebrities || []);
    } catch (error) {
      const firebaseError = error as FirebaseError;
      setError(firebaseError.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { getAllCelebrities, error, loading, data };
};
