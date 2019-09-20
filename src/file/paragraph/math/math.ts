/* tslint:disable:typedef space-before-function-paren */
import { XmlComponent } from "file/xml-components";
import { mathArray } from "./mathml";
/**
 * @ignore
 */

let count = 0;
export class MathML extends XmlComponent {
    constructor(xml: string) {
        const placeholder = `mathPlaceholder` + count;
        super(placeholder);
        count++;
        mathArray(xml);
    }
}
