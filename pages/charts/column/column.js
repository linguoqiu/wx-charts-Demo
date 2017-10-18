var wxCharts = require('../../../utils/wxcharts.js');
var app = getApp();
var columnChart = null;
var chartData = {
    main: {
        title: '总成交量',
        data: [15, 20, 45, 37],
        categories: ['2012', '2013', '2014', '2015']
    }
};
Page({
    data: {
        chartTitle: '总成交量',
        isMainChartDisplay: true
    },
    
    onReady: function (e) {
        var windowWidth = 320;
        try {
          var res = wx.getSystemInfoSync();
          windowWidth = res.windowWidth;
        } catch (e) {
          console.error('getSystemInfoSync failed!');
        }

        columnChart = new wxCharts({
            canvasId: 'columnCanvas',
            type: 'column',
            animation: true,
            //是否合并柱形
            combine: true,
            categories: chartData.main.categories,
            series: [{
                name: '成交量',
                data: chartData.main.data,
                format: function (val, name) {
                    return val.toFixed(2) + '万';
                }
            }, {
              name: '成交量2',
              data: [10,22,33,55],
              format: function (val, name) {
                return val.toFixed(2) + '万';
              }
            }],
            yAxis: {
                format: function (val) {
                    return val + '万';
                },
                title: 'hello',
                min: 0
            },
            xAxis: {
                disableGrid: false,
                type: 'calibration'
            },
            extra: {
                column: {
                    width: 20
                }
            },
            width: windowWidth,
            height: 200,
        });
    }
});