import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/header/header';
import Home from './pages/home';
import Admin from './pages/admin';
import PageNotFound from './pages/pageNotFound';
import { storage } from './firebase/firebase';


function App() {
  
  const [picsData, setPicsData] = useState([])

  useEffect(() => {
    async function getAlbums() {
      const albums = []
      try{
        const res = storage.ref(process.env.REACT_APP_FIREBASE_STORAGE_REF)
        const getAllAlbums = await res.listAll()
        await Promise.all(getAllAlbums.prefixes.map(async (folderRef) => {
          const picsRef = await folderRef.listAll()
          const arr = await Promise.all(picsRef.items.map(async picObj => {
            const name = picObj.name;
            const downloadUrl = await folderRef.child(picObj.name).getDownloadURL()
            return {name, downloadUrl}
          }))
          albums.push({album: folderRef.name, pics: arr})
        }))
        setPicsData([...albums])
      } catch(error) {
        console.log(error)
      }
    }
    picsData.length === 0 && getAlbums()
  },[])

  console.log(picsData)

    return(
    <Router>
      <Header />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/admin"><Admin/></Route>
        <Route component={PageNotFound}/>
      </Switch>
  </Router>
  )
}

export default App;