import { useGetCompanyByIdQuery } from "../../../generated/graphql/queries";

export const useGetCompany = (companyId: string) => {
  const { data, loading, error } = useGetCompanyByIdQuery({
    errorPolicy: "all",
    fetchPolicy: "cache-and-network",
    variables: {
      companyId
    }
  });

  const company = data?.company ?? {};

  return {
    company,
    error,
    loading,
  }
};
