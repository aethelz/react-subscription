import { useState } from 'react';
import { postData } from '../shared/api';
import type { State } from '../shared/types';
import {
  nextButtonContent,
  nextButtonDone,
  nextButtonFail,
} from './nextButtonContent';

type HookReturn = {
  isLoading: boolean;
  isFailed: boolean;
  isSuccess: boolean;
  nextButtonContent: JSX.Element;
  post: (data: State) => void;
};
export default function usePost(): HookReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  return {
    isLoading,
    isSuccess,
    isFailed,
    nextButtonContent: isSuccess
      ? nextButtonDone
      : isFailed
      ? nextButtonFail
      : nextButtonContent,
    post: (data) => {
      setIsLoading(true);
      postData(data)
        .then(() => setIsSuccess(true))
        .catch(() => setIsFailed(true))
        .finally(() => setIsLoading(false));
    },
  };
}
