import { toast } from "react-toastify";


export const getFetcher = async <T>(url: string, options?: RequestInit): Promise<T> => {
  const response = await fetch(url, {
    ...options,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      ...(options?.headers || {})
    }
  });

  if (!response.ok) {

    const body = await response.json()
    const errorMessage = body['error']
    toast.error(errorMessage)
    throw new Error(errorMessage);
  };

  const data = (await response.json()) as T;
  return data;
}


export const postFetcher = async <T>(
  url: string,
  data: unknown,
  options?: RequestInit
): Promise<T> => {
  const response = await fetch(url, {
    ...options,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      ...(options?.headers || {})
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {

    const body = await response.json()
    const errorMessage = body['error']
    toast.error(errorMessage)

    throw new Error(errorMessage);
  };

  const result = (await response.json()) as T;
  return result;
};


export const postFileFetcher = async (url: string, data: { [key: string]: unknown }, options?: RequestInit): Promise<Blob> => {
  const response = await fetch(url, {
    ...options,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      ...(options?.headers || {})
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {

    const body = await response.json()



    toast.error(body['error'])


    throw new Error(`HTTP ${response.status}`)
  };

  return await response.blob()
}