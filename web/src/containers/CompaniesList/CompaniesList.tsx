import React from "react";
import { Stack, StackDivider } from "@chakra-ui/react";
import { CompanyItem, FullscreenSpinner } from "../../components";
import { useGetCompanies } from "../../graphql";

export const CompaniesList: React.FC = () => {
  const { companies, loading } = useGetCompanies();

  if (loading) return <FullscreenSpinner/>;

  return (
    <Stack
      m={4}
      direction={["column"]}
      divider={<StackDivider borderColor='gray.200' />}
      spacing={4}
      align="flex-start"
    >
      {companies.map(company => (
        <CompanyItem
          key={company.recid}
          companyId={company.recid}
          title={company.name}
        />
      ))}
    </Stack>
  );
};
