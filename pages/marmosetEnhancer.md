---
layout: default
# page title
title: Data Sets
---

## Sensitivity and Specificity Calculations on Enhancer-based Data

The data is separated into 5 enhancers (PCBP3, FOXP2_RORB, D2, DA, SST), each with two markers.  
PCBP3 and SST have markers in only one channel, while the others use two channels.  
We detect cells marked by enhancers, antibodies, and the DAPI channel using morphological operations.

An example for the enhancer **PCBP3** is shown below:

<div style="text-align:center; margin:2em 0;">
  <img src="{{ '/assets/images/PCBp3_antiPCBp3.png' | relative_url }}" alt="PCBP3 Example" style="width:1000px; height:auto; object-fit:contain; border-radius:8px; box-shadow:0 4px 16px rgba(0,0,0,0.25);">
  <div style="margin-top:0.5em; color:#555; font-size:1em;"><strong>Figure:</strong> Combined image for 3 channels: Ch2 = enhancer PCBP3, Ch3 = marker anti-PCBP3, Ch1 = DAPI.</div>
</div>

True-positives are counted within 10 pixels of the marker. We compute:

<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=default"></script>

$$
\text{sensitivity} = \frac{\lVert E \cap M\rVert}{\lVert M\rVert}
$$

$$
\text{specificity} = \frac{\lVert D\rVert - \lVert M\rVert - \lVert E\rVert + TP}{\lVert D\rVert - \lVert M\rVert}
$$

where

- $TP = \lVert E \cap M\rVert$ (true positives)  
- $FN = \lVert D - M\rVert - TP$ (false negatives)  
- $TN = \lVert D\rVert - \lVert M\rVert - \lVert E\rVert + TP$ (true negatives)

and

- $\lVert E\rVert$ = number of enhancer-marked cells  
- $\lVert M\rVert$ = number of marker-labelled cells  
- $\lVert D\rVert$ = number of DAPI-stained cells

The formulas follow the standard definitions on [Wikipedia](https://en.wikipedia.org/wiki/Sensitivity_and_specificity).

<p align="center">
<strong>Table.</strong> Results for specificity and sensitivity per image:  
Column 1: Enhancer;  Column 2: Marker;  Column 3: Sample #;  Column 4: |E|;  Column 5: |D|;  Column 6: |M|;  Column 7: TP;  Column 8: Specificity;  Column 9: Sensitivity.
</p>

<div id="enhancer-table-container" style="overflow-x:auto; margin:2em 0;"></div>

```html
<script src="https://cdn.jsdelivr.net/npm/papaparse@5.4.1/papaparse.min.js"></script>
<script>
  // Build Google Drive thumbnail URL from file ID
  function driveThumbnailURL(fileId, size = 80) {
    return `https://drive.google.com/thumbnail?id=${fileId}&sz=${size}`;
  }

  fetch('/assets/data/example.csv')
    .then(res => res.text())
    .then(csv => {
      Papa.parse(csv, {
        header: true,
        skipEmptyLines: true,
        complete: function(results) {
          const data = results.data;
          let html = '' +
            '<table style="border-collapse:collapse;width:100%;font-size:1em;font-family:Segoe UI,Arial,sans-serif;">' +
            '<thead><tr style="background:#f2f2f2;">';

          // Header row
          Object.keys(data[0]).forEach(key => {
            html += `<th style="padding:8px;border:1px solid #ddd;">${key}</th>`;
          });
          html += '</tr></thead><tbody>';

          // Data rows
          data.forEach((row, i) => {
            html += `<tr style="background:${i % 2 === 0 ? '#fff' : '#f9f9f9'};">`;
            Object.entries(row).forEach(([key, cell]) => {
              let cellContent = cell;

              // Replace ThumbnailID with img tag
              if (key === 'ThumbnailID' && cell) {
                const thumb = driveThumbnailURL(cell, 80);
                cellContent = `<img src="${thumb}" width="80" style="border-radius:4px;" alt="thumb"/>`;
              }

              html += `<td style="padding:8px;border:1px solid #ddd;text-align:center;">${cellContent}</td>`;
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
```
