import { Employee } from "../types/types";
import CardList from "./CardList";

interface CardViewProps {
    employees: Array<Employee>
}

const CardView = ({employees}: CardViewProps) => {
    const categories = [{
        title: "2nd round",
        filter: (employee: Employee) => employee.status === "2ndRound"
    },{
        title: "Offered",
        filter: (employee: Employee) => employee.status === "offered"
    },{
        title: "Free",
        filter: (employee: Employee) => employee.status === "free"
    }];

    const cardLists = categories.map(({title, filter}) => (
    <CardList title={title} employees={employees.filter(filter)}></CardList>));

    return (
        <div className="cardview">
            {cardLists}
        </div>
    )
};

export default CardView;