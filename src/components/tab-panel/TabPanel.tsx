interface TabPanelProps {
  children?: React.ReactNode;
  value: number;
  index: number;
}

export const TabPanel = ({ children, value, index }: TabPanelProps) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && children}
    </div>
  );
};

export default TabPanel;
