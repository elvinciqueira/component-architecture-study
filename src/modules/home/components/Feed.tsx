import { Box } from "@src/components/Box";
import { Icon } from "@src/components/Icon";
import Image from "@src/components/Image/Image";
import { Link } from "@src/components/Link";
import { Text } from "@src/components/Text";

interface FeedProps {
  children: React.ReactNode;
}

export default function Feed({ children }: FeedProps) {
  return (
    <Box>
      <Image
        styleSheet={{
          width: { xs: "100px", md: "128px" },
          height: { xs: "100px", md: "128px" },
          borderRadius: "100%",
        }}
        src="https://github.com/elvinciqueira.png"
        alt="Imagem de perfil do Elvin Ciqueira"
      />
      <Link href="/sobre">Sobre</Link>
      <Icon icon="github" />
      <Icon icon="twitter" />
      <Icon icon="youtube" />
      <Icon icon="linkedin" />
      <Text>Feed</Text>
      {children}
    </Box>
  );
}

Feed.Header = () => (
  <Box>
    <Text>Feed Header</Text>
  </Box>
);

Feed.Posts = () => (
  <Box>
    <Text>Feed Posts</Text>
  </Box>
);
