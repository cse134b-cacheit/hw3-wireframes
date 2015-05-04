var chartData = {
   "type": "area",
   "plot": {
      "aspect": "spline",
      "stacked": true,
      "shadow": "false"

   },
   "series": [{
      "values": [35, 42, 67, 89, 25, 34, 67, 85],
      "text": "Gold"
   }, {
      "values": [54, 77, 48, 35, 40, 50, 70, 99],
      "text": "Silver"
   }, {
      "values": [28, 57, 43, 56, 78, 99, 67, 28],
      "text": "Platinum"
   }],
   "legend": {},
   "scale-y": {
      "label": {
         "text": "Price"
      }

   },
   "scale-x": {
      "label": {
         "text": "Time"
      }
   }
};
window.onload = function() {
   zingchart.render({
      id: 'chartDiv',
      height: '360px',
      width: 'auto',
      data: chartData
   });
};
