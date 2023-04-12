import Card from "./Card";

const CardList = () => {
    const cards = Array(Math.ceil(Math.random() * 20)).fill(<Card></Card>);

    console.log(cards);

    return (
        <div className="cardlist">
            <h3>Cardlist</h3>
            {cards}
        </div>
    )
};

export default CardList;