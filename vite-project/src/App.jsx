import './App.css';

function App() {
  return (
    <>
      <Title></Title>
      <Button></Button>
      <Card></Card>
      <Card></Card>
      
    </>
  );
}

function Button() {
  return <button>Button</button>;
}

function Title() {
  return <p>Texto aleatorio</p>;
}

function Card(params) {
  return (
    <div>
      <a href="#">
        <div>
          <span>Subtitulo</span>
          <h4>Titulo</h4>
          <div>
            <Button></Button>
            <img src="https://images.unsplash.com/photo-1574158622682-e40e69881006" alt="Imagen de un perro" />
          </div>
        </div>
      </a>
    </div>
  );
}



export default App;
