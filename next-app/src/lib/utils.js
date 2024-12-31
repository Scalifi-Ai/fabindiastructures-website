import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const getColumns = (data) => {
  const columns = Object.keys(data[0])?.filter(item => item !== "id")?.map(item => {
    return (
      {
        accessorKey: item,
        header: item.split("_").join(" "),
      }
    )
  })
  return columns
}

export const fetchApiCall = async (endpoint) => {
  try {
    const resulting = await fetch(`${endpoint}`, {
      'method': "Get",
      'headers': {
        'Authorization': "Bearer 47256b0004895fe473d7dfedf7add0d5a7d739cf8f936a9c4f04f0e4d8b183760a8d1de32a80cd606cc993d45b6840a7b1495ae33612ca6f50dccae6efc3288f063c1a1ab082be83615c526a018d83c9951724babc0f94bb020a87db58b875591dade328f5c6e91b0996a8e5013e209772f5c08acb1a92168e55a71046c3a297"
      }
    });
    const statusCode = resulting.status;
    const result = await resulting.json();

    return {
      apiStatus: (typeof result === "object" && result?.status === "SUCCESSFUL") ?? false,
      statusCode: statusCode,
      response: (typeof result === "object" && result?.status === "SUCCESSFUL") ? result.data : result
    }
  }
  catch (err) {
    return {
      apiStatus: false,
      response: err
    }
  }
}