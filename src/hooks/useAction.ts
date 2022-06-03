import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { BoardActions } from '@src/store/board';
import { FormActions } from '@src/store/form';

const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators({ ...BoardActions, ...FormActions }, dispatch);
};
export { useAction };
