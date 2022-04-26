

export class Mask {


    constructor(mask) {

        this.mask = mask;

    }

    // Para validar quando o usuario dá ctrl + v
    validate(event) {

        if(event.inputType.includes('delete')) return;

            this.mask.find((regex, index) => {     
               if(typeof regex === 'string') {
                   if(event.target.value[index] !== regex) {
                       event.target.value = event.target.value.substring(0, index) + regex + event.target.value.substring(index);
                       return false;
                   }
                   return false;
                };
               if(!event.target.value[index]) {
                   event.target.value = event.target.value.substring(0,index);
                    return true;
                }
               if(!regex.test(event.target.value[index]) ) {
                   event.target.value = event.target.value.substring(0,index);
                   return true;
                };
            });

            if(event.target.value.length > this.mask.length) {
                event.target.value = event.target.value.substring(0,this.mask.length);
            }

    }



}

export const EmptyMask = new Mask();

export const CPFMask = new Mask([/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/ ]);

export const dataNascimentoMask = new Mask([/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/ ]);

export const telefoneMask = new Mask(['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/ ]);

export const cepMask = new Mask([/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/ ]);