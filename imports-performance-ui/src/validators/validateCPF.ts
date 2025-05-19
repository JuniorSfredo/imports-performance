import { isValidCPF } from '@brazilian-utils/brazilian-utils';


export const validateCPF = (cpf: string): boolean => {
  const sanitized = cpf.replace(/\D/g, '');
  if (sanitized.length !== 11) return false;
  return isValidCPF(sanitized)
}
