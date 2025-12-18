import './App.css'


function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  )
}

function Footer(props) {
  return (
    <header>
      <p>Copyright {props.year}</p>
    </header>
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
