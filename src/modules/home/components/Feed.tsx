import { Box } from "@src/components/Box";
import { Icon } from "@src/components/Icon";
import { Text } from "@src/components/Text";

interface FeedProps {
  children: React.ReactNode;
}

export default function Feed({ children }: FeedProps) {
  return (
    <Box>
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
