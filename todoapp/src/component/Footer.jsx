function Footer({ completed, total, notCompleted }) {
  return (
    <div className="footer mt-5 text-white bg-yellow-300 py-8 text-xl flex flex-row justify-center w-full">
      <div>
        <span className="font-bold">{completed}</span> of
        <span className="font-bold"> {total}</span> tasks are completed |
        <span className="italic text-lg">
          {" "}
          {notCompleted} task{notCompleted == 1 ? "" : "s"} to be completed
        </span>
      </div>
    </div>
  );
}
export default Footer;
