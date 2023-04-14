import React from 'react';
import { useState } from 'react';
import './Dices.scss';

const Dices = () => {
    const one = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            style={{ height: 128, width: 128 }}
        >
            <path d="M0 0h512v512H0z" fill="#000" fill-opacity="1"></path>
            <g class="" transform="translate(0,0)" style={{}}>
                <path
                    d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zM256 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100z"
                    fill="#fff"
                    fill-opacity="1"
                ></path>
            </g>
        </svg>
    );
    const two = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            style={{ height: 128, width: 128 }}
        >
            <path d="M0 0h512v512H0z" fill="#000" fill-opacity="1"></path>
            <g class="" transform="translate(0,0)" style={{}}>
                <path
                    d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm316.97 36.03A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm-268 268A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z"
                    fill="#fff"
                    fill-opacity="1"
                ></path>
            </g>
        </svg>
    );
    const three = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            style={{ height: 128, width: 128 }}
        >
            <path d="M0 0h512v512H0z" fill="#000" fill-opacity="1"></path>
            <g class="" transform="translate(0,0)" style={{}}>
                <path
                    d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm316.97 36.03A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zM256 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100zM123.47 340.03A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z"
                    fill="#fff"
                    fill-opacity="1"
                ></path>
            </g>
        </svg>
    );
    const four = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            style={{ height: 128, width: 128 }}
        >
            <path d="M0 0h512v512H0z" fill="#000" fill-opacity="1"></path>
            <g class="" transform="translate(0,0)" style={{}}>
                <path
                    d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm48.97 36.03A50 50 0 0 1 172 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm-268 268A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z"
                    fill="#fff"
                    fill-opacity="1"
                ></path>
            </g>
        </svg>
    );
    const five = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            style={{ height: 128, width: 128 }}
        >
            <path d="M0 0h512v512H0z" fill="#000" fill-opacity="1"></path>
            <g class="" transform="translate(0,0)" style={{}}>
                <path
                    d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm48.97 36.03A50 50 0 0 1 172 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zM256 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100zM123.47 340.03A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z"
                    fill="#fff"
                    fill-opacity="1"
                ></path>
            </g>
        </svg>
    );
    const six = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            style={{ height: 128, width: 128 }}
        >
            <path d="M0 0h512v512H0z" fill="#000" fill-opacity="1"></path>
            <g class="" transform="translate(0,0)" style={{}}>
                <path
                    d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm48.97 36.03A50 50 0 0 1 172 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zM122 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100zm268 0a50 50 0 0 1 0 100 50 50 0 0 1 0-100zM123.47 340.03A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z"
                    fill="#fff"
                    fill-opacity="1"
                ></path>
            </g>
        </svg>
    );
    const [firstDice, setFirstDice] = useState(one);
    const [secondDice, setSecondDice] = useState(one);
    const [thirdDice, setThirdDice] = useState(one);
    const [sum, setSum] = useState(0);
    // const [sicbo, setSicbo] = useState("---"); value is delayed by 1 click for some reasons
    const dicesHandler = () => {
        const randomOne = Math.floor(Math.random() * 6) + 1;
        const randomTwo = Math.floor(Math.random() * 6) + 1;
        const randomThree = Math.floor(Math.random() * 6) + 1;
        setSum(randomOne + randomTwo + randomThree);
        // if (sum < 11) {
        //     setSicbo("Xỉu");
        // } else setSicbo("Tài");
        // console.log(sicbo);
        switch (randomOne) {
            case 1:
                setFirstDice(one);
                break;
            case 2:
                setFirstDice(two);
                break;
            case 3:
                setFirstDice(three);
                break;
            case 4:
                setFirstDice(four);
                break;
            case 5:
                setFirstDice(five);
                break;
            case 6:
                setFirstDice(six);
                break;
            default:
                break;
        }
        switch (randomTwo) {
            case 1:
                setSecondDice(one);
                break;
            case 2:
                setSecondDice(two);
                break;
            case 3:
                setSecondDice(three);
                break;
            case 4:
                setSecondDice(four);
                break;
            case 5:
                setSecondDice(five);
                break;
            case 6:
                setSecondDice(six);
                break;
            default:
                break;
        }
        switch (randomThree) {
            case 1:
                setThirdDice(one);
                break;
            case 2:
                setThirdDice(two);
                break;
            case 3:
                setThirdDice(three);
                break;
            case 4:
                setThirdDice(four);
                break;
            case 5:
                setThirdDice(five);
                break;
            case 6:
                setThirdDice(six);
                break;
            default:
                break;
        }
    };
    const resetDices = () => {
        setFirstDice(one);
        setSecondDice(one);
        setThirdDice(one);
        setSum(0);
    };
    return (
        <div className="container">
            <div className="dice-renderer">
                <div>{firstDice}</div>
                <div>{secondDice}</div>
                <div>{thirdDice}</div>
            </div>
            <div className="result">
                <span className="result-text">Kết quả của nhà cái là: </span>
                <span className="sum">{sum}</span>
            </div>
            <div className="buttons-menu">
                <button onClick={dicesHandler}>Roll the dices</button>
                <button onClick={resetDices}>Clear</button>
            </div>
        </div>
    );
};

export default Dices;
