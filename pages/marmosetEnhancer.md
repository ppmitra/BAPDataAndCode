---
layout: default
# page title
title: Data Sets
---

## Sensitivity and Specificity Calculations on Enhancer-based Data

The data is separated into 5 enhancers  (PCBP3, FOXP2_RORB, D2, DA, SST), each with two markers. 
The PCBP3 and SST have markers in only one channel, while the others have markers on two channels. 
We detect cells marked by enhancers and antibodies, along with the DAPI channel, for each image using morphological operations. 

An example of the enhancer PCBP3 is shown here.

<div style="text-align:center; margin:2em 0;">
  <img src="{{ '/assets/images/PCBp3_antiPCBp3.png' | relative_url }}" alt="PCBP3 Example" style="width:1000px; height:auto; object-fit:contain; border-radius:8px; box-shadow:0 4px 16px rgba(0,0,0,0.25);">
  <div style="margin-top:0.5em; color:#555; font-size:1em;"><strong>Figure:</strong> Combined image for 3 channels: Ch2 = enhancer PCBP3, Ch3 = marker anti-PCBP3, Ch1 = DAPI.</div>
</div>

True-positives are calculated within a distance of 10 pixels from the marker. The specificity and sensitivity are calculated as follows:

<script src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=default'></script>

$$sensitivity = \frac{\|E \bigcap M\|}{\|M\|}$$

$$specificity = \frac{\|D\| - \|M\| - \|E\| + TP}{\|D\| - \|M\|}$$   

where, $$TP = \|E \bigcap M\|$$, $$FN = \|D - M\| - TP$$, $$TN = \|D\| - \|M\| - \|E\| + TP$$, and

$$\|E\|$$  is the number of cells marked by the enhancer virus, $$\|M\|$$ is the number of marker-labelled cells, and $$\|D\|$$ is the number of cells marked by DAPI.

The following formula has been derived based on the [\"Sensitivity and specificity\"](https://en.wikipedia.org/wiki/Sensitivity_and_specificity) calculations.

TP, FP, FN and TN are the numbers of True-positives, False-positives, False-negatives and True-negatives, respectively, as per standard definitions.

<p align="center">
<strong>Table.</strong> Results for specificity and sensitivity per image:  
Column 1: Enhancer;  Column 2: Marker;  Column 3: Sample #;  Column 4: |E|;  Column 5: |D|;  Column 6: |M|;  Column 7: TP;  Column 8: Specificity;  Column 9: Sensitivity.
</p>

<div id="enhancer-table-container" style="overflow-x:auto; margin:2em 0;"></div>

<script src="https://cdn.jsdelivr.net/npm/papaparse@5.4.1/papaparse.min.js"></script>
<script>
  // Build Google Drive URLs from file ID
  function driveThumbnailURL(fileId, size = 80) {
    return `https://drive.google.com/thumbnail?id=${fileId}&sz=${size}`;
  }
  function driveViewURL(fileId) {
    return `https://drive.google.com/file/d/${fileId}/view?usp=sharing`;
  }

  // Convert Dropbox share link to direct download
  function dropboxDownloadURL(url) {
    // replace dl=0 with dl=1 for direct download
    return url.replace(/dl=0/, 'dl=1');
  }

  fetch('/assets/data/example2.csv')
    .then(res => res.text())
    .then(csv => {
      Papa.parse(csv, { header: true, skipEmptyLines: true,
        complete(results) {
          const data = results.data;
          let html = '<table style="border-collapse:collapse;width:100%;font-size:1em;font-family:Segoe UI,Arial,sans-serif;">';
          html += '<thead><tr style="background:#f2f2f2;">';

          // Table headers
          Object.keys(data[0]).forEach(key => {
            html += `<th style="padding:8px;border:1px solid #ddd;">${key}</th>`;
          });
          html += '</tr></thead><tbody>';

          // Table rows
          data.forEach((row, i) => {
            html += `<tr style="background:${i % 2 === 0 ? '#fff' : '#f9f9f9'};">`;
            Object.entries(row).forEach(([key, cell]) => {
              let content = cell;

              // Thumbnail column: Google Drive
              if ((key === 'Thumbnail' || key === 'ThumbnailID') && cell) {
                const thumbUrl = driveThumbnailURL(cell);
                const viewUrl = driveViewURL(cell);
                content = `<a href="${viewUrl}" target="_blank" rel="noopener noreferrer">
                              <img src="${thumbUrl}" width="80" height="80" style="object-fit:cover;border-radius:4px;" alt="thumb"/>
                           </a>`;

              // Composite Images column: Dropbox download link
              } else if (key === 'Composite Images' && cell) {
                const dlUrl = dropboxDownloadURL(cell);
                content = `<a href="${dlUrl}" download target="_blank" rel="noopener noreferrer">Download</a>`;
              }

              html += `<td style="padding:8px;border:1px solid #ddd;text-align:center;">${content}</td>`;
            });
            html += '</tr>';
          });

          html += '</tbody></table>';
          document.getElementById('enhancer-table-container').innerHTML = html;
        }
      });
    })
    .catch(err => console.error('CSV load error:', err));
</script>