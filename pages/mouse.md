---
layout: default
title: Mouse Head Reference Atlas Framework
---


## Mouse Head Reference Atlas Framework

The Mouse Head Reference Atlas Framework provides a standardized approach for mapping and analyzing mouse head anatomy.

### Key Features
- High-resolution 3D atlas
- Standardized coordinate system
- Anatomical landmarks
- Cross-sectional views

[Download Atlas Data](/pages/mouse/datasets)

---

### Downloadable Output Dataset Descriptions
 Downloadable reference datasets associated with the current mouse whole head atlas resource are listed and described below:
 
1. In Vivo Averaged Reference Space Volume: This template volume is the backbone of the reference atlas resource, averaging all in vivo MRI from the mice used in the current manuscript. The coordinate space was defined using CT scans by fitting Bregma, Lambda, and Midline sutures, finding the intersection point between Bregma and Lambda sutures to define the origin, and defining a tangent plane orthogonal to the fit origin to define orientation. This volume is available at resolutions up to 20μm voxels, isotropic. 
2. Reconstructed Nissl Volumes: Six separate Nissl volumes from six mice were reconstructed using 20μm isotropic voxels. Three datasets cover the whole head, and three includes the whole brain plus the lower brainstem and upper spinal cord. Nissl microscopy series were registered and reconstructed in reference space, with all volumes mapped to the in vivo reference coordinate system with Bregma as the origin. 
3. Reconstructed Myelin Volumes: Three separate Myelin volumes from three mice were reconstructed using 20μm isotropic voxels. All datasets cover the whole head. Myelin microscopy series were registered and reconstructed in reference space, with all volumes mapped to the in vivo reference coordinate system with Bregma as the origin. 
4. In Vivo MRI Volumes: Twelve in vivo volumetric MRI (T2w) datasets are upsampled and reconstructed at the resolution of the Nissl and Myelin Microscopy volumes (20μm isotropic voxels). 
5. Ex Vivo MRI Volumes: Twelve ex vivo volumetric MRI (T2w) and DWI (diffusion weighted images) datasets are upsampled and reconstructed at the resolution of the Nissl and Myelin Microscopy volumes (20μm isotropic voxels). 
6. Brain Region Segmentations: Brain region compartments originate from version 3 of the Allen Institute Mouse Reference Atlas but were corrected and updated as described in the manuscript. These segmentations are mapped to the reference coordinate space with Bregma as the origin and are available for download wholistically as a segmented volume (resolved at 20μm isotropic voxels), and provide a starting point for refining annotations


---

## Registration Framework

### Getting Started
Tools and documentation for registering your data with the mouse head reference atlas.

#### Quick Start
1. Install dependencies
2. Download reference data
3. Prepare your data
4. Run registration

[View Registration Documentation](https://twardlab.github.io/emlddmm/build/html/index.html) | [Download Tools](https://github.com/twardlab/emlddmm/archive/refs/heads/main.zip)

---
## Skeletonization Framework

### Getting Started
Tools and documentation for Skeletonizing tracer-injected Datasets.

#### Quick Start
1. Install dependencies
2. Download reference data
3. Prepare your data
4. Run Skeletonization and Summarization.

[View Skeletonization Page](/pages/skeletonization)

---

## Code Resources

### Available Tools

#### Registration Framework
Tools and utilities for registering your data with our mouse head reference atlas.
- Data preprocessing scripts
- Registration algorithms
- Validation tools

#### Analysis Tools
Collection of analysis scripts and notebooks.
- Statistical analysis
- Visualization tools
- Data processing pipelines

#### Data Processing Tools
- [segVoxReassign](/pages/segvoxreassign) - Tools for remapping Allen Brain Atlas segmentation IDs to manageable ranges
- Feature extraction utilities
- Segmentation helpers
- [align-qc](/pages/align-qc) - Tools for quality control and clean up 3D reconstruction of nissls, and for performing semi-automatic rigid alignment (registration) using manual point selection and gradient-based optimization.

[View Code Documentation](/pages/mouse/codes) | [GitHub Repository](#) 
