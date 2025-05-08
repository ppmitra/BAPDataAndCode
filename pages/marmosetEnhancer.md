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
  <div style="margin-top: 0.5em; color: #555; font-size: 1em;">**The image shows a combined image for 3 channels where Ch2 gives the enhancer PCBP3, ch1 gives the marker anti-PCBP3, and Ch1 gives the DAPI channel**</div>
</div>

The results for specificity and sensitivity each image is given in following Table.

| **Enhancer** | **Marker** | **File#** | **\|E\|** | **\|D\|** | **\|M\|** | **\|TP\|** | **Specificity** | **Sensitivity** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| D2 (cjD2) | Adora2a | 1   | 59  | 950 | 293 | 17  | 0.9361 | 0.0580 |
| D2 (cjD2) | Adora2a | 2   | 113 | 2447 | 668 | 15  | 0.9449 | 0.0225 |
| D2 (cjD2) | Drd2 | 1   | 50  | 2834 | 1739 | 10  | 0.9635 | 0.0058 |
| D2 (cjD2) | Drd2 | 2   | 287 | 2976 | 871 | 65  | 0.8945 | 0.0746 |
| D2 (mmD2) | Adora2a | 1   | 67  | 950 | 293 | 19  | 0.9269 | 0.0165 |
| D2 (mmD2) | Adora2a | 2   | 75  | 2447 | 668 | 11  | 0.9640 | 0.0648 |
| D2 (mmD2) | Drd2 | 1   | 166 | 2834 | 1739 | 54  | 0.8977 | 0.0311 |
| D2 (mmD2) | Drd2 | 2   | 238 | 2976 | 871 | 62  | 0.9164 | 0.0712 |
| DA (DAE4) | antiTH | 1   | 433 | 3960 | 855 | 151 | 0.9092 | 0.0330 |
| DA (DAE4) | antiTH | 2   | 94  | 3424 | 181 | 25  | 0.9787 | 0.0783 |
| DA (DAE4) | antiTH | 3   | 225 | 4506 | 266 | 32  | 0.9545 | 0.0820 |
| DA (DAE4) | antiTH | 4   | 47  | 4738 | 356 | 20  | 0.9938 | 0.0242 |
| DA (DAE4) | DAT | 1   | 31  | 9293 | 369 | 21  | 0.9989 | 0.0569 |
| DA (DAE4) | DAT | 2   | 53  | 8123 | 472 | 38  | 0.9980 | 0.0805 |
| DA (DAE4) | DAT | 3   | 204 | 8054 | 663 | 97  | 0.9855 | 0.1463 |
| DA (DAE4) | DAT | 4   | 121 | 8252 | 657 | 88  | 0.9957 | 0.1339 |
| DA (DAE8) | antiTH | 1   | 101 | 3960 | 855 | 64  | 0.9881 | 0.0749 |
| DA (DAE8) | antiTH | 2   | 62  | 3424 | 181 | 21  | 0.9874 | 0.1160 |
| DA (DAE8) | antiTH | 3   | 100 | 4506 | 266 | 30  | 0.9835 | 0.1128 |
| DA (DAE8) | antiTH | 4   | 80  | 4738 | 356 | 33  | 0.9893 | 0.0927 |
| DA (DAE8) | DAT | 1   | 32  | 9293 | 369 | 15  | 0.9981 | 0.0407 |
| DA (DAE8) | DAT | 2   | 68  | 8123 | 472 | 41  | 0.9965 | 0.0869 |
| DA (DAE8) | DAT | 3   | 411 | 8054 | 663 | 103 | 0.9583 | 0.1554 |
| DA (DAE8) | DAT | 4   | 153 | 8252 | 657 | 107 | 0.9939 | 0.1629 |
| FOXP2_RORB ( FOXP2_RORB_E4) | antiRORB | 1   | 318 | 6666 | 3322 | 167 | 0.9548 | 0.0503 |
| FOXP2_RORB ( FOXP2_RORB_E4) | antiRORB | 2   | 528 | 14178 | 6067 | 210 | 0.9608 | 0.0346 |
| FOXP2_RORB ( FOXP2_RORB_E4) | antiRORB | 3   | 378 | 12376 | 3079 | 119 | 0.9721 | 0.0386 |
| FOXP2_RORB ( FOXP2_RORB_E4) | antiFOXP2 | 1   | 38  | 4155 | 1864 | 31  | 0.9969 | 0.0166 |
| FOXP2_RORB ( FOXP2_RORB_E4) | antiFOXP2 | 2   | 234 | 14026 | 6546 | 168 | 0.9912 | 0.0257 |
| FOXP2_RORB ( FOXP2_RORB_E4) | antiFOXP2 | 3   | 1114 | 15539 | 5118 | 499 | 0.9410 | 0.0975 |
| FOXP2_RORB ( FOXP2_RORB_E9) | antiRORB | 1   | 766 | 6666 | 3322 | 221 | 0.8370 | 0.0665 |
| FOXP2_RORB ( FOXP2_RORB_E9) | antiRORB | 2   | 294 | 14178 | 6067 | 70  | 0.9724 | 0.0115 |
| FOXP2_RORB ( FOXP2_RORB_E9) | antiRORB | 3   | 1332 | 12376 | 3079 | 278 | 0.8866 | 0.0903 |
| FOXP2_RORB ( FOXP2_RORB_E9) | antiFOXP2 | 1   | 19  | 4155 | 1864 | 17  | 0.9991 | 0.0091 |
| FOXP2_RORB ( FOXP2_RORB_E9) | antiFOXP2 | 2   | 141 | 14026 | 6546 | 92  | 0.9934 | 0.0141 |
| FOXP2_RORB ( FOXP2_RORB_E9) | antiFOXP2 | 3   | 201 | 15539 | 5118 | 108 | 0.9911 | 0.0211 |
| PCBP3 | antiPCBP3 | 1   | 199 | 1947 | 483 | 130 | 0.9529 | 0.2692 |
| PCBP3 | antiPCBP3 | 2   | 214 | 1963 | 489 | 138 | 0.9484 | 0.2822 |
| PCBP3 | antiPCBP3 | 3   | 155 | 3593 | 470 | 109 | 0.9853 | 0.2319 |
| PCBP3 | antiPCBP3 | 4   | 72  | 1848 | 389 | 62  | 0.9931 | 0.1594 |
| PCBP3 | GAD | 1   | 70  | 421 | 158 | 52  | 0.9316 | 0.3291 |
| PCBP3 | GAD | 2   | 22  | 352 | 185 | 17  | 0.9701 | 0.0919 |
| PCBP3 | GAD | 3   | 14  | 256 | 206 | 12  | 0.9600 | 0.0583 |
| PCBP3 | GAD | 4   | 33  | 376 | 241 | 29  | 0.9704 | 0.1203 |
| PCBP3 | GAD | 5   | 42  | 369 | 35  | 20  | 0.9341 | 0.5714 |
| PCBP3 | GAD | 6   | 164 | 643 | 293 | 98  | 0.8114 | 0.3345 |
| SST_E2 | SST | 1   | 43  | 2062 | 19  | 13  | 0.9853 | 0.6842 |
| SST_E2 | SST | 2   | 11  | 1734 | 13  | 6   | 0.9971 | 0.4615 |
| SST_E2 | SST | 3   | 2   | 992 | 100 | 2   | 1.0000 | 0.0200 |
| SST_E2 | SST | 4   | 49  | 1914 | 16  | 5   | 0.9752 | 0.1250 |
| SST_E2 | SST | 5   | 14  | 1276 | 18  | 9   | 0.9960 | 0.5000 |
| SST_E2 | SST | 6   | 9   | 1256 | 17  | 7   | 0.9984 | 0.4118 |
| SST_E2 | SST | 7   | 16  | 1344 | 14  | 11  | 0.9962 | 0.7857 |
| SST_E2 | SST | 8   | 19  | 1262 | 23  | 11  | 0.9935 | 0.4783 |


