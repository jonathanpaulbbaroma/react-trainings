import Container from "./components/Container.jsx";
import Header from "./components/Header.jsx";
import PageWrapper from "./components/PageWrapper.jsx";
import Main from "./components/MainPage.jsx";
function App() {
  return (
    <>
      <PageWrapper>
        <Container>
          <Header />
          <Main />
        </Container>
      </PageWrapper>
    </>
  );
}

export default App;
