import { RegisterData } from './RegisterData'

export default interface RegisterContextType {
  registerData: RegisterData;
  updateRegisterData: (data: Partial<RegisterData>) => void;
  clearRegisterData: () => void;
}
