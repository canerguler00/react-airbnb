import './App.css';
import Navbar from './Component/Navbar';
import Hero from "./Component/Hero"
import Card from "./Component/Card"
import data from './data';



export default function App() {
  // <Hero />
const cards = data.map(item => {
return (
  <Card 
      key={item.id}
      item={item}
      
      
  />
)
})        

return (
<div>
  <Navbar />
  <Hero />
  <section className="cards-list">
                {cards}
  </section>
</div>
)
}
