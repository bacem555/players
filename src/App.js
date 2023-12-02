 


import './App.css';
import Player from './player';

function App() {
    const tableau=[{name:"Ronaldo",age:38,Team:"alnassr",nationality:"Portugal",Number:9,image:"https://th.bing.com/th/id/OIF.46tA2bC4MCV796hIw1Hx5w?rs=1&pid=ImgDetMain"}
 ,{name:"Messi",age:36,Team:"Miami",nationality:"Argentina",Number:10,image:"https://th.bing.com/th/id/OIP.umkjFlF4hByX6004XRYI7wHaHa?rs=1&pid=ImgDetMain"}
 ,{name:"stones",age:29,Team:"City",nationality:"english",Number:5,image:"https://th.bing.com/th/id/OIP.aQmX3Wg4I2du-a-K8lF6ewHaI-?rs=1&pid=ImgDetMain"}  
 ,{name:"Salah",age:31,Team:"liverpool",nationality:"egypt",Number:11,image:"https://th.bing.com/th/id/R.8b9cc790004504b6678de842f7293eaf?rik=kWmKneDwzi4CUQ&pid=ImgRaw&r=0"}];
 return(
    <div className="App">
      <Player  tableau={tableau}/>

    </div>
  );
}

export default App;
