import './App.css';

function App() {
  const headding = 'Sample Componenet 2';
  const text = 'This is a sample paragraph';
  const number = 5;
  const sample_array = [1, 2, 3, 4, 5];
  const link = "https://www.google.com/";
  return (
    <div className="App">
      <div className="Component">
        <h1>{ headding }</h1>
        <p>{ text } { number }</p>
        <p>{ sample_array }</p>
        <a href={ link }>{ 'Sample link' }</a>
      </div>
    </div>
  );
}

export default App;
