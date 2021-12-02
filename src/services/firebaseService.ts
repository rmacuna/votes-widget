// Create a firebase service that uses the firebase SDK
import {
  getFirestore,
  collection,
  getDocs,
  QueryDocumentSnapshot,
  FirestoreDataConverter,
  updateDoc,
  increment,
  setDoc,
  doc,
  Firestore,
} from "@firebase/firestore";
import { initializeApp } from "firebase/app";

import { Celebrity } from "../models/Celebrity";
import { ICelebrityInput } from "../types";
import { firebaseConfig } from "./firebaseConfig";

const celebrityConverter: FirestoreDataConverter<Celebrity> = {
  toFirestore: (celebrity: Celebrity) => {
    return {
      ...celebrity,
    };
  },
  fromFirestore: (snapshot: QueryDocumentSnapshot<Celebrity>) => {
    return new Celebrity({
      ...snapshot.data(),
    });
  },
};

export class FirebaseService {
  db: Firestore;
  celebritiesColl;

  constructor() {
    const app = initializeApp(firebaseConfig);
    this.db = getFirestore(app);
    this.celebritiesColl = collection(this.db, "celebrities");
  }

  async addCelebrity(input: ICelebrityInput) {
    const celebrityDoc = new Celebrity(input);
    const ref = doc(this.db, "celebrities").withConverter(celebrityConverter);
    await setDoc(ref, celebrityDoc);
    return celebrityDoc;
  }

  async getCelebrities() {
    const celebCollection = collection(this.db, "celebrities");
    const celebSnapshot = await getDocs(celebCollection);
    const celebrityList = celebSnapshot.docs.map((doc) => doc.data());
    console.log(
      "🚀 ~ file: firebaseService.ts ~ line 50 ~ FirebaseService ~ getCelebrities ~ celebrityList",
      celebrityList
    );
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
