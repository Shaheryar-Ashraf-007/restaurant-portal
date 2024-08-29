import { useDispatch, useSelector, useStore } from 'react-redux';

// Custom hooks
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
export const useAppStore = () => useStore();
