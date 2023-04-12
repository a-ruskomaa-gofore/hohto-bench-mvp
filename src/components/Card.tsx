import { Employee } from "../types/types";

interface CardProps {
    employee: Employee
} 

const Card = ({employee}: CardProps) => {
    return (
        <div className="card">{employee.name}</div>
    )
};

export default Card;