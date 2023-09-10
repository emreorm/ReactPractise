import './App.css';
import BasicExample from './component/Card';

function App() {
  return (
   <div>
    <BasicExample
    isim= "Mehmet Çoban"
    ücret="Ücreti: 200"
    telefon="Telefon Numarası: 555 555 55 55"

    isim2="Rojin Çoban"
    ücret2="Ücreti: 1000"
    telefon2="Telefon Numarası: 554 444 44 44"

    isim3="Meryem Çoban"
    ücret3="Ücreti: 3000"
    telefon3="Telefon Numarası: 566 666 66 66"
    />
   </div>
  );
}

export default App;
