import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import store, { RootState } from './store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = useDispatch<typeof store.dispatch>;
