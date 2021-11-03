import React, {useContext} from "react";
import PropTypes from "prop-types";
import Context from "../context";

const styles = {
    li: {
        height: "70px",
        width: "177px",
        display: "flex",
        borderRadius: "4px",
        marginBottom: ".5rem",
        float: "left",
    },

}

function TodoItem({todo, index, change}) {
    const {removeTodo} = useContext(Context);
    const classes = [];

    if (todo.completed) {
        classes.push("done");
    }

    return  (
        <li style = {styles.li}>
            
            <img src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png" className="userr"></img>
            <span className={classes.join("")}>
                &nbsp;
                {todo.title}
            </span>

            <button className="rm" onClick={() => removeTodo(todo.id)}>&times;</button>
        </li>
    );
}
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    change: PropTypes.func.isRequired,
}
export default  TodoItem