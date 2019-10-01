const mathTag: string = "</m:oMath>/>";

/* This function removes any xml tags that are prepended to math */
function removeXmlTag(xml: string): string {
    let slicedXml = xml;
    if (xml.includes("<?xml")) {
        slicedXml = xml.slice(xml.indexOf("m:oMath"));
    }
    return slicedXml;
}

/* This function removes any excess /> that might get appended to math */
function cleanMathTag(xml: string): string {
    return xml.replace(/<\/m:oMath>\/>/g, "</m:oMath>");
}


export { removeXmlTag, cleanMathTag, mathTag };
