import Checkbox from "./Checkbox.jsx"
import Button from "./Button.jsx"

export default function TodoItem() {
    return (
        <li className="todo__item todo__item--complete">
            <Checkbox typclassNssName="todo__check" id="1" />
            <Button className="todo__button todo__button--edit">🤺</Button>
            <Button className="todo__button todo__button--delete">🗑️</Button>
        </li>
    )
}