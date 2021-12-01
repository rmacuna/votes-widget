// Create a firebase service that uses the firebase SDK
import firebase from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  updateDoc,
  increment,
  doc,
  Firestore,
} from "firebase/firestore/lite";
import { firebaseConfig } from "./firebaseConfig";

export class FirebaseService {
  db: Firestore;
  constructor() {
    const app = firebase.initializeApp(firebaseConfig);
    this.db = getFirestore(app);
  }

  async getCelebrities() {
    const celebCollection = collection(this.db, "celebrities");
    const celebSnapshot = await getDocs(celebCollection);
    const celebrityList = celebSnapshot.docs.map((doc) => doc.data());
    return celebrityList;
  }

  async upVoteCelebrity(celebrityId: string) {
    const celebrity = doc(this.db, `celebrities/${celebrityId}`);
    updateDoc(celebrity, {
      positiveVotes: increment(1),
    });
  }

  async downVoteCelebrity(celebrityId: string) {
    const celebrity = doc(this.db, `celebrities/${celebrityId}`);
    updateDoc(celebrity, {
      negativeVotes: increment(-1),
    });
  }
}
