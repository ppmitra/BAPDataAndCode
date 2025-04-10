# Manual Nissl 3D Quality Control & Cleanup

## Overview
**manual_nissl_3d_QC** is used after the automatic registration step to quality control and clean up 3D reconstructions of Nissl stained sections. The tool addresses two main issues:
1. **Outlier slices:** Individual slices that are misaligned with the overall volume.
2. **Slice-to-slice wiggles:** Small misalignments between consecutive slices that cause a wavy or irregular 3D reconstruction.

The workflow displays the target slice (the slice to adjust) along with its neighboring images:  
- The neighbor Nissl slice(s) (left/right, if available)  
- The corresponding MRI or 3D volume

All images are displayed in registered space with the same pixel dimensions. This allows the user to interactively adjust the target slice by picking corresponding points between images.

## Workflow Summary
1. **Backup Registration Outputs:** Copy the original registration outputs (this should be done only once, not for each slice).
2. **Select a Target Slice:** It is recommended to start with the middle slice.
3. **Run the Script:**  
   - The tool displays the target Nissl slice, neighbor Nissl slice(s), and a neighbor MRI slice.
   - You interactively select corresponding points in these images.
   - The script computes a new rigid transformation matrix for the target slice based on your input and updates the target VTK file.  
   **Note:** This update involves double interpolation, but since these VTK files are low resolution and used only for QC, the process is acceptable.
4. **Iterate:** Process the next slice. Two people may work concurrently, one processing slices to the left and the other to the right of the starting slice.

## Key Features
- **Interactive Correction:** Adjust the alignment of a target Nissl slice using manual landmark selection.
- **Neighbor Integration:** Use neighbor Nissl and MRI images to help ensure the 3D reconstruction is both accurate (avoiding the “banana effect”) and smooth across slices.
- **Automatic Rigid Transform Update:** The script computes an updated rigid transformation matrix for the target slice based on the selected points.
- **Output Files:**  
  - The updated transformation parameters are saved as part of the VTK file (which replaces the original).
  - A text file containing the selected point coordinates is also generated.

## Requirements
- **Python 3.6+**
- **NumPy**
- **Matplotlib**
- **SciPy**
- **emlddmm** (for reading VTK files)
- **argparse** (standard Python library)

## Wrapper Example Usage
Run the script in wrapper-example from the command line with the following syntax:

./rerun_MD961.sh \
    -b /path/to/images/ \
    -r 2

## Explanation of Options:

| Option | 
|--------|-------------|
| `-b`   | Base directory (e.g., contains `MD961-nissl-registered/`) |
| `-r`   | Range selector (`1`, `2`, or `3`):<br>• 1 → slices `0001–0125`<br>• 2 → slices `0126–0250`<br>• 3 → slices `0251–0400` |
| `-s`   | *(Optional)* Single slice (4-digit, e.g., `0150`) instead of a range |
| `-d`   | Dry run — prints the actions without executing |
| `-h`   | Displays the help message |



## View the Full Repository

[View on GitHub](https://github.com/mitragithub/align-qc){:target="_blank"}

## Download

[Download ZIP](https://github.com/mitragithub/align-qc/archive/refs/heads/main.zip){:target="_blank"}
[Clone with git](https://github.com/mitragithub/align-qc.git){:target="_blank"}