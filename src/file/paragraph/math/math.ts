/* tslint:disable:typedef space-before-function-paren */
import { XmlComponent } from "file/xml-components";
import { removeXmlTag } from "./math-string-operations";
/**
 * @ignore
 */

/* adding an extra attribute "xmlCode" to the object from which math code will
 be extracted and letr injected into xml document */
export class MathML extends XmlComponent {
    constructor(xml: string) {
        const mathXml = removeXmlTag(xml); // this function removes unnecesary xml tag
        super(mathXml);
    }
}
