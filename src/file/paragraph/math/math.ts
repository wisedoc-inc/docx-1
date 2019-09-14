/* tslint:disable:typedef space-before-function-paren */
import { XmlComponent } from "file/xml-components";
// import * as xml2js from "xml-js";
// Needed because of: https://github.com/s-panferov/awesome-typescript-loader/issues/432
/**
 * @ignore
 */

export class MathML extends XmlComponent {
    constructor(xml: string) {
        super("mathPlaceholder");
        // const jsonFromXML = xml2js.xml2js(xml, {
        //     compact: false,
        //     spaces: 2,
        // // tslint:disable-next-line: no-any
        // } as any) as any;
        // const result = this.traverse(jsonFromXML.elements, []);
        console.log("xml ---", xml);
        // console.log("before traverse---", jsonFromXML.elements[0].elements);
        // console.log("traverse ---", JSON.stringify(result));
        // // const ress = [{"m:oMathPara": result }];
        // this.root.push(...result);
    }
/*
    public traverse(arr, r) {
        const rootElement = r || [];
        if (Array.isArray(arr)) {
            arr.forEach((element) => {
                const abcd = element[`name`] || `root`;
                const elm = {};
                elm[abcd] = [];
                // elm[`root`] = [];
                if (element.attributes) {
                    const root1 = {
                        // deleted: false,
                        // rootKey: "_attr",
                        root: {},
                        // xmlKeys: {},
                    };

                    for (const attribute in element.attributes) {
                        if (element.attributes.hasOwnProperty(attribute)) {
                            // console.log("attribute---", attribute);
                            const keyName = attribute.split(":")[1];
                            // console.log("its value ---", element.attributes[attribute]);
                            // attr[`root`][keyName] = element.attributes[attribute]; // attr
                            root1[`root`][keyName] = element.attributes[attribute];
                            elm[abcd][`_attr`] = root1[`root`];
                            // console.log("element----", elm[abcd]);
                        }
                    }

                    // elm[`root`].push(root1);
                    // elm[`xmlKeys`].push(xmlk);
                    // elm.push(attr);
                }
                if (element.name && element.name.split(":")[1] === "t") {
                    if (Array.isArray(elm[abcd])) {
                        const str: string = element.elements[0].text;
                        elm[abcd].push(str);
                    }
                }
                if (element.type !== "text") {
                    // console.log("elm push", elm);
                    rootElement.push(elm);
                }
                if (Array.isArray(element.elements) && element.type === "element") {
                    this.traverse(element.elements, elm[abcd]);
                }
            });
        }
        return rootElement;
    }
    */
}
