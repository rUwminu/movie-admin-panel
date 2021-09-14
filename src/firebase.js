import { initializeApp } from 'firebase/app'
import { getStorage, ref } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCrjame2W7DesfviWGTqrU91D_mpvooEeE',
  authDomain: 'netflix-asset.firebaseapp.com',
  projectId: 'netflix-asset',
  storageBucket: 'netflix-asset.appspot.com',
  messagingSenderId: '851009211262',
  appId: '1:851009211262:web:9d5ab2810dab44b529c12f',
  measurementId: 'G-M7N06XGCPT',
}

const app = initializeApp(firebaseConfig)
const storage = getStorage(app)
export default storage
