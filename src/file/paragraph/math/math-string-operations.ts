const mathTag: string = "</m:oMath>/>";

/* This function removes any unnecesary characters before the o:Math tag */
function cleanMathTagBefore(xml: string): string {
    let slicedXml = xml;
    slicedXml = xml.slice(xml.indexOf("m:oMath"));

    return slicedXml;
}

/* This function removes any excess /> that might get appended to math */
function cleanMathTagAfter(xml: string): string {
    return xml.replace(/<\/m:oMath>\/>/g, "</m:oMath>");
}


export { cleanMathTagBefore, cleanMathTagAfter, mathTag };
