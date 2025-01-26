// Prepare demo data with Wikipedia links for each state
const data = [
    { key: 'in-py', value: 0, name: 'Puducherry', link: 'https://en.wikipedia.org/wiki/Puducherry' },
    { key: 'in-ld', value: 1, name: 'Lakshadweep', link: 'https://en.wikipedia.org/wiki/Lakshadweep' },
    { key: 'in-wb', value: 2, name: 'West Bengal', link: 'https://en.wikipedia.org/wiki/West_Bengal' },
    { key: 'in-or', value: 3, name: 'Odisha', link: 'https://en.wikipedia.org/wiki/Odisha' },
    { key: 'in-br', value: 4, name: 'Bihar', link: 'https://en.wikipedia.org/wiki/Bihar' },
    { key: 'in-sk', value: 5, name: 'Sikkim', link: 'https://en.wikipedia.org/wiki/Sikkim' },
    { key: 'in-ct', value: 6, name: 'Chhattisgarh', link: 'https://en.wikipedia.org/wiki/Chhattisgarh' },
    { key: 'in-tn', value: 7, name: 'Tamil Nadu', link: 'https://en.wikipedia.org/wiki/Tamil_Nadu' },
    { key: 'in-mp', value: 8, name: 'Madhya Pradesh', link: 'https://en.wikipedia.org/wiki/Madhya_Pradesh' },
    { key: 'in-ga', value: 10, name: 'Goa', link: 'https://en.wikipedia.org/wiki/Goa' },
    { key: 'in-nl', value: 11, name: 'Nagaland', link: 'https://en.wikipedia.org/wiki/Nagaland' },
    { key: 'in-mn', value: 12, name: 'Manipur', link: 'https://en.wikipedia.org/wiki/Manipur' },
    { key: 'in-ar', value: 13, name: 'Arunachal Pradesh', link: 'https://en.wikipedia.org/wiki/Arunachal_Pradesh' },
    { key: 'in-mz', value: 14, name: 'Mizoram', link: 'https://en.wikipedia.org/wiki/Mizoram' },
    { key: 'in-tr', value: 15, name: 'Tripura', link: 'https://en.wikipedia.org/wiki/Tripura' },
    { key: 'in-dl', value: 17, name: 'Delhi', link: 'https://en.wikipedia.org/wiki/Delhi' },
    { key: 'in-hr', value: 18, name: 'Haryana', link: 'https://en.wikipedia.org/wiki/Haryana' },
    { key: 'in-ch', value: 19, name: 'Chandigarh', link: 'https://en.wikipedia.org/wiki/Chandigarh' },
    { key: 'in-hp', value: 20, name: 'Himachal Pradesh', link: 'https://en.wikipedia.org/wiki/Himachal_Pradesh' },
    { key: 'in-jk', value: 21, name: 'Jammu and Kashmir', link: 'https://en.wikipedia.org/wiki/Jammu_and_Kashmir_(union_territory)' },
    { key: 'in-kl', value: 22, name: 'Kerala', link: 'https://en.wikipedia.org/wiki/Kerala' },
    { key: 'in-ka', value: 23, name: 'Karnataka', link: 'https://en.wikipedia.org/wiki/Karnataka' },
    { key: 'in-mh', value: 25, name: 'Maharashtra', link: 'https://en.wikipedia.org/wiki/Maharashtra' },
    { key: 'in-as', value: 26, name: 'Assam', link: 'https://en.wikipedia.org/wiki/Assam' },
    { key: 'in-ap', value: 27, name: 'Andhra Pradesh', link: 'https://en.wikipedia.org/wiki/Andhra_Pradesh' },
    { key: 'in-ml', value: 28, name: 'Meghalaya', link: 'https://en.wikipedia.org/wiki/Meghalaya' },
    { key: 'in-pb', value: 29, name: 'Punjab', link: 'https://en.wikipedia.org/wiki/Punjab,_India' },
    { key: 'in-rj', value: 30, name: 'Rajasthan', link: 'https://en.wikipedia.org/wiki/Rajasthan' },
    { key: 'in-up', value: 31, name: 'Uttar Pradesh', link: 'https://en.wikipedia.org/wiki/Uttar_Pradesh' },
    { key: 'in-ut', value: 32, name: 'Uttarakhand', link: 'https://en.wikipedia.org/wiki/Uttarakhand' },
    { key: 'in-jh', value: 33, name: 'Jharkhand', link: 'https://en.wikipedia.org/wiki/Jharkhand' },
    { key: 'in-gj', value: 34, name: 'Gujarat', link: 'https://en.wikipedia.org/wiki/Gujarat' }
];

// Create the chart
Highcharts.mapChart('container', {
    chart: {
        map: 'countries/in/in-all'
    },

    title: {
        text: ''
    },

    legend: {
        enabled: false
    },

    tooltip: {
        formatter: function () {
            const point = this.point;
            return `<b>${point.name}</b><br>Value: ${point.value}`;
        }
    },

    plotOptions: {
        series: {
            point: {
                events: {
                    click: function () {
                        const link = this.options.link;
                        if (link) {
                            window.open(link, '_blank');
                        }
                    }
                }
            }
        }
    },

    series: [{
        data: data.map(item => ({
            'hc-key': item.key,
            value: item.value,
            name: item.name,
            link: item.link
        })),
        allowPointSelect: true,
        cursor: 'pointer',
        states: {
            hover: {
                color: Highcharts.getOptions().colors[Math.floor(Math.random() * 10)]
            }
        },
        dataLabels: {
            enabled: false,
            format: '{point.name}'
        }
    }]
});
