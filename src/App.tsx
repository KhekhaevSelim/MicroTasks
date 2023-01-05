import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

type CurrentButtonType = "All" | 'Rubles' | 'Dollars'
function App() {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'Rubles', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'Rubles', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'Rubles', value: 50, number: ' v1234567890'},
    ])
    let currentMoney = money;

    let [currentButton, setNameButton] = useState<CurrentButtonType>("All")

    if(currentButton === 'Rubles') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Rubles')
    }
    if (currentButton === 'Dollars') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars')

    }
    const onclickFilterHandler = (nameButton: CurrentButtonType) => {
        setNameButton(nameButton)


    }

    return (
        <>
            <ul>
                {currentMoney.map((objectFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objectFromMoneyArr.banknots}</span>
                            <span> {objectFromMoneyArr.value}</span>
                            <span>{objectFromMoneyArr.number}</span>
                        </li>

                    )
                })}
            </ul>
            <div style={{marginLeft: "30px"}}>
                <button onClick={() => onclickFilterHandler("All")}>All</button>
                <button onClick={() => onclickFilterHandler("Rubles")}>Rubles</button>
                <button onClick={() => onclickFilterHandler("Dollars")}>Dollars</button>
            </div>

        </>


    )


}

export default App;