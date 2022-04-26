import { MaskedInput } from "./modules/input.js";
import { cepMask, CPFMask, dataNascimentoMask, telefoneMask } from './modules/mask.js';

const 
    cpfInput = MaskedInput.fromDataJS('cpf', CPFMask),
    dataNascimentoInput = MaskedInput.fromDataJS('date', dataNascimentoMask),
    foneInput = MaskedInput.fromDataJS('fone', telefoneMask),
    cepInput = MaskedInput.fromDataJS('cep', cepMask);

