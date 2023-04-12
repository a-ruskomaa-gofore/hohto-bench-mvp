import { Employee } from "../types/types";
import Card from "./Card";

type CardListProps = {
    title: string,
    employees: Array<Employee>
}

const CardList = ({title, employees}: CardListProps) => {
    const cards = employees.map((employee) => <Card employee={employee}></Card>);

    return (
        <div className="cardlist">
            <h3>{title}</h3>
            {cards}
        </div>
    )
};

export default CardList;