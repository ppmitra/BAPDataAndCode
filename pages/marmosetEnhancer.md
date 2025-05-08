---
layout: default
title: Data Sets
---

## Sensitivity and Specificity Calculations on Enhancer based Data

The data is separated into 5 enhancers  (PCBP3, FOXP2_RORB, D2, DA, SST) with two markers each for them. 
The PCBP3 & SST has markers in only one channel, while the others have the markers on two channels. 
We detect the cells marked by enhancers and the antibodies along with the DAPI channel for each image, using morphological operations. 

An example of the enhancer PCBP3 is shown here.

<div style="text-align: center; margin: 2em 0;">
  <img src="{{ '/assets/images/PCBp3_antiPCBp3.png' | relative_url }}" alt="Brain Architecture Project Logo" style="width:400px; height:auto; object-fit:contain; border-radius:12px; box-shadow:0 4px 16px rgba(0,0,0,0.15);">
  <div style="margin-top: 0.5em; color: #555; font-size: 1em;"><b>The image shows a combined image for 3 channels where Ch2 gives the enhancer PCBP3, ch1 gives the marker anti-PCBP3, and Ch1 gives the DAPI channel</b></div>
</div>

True-positives are calculated within a distance of 10 pixels from the marker. The specificity and sensitivity is calculated as follows:

$sensitivity = \frac{\|E \bigcap M\|}{\|M\|}$

$specificity = \frac{\|D\| - \|M\| - \|E\| + TP}{\|D\| - \|M\|}$,   

where, $TP = \|E \bigcap M\|$, $FN = \|D - M\| - TP$, $TN = \|D\| - \|M\| - \|E\| + TP$, and

$\|E\|$  is the number of cells marked by the enhancer virus, $\|M\|$ is the number of marker labeled cells, and $\|D\|$ is the number of cells marked by DAPI.

The following formula has been derived based on the \"Sensitivity and specificity\" calculations stated in the [Wikipedia](https://en.wikipedia.org/wiki/Sensitivity_and_specificity)


The results for specificity and sensitivity each image is given in following Table.

<div id="enhancer-table-container" style="overflow-x:auto; margin:2em 0;"></div>

<script src="https://cdn.jsdelivr.net/npm/papaparse@5.4.1/papaparse.min.js"></script>
<script>
fetch('/assets/data/example.csv')
  .then(response => response.text())
  .then(csv => {
    Papa.parse(csv, {
      header: true,
      skipEmptyLines: true,
      complete: function(results) {
        const data = results.data;
        let html = '<table style="border-collapse:collapse;width:100%;font-size:1em;font-family:Segoe UI,Arial,sans-serif;">';
        // Table header
        html += '<thead><tr style="background:#f2f2f2;">';
        Object.keys(data[0]).forEach(key => {
          html += `<th style="padding:8px;border:1px solid #ddd;">${key.replace(/\\*\\*/g, '')}</th>`;
        });
        html += '</tr></thead><tbody>';
        // Table rows
        data.forEach((row, i) => {
          html += `<tr style="background:${i%2==0?'#fff':'#f9f9f9'};">`;
          Object.values(row).forEach((cell, j) => {
            let align = (j >= 2) ? 'center' : 'left';
            if (j === 7 || j === 8) align = 'right';
            html += `<td style="padding:8px;border:1px solid #ddd;text-align:${align};">${cell}</td>`;
          });
          html += '</tr>';
        });
        html += '</tbody></table>';
        document.getElementById('enhancer-table-container').innerHTML = html;
      }
    });
  });
</script>
