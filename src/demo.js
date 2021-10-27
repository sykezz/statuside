export default {
    demo_systems: [
        {
            "name": "Website",
            "level": 1
        },
        {
            "name": "API",
            "level": 3
        },
        {
            "name": "CDN",
            "level": 4
        },
    ],
    demo_incidents: [
        {
            "id": "asdasdwewet20",
            "name": "API Deployment",
            "open": true,
            "maintenance": true,
            "level": 3,
            "systems": ["website"],
            "date": "2021-10-24",
            "timestamp": 1635019353,
            "timestamp2": 1633879986,
            "activities": [
                {
                    "timestamp": "2021-10-24T17:04:27.260Z",
                    "status": "Scheduled",
                    "message": "We're going to deploy a new version of the API. Intermittent issue may occuring during the maintenance."
                }
            ]
        },
        {
            "id": "asdasdwewet21",
            "name": "Network Maintenance",
            "open": true,
            "maintenance": true,
            "level": 5,
            "systems": ["api", "dns"],
            "date": "2021-10-24",
            "timestamp": 1635019362,
            "timestamp2": 1633812768,
            "activities": [
                {
                    "timestamp": "2021-10-24T17:04:27.260Z",
                    "status": "Scheduled",
                    "message": "We're going to upgrade our network architecture. Intermittent network issues may occur during the maintenance."
                }
            ]
        },
        {
            "id": "asdasdwewet23",
            "name": "testing",
            "open": false,
            "maintenance": false,
            "level": 5,
            "systems": ["api", "dns"],
            "date": "2021-10-17",
            "timestamp": 1634457744,
            "activities": [
                {
                    "timestamp": "2021-10-08T17:04:27.260Z",
                    "status": "investigating",
                    "message": "just found out"
                }
            ]
        },
        {
            "id": "asdasdwewet24",
            "name": "testing",
            "open": false,
            "maintenance": false,
            "level": 5,
            "systems": ["api", "dns"],
            "date": "2021-10-17",
            "timestamp": 1634462849,
            "activities": [
                {
                    "timestamp": "2021-10-08T17:04:27.260Z",
                    "status": "investigating",
                    "message": "just found out"
                }
            ]
        },
        {
            "id": "asdasdwewet26",
            "name": "testing",
            "open": false,
            "maintenance": false,
            "level": 5,
            "systems": ["api", "dns"],
            "date": "2021-10-16",
            "timestamp": 1634389344,
            "activities": [
                {
                    "timestamp": "2021-10-08T17:04:27.260Z",
                    "status": "investigating",
                    "message": "just found out"
                },
                {
                    "timestamp": "2021-10-09T17:04:27.260Z",
                    "status": "resolved",
                    "message": "we fixed it boys"
                }
            ]
        },
        {
            "id": "asdasdwewet27",
            "name": "testing",
            "open": false,
            "maintenance": false,
            "level": 4,
            "systems": ["api", "dns"],
            "date": "2021-10-14",
            "timestamp": 1634216544,
            "activities": [
                {
                    "timestamp": "2021-10-08T17:04:27.260Z",
                    "status": "investigating",
                    "message": "just found out"
                },
                {
                    "timestamp": "2021-10-09T17:04:27.260Z",
                    "status": "resolved",
                    "message": "we fixed it boys"
                }
            ]
        }
    ]
}