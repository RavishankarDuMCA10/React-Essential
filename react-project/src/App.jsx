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

function App() {

  return (
    <div>
      <Header name="Alex" />
      <main>
        <h2>We serve the most delicious food around</h2>
      </main>
      <Footer year={new Date().getFullYear()}/>
    </div>
  )
}

export default App
