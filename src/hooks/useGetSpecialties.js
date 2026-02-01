import { useEffect, useState } from "react";
import useGetResourceHook from "../api/useGetResourceHook";

export const useGetSpecialties = () => {
  const {
    dataResource: specialtiesResp,
    error,
    loading,
  } = useGetResourceHook("specialty", "");
  if (error || loading) {
    return [];
  }
  return specialtiesResp?.map((specialty) => {
    return {
      name: specialty.name,
      value: specialty._id,
    };
  });
};
