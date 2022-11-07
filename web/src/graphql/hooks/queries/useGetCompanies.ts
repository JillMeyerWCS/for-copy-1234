import { useGetCompaniesQuery } from "../../../generated/graphql/queries";

export const useGetCompanies = () => {
  const { data, loading, error } = useGetCompaniesQuery({
    errorPolicy: "all",
    fetchPolicy: "cache-and-network",
  });

  const companies = data?.companies ?? [];

  return {
    companies,
    error,
    loading,
  };
};
