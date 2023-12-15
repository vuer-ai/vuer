from nerf_vuer.utils.colormaps import COLORMAPS

SE3_DEFAULT = {
    "rotation": {
        "value": {"x": 0, "y": 0, "z": 0},
        "order": 1,
        "lock": True,
    },
    "position": {
        "value": {"x": 0, "y": 0, "z": 0},
        "order": -1,
        "lock": True,
    },
    "scale": {
        "value": 1,
        "min": 0.0001,
        "step": 0.01,
        "label": "Scale",
        "order": 2,
        "pad": 4,
    },
}
LOCAL_SE3 = {
    "Local Transformation.rotation": {
        "value": {"x": 0, "y": 0, "z": 0},
        "order": 1,
        "lock": True,
        "label": "Rotation"
    },
    "Local Transformation.position": {
        "value": {"x": 0, "y": 0, "z": 0},
        "order": -1,
        "lock": True,
        "label": "Translation"
    },
    "Local Transformation.scale": {
        "value": 1,
        "min": 0.0001,
        "step": 0.01,
        "label": "Scale",
        "order": 2,
        "pad": 4,
    },
}

LANGUAGE_DEFAULT = {
    "type": "FOLDER",
    "schema": {
        "heatmap": {
            "value": None,
            "default": None,
            "options": [None, "features"],
            "label": "Heat Map",
        },
        "query": {"value": "", "label": "Text Query"},
        "negativeQueries": {"value": "", "rows": 2, "label": "Negatives"},
        "showMask": {"value": True, "label": "Show Mask"},
        "heatmapColormap": {
            "value": None,
            "label": "Color Map",
            "options": COLORMAPS,
        },
        "temperature": {
            "value": 0.1,
            "min": 0.0000001,
            "step": 0.00001,
            "pad": 5,
            "label": "Temperature",
        },
        "shade": {"value": 0.3, "step": 0.01, "min": 0.0, "max": 1, "label": "Shade"},
        "shadeColor": {"value": "#000000", "label": "Shade Color"},
    },
    "settings": {"collapsed": True},
}

RENDER_DEFAULT = {
    "use_aabb": {"value": False, "label": "Use AABB", "order": 5},
    "aabb_min": {
        "value": {"x": -1, "y": -1, "z": -1},
        "label": "Min",
        "step": 0.001,
        "pad": 4,
        "lock": True,
        "order": 6,
    },
    "aabb_max": {
        "value": {"x": 1, "y": 1, "z": 1},
        "label": "Max",
        "step": 0.001,
        "pad": 4,
        "lock": True,
        "order": 7,
    },
    **LOCAL_SE3,
}

RGB_DEFAULT = {
    **SE3_DEFAULT,
    # **LOCAL_SE3,
    "channel": {
        "value": "rgb",
        # "options": ["rgb", "depth", "accumulation", "depth-0", "depth-1"],
        "options": ["rgb", "depth"],
    },
    "alphaChannel": {
        "value": "alpha",
        "options": ["alpha", None],
    },
    "useAlpha": {"value": False, "label": "Use Alpha"},
    "alphaThreshold": {"value": 0.0, "min": 0, "max": 1, "step": 0.001, "pad": 4, "label": "ɑ Threshold"},
    "format": {
        "value": "png",
        "options": ["png", "jpg", "b64png", "b64jpg"],
    },
}

MULTI_RGB_DEFAULT = {
    **SE3_DEFAULT,
    "alphaThreshold": {"value": 0.0, "min": 0, "max": 1, "step": 0.001, "pad": 4, "label": "ɑ Threshold"},
    "use_aabb": {"value": False, "label": "Use AABB", "order": 5},
    "aabb_min": {
        "value": {"x": -1, "y": -1, "z": -1},
        "label": "Min",
        "step": 0.001,
        "pad": 4,
        "lock": True,
        "order": 6,
    },
    "aabb_max": {
        "value": {"x": 1, "y": 1, "z": 1},
        "label": "Max",
        "step": 0.001,
        "pad": 4,
        "lock": True,
        "order": 7,
    },
}

DEPTH_DEFAULT = {
    "colormap": {"value": "turbo", "label": "Color Map", "options": COLORMAPS},
    "invert": {"value": False, "label": "Invert"},
    "useClip": {"value": False, "label": "Use Clip"},
    # you can change this on the fly via python.
    "clip": {"value": [-1, 1], "min": -1, "max": 1},
    "gain": {"value": 1.0, "step": 0.001, "pad": 4, "label": "Gain"},
    "offset": {"value": 0.0, "label": "Offset"},
    "normalize": {"value": True, "label": "Normalize"},
    "useAlpha": {"value": False, "label": "Use Alpha"},
    "alphaThreshold": {"value": 0.0, "min": 0, "max": 1, "step": 0.001, "pad": 4, "label": "ɑ Threshold"},
}

FEATURES_DEFAULT = {
    **SE3_DEFAULT,
    # **LOCAL_SE3,
    "use_aabb": {"value": False, "label": "Use AABB", "order": 5},
    "aabb_min": {
        "value": {"x": -1, "y": -1, "z": -1},
        "label": "Min",
        "step": 0.001,
        "pad": 4,
        "lock": True,
        "order": 6,
    },
    "aabb_max": {
        "value": {"x": 1, "y": 1, "z": 1},
        "label": "Max",
        "step": 0.001,
        "pad": 4,
        "lock": True,
        "order": 7,
    },
    "useAlpha": {"value": False, "label": "Use Alpha"},
    "alphaThreshold": {"value": 0.0, "min": 0, "max": 1, "step": 0.001, "pad": 4, "label": "ɑ Threshold"},
    "Reset PCA": {"type": "BUTTON", "etype": "RESET_PCA"},
}
HEATMAP_DEFAULT = {
    **DEPTH_DEFAULT,
    # **LOCAL_SE3,
    "query": {
        "value": "chair",
        "label": "Text Query",
    },
    "negative_queries": {
        "value": "objects\nstuff\nthings\ntexture",
        "label": "Negative Text Queries",
        "placeholder": "use linebreaks to separate",
        "rows": 10,
    },
    "temperature": {
        "value": 1,
        "label": "Temperature",
    },
    # "channel": {
    #     "value": "heatmap",
    #     "options": ["rgb", "depth", "accumulation", "depth-0", "depth-1"],
    # },
    # "alphaChannel": {
    #     "value": "alpha",
    #     "options": ["alpha", "depth", None],
    # },
    # "rotation": {
    #     "value": {"x": 0, "y": 0, "z": 0},
    #     "order": 1,
    #     "lock": True,
    # },
    # "position": {
    #     "value": {"x": 0, "y": 0, "z": 0},
    #     "order": -1,
    #     "lock": True,
    # },
    # "scale": {
    #     "value": 1,
    #     "min": 0.0001,
    #     "step": 0.01,
    #     "label": "Scale",
    #     "order": 2,
    #     "pad": 4,
    # },
}
