/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function getPlotData() {
  const data = {
    data: [
      {
        type: 'scatter',
        x: [
          '0_0',
          '0_1',
          '0_10',
          '0_11',
          '0_12',
          '0_13',
          '0_14',
          '0_15',
          '0_16',
          '0_17',
          '0_18',
          '0_19',
          '0_2',
          '0_20',
          '0_21',
          '0_22',
          '0_23',
          '0_24',
          '0_25',
          '0_26',
          '0_27',
          '0_28',
          '0_29',
          '0_3',
          '0_30',
          '0_31',
          '0_32',
          '0_33',
          '0_34',
          '0_35',
          '0_36',
          '0_37',
          '0_38',
          '0_39',
          '0_4',
          '0_5',
          '0_6',
          '0_7',
          '0_8',
          '0_9',
        ],
        y: [
          24.01006574699846,
          26.41377793548419,
          31.33356125186804,
          32.76625916368758,
          98.47004975763232,
          21.15183877494833,
          4.634259551127094,
          43.02946430348122,
          165.98753418392286,
          15.91397040802947,
          44.910843040074106,
          9.414481706968537,
          22.384755967639723,
          40.477956775406135,
          34.5171971981692,
          20.94190882624772,
          79.73701417580827,
          83.87665268473569,
          21.216944431443586,
          98.3596463462363,
          26.44221320937291,
          130.4456855183059,
          4.467263905698587,
          18.147805256576735,
          70.3721619649341,
          131.3546123209113,
          86.93577940409625,
          18.18022617398734,
          18.52425808948953,
          16.196984684749587,
          60.29766495694,
          34.65569605074377,
          10.439166459988684,
          66.21639302466514,
          140.10170525598437,
          7.118877468942436,
          8.275844974635653,
          33.84859687026936,
          136.30938105362594,
          2.5955611550721045,
        ],
        marker: {color: 'rgba(128,177,211,1)'},
        mode: 'markers',
        name: 'In-sample',
        text: [
          '<b>Arm 0_0</b><br><br>metric_a: 24.01 [20.979, 27.041]<br><br><em>Parameterization:</em><br>x1: 2.5<br>x2: 7.5',
          '<b>Arm 0_1</b><br><br>metric_a: 26.414 [23.324, 29.504]<br><br><em>Parameterization:</em><br>x1: 6.25<br>x2: 3.75',
          '<b>Arm 0_10</b><br><br>metric_a: 31.334 [28.085, 34.583]<br><br><em>Parameterization:</em><br>x1: 1.5625<br>x2: 8.4375',
          '<b>Arm 0_11</b><br><br>metric_a: 32.766 [29.670, 35.862]<br><br><em>Parameterization:</em><br>x1: -0.3125<br>x2: 2.8125',
          '<b>Arm 0_12</b><br><br>metric_a: 98.47 [95.193, 101.747]<br><br><em>Parameterization:</em><br>x1: 7.1875<br>x2: 10.3125',
          '<b>Arm 0_13</b><br><br>metric_a: 21.152 [17.813, 24.491]<br><br><em>Parameterization:</em><br>x1: 3.4375<br>x2: 6.5625',
          '<b>Arm 0_14</b><br><br>metric_a: 4.634 [0.773, 8.496]<br><br><em>Parameterization:</em><br>x1: -4.0625<br>x2: 14.0625',
          '<b>Arm 0_15</b><br><br>metric_a: 43.029 [39.766, 46.293]<br><br><em>Parameterization:</em><br>x1: -3.59375<br>x2: 7.03125',
          '<b>Arm 0_16</b><br><br>metric_a: 165.988 [162.193, 169.783]<br><br><em>Parameterization:</em><br>x1: 3.90625<br>x2: 14.53125',
          '<b>Arm 0_17</b><br><br>metric_a: 15.914 [12.442, 19.386]<br><br><em>Parameterization:</em><br>x1: 7.65625<br>x2: 3.28125',
          '<b>Arm 0_18</b><br><br>metric_a: 44.911 [41.537, 48.285]<br><br><em>Parameterization:</em><br>x1: 0.15625<br>x2: 10.78125',
          '<b>Arm 0_19</b><br><br>metric_a: 9.414 [6.461, 12.368]<br><br><em>Parameterization:</em><br>x1: 2.03125<br>x2: 1.40625',
          '<b>Arm 0_2</b><br><br>metric_a: 22.385 [19.322, 25.448]<br><br><em>Parameterization:</em><br>x1: -1.25<br>x2: 11.25',
          '<b>Arm 0_20</b><br><br>metric_a: 40.478 [36.771, 44.185]<br><br><em>Parameterization:</em><br>x1: 9.53125<br>x2: 8.90625',
          '<b>Arm 0_21</b><br><br>metric_a: 34.517 [31.745, 37.289]<br><br><em>Parameterization:</em><br>x1: 5.78125<br>x2: 5.15625',
          '<b>Arm 0_22</b><br><br>metric_a: 20.942 [18.100, 23.784]<br><br><em>Parameterization:</em><br>x1: -1.71875<br>x2: 12.65625',
          '<b>Arm 0_23</b><br><br>metric_a: 79.737 [76.277, 83.197]<br><br><em>Parameterization:</em><br>x1: -2.65625<br>x2: 2.34375',
          '<b>Arm 0_24</b><br><br>metric_a: 83.877 [80.524, 87.229]<br><br><em>Parameterization:</em><br>x1: 4.84375<br>x2: 9.84375',
          '<b>Arm 0_25</b><br><br>metric_a: 21.217 [17.657, 24.776]<br><br><em>Parameterization:</em><br>x1: 8.59375<br>x2: 6.09375',
          '<b>Arm 0_26</b><br><br>metric_a: 98.36 [94.568, 102.151]<br><br><em>Parameterization:</em><br>x1: 1.09375<br>x2: 13.59375',
          '<b>Arm 0_27</b><br><br>metric_a: 26.442 [23.485, 29.399]<br><br><em>Parameterization:</em><br>x1: -0.78125<br>x2: 4.21875',
          '<b>Arm 0_28</b><br><br>metric_a: 130.446 [127.297, 133.594]<br><br><em>Parameterization:</em><br>x1: 6.71875<br>x2: 11.71875',
          '<b>Arm 0_29</b><br><br>metric_a: 4.467 [0.930, 8.005]<br><br><em>Parameterization:</em><br>x1: 2.96875<br>x2: 0.46875',
          '<b>Arm 0_3</b><br><br>metric_a: 18.148 [14.813, 21.483]<br><br><em>Parameterization:</em><br>x1: 0.625<br>x2: 5.625',
          '<b>Arm 0_30</b><br><br>metric_a: 70.372 [66.642, 74.102]<br><br><em>Parameterization:</em><br>x1: -4.53125<br>x2: 7.96875',
          '<b>Arm 0_31</b><br><br>metric_a: 131.355 [127.569, 135.140]<br><br><em>Parameterization:</em><br>x1: -4.296875<br>x2: 3.984375',
          '<b>Arm 0_32</b><br><br>metric_a: 86.936 [83.319, 90.552]<br><br><em>Parameterization:</em><br>x1: 3.203125<br>x2: 11.484375',
          '<b>Arm 0_33</b><br><br>metric_a: 18.18 [14.372, 21.989]<br><br><em>Parameterization:</em><br>x1: 6.953125<br>x2: 0.234375',
          '<b>Arm 0_34</b><br><br>metric_a: 18.524 [15.197, 21.851]<br><br><em>Parameterization:</em><br>x1: -0.546875<br>x2: 7.734375',
          '<b>Arm 0_35</b><br><br>metric_a: 16.197 [13.079, 19.315]<br><br><em>Parameterization:</em><br>x1: 1.328125<br>x2: 2.109375',
          '<b>Arm 0_36</b><br><br>metric_a: 60.298 [57.002, 63.593]<br><br><em>Parameterization:</em><br>x1: 8.828125<br>x2: 9.609375',
          '<b>Arm 0_37</b><br><br>metric_a: 34.656 [31.590, 37.721]<br><br><em>Parameterization:</em><br>x1: 5.078125<br>x2: 5.859375',
          '<b>Arm 0_38</b><br><br>metric_a: 10.439 [7.086, 13.792]<br><br><em>Parameterization:</em><br>x1: -2.421875<br>x2: 13.359375',
          '<b>Arm 0_39</b><br><br>metric_a: 66.216 [62.601, 69.831]<br><br><em>Parameterization:</em><br>x1: -1.484375<br>x2: 1.171875',
          '<b>Arm 0_4</b><br><br>metric_a: 140.102 [136.284, 143.920]<br><br><em>Parameterization:</em><br>x1: 8.125<br>x2: 13.125',
          '<b>Arm 0_5</b><br><br>metric_a: 7.119 [3.477, 10.761]<br><br><em>Parameterization:</em><br>x1: 4.375<br>x2: 1.875',
          '<b>Arm 0_6</b><br><br>metric_a: 8.276 [4.769, 11.783]<br><br><em>Parameterization:</em><br>x1: -3.125<br>x2: 9.375',
          '<b>Arm 0_7</b><br><br>metric_a: 33.849 [30.481, 37.216]<br><br><em>Parameterization:</em><br>x1: -2.1875<br>x2: 4.6875',
          '<b>Arm 0_8</b><br><br>metric_a: 136.309 [132.952, 139.667]<br><br><em>Parameterization:</em><br>x1: 5.3125<br>x2: 12.1875',
          '<b>Arm 0_9</b><br><br>metric_a: 2.596 [-1.285, 6.476]<br><br><em>Parameterization:</em><br>x1: 9.0625<br>x2: 0.9375',
        ],
        hoverinfo: 'text',
        error_y: {
          type: 'data',
          array: [
            3.0311248278151,
            3.089966480964467,
            3.248951881974176,
            3.0961120225496974,
            3.2766342879585926,
            3.339034505865921,
            3.861339371704132,
            3.263057810604587,
            3.7949738876873202,
            3.4718866697892667,
            3.373702473405172,
            2.9530479379151195,
            3.062904041032589,
            3.7067745247908115,
            2.7718078217229403,
            2.8420128693213482,
            3.4599345369841576,
            3.3525744440720255,
            3.559458709332139,
            3.7916222912835753,
            2.957075558190416,
            3.14870149920706,
            3.5375624972629023,
            3.334995697931096,
            3.730308908293241,
            3.7856183269249066,
            3.6164962567028844,
            3.8083047233426415,
            3.3272072390792453,
            3.118266086306283,
            3.2957451624104963,
            3.0657533886765695,
            3.352733058393969,
            3.615010474026684,
            3.8180345450179765,
            3.6416465289370503,
            3.5071283187793605,
            3.367589883644305,
            3.3575225888536915,
            3.880081864227598,
          ],
          color: 'rgba(128,177,211,0.4)',
        },
        visible: true,
        legendgroup: 'In-sample',
        showlegend: true,
      },
    ],
    layout: {
      hovermode: 'closest',
      updatemenus: [
        {
          x: 1.25,
          y: 0.67,
          buttons: [
            {
              args: [
                {
                  'xaxis.categoryorder': 'array',
                  'xaxis.categoryarray': [
                    '0_0',
                    '0_1',
                    '0_2',
                    '0_3',
                    '0_4',
                    '0_5',
                    '0_6',
                    '0_7',
                    '0_8',
                    '0_9',
                    '0_10',
                    '0_11',
                    '0_12',
                    '0_13',
                    '0_14',
                    '0_15',
                    '0_16',
                    '0_17',
                    '0_18',
                    '0_19',
                    '0_20',
                    '0_21',
                    '0_22',
                    '0_23',
                    '0_24',
                    '0_25',
                    '0_26',
                    '0_27',
                    '0_28',
                    '0_29',
                    '0_30',
                    '0_31',
                    '0_32',
                    '0_33',
                    '0_34',
                    '0_35',
                    '0_36',
                    '0_37',
                    '0_38',
                    '0_39',
                  ],
                },
              ],
              label: 'Name',
              method: 'relayout',
            },
            {
              args: [
                {
                  'xaxis.categoryorder': 'array',
                  'xaxis.categoryarray': [
                    '0_9',
                    '0_29',
                    '0_14',
                    '0_5',
                    '0_6',
                    '0_19',
                    '0_38',
                    '0_17',
                    '0_35',
                    '0_3',
                    '0_33',
                    '0_34',
                    '0_22',
                    '0_13',
                    '0_25',
                    '0_2',
                    '0_0',
                    '0_1',
                    '0_27',
                    '0_10',
                    '0_11',
                    '0_7',
                    '0_21',
                    '0_37',
                    '0_20',
                    '0_15',
                    '0_18',
                    '0_36',
                    '0_39',
                    '0_30',
                    '0_23',
                    '0_24',
                    '0_32',
                    '0_26',
                    '0_12',
                    '0_28',
                    '0_31',
                    '0_8',
                    '0_4',
                    '0_16',
                  ],
                },
              ],
              label: 'Effect Size',
              method: 'relayout',
            },
          ],
          yanchor: 'middle',
          xanchor: 'left',
        },
      ],
      yaxis: {zerolinecolor: 'red', title: 'metric_a'},
      xaxis: {
        tickangle: 45,
        categoryorder: 'array',
        categoryarray: [
          '0_0',
          '0_1',
          '0_2',
          '0_3',
          '0_4',
          '0_5',
          '0_6',
          '0_7',
          '0_8',
          '0_9',
          '0_10',
          '0_11',
          '0_12',
          '0_13',
          '0_14',
          '0_15',
          '0_16',
          '0_17',
          '0_18',
          '0_19',
          '0_20',
          '0_21',
          '0_22',
          '0_23',
          '0_24',
          '0_25',
          '0_26',
          '0_27',
          '0_28',
          '0_29',
          '0_30',
          '0_31',
          '0_32',
          '0_33',
          '0_34',
          '0_35',
          '0_36',
          '0_37',
          '0_38',
          '0_39',
        ],
      },
      annotations: [
        {
          x: 1.18,
          y: 0.72,
          xref: 'paper',
          yref: 'paper',
          text: 'Sort By',
          showarrow: false,
          yanchor: 'middle',
        },
      ],
      font: {size: 10},
    },
  };
  return {
    layout: data['layout'],
    traces: data['data'],
  };
}

const fittedPlotData = getPlotData();

console.log(fittedPlotData);

Plotly.newPlot('fitted', fittedPlotData['traces'], fittedPlotData['layout'], {
  responsive: true,
  showLink: false,
});
