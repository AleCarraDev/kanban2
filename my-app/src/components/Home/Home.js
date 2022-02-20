import "./Home.css";

const Home = (props) => {
  const { children } = props;
  return (
    <main>
      <h1 className="title-bg">Kanban Alessandro Carra</h1>
      {children}
    </main>
  );
};

export default Home;
