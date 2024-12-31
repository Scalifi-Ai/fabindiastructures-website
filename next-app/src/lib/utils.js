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
        'Authorization': "Bearer 4646ccb6c3ebf3790401963f0830dfaed7e007a950bb672298a9264cbb8a5cfc4f9ddea828d60f15bbee3dda6c76f71dd9526d19508f62975eb263a6a87745fbbefc1d2664918ec9800970bdd68aceb37628d2213180419c831a6011584997ba7760728591ce31cd375d2fd7e116269fa5b9bcd764ec9c8214df78fcd33edd70"
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