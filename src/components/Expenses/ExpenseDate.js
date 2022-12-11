function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="border-inherit border-2 rounded-3xl p-4 mr-10 bg-slate-900 text-white text-center w-28">
      <div className="font-semibold text-lg">{month}</div>
      <div className="font-base">{year}</div>
      <div className="font-bold text-4xl">{day}</div>
    </div>
  );
}

export default ExpenseDate;
