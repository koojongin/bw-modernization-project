import fs from 'fs';
import concat from 'concat-stream';
import createExtractor from 'scm-extractor';

fs.createReadStream('./test.scx')
  .pipe(createExtractor())
  .pipe(
    concat((data) => {
      // do something with the CHK data here...
      const scenarioChk = data;
      console.log(scenarioChk);
    }),
  );
