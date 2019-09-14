// Sections with multiple columns
// Import from 'docx' rather than '../build' if you install from npm
import * as fs from "fs";
import { Document, MathML, Packer, Paragraph, TextRun  } from "../build";

const doc = new Document();
// const math = '<m:oMath xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math" xmlns:mml="http://www.w3.org/1998/Math/MathML"><m:f><m:fPr><m:type m:val="bar"/></m:fPr><m:num><m:r><m:t>1</m:t></m:r></m:num><m:den><m:r><m:t>2</m:t></m:r></m:den></m:f></m:oMath>'

// doc.createParagraph(math);

// doc.Styles.createParagraphStyle("framebox", "Frame Box")
//     .frame({ wrap: "auto", vAnchor: "page", hAnchor: "page", x: 868, y: 14401 });

const para = new Paragraph();
// .createBorder();
// para.style("framebox");
// para.Borders.addTopBorder();
// para.leftTabStop(300).addRun(new TextRun('kashif'));
para.addRun(new TextRun("Kashif1"));
para.addRun(new TextRun("Kashif2 the equation ---- "));
const mathStr = `<m:oMath xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math" xmlns:mml="http://www.w3.org/1998/Math/MathML"><m:nary><m:naryPr><m:chr m:val="∫"/><m:limLoc m:val="subSup"/><m:grow m:val="1"/><m:subHide m:val="off"/></m:naryPr><m:sub><m:r><m:t>0</m:t></m:r></m:sub><m:sup><m:r><m:t>5</m:t></m:r></m:sup><m:e/></m:nary><m:sSup><m:e><m:r><m:t>3</m:t></m:r></m:e><m:sup><m:r><m:t>2</m:t></m:r></m:sup></m:sSup><m:sSup><m:e><m:r><m:t>x</m:t></m:r></m:e><m:sup><m:r><m:t>2</m:t></m:r></m:sup></m:sSup><m:r><m:t>dx + </m:t></m:r><m:nary><m:naryPr><m:chr m:val="∫"/><m:limLoc m:val="subSup"/><m:grow m:val="1"/><m:subHide m:val="off"/></m:naryPr><m:sub><m:r><m:t>6</m:t></m:r></m:sub><m:sup><m:r><m:t>∞</m:t></m:r></m:sup><m:e/></m:nary><m:r><m:t>5</m:t></m:r><m:sSup><m:e><m:r><m:t>y</m:t></m:r></m:e><m:sup><m:r><m:t>3</m:t></m:r></m:sup></m:sSup><m:r><m:t>dy +</m:t></m:r><m:nary><m:naryPr><m:chr m:val="∑"/><m:limLoc m:val="undOvr"/><m:grow m:val="1"/><m:subHide m:val="off"/></m:naryPr><m:sub><m:r><m:t>k=0</m:t></m:r></m:sub><m:sup><m:r><m:t>n</m:t></m:r></m:sup><m:e/></m:nary><m:d><m:dPr><m:sepChr m:val=","/></m:dPr><m:e><m:f><m:fPr><m:type m:val="bar"/></m:fPr><m:num><m:r><m:t>n</m:t></m:r></m:num><m:den><m:r><m:t>k</m:t></m:r></m:den></m:f></m:e></m:d><m:r><m:t> + </m:t></m:r><m:sSubSup><m:e><m:f><m:fPr><m:type m:val="bar"/></m:fPr><m:num><m:rad><m:radPr><m:degHide m:val="on"/></m:radPr><m:deg/><m:e><m:r><m:t>467</m:t></m:r></m:e></m:rad></m:num><m:den><m:f><m:fPr><m:type m:val="bar"/></m:fPr><m:num><m:r><m:t>34</m:t></m:r></m:num><m:den><m:rad><m:radPr><m:degHide m:val="on"/></m:radPr><m:deg/><m:e><m:r><m:t>56</m:t></m:r></m:e></m:rad></m:den></m:f></m:den></m:f></m:e><m:sub/><m:sup/></m:sSubSup><m:limUpp><m:e><m:r><m:t>←</m:t></m:r></m:e><m:lim><m:r><m:t>∆</m:t></m:r></m:lim></m:limUpp></m:oMath>`;
const xmR = new MathML(mathStr);
// const xmR = new MathML(`<m:oMath xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math" xmlns:mml="http://www.w3.org/1998/Math/MathML"><m:d><m:dPr><m:begChr m:val="["/><m:sepChr m:val=","/><m:endChr m:val="]"/></m:dPr><m:e><m:m><m:mPr><m:baseJc m:val="center"/><m:plcHide m:val="on"/><m:mcs><m:mc><m:mcPr><m:count m:val="3"/><m:mcJc m:val="center"/></m:mcPr></m:mc></m:mcs></m:mPr><m:mr><m:e><m:rad><m:radPr><m:degHide m:val="on"/></m:radPr><m:deg/><m:e><m:r><m:t>56</m:t></m:r></m:e></m:rad></m:e><m:e><m:sSup><m:e><m:r><m:t>78</m:t></m:r></m:e><m:sup><m:r><m:t>4</m:t></m:r></m:sup></m:sSup></m:e><m:e><m:r><m:t>1±2</m:t></m:r></m:e></m:mr><m:mr><m:e><m:nary><m:naryPr><m:chr m:val="∫"/><m:limLoc m:val="subSup"/><m:grow m:val="1"/><m:subHide m:val="off"/><m:supHide m:val="off"/></m:naryPr><m:sub><m:r><m:t>0</m:t></m:r></m:sub><m:sup><m:r><m:t>2</m:t></m:r></m:sup><m:e/></m:nary><m:r><m:t>34</m:t></m:r></m:e><m:e><m:r><m:t>45</m:t></m:r></m:e><m:e><m:r><m:t>54</m:t></m:r></m:e></m:mr><m:mr><m:e><m:r><m:t>34</m:t></m:r></m:e><m:e><m:r><m:t>677</m:t></m:r></m:e><m:e><m:r><m:t>77</m:t></m:r></m:e></m:mr></m:m></m:e></m:d></m:oMath>`)
// const xmR = new MathML(`<m:oMath><m:sSub><m:e><m:r><m:rPr><m:sty m:val="p"/></m:rPr><m:t>H</m:t></m:r></m:e><m:sub><m:r><m:t>2</m:t></m:r></m:sub></m:sSub><m:r><m:rPr><m:sty m:val="p"/></m:rPr><m:t>O</m:t></m:r></m:oMath>`);
// const xmR = new MathML(`<m:oMath><m:r><m:t>x = </m:t></m:r><m:f><m:fPr><m:type m:val="bar"/></m:fPr><m:num><m:r><m:t>-b±</m:t></m:r><m:rad><m:radPr><m:degHide m:val="on"/></m:radPr><m:deg/><m:e><m:sSup><m:e><m:r><m:t>b</m:t></m:r></m:e><m:sup><m:r><m:t>2</m:t></m:r></m:sup></m:sSup><m:r><m:t>-4ac</m:t></m:r></m:e></m:rad></m:num><m:den><m:r><m:t>2a</m:t></m:r></m:den></m:f></m:oMath>`);
// const xmR = new MathML(`<m:f><m:fPr><m:type m:val="bar"/></m:fPr><m:num><m:r><m:t>1</m:t></m:r></m:num><m:den><m:r><m:t>2</m:t></m:r></m:den></m:f>`);
// para.addMath(xmR);

doc.addParagraph(para);
const para1 = new Paragraph();
para1.addMath(xmR);
doc.addParagraph(para1);
const packer = new Packer();

// console.log('doc ->', JSON.stringify(doc));

packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("My Document.docx", buffer);
});
