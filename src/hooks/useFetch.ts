import { useAsyncErrorBoundary } from './useAsyncErrorBoundary';

type Methods = 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT';

export const useFetch = (authToken?: string) => {
  const { setAsyncErrorToThrow } = useAsyncErrorBoundary();

  const makeHeader = (authToken?: string) => {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };

    if (authToken) headers['Authorization'] = `Basic ${authToken}`;

    return headers;
  };

  const makeRequest = (
    headers: Record<string, string>,
    method: Methods,
    body?: object
  ) => {
    const request: RequestInit = {
      headers,
      method,
    };

    if (body) request.body = JSON.stringify(body);

    return request;
  };

  const fetchData = async <T>(url: string, method: Methods, body?: object) => {
    const headers = makeHeader(authToken);
    const request = makeRequest(headers, method, body);

    const response = await fetch(url, request).catch((error) => {
      setAsyncErrorToThrow(new Error(error.message));
      throw new Error(error.message);
    });

    if (!response.ok) {
      // status 코드에 따라 적당한 에러메세지를 만들어 사용하기
      setAsyncErrorToThrow(new Error('적당한 에러 메세지'));
      throw new Error('적당한 에러 메세지');
    }

    return response
      .json()
      .catch(() =>
        setAsyncErrorToThrow(new Error('서버의 응답이 잘못되었습니다!'))
      ) as T;
  };

  return [fetchData];
};
