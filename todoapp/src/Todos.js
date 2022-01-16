import React from "react";

const Todos = (props) => {
  let display = "";

  const todoList =
    props.todoItems.length > 0
      ? props.todoItems.map((todo) => {
          if (todo.show) {
            display = "block";
          } else {
            display = "none";
          }
          return (
            <li
              className="collection-item row"
              key={todo.id}
              style={{ display: `${display}` }}
            >
              <span className="col s11">{todo.name}</span>

              <i
                className="small material-icons red-text col s1 scale-transition"
                style={{ cursor: "pointer" }}
                onClick={props.removeItem}
                id={todo.id}
              >
                cancel
              </i>
            </li>
          );
        })
      : "Svi zadaci su zavrseni";
  return <ul className="collection">{todoList}</ul>;
};

export default Todos;
