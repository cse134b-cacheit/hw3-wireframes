var chartData = {
   "type": "area",
   "plot": {
      "aspect": "spline",
      "stacked": true,
      "shadow": "false"

   },
   "series": [{
      "values": [35, 42, 67, 89, 25, 34, 67, 85],
      "text": "Gold",
      "background-color-1": "#FFD700",
      "background-color-2": "#FFD700"


   }, {
      "values": [54, 77, 48, 35, 40, 50, 70, 99],
      "text": "Silver",
      "background-color-1": "#C0C0C0",
      "background-color-2": "#C0C0C0"
   }, {
      "values": [28, 57, 43, 56, 78, 99, 67, 28],
      "text": "Platinum",
      "background-color-1": "#E5E4E2",
      "background-color-2": "#E5E4E2"

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
