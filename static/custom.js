'use strict';

function toggleButton() {

    var toggleIconRotate = document.getElementById("toggleCollapse").classList;

    if(toggleIconRotate.contains("toggle-button")) {
        toggleIconRotate.remove("toggle-button");
    }

    else {
        toggleIconRotate.add("toggle-button");
    }

    if(toggleIconRotate.contains("toggle-collapsed")) {
        toggleIconRotate.remove("toggle-collapsed");
    }

    else {
        toggleIconRotate.add("toggle-collapsed");
    }
}

var ctx = document.getElementById('myChart');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {

        labels: ['January', 'February', 'March', 'April', 'May', 'Jun', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: '#273EAD',
            borderColor: '#000',
            data: [50, 63, 55, 60, 58, 62, 52, 72, 52, 60, 60, 65],
            pointBackgroundColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointBorderWidth: 3,
            pointHoverBorderWidth: 3,
            pointRadius: 8,
            pointHoverRadius: 8,
        }]
    },



    // Configuration options go here
    options: {

        tooltips: {
            callbacks: {
                label: function(tooltipItem) {
                    return "Total Expense: " + " $ " + Number(tooltipItem.yLabel);
                }
            }
        },

        legend: {
            display: false,
            spanGaps: true,
        },

        scales: {
            yAxes: [{
                ticks: {
                    suggestedMin: 55,
                    suggestedMax: 75,
                    padding: 20,
                },

                gridLines: {
                    display:true,
                    drawBorder: false,
                },
            }],

            xAxes: [{

                gridLines: {
                    display:false
                }
            }]
        }

        

    },
});