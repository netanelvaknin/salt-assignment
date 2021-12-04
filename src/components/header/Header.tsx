import { Breadcrumbs, Divider } from "@mui/material";
import { HeaderContainer, Method, Path, Crumb } from "./Header.styled";

interface HeaderProps {
  api?: string;
  method?: string;
  path?: string;
}

export const Header = ({ api, method, path }: HeaderProps) => {
  return (
    <HeaderContainer>
      <Method>{method?.toUpperCase()}</Method>
      <Path>{path}</Path>
      <Breadcrumbs aria-label="breadcrumb" separator="›">
        <Crumb>All APIs</Crumb>
        <Crumb>{api}</Crumb>
        <Crumb>{path}</Crumb>
      </Breadcrumbs>
      <Divider sx={{ mt: 4, mb: 1 }} />
    </HeaderContainer>
  );
};

export default Header;
