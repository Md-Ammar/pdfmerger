// import PDFMerger from 'pdf-merger-js';


const mergePDFs = async (p1, p2) => {
  const { default: PDFMerger } = await import('pdf-merger-js');
  var merger = new PDFMerger();
  await merger.add(p1);  //merge all pages. parameter is the path to file and filename.
  await merger.add(p2); // merge only page 2

  // Set metadata
  // await merger.setMetadata({
  //   producer: "pdf-merger-js based script",
  //   author: "John Doe",
  //   creator: "John Doe",
  //   title: "My live as John Doe"
  // });
  let d = new Date().getTime()
  await merger.save(`public/${d}.pdf`); //save under given name and reset the internal document
  return d
  
  // Export the merged PDF as a nodejs Buffer
  // const mergedPdfBuffer = await merger.saveAsBuffer();
  // fs.writeSync('merged.pdf', mergedPdfBuffer);
}
mergePDFs('1.pdf', '2.pdf');

module.exports = {mergePDFs};