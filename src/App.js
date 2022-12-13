import "./App.css";
import useValueCalculater from "./hooks/useValue";
import { useState } from "react";

function App() {
    const [shoppinhCart, setShoppingCart] = useState([]);
    const [shoppinhCart2, setShoppingCart2] = useState([]);

    // Para o exercício, como não houve muitas especificações, considerei um produto ficticio:
    const arrayProduct = [
        { name: "Tennis", unitaryValue: 300, amount: 3 },
        { name: "Cap", unitaryValue: 60, amount: 4 },
        { name: "Shorts", unitaryValue: 80, amount: 2 },
    ];

    // Este array estabelece o valor das parcelas, para calcular o número de parcelas.
    const arrayInstallmentValue = [
        { name: "Tennis", intallmentValue: 100 },
        { name: "Cap", intallmentValue: 50 },
        { name: "Shorts", intallmentValue: 25 },
    ];

    const [data, setData] = useValueCalculater();

    return (
        <div className="App">
            <header className="App-header">
                <button
                    onClick={() => {
                        const dataCart = [...shoppinhCart];
                        dataCart.push(arrayProduct[0]);
                        setShoppingCart(dataCart);

                        const dataCart2 = [...shoppinhCart2];
                        dataCart2.push(arrayInstallmentValue[0]);
                        setShoppingCart2(dataCart2);

                        setData(shoppinhCart, shoppinhCart2);

                        console.log(`Resultado:`, data);
                        // console.log(
                        //     `Valor de cada parcela em 12x: ${numberInstallment}`
                        // );
                        // console.log(booleanTest);
                    }}
                >
                    Calcular
                </button>
                <p>Total da compra: {data.totalValue}</p>
                <p>Valor por parcela: {data.valueInstallment}</p>
                <p>Número de parcelas: {data.numberInstallment}</p>
            </header>
        </div>
    );
}

export default App;
