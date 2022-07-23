import { useState } from "react";
import Card from "./components/Card";
import Button from "./components/Button";
import quotesJson from "./json/quotes.json";
import colors from "./utils/colors";
import "./App.css";

function App() {
  // Funcion para obtener un index randóm sobre un objeto/array
  const randomElement = (item) => {
    const indexRandom = Math.floor(Math.random() * item.length);
    return item[indexRandom];
  };

  // Index random asignado a su variable correspondiente (randomColors, randomQuotes)
  let randomQuotes = randomElement(quotesJson);
  let randomColors = randomElement(colors);

  // Cambiar color de texto y el color de fondo
  const styleQuoteBox = {
    backgroundColor: randomColors,
  };

  // Funcion para onClick
  const onClickShuffle = () => {
    // Estamos reseteando el index random al dar click
    randomQuotes = randomElement(quotesJson);
    randomColors = randomElement(colors);

    // Aqui volvemos a asignarles un index random
    setRandomQuotes(randomQuotes);
    setRandomColor(randomColors);
  };

  // HOOKS: Estamos utilizando los useStates para poder usar el shuffle button
  const [randomQuote, setRandomQuotes] = useState(randomQuotes);
  const [randomColor, setRandomColor] = useState(randomColors);

  return (
    <div className="QuoteBox" style={styleQuoteBox}>
      <article className="card">
        <Card
          randomColors={randomColors}
          randomQuotes={randomQuotes}
          onClickShuffle={onClickShuffle}
        />
        <div className="card__footer">
          <Button randomColors={randomColors} onClickShuffle={onClickShuffle} />
        </div>
      </article>
    </div>
  );
}

export default App;
