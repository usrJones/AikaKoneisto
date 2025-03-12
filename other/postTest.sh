#!/bin/bash

curl -X POST http://localhost:3000/taskRow \
     -H "Content-Type: application/json" \
     -d '{
           "created_timestamp": "2025-03-12T18:43:46Z",
           "start_timestamp": "2025-03-12T17:00:00Z",
           "end_timestamp": "2025-03-12T18:00:00Z",
           "hour_amount": 1.00,
           "task": "TEEST TAAAASK 01",
           "project": "TEEEST RRRRROJEKT"
         }'