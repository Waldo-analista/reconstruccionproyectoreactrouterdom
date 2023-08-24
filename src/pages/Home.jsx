import ListPosts from "../Components/ListPost";
import ListCategories from "../Components/ListCategories";
const Home = () => {
  return (
    <main>
      <div className="container">
        <h2 className="title-page">Pet noticias: HOME</h2>
        <ListCategories />
      </div>
      <ListPosts url={"/posts"} />
    </main>
  );
};

export default Home;
