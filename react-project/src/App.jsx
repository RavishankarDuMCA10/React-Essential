import './App.css'


function Header({name}) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
    </header>
  )
}

function Footer({year}) {
  return (
    <footer>
      <p>Copyright {year}</p>
    </footer>
  )
}

const items = [
  "Macroni and Cheese",
  "Salmon with Potatoes",
  "Tofu with Vegetables"
];

const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish
}));

function Main({dishes}) {
  return (
    <ul>
      {dishes.map((dish) => (
        <li key={dish.id} style={{ listStyleType: "none" }}>{dish.title}</li>
      ))}
    </ul>
  )
}

function App() {

  return (
    <div>
      <Header name="Alex" />
      <Main dishes={dishObjects}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  )
}

export default App
