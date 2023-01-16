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

import { GetExpenseResponse } from '@/types/GetExpenseResponse';
import { customAlphabet } from 'nanoid';

const alphabet =
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const nanoid = customAlphabet(alphabet, 20);

const randomIntFromInterval = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

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

export const getExpenses = async (type: string) => {
  return getData<GetExpenseResponse>('type', type, 'expenses');
};

export const getData = async <T>(key: string, value: string, path: string) => {
  
  const ref = collection(db, path);
  const q = query(ref, where(key as string, '==', value));

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs[0].data() as T;
};

export const getActivities = async (year: keyof GetActivityResponse) => {
  return getData<GetActivityResponse>('year', year, 'activities');
};
export const getChart = async (type: keyof GetChartResponse) => {
  return getData<GetChartResponse>('type', type, 'chart');
};



export const postData = async (type: string) => {
  const id = nanoid();
  // const randomData = new Array(3).fill({}).map((val, idx) => {
  //   return {
  //     label: ++idx < 9 ? '0' + idx : idx.toString(),
  //     value: randomIntFromInterval(0, 60).toString(),
  //   };
  // });

  const randomData = [
    {
      label: 'Shopping',
      value: randomIntFromInterval(300, 600).toString()
    },
    {
      label: 'Workspace',
      value: randomIntFromInterval(300, 600).toString()
    },
    {
      label: 'Platform',
      value: randomIntFromInterval(300, 600).toString()
    },
  ]

  setDoc(doc(db, 'expenses', id), {
    id,
    data: randomData,
    type,
  });
};
