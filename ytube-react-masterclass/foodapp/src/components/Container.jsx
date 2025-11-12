function Container({ children }) {
  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row ">
      {children}
    </div>
  );
}
export default Container;
