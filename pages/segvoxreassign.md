---
layout: default
title: segVoxReassign
---

# segVoxReassign

This repository contains MATLAB tools for remapping large Allen Brain Atlas segmentation IDs (usually uint32 or uint64) to more manageable uint16 ranges.

## Overview

When working with Allen Brain Atlas data, the segmentation IDs can be unwieldy due to their large values. This tool provides a streamlined approach to remap these values while maintaining the integrity of the segmentation data.

## Key Features

- Converts segmentation IDs from uint32/uint64 to uint16 format
- Preserves hemisphere distinctions in the remapping
- Generates mapping hash tables for cross-reference
- Produces quality control visualizations

## Main Function: allen_segid_remap

```matlab
function newI = allen_segid_remap(segname, outname, outext, is2bg, bgvals, addval)
```

### Parameters:
- `segname`: Filename of input segmentation volume
- `outname`: Filename of new uint16 valued segmentation volume
- `outext`: File extension of output volume (.mat, .vtk, .nii)
- `is2bg`: Binary flag for whether the original volume has 2 background values
- `bgvals`: Values assigned as background labels
- `addval`: Value to add to denote hemisphere split

### Outputs:
- `newI`: New uint16 segmented volume
- `BAP2Allen_segids_hash.csv`: Mapping between original and new IDs
- Quality control figures

## Example Usage

```matlab
% Example: Remapping Allen segmentation with two background values
allen_segid_remap('allen_seg.vtk', 'allen_seg_remapped', '.nii', 1, [0, 100000], 10000);
```

## View the Full Repository

[View on GitHub](https://github.com/mitragithub/segVoxReassign){:target="_blank"}

## Download

[Download ZIP](https://github.com/mitragithub/segVoxReassign/archive/refs/heads/main.zip){:target="_blank"}
[Clone with git](https://github.com/mitragithub/segVoxReassign.git){:target="_blank"}


