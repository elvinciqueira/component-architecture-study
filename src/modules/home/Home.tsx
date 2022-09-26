import { Box } from "@src/components/Box";
import { Text } from "@src/components/Text";
import Background from "./components/Background";
import Feed from "./components/Feed";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

export default function Home() {
  return (
    <Box tag="main">
      <Background />
      <Menu />
      <Feed>
        <Feed.Header />
        <Text tag="h1" variant="display1">
          Últimas atualizações
        </Text>
        <Feed.Posts />
      </Feed>
      <Footer />
    </Box>
  );
}
