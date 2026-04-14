import Button from './Button.jsx'

export default function TodoAdder() {
    return (
        <form className="todo__form">
            <input type="text" className="todo__input" placeholder="할 일을 입력하세요." />
            <Button type="submit" className="todo__button todo__button--add">Add</Button>
        </form>
    )
}