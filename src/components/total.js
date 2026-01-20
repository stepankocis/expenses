function Total({ list }) {
    const total = list.reduce(
        (sum, expense) => sum + Number(expense.description || 0),
        0
    );

    if (list.length !== 0) {
        return (
            <div className="border border-primary rounded-3 p-3 mb-3 mt-3 shadow-sm row">
                <p>The total is: <b>{total}</b> czk</p>
            </div>
        );
    }

    return null;
}

export default Total;
