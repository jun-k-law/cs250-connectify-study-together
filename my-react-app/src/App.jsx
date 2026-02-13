function App(props) {

  const page1 = props.page1

  if (page1 == true){
    return (
      <div className="App">
        <h1>This is page 1</h1>
      </div>
    );
  }
}

export default App;