import {
  getFirestore,
  collection,
  getDocs,
  updateDoc,
  increment,
  doc,
  Firestore,
} from "@firebase/firestore";
import { initializeApp } from "firebase/app";

import { firebaseConfig } from "./firebaseConfig";

export class FirebaseService {
  db: Firestore;
  celebritiesColl;

  constructor() {
    const app = initializeApp(firebaseConfig);
    this.db = getFirestore(app);
    this.celebritiesColl = collection(this.db, "celebrities");
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
      lastUpdated: new Date().toISOString(),
      positiveVotes: increment(1),
    });
  }

  async downVoteCelebrity(celebrityId: string) {
    const celebrity = doc(this.db, `celebrities/${celebrityId}`);
    updateDoc(celebrity, {
      lastUpdated: new Date().toISOString(),
      negativeVotes: increment(1),
    });
  }
}
