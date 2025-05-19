import { FieldValues, SubmitErrorHandler } from 'react-hook-form'
import { KeyValue } from '../../common/KeyValue'

export interface LoginSectionProps {
  isLogin: boolean;
  animate: boolean;
  invalidFields: SubmitErrorHandler<FieldValues>;
  toggleModal: (modalErr: KeyValue[]) => void;
  showModal: boolean;
  changeLoading: (isActive: boolean) => void;
}
