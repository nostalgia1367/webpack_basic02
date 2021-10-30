import { hello, add } from './util';
import "./style.css";
import "./header.css";
import logo from "./images/angry.jpg";
import List from "./List";

const text = hello('hello.........');
const num = add(1, 2);
const img = `<img src="${logo}" alt="앵그리버드";`


const users = [
    {
        id: 1,
        name: '블랙 위도우',
    },
    {
        id: 2,
        name: '아이언맨',
    },
    {
        id: 3,
        name: '스파이더맨',
    },
    {
        id: 4,
        name: '캡틴 아메리카',
    },
]

document.getElementById("root").innerHTML = img + "테스트" + text + num ;
document.getElementById("list").appendChild(List({ userList: users}));