import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { BoardActions } from '@src/store/board';

const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators({ ...BoardActions }, dispatch);
};
export { useAction };
