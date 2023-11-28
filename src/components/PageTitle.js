import { Helmet, HelmetProvider } from "react-helmet-async";

export const PageTitle = ({ titleName }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{titleName}</title>
      </Helmet>
    </HelmetProvider>
  );
};
