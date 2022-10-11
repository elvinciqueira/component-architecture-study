import { Box } from "@src/components/Box";
import { useTheme } from "@src/theme/ThemeProvider";
import Background from "./components/Background";
import Feed from "./components/Feed";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import templatePageHOC from "@src/modules/template/templatePageHOC";

function Home(props) {
  const theme = useTheme();

  console.log({ props });

  return (
    <Box
      tag="main"
      styleSheet={{
        backgroundColor: theme.colors.neutral.x000,
        flex: 1,
        alignItems: "center",
      }}
    >
      <Background />
      <Menu />
      <Feed>
        <Feed.Header />
      </Feed>
      <Footer />
    </Box>
  );
}

export default templatePageHOC(Home, {
  title: "Home",
});
