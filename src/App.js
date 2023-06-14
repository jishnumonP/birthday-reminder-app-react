import React, { useState } from 'react'
import {data} from './StaticData/data'
import List from './components/List/List'
import Home from './components/Home/Home'
function App() {
  const [people, setPeople] = useState(data)
  return (

<>
<Home/>
  </>
  )
}

export default App
