import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@material-ui/core";
import "./App.css";
import NavBar from "./Components/NavBar";
import ProductosMainGrid from "./Components/ProductosMainGrid";
import StoreGrid from "./Components/StoreGrid";
import Slider from "./Components/Slider";
import OfertasGrid from "./Components/OfertasGrid";
import BannerInstragram from "./Components/BannerInstagram";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <CuotasHeader /> */}
        <NavBar />
        <Container>
          <header>
            {/* <NavGrafizona /> */}

            <Slider />
          </header>
          <main>
            <OfertasGrid />
            <ProductosMainGrid />

            <StoreGrid />
            <BannerInstragram />
            <OfertasGrid />
          </main>
        </Container>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

const theme = createTheme({
  typography: {
    // fontFamily: "Outfit, sans-serif",
    fontFamily: "PT Sans Narrow, sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Outfit';
          font-style: normal;
          font-weight: 400;
         
        }
      `,
    },
  },
});

export default App;
