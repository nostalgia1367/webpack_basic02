import User from "./User";

export default function List({userList}){
    
    const ul = document.createElement("ul");
    userList.forEach(element => {
        ul.appendChild(User({ name: element.name}))
        
    });

    return ul;
}