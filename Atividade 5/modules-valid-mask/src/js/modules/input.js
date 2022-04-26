import { EmptyMask } from "./mask.js";

export class MaskedInput {

    constructor(node, mask = EmptyMask) {

        this.node = node;
        this.mask = mask;
        this.render();
    }

    static fromDataJS(dataJs, mask) {
        const node = document.querySelector(`[data-js="${dataJs}"]`);
        if(!node) throw `Não encontrei o nó pelo data-js: ${dataJs}`
        return new MaskedInput(node, mask)
    }

    render() {
        this.node.oninput = event => this.mask.validate(event);
    }

}