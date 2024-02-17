# Go1 URDF with Simplified Mesh

The original Unitree Go1 URDF contains dae mesh files that are very heavy, causing the
webGL frontend to effectively freeze.

In this version, we replace the dae mesh files with simplified stl files. I also correct
some of the mistakes in the older gabe_go1 model.

### Folder Structure

```shell
├── README.md
├── meshes
│   ├── calf.stl
│   ├── hip.stl
│   ├── picknik_ur5_realsense_camera_adapter_rev2.3mf
│   ├── thigh.stl
│   ├── thigh_mirror.stl
│   └── trunk.stl
├── urdf
│   └── go1.urdf
└── xml
    └── go1.xml

4 directories, 9 files
```

