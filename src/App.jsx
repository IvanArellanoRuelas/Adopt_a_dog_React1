import './App.css';
import Header from './components/Header';
import MyCard from './components/MyCard';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header title="Adopta Un perrito"></Header>
      <div id="main">
        <MyCard
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgByBT5IiAT_a2x9pUVb4VMoOrlzHH7Jrzj-HB5jzHlR4lNLMS"
          name="Luna"
          desc="Perrit labrador"
        ></MyCard>
        <MyCard
          src="https://i.pinimg.com/236x/26/24/9a/26249a78777f6e3527d959ed4399dc1e.jpg"
          desc="Perrito muy bonito"
          Texto="Adopta"
          color="secondary"
        ></MyCard>
        <MyCard
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSFTEGKvDQ8GsWgHN9GPX6OxcesAgK8NLEczC3IaRtoFGwoQtIC2TI2QZupscdnDN9e16GYAYah4hWMjj9mg2P0V48ZwCNvRoDHw-RnIA"
          name="Lola"
          desc="Perrito muy bonito"
          Texto="conoce"
          color="secondary"
        ></MyCard>
        <MyCard
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS5n-VN2sv2jYgbMF3kVQWkYZQtdlQzje7_-9SYrgFe6w6gUQmL"
          name="Rayo"
          desc="Perrito muy bonito"
        ></MyCard>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
