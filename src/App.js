import React from 'react';
import Contact from './components/Contact';


const Kevin = {
  avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX34l5Vy7K3aMXNcl8V7ncTVf8Nwfsic6O9FOkwEYKw4-zwLLh&s',
  name: 'Kevin Parage',
  online: true
}
const Corinne = {
  avatar: 'http://www.moving-up.fr/wp-content/uploads/2017/05/corinneleycharles.jpg',
  name: 'Corrine Russo',
  online: false
}
const Juliette = {
  avatar: 'https://www.babelio.com/users/AVT_Juliette-Lemaitre_8819.jpg',
  name: 'Juliette Boyrie',
  online: true
}


function App() {
  return (
    <div className="App">
      <Contact{...Kevin}/>
      <Contact{...Corinne}/>
      <Contact{...Juliette}/>
    </div>
  );
}

export default App;
