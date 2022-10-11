import { useTemplateConfig } from "@src/modules/template/TemplateConfigContext";
import { Box } from "@src/components/Box";
import { Icon } from "@src/components/Icon";
import { Link } from "@src/components/Link";

export default function SocialNetworkList() {
  const templateConfig = useTemplateConfig();
  return (
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
  );
}
