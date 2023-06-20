export const convertFetchResponseToJsonOrError =
  <T>(throwErrorInRenderTime: (error: Error) => void) =>
  async (response: Response): Promise<T> => {
    if (!response.ok) {
      const errorMessage = await response.json();
      const error = new Error(errorMessage);

      throwErrorInRenderTime(error);
      throw error;
    }

    return response.json();
  };
