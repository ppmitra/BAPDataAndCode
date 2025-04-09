---
layout: default
title: danielCodes
---

# Semi-automatic Rigid Registration

## Overview
**semiautomatic_rigid_2d_v00.py** - This Python script performs semi-automatic rigid registration of two 2D microscopy images (e.g., Nissl and Myelin stained sections). It supports manual landmark-based initialization and automatic refinement using a block-based optimization approach with PyTorch.

## Key Features
- Manual point selection for initialization
- Automatic rigid registration using gradient descent
- Local contrast adjustment per image block
- Quality control visualizations
- Compatible with TIFF input images (multi-channel)
- GPU acceleration via PyTorch


## Usage
bash python semiautomatic.py \
- fnameI path/to/moving_image.tif \
- fnameJ path/to/fixed_image.tif \
- outputdir path/to/output_directory \
- manual True \
- automatic True \
- dx 14.72 \
- device cuda:0

## Arguments
- fnameI	Path to moving/atlas image (e.g., Nissl)
- fnameJ	Path to fixed/target image (e.g., Myelin)
- outputdir	Directory to store results (transform and QC image)
- manual	Enable manual point picking for initialization (default: True)
- automatic	Run automatic optimization after manual step (default: True)
- dx	Physical pixel size in microns (e.g., 0.46 * 32 = 14.72)
- device	Device to run optimization on (cpu, cuda:0, etc)
- gridsize	Size of QC grid overlay in microns (default: 3000)
- blurry	Run an initial blurry registration pass for coarse alignment (default: False)

## Output
- *_xy_order.txt – Final 3×3 affine transform matrix (row-column order)
- *_QC.png – Registration quality control image

## Example Usage
Running the registration with manual initialization:

bash python semiautomatic.py \
  - fnameI MD963_2_0168_nissl.tif \
  - fnameJ MD963_2_0168_myelin.tif \
  - outputdir ./twoDout \
  - manual True \
  - automatic True \
  - dx 14.72 \
  - device cuda:0


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

## Usage
Run the script from the command line with the following syntax:

```bash
python manual_nissl_3d_QC.py \
    -T path/to/target_nissl.vtk \
    -N path/to/neighbor_nissl.vtk \
    -M path/to/neighbor_mri.vtk \
    -O path/to/output_directory \
    -v True \
    -g 50.0 \
    -n 99

## View the Full Repository

[View on GitHub](https://github.com/mitragithub/daniel-codes){:target="_blank"}

## Download

[Download ZIP](https://github.com/mitragithub/daniel-codes/archive/refs/heads/main.zip){:target="_blank"}
[Clone with git](https://github.com/mitragithub/daniel-codes.git){:target="_blank"}