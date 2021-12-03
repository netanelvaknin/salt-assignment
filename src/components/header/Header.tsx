import { Breadcrumbs } from "@mui/material";

interface HeaderProps {
  api?: string;
  method?: string;
  path?: string;
}

export const Header = ({ api, method, path }: HeaderProps) => {
  return (
    <header>
      <span>{method?.toUpperCase()}</span>
      <span>{path}</span>
      <Breadcrumbs aria-label="breadcrumb" separator="›">
        <span>All APIs</span>
        <span>{api}</span>
        <span>{path}</span>
      </Breadcrumbs>
    </header>
  );
};

export default Header;
