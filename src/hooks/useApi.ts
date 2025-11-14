import { useState, useCallback } from 'react';
import { ApiError } from '../types/common';
import apiService from '../services/api';

interface UseApiOptions {
  onSuccess?: (data: any) => void;
  onError?: (error: ApiError) => void;
}

interface UseApiReturn<T> {
  data: T | null;
  loading: boolean;
  error: ApiError | null;
  execute: (...args: any[]) => Promise<T | undefined>;
  reset: () => void;
}

export const useApi = <T = any>(
  apiCall: (...args: any[]) => Promise<T>,
  options?: UseApiOptions
): UseApiReturn<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);

  const execute = useCallback(
    async (...args: any[]): Promise<T | undefined> => {
      setLoading(true);
      setError(null);
      try {
        const result = await apiCall(...args);
        setData(result);
        options?.onSuccess?.(result);
        return result;
      } catch (err) {
        const apiError = err as ApiError;
        setError(apiError);
        options?.onError?.(apiError);
        return undefined;
      } finally {
        setLoading(false);
      }
    },
    [apiCall, options]
  );

  const reset = useCallback(() => {
    setData(null);
    setError(null);
    setLoading(false);
  }, []);

  return { data, loading, error, execute, reset };
};

// Pre-configured hooks for common operations
export const useGet = <T = any>(url: string, options?: UseApiOptions) => {
  return useApi<T>(() => apiService.get<T>(url), options);
};

export const usePost = <T = any>(url: string, options?: UseApiOptions) => {
  return useApi<T>((data: any) => apiService.post<T>(url, data), options);
};

