import { GetChartResponse } from '@/types/GetChartResponse';
import { initializeApp } from 'firebase/app';
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  where
} from 'firebase/firestore';
import { GetActivityResponse } from './../types/GetActivityResponse';
import { Transection } from './../types/Transection';

import { customAlphabet } from 'nanoid';

const alphabet =
'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const nanoid = customAlphabet(alphabet, 20);

const randomIntFromInterval = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)


const firebaseConfig = {
  apiKey: 'AIzaSyDcv5zMQr9weZIVs9GSs_BiOJhSzL0D7jo',
  authDomain: 'teq-dashboard.firebaseapp.com',
  projectId: 'teq-dashboard',
  storageBucket: 'teq-dashboard.appspot.com',
  messagingSenderId: '670867502997',
  appId: '1:670867502997:web:78e166551f6559e58fe89c',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getTransections = async () => {
  const querySnapshot = await getDocs(collection(db, 'transections'));
  const rs: Transection[] = [];

  querySnapshot.forEach((doc) => {
    rs.push(doc.data() as Transection);
  });
  return rs;
};

export const getActivities = async (year: string) => {
  const ref = collection(db, 'activities');
  const q = query(ref, where('year', '==', year));

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs[0].data() as GetActivityResponse;
};

export const getChart = async (type: string) => {
  const ref = collection(db, 'chart');
  const q = query(ref, where('type', '==', type));

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs[0].data() as GetChartResponse;
};

export const postChart = async (type: string) => {
  const id = nanoid();
  const randomData = new Array(12).fill({}).map((val, idx) => {
    return {
      label: ++idx < 9 ? ('0' + idx) : idx.toString(),
      value: randomIntFromInterval(0, 60).toString()
    }
  });

  setDoc(doc(db, 'chart', id), {
    id,
    data: randomData,
    type
  })
};
