var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance-",
      "name": "entrance ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.22926817204282024,
        "pitch": -0.09358912662279728,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -0.32552703095727686,
          "pitch": -0.0034535016118528716,
          "rotation": 0,
          "target": "4-reception-"
        },
        {
          "yaw": -1.2555256417234766,
          "pitch": 0.0032363892433942,
          "rotation": 0,
          "target": "1-outdoor-show"
        },
        {
          "yaw": 1.0497267373699692,
          "pitch": 0.036005079082862324,
          "rotation": 5.497787143782138,
          "target": "3-backyard"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-outdoor-show",
      "name": "outdoor show",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9320612061555487,
          "pitch": 0.022955336737847887,
          "rotation": 6.283185307179586,
          "target": "0-entrance-"
        },
        {
          "yaw": 0.5691084534466366,
          "pitch": 0.06382313366483494,
          "rotation": 0.7853981633974483,
          "target": "2-cafe"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-cafe",
      "name": "cafe",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.45778816917268195,
          "pitch": -0.02013422104856666,
          "rotation": 0.7853981633974483,
          "target": "3-backyard"
        },
        {
          "yaw": 0.34761344841613706,
          "pitch": 0.06637011805682036,
          "rotation": 0.7853981633974483,
          "target": "4-reception-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-backyard",
      "name": "Backyard",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.20040478465080191,
          "pitch": 0.0135644404234192,
          "rotation": 0.7853981633974483,
          "target": "0-entrance-"
        },
        {
          "yaw": 1.5063911209550218,
          "pitch": 0.013624771730039953,
          "rotation": 0.7853981633974483,
          "target": "2-cafe"
        },
        {
          "yaw": 1.0915446167408458,
          "pitch": 0.13836822384292624,
          "rotation": 5.497787143782138,
          "target": "5-waiting-area-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-reception-",
      "name": "reception ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.008928546275534,
          "pitch": 0.08768539848639278,
          "rotation": 0,
          "target": "0-entrance-"
        },
        {
          "yaw": 1.9650415153517997,
          "pitch": 0.06648221635032847,
          "rotation": 0,
          "target": "5-waiting-area-"
        },
        {
          "yaw": 0.10125964429948908,
          "pitch": -0.0014022205061259285,
          "rotation": 0.7853981633974483,
          "target": "2-cafe"
        },
        {
          "yaw": -0.8957030721093204,
          "pitch": 0.05451294301907339,
          "rotation": 0,
          "target": "6-masterpiece-"
        },
        {
          "yaw": 1.4702859521846428,
          "pitch": -0.08332008099086963,
          "rotation": 0,
          "target": "7-upstairs-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-waiting-area-",
      "name": "waiting area ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.25606980146601543,
          "pitch": 0.07694052410971608,
          "rotation": 0,
          "target": "4-reception-"
        },
        {
          "yaw": 1.213141261290458,
          "pitch": 0.018344298368585754,
          "rotation": 0,
          "target": "3-backyard"
        },
        {
          "yaw": 0.5165037287230394,
          "pitch": 0.016837030256247942,
          "rotation": 0,
          "target": "7-upstairs-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-masterpiece-",
      "name": "masterpiece ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.3001960166694655,
          "pitch": 0.09398317098307096,
          "rotation": 0,
          "target": "4-reception-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-upstairs-",
      "name": "upstairs ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0509669997862296,
          "pitch": 0.1870381313538214,
          "rotation": 3.141592653589793,
          "target": "4-reception-"
        },
        {
          "yaw": -0.5219610763358826,
          "pitch": 0.03103881073321446,
          "rotation": 5.497787143782138,
          "target": "8-skylight-"
        },
        {
          "yaw": -2.6194588412560975,
          "pitch": 0.01784426437915343,
          "rotation": 0,
          "target": "9-component-showcase"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-skylight-",
      "name": "skylight ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.39131913212447245,
          "pitch": 0.021196737561686163,
          "rotation": 0.7853981633974483,
          "target": "7-upstairs-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-component-showcase",
      "name": "component showcase",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.3161191682600304,
        "pitch": 0.2205159769845153,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -0.054891242918387206,
          "pitch": 0.0731589657678704,
          "rotation": 0,
          "target": "7-upstairs-"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "volvo showroom",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
