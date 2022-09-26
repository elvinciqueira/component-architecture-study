import { Box } from "@src/components/Box";
import { Text } from "@src/components/Text";

interface FeedProps {
  children: React.ReactNode;
}

export default function Feed({ children }: FeedProps) {
  return (
    <Box>
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
