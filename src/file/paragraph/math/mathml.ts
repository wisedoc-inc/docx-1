const math: string[] = [];
function mathArray(OMML: string): void {
    const finalOMML = removeXmlTag(OMML);
    math.push(finalOMML);
}

function removeXmlTag(xml: string): string {
    let slicedXml;
    if (xml.includes("<?xml")) {
        slicedXml = xml.slice(xml.indexOf("<m:oMath"));
    }
    return slicedXml;
}

function finalXml(xml: string): string {
    if (math && math.length) {
        let xmlReplaced = xml;
        let i = 0;
        if (Array.isArray(math)) {
            for (const val of math) {
                xmlReplaced = xmlReplaced.replace(`<mathPlaceholder${i}/>`, val);
                i++;
            }
        }
        return xmlReplaced;
    }
    return xml;
}

export {
    mathArray,
    finalXml,
};
