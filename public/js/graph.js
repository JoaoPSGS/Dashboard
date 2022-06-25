function criaTables() {
    var ctx = document.getElementsByClassName("line-chart");
    var chartHraph = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
            datasets: [{
                label: "Número de Acidentes",
                data: [10, 12, 0, 4, 17, 15, 10, 7, 9, 8, 13, 1],
                borderWidth: 6,
                borderColor: 'black',
                backgroundColor: 'transparent'
            }]
        },
        options: {
            title: {
                display: true,
                fontSize: 20,
                text: "Número de Acidentes Mensais"
            },
            labels: {
                fontStyle: "bold"
            }
        }
    });


    var ctx = document.getElementsByClassName("line-chart-one");
    var chartHraph = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["0 - 1", "1 - 3", "3 - 5", "> 5"],
            datasets: [{
                label: 'Número de Acidentes',
                data: [10, 0, 5, 8],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                },

            }
        },
        options: {
            title: {
                display: true,
                fontSize: 20,
                text: "Número de Acidentes por Anos de Experiência"
            },
            labels: {
                fontStyle: "bold"
            }
        }
    });

    var ctx = document.getElementsByClassName("line-chart-two");
    var chartHraph = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["R$1000,00", "R$1001,00 - R$2500,00", "R$2501,00 - R$5000,00", "> R$5000,00"],
            datasets: [{
                label: 'Número de Acidentes',
                data: [10, 1, 5, 8],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                hoverOffset: 4
            }]
        },
        options: {
            title: {
                display: true,
                fontSize: 20,
                text: "Número de Acidentes por Renda"
            },
            labels: {
                fontStyle: "bold"
            }
        }
    });
}