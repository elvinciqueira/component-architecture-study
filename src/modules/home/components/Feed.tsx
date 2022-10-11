import { useTheme } from "@src/theme/ThemeProvider";
import { Box } from "@src/components/Box";
import { Button } from "@src/components/Button";
import { Image } from "@src/components/Image";
import { Text } from "@src/components/Text";
import { useTemplateConfig } from "@src/modules/template/TemplateConfigContext";
import { Link } from "@src/components/Link";
import { Icon } from "@src/components/Icon";
import type { Post } from "@src/modules/posts/posts.client";
import { FeedPost } from "@src/modules/posts/components/FeedPost";

interface FeedProps {
  children: React.ReactNode;
}

export default function Feed({ children }: FeedProps) {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        backgroundColor: theme.colors.neutral.x000,
        marginTop: "-228px",
        width: "100%",
        maxWidth: "683px",
        borderRadius: "8px",
        paddingVertical: "40px",
        paddingHorizontal: "32px",
      }}
    >
      {children}
    </Box>
  );
}

Feed.Header = () => {
  const theme = useTheme();
  const templateConfig = useTemplateConfig();

  return (
    <Box
      styleSheet={{
        borderBottom: `1px solid ${theme.colors.neutral.x200}`,
        paddingBottom: "24px",
        marginBottom: "24px",
      }}
    >
      <Box
        styleSheet={{
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "16px",
          marginBottom: "16px",
        }}
      >
        <Image
          styleSheet={{
            width: { xs: "100px", md: "128px" },
            height: { xs: "100px", md: "128px" },
            borderRadius: "100%",
          }}
          src={templateConfig.personal.avatar}
          alt="Imagem de perfil do Elvin Ciqueira"
        />

        <Box
          styleSheet={{
            justifyContent: "space-between",
          }}
        >
          <Box
            styleSheet={{
              flex: 1,
              justifyContent: "space-between",
              display: { xs: "none", md: "flex" },
            }}
          >
            <Button fullWidth colorVariant="primary" size="xl" href="/">
              Newsletter
            </Button>
            <Button fullWidth colorVariant="neutral" size="xl" href="/">
              Buy me a coffee
            </Button>
          </Box>
          <Box
            styleSheet={{
              flex: 1,
              justifyContent: "space-between",
              display: { xs: "flex", md: "none" },
            }}
          >
            <Button fullWidth colorVariant="primary" size="xs" href="/">
              Newsletter
            </Button>
            <Button fullWidth colorVariant="neutral" size="xs" href="/">
              Buy me a coffee
            </Button>
          </Box>
        </Box>
      </Box>
      <Text tag="h1" variant="heading4">
        {templateConfig.personal.name}
      </Text>
      <Box
        styleSheet={{
          flexDirection: "row",
          gap: "4px",
        }}
      >
        {Object.keys(templateConfig.personal.socialNetworks).map((key) => {
          const socialNetwork = templateConfig.personal.socialNetworks[key];
          if (socialNetwork) {
            return (
              <Link
                key={key}
                target="_blank"
                href={templateConfig.personal.socialNetworks[key]}
              >
                <Icon icon={key as any} />
              </Link>
            );
          }
          return null;
        })}
      </Box>
    </Box>
  );
};

interface FeedPostsProps {
  posts: Post[];
}

Feed.Posts = ({ posts }: FeedPostsProps) => (
  <Box>
    <Text variant="heading4" styleSheet={{ marginBottom: "27px" }}>
      Últimas Atualizações
    </Text>
    {posts.map(({ metadata, ...post }) => (
      <FeedPost key={post.slug} {...post} {...metadata} />
    ))}
  </Box>
);
