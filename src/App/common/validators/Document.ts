import { hasText } from '@Helpers/Object';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface
} from 'class-validator';

export function isCpf(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: {
        ...validationOptions,
        message: 'document must be a valid CPF'
      },
      constraints: [],
      validator: IsCpfConstraint
    });
  };
}

@ValidatorConstraint({ async: true })
class IsCpfConstraint implements ValidatorConstraintInterface {
  validate(
    value: any,
    validationArguments?: ValidationArguments | undefined
  ): boolean | Promise<boolean> {
    return isValidCPF(value);
  }
}

function isValidCPF(cpf) {
  if (typeof cpf !== 'string') return false;
  cpf = cpf.replace(/[\s.-]*/gim, '');
  if (
    !cpf ||
    cpf.length != 11 ||
    cpf == '00000000000' ||
    cpf == '11111111111' ||
    cpf == '22222222222' ||
    cpf == '33333333333' ||
    cpf == '44444444444' ||
    cpf == '55555555555' ||
    cpf == '66666666666' ||
    cpf == '77777777777' ||
    cpf == '88888888888' ||
    cpf == '99999999999'
  ) {
    return false;
  }
  let soma = 0;
  let resto;
  for (var i = 1; i <= 9; i++)
    soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
  resto = (soma * 10) % 11;
  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(cpf.substring(9, 10))) return false;
  soma = 0;
  for (var i = 1; i <= 10; i++)
    soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
  resto = (soma * 10) % 11;
  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(cpf.substring(10, 11))) return false;
  return true;
}

export function IsCEP(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: {
        ...validationOptions,
        message: 'document must be a valid CEP'
      },
      constraints: [],
      validator: IsCepConstraint
    });
  };
}

@ValidatorConstraint({ async: true })
class IsCepConstraint implements ValidatorConstraintInterface {
  async validate(
    value: any,
    validationArguments?: ValidationArguments | undefined
  ): Promise<boolean> {
    return await isValidCep(value);
  }
}

async function isValidCep(document): Promise<boolean> {
  try {
    const { consultarCep } = require('correios-brasil');
    const location = await consultarCep(String(document));
    return hasText(location.logradouro);
  } catch (error) {
    console.log(error);
    return false;
  }
}
