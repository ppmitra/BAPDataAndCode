---
layout: default
title: Data Sets
---

## Sensitivity and Specificity Calculations on Enhancer-based Data

The data is separated into 5 enhancers  (PCBP3, FOXP2_RORB, D2, DA, SST), each with two markers. 
The PCBP3 and SST have markers in only one channel, while the others have markers on two channels. 
We detect cells marked by enhancers and antibodies, along with the DAPI channel, for each image using morphological operations. 

An example of the enhancer PCBP3 is shown here.

<div style="text-align: center; margin: 2em 0;">
  <img src="{{ '/assets/images/PCBp3_antiPCBp3.png' | relative_url }}" alt="Brain Architecture Project Logo" style="width:1000px; height:auto; object-fit:contain; border-radius:8px; box-shadow:0 4px 16px rgba(0,0,0,0.25);">
  <div style="margin-top: 0.5em; color: #555; font-size: 1em;"><b>Figure. The image shows a combined image for 3 channels where Ch2 gives the enhancer PCBP3, Ch3 gives the marker anti-PCBP3, and Ch1 gives the DAPI channel</b></div>
</div>

True-positives are calculated within a distance of 10 pixels from the marker. The specificity and sensitivity are calculated as follows:

<script src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=default'></script>

$$sensitivity = \frac{\|E \bigcap M\|}{\|M\|}$$

$$specificity = \frac{\|D\| - \|M\| - \|E\| + TP}{\|D\| - \|M\|}$$   

where, $$TP = \|E \bigcap M\|$$, $$FN = \|D - M\| - TP$$, $$TN = \|D\| - \|M\| - \|E\| + TP$$, and

$$\|E\|$$  is the number of cells marked by the enhancer virus, $$\|M\|$$ is the number of marker-labelled cells, and $$\|D\|$$ is the number of cells marked by DAPI.

The following formula has been derived based on the \"Sensitivity and specificity\" calculations stated in the [Wikipedia](https://en.wikipedia.org/wiki/Sensitivity_and_specificity)

TP, FP, FN and TN are the numbers of True-positives, False-positives, False-negatives and True-negatives, respectively, as per standard definitions.

<p align=center>
<b>Table. The results for specificity and sensitivity for each image are given in the following Table. Column 1: Shows the name of the enhancers; Column 2: Shows the name of the markers; Column 3: Shows the name of the individual file Index-Number; Column 4: Shows the number of the detected cells marked by the enhancer; Column 5: Shows the  number of the detected cells marked in the DAPI channel; Column 6: Shows the number of the detected cells marked by the marker; Column 6: Shows the number of True-positives; Column 6: Shows the Specificity; Column 6: Shows the Sensitivity<b>

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
            let align = 'center';
            // if (j === 7 || j === 8) align = 'right';
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

</p>
