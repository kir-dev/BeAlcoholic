import { useMutation, useQuery } from '@tanstack/react-query';

import { CreateDrinkAction, DrinkAction } from '@/models/drinkAction';
import { EventDetails } from '@/models/event';

import { axiosConfig } from './axiosConfig';
import { queryClient } from './queryClient';

export const useFetchEventDetailsQuery = (eventId: string) =>
  useQuery<EventDetails>(
    {
      queryKey: ['fetchEventDetails', eventId],
      queryFn: async () => (await axiosConfig.get(`/events/${eventId}`)).data,
    },
    queryClient
  );

export const useAddDrinkActionToEventMutation = () =>
  useMutation<DrinkAction, Error, CreateDrinkAction>(
    {
      mutationKey: ['addDrinkActionToEvent'],
      mutationFn: async (data) => (await axiosConfig.post('/drink-actions', data)).data,
    },
    queryClient
  );
