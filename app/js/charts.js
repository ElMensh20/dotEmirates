$(document).ready(function() {  
    var chart = {
       type: 'area'
    };
    var xAxis = {
       categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
       tickmarkPlacement: 'on',
       title: {
          enabled: false
       }
    };
    var yAxis = {
       labels: {
          formatter: function () {
             return this.value / 1000;
          }
       },
       title: {
        enabled: false
     }
    };
    // var tooltip = {
    //    shared: true,
    //    valueSuffix: ' millions'
    // };
    var plotOptions = {
       area: {
          stacking: 'normal',
          lineColor: '#666666',
          lineWidth: 1,

          marker: {
             lineWidth: 1,
             lineColor: '#666666'
          }
       }
    };
    // var credits = {
    //    enabled: false
    // };
    var series = [
       {
          name: 'Africa',
          data: [106, 107, 111, 133, 221, 767, 1766],
          color:'#44444462'
       }, 
       {
          name: 'Europe',
          data: [163, 203, 276, 408, 547, 729, 628],
          color:'#8D9542'
       }, 
       {
          name: 'America',
          data: [18, 31, 54, 156, 339, 818, 1201],
          color:'#434343'
       }
    ];     
    var legends= {
        enabled: false
    };
    var json = {};   
    json.chart = chart; 
    json.xAxis = xAxis;
    json.yAxis = yAxis;
    json.legends=legends;
    // json.tooltip = tooltip;
    json.plotOptions = plotOptions;
    // json.credits = credits;
    json.series = series;
    $('#stock_graph_container').highcharts(json);
 });