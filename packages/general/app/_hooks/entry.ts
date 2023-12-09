import { useQuery } from '@tanstack/react-query';
import { entryApi } from '@/lib';

export const useEntries = ({
  size = 20,
  pageNumber,
}: {
  size?: number;
  pageNumber: number;
}) => {
  return useQuery({
    queryKey: ['entries'],
    queryFn: async () => {
      const { data } = await entryApi.search({
        pagination: {
          size: size,
          pageNumber: pageNumber,
          sort: 'updatedAt',
        },
      });

      return data;
    },
  });
};
