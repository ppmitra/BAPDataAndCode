---
layout: default
title: Data Sets
---

## Brain Architecture Project Reference Atlas Framework for the Mouse Head and Brain

# Available Data Sets
- Reference Atlas Space based on invivo MRI/CT [Download ZIP](https://www.dropbox.com/scl/fo/g5q1yq5g8obaxj57xppyl/APcRgSs8I14toQazhWo-E0I?rlkey=6mat45623ehaqawbybv77focq&dl=0)
- “Bubble corrected” Allen Atlas Annotations [Download ZIP](https://drive.google.com/drive/folders/1YArTu3-z7f2YZL7zMBzDjSCdYyxOAXfB?usp=drive_link)
- Histology data for mouse head
	- Registered Space
		- Head sectioned in coronal plane [Download ZIP](https://drive.google.com/file/d/1H53NT3cyCbjLjvH8wq3D9TXTm7_0K-wW/view?usp=drive_link)
		- Head sectioned in transverse plane [Download ZIP](https://drive.google.com/file/d/1YDNtV9Kg3PM-IN9Dl0U5tu4jPjT2Nad0/view?usp=drive_link)
		- Head sectioned in sagittal plane [Download ZIP](https://drive.google.com/file/d/1KL20h-xTpeUKEPzPqppcd1_zxA4jl9yQ/view?usp=drive_link)
	- Atlas Space
		- Will be made available soon
- Brains (Histology (Nissl, Myelin))
	- Head sectioned in coronal plane [Download ZIP](https://)
	- Head sectioned in transverse plane [Download ZIP](https://)
	- Head sectioned in sagittal plane [Download ZIP](https://drive.google.com/drive/folders/16RpECl6Ty9TFs73cU9msdPM5GUTLqV8A?usp=drive_link)

<!-- ---

# Available Data
Each .zip contains the following data:

## Histology
- Nissl stain (p56+-7, .46 in-plane resolution, 10um between planes)
	- lossless .jp2
	- lossy .jp2
	- downsampled .tif
	- downsampled .png
	- metadata .txt
- Myelin stain (p56+-7, .46 in-plane resolution, 10um between planes)
	- lossless .jp2
	- lossy .jp2
	- downsampled .tif
	- downsampled .png
	- metadata .txt

## Radiology
- Primary Modality (in vivo)
	- T2w in vivo (0.1mm in-plane, 0.5mm thru-plane)
		- Filename (original): t2w.nii.gz (in data/invivo/ folder)
		- Filename (proc): t2w_rpg_n4.nii.gz (in t2w_proc/invivo/ folder)
- Secondary Modalities (in vivo)
	- Diffusion (multishell; 0.1mm in-plane, 0.5mm thru-plane)
		- Filename (original): dwi.nii.gz (in data/invivo/ folder)
		- Filename (proc): dwi_denoised_rpg_eddy.nii.gz (in dwi_proc/invivo/ folder) 
- Derived Modalities (in vivo) [In same space as Diffusion modality above]
	- Diffusion tensor (4D vol, 6 param/voxel: Dxx, Dyy, Dzz, Dxy, Dxz, Dyz)
		- Filename: dki_tensor.nii.gz (in dwi_maps_head/invivo/../../udki/ folder)
	- Principal diffusion direction(4D vol, 3 param/voxel: Dx, Dy, Dz)
		- Filename: dki_pdd.nii.gz (in dwi_maps_head/invivo/../../udki/ folder)
	- Fractional Anisotropy
		- Filename: dki_fa.nii.gz (in dwi_maps_head/invivo/../../udki/ folder)
	- Axial diffusivity 
		- Filename: dki_ad.nii.gz (in dwi_maps_head/invivo/../../udki/ folder)
	- Radial diffusivity 
		- Filename: dki_rd.nii.gz (in dwi_maps_head/invivo/../../udki/ folder)
	- Mean diffusivity 
		- Filename: dki_md.nii.gz (in dwi_maps_head/invivo/../../udki/ folder)
	- Axial kurtosis
		- Filename: dki_ak.nii.gz (in dwi_maps_head/invivo/../../udki/ folder)
	- Radial kurtosis
		- Filename: dki_rk.nii.gz (in dwi_maps_head/invivo/../../udki/ folder)
	- Mean kurtosis
		- Filename: dki_mk.nii.gz (in dwi_maps_head/invivo/../../udki/ folder)
	- Signal 0th order rotational invariants (4D vol, 4 param/voxel: S0 per shell)
		- Filename: smi_S0.nii.gz (in dwi_maps_head/invivo/../../smi/ folder)
	- Signal 2th order rotational invariants (4D vol, 4 param/voxel: S2 per shell)
		- Filename: smi_S2.nii.gz (in dwi_maps_head/invivo/../../smi/ folder)
	- Signal 4th order rotational invariants (4D vol, 4 param/voxel: S4 per shell)
		- Filename: smi_S4.nii.gz (in dwi_maps_head/invivo/../../smi/ folder)
	- Standard Model: Intra-axonal water fraction 
		- Filename: smi_f.nii.gz (in dwi_maps_head/invivo/../../smi/ folder)
	- Standard Model: Intra-axonal diffusivity
		- Filename: smi_D_a.nii.gz (in dwi_maps_head/invivo/../../smi/ folder)
	- Standard Model: Extra-axonal axial diffusivity
		- Filename: smi_D_e_par.nii.gz (in dwi_maps_head/invivo/../../smi/ folder)
	- Standard Model: Extra-axonal radial diffusivity
		- Filename: smi_D_e_perp.nii.gz (in dwi_maps_head/invivo/../../smi/ folder)
	- Standard Model: Free water fraction 
		- Filename: smi_ffw.nii.gz (in dwi_maps_head/invivo/../../smi/ folder)
	- Standard Model: FOD second order rotational invariant
		- Filename: smi_p2.nii.gz (in dwi_maps_head/invivo/../../smi/ folder)
	- Standard Model:  FOD fourth order rotational invariant
		- Filename: smi_p4.nii.gz (in dwi_maps_head/invivo/../../smi/ folder)
- Primary Modality (ex vivo)
	- T2w ex vivo (0.1mm in-plane, 0.5mm thru-plane)
		- Filename (original): t2w.nii.gz (in data/exvivo/ folder)
		- Filename (proc): t2w_rpg_n4.nii.gz (in t2w_proc/exvivo/ folder)
- Secondary Modalities (ex vivo)
	- Diffusion (multishell; 0.1mm in-plane, 0.5mm thru-plane)
		- Filename (original): dwi.nii.gz (in data/exvivo/ folder)
		- Filename (proc): dwi_denoised_rpg_eddy.nii.gz (in dwi_proc/exvivo/ folder) 
- Derived Modalities (ex vivo) [In same space as Diffusion modality above]
	- Diffusion tensor (4D vol, 6 param/voxel: Dxx, Dyy, Dzz, Dxy, Dxz, Dyz)
		- Filename: dki_tensor.nii.gz (in dwi_maps_head/exvivo/../../udki/ folder)
	- Principal diffusion direction(4D vol, 3 param/voxel: Dx, Dy, Dz)
		- Filename: dki_pdd.nii.gz (in dwi_maps_head/exvivo/../../udki/ folder)
	- Fractional Anisotropy
		- Filename: dki_fa.nii.gz (in dwi_maps_head/exvivo/../../udki/ folder)
	-Axial diffusivity 
		- Filename: dki_ad.nii.gz (in dwi_maps_head/exvivo/../../udki/ folder)
	- Radial diffusivity 
		- Filename: dki_rd.nii.gz (in dwi_maps_head/exvivo/../../udki/ folder)
	- Mean diffusivity 
		- Filename: dki_md.nii.gz (in dwi_maps_head/exvivo/../../udki/ folder)
	- Axial kurtosis
		- Filename: dki_ak.nii.gz (in dwi_maps_head/exvivo/../../udki/ folder)
	- Radial kurtosis
		- Filename: dki_rk.nii.gz (in dwi_maps_head/exvivo/../../udki/ folder)
	- Mean kurtosis
		- Filename: dki_mk.nii.gz (in dwi_maps_head/exvivo/../../udki/ folder)
	- Signal 0th order rotational invariants (4D vol, 4 param/voxel: S0 per shell)
		- Filename: smi_S0.nii.gz (in dwi_maps_head/exvivo/../../smi/ folder)
	- Signal 2th order rotational invariants (4D vol, 4 param/voxel: S2 per shell)
		- Filename: smi_S2.nii.gz (in dwi_maps_head/exvivo/../../smi/ folder)
	- Signal 4th order rotational invariants (4D vol, 4 param/voxel: S4 per shell)
		- Filename: smi_S4.nii.gz (in dwi_maps_head/exvivo/../../smi/ folder)
	- Standard Model: Intra-axonal water fraction 
		- Filename: smi_f.nii.gz (in dwi_maps_head/exvivo/../../smi/ folder)
	- Standard Model: Intra-axonal diffusivity
		- Filename: smi_D_a.nii.gz (in dwi_maps_head/exvivo/../../smi/ folder)
	- Standard Model: Extra-axonal axial diffusivity
		- Filename: smi_D_e_par.nii.gz (in dwi_maps_head/exvivo/../../smi/ folder)
	- Standard Model: Extra-axonal radial diffusivity
		- Filename: smi_D_e_perp.nii.gz (in dwi_maps_head/exvivo/../../smi/ folder)
	- Standard Model: Still water fraction (DOT)
		- Filename: smi_ffw.nii.gz (in dwi_maps_head/exvivo/../../smi/ folder)
	- Standard Model: FOD second order rotational invariant
		- Filename: smi_p2.nii.gz (in dwi_maps_head/exvivo/../../smi/ folder)
	- Standard Model:  FOD fourth order rotational invariant
		- Filename: smi_p4.nii.gz (in dwi_maps_head/exvivo/../../smi/ folder)
- CT (50um resolution)

## Analytic Results
- Averaged T2w in vivo volume as reference space
- 20um^3 isotrpic co-registered Nissl Volume
- 20um^3 isotrpic co-registered Myelin Volume
- 20um^3 isotropic T2w in-vivo MRI, resampled
- 20um^3 isotropic T2w ex-vivo MRI, resampled
- Slice MR & CT volumes mapped to reference space
	- virtual sections matched with alternate N/MY histology
- Superimposed atlas region boundaries

--- -->

### Access
All datasets are available under GNU GPL v3 license.

<!-- [Browse Datasets](#) | [Download Instructions](#) | [Usage Guidelines](#) -->