import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { RootState } from '../store';

const useTypedUseSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useTypedUseSelector };
