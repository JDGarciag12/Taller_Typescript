import { series } from "./data.js";
let seriesTbody = document.getElementById("series-tbody");
renderSeriesInTable(series);
function renderSeriesInTable(series) {
    series.forEach(serie => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td><b>${serie.id}</b></td>
                               <td>${serie.name}</td>
                               <td>${serie.channel}</td>
                               <td>${serie.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    });
}
function calcularPromedioSeasons(series) {
    let totalSeasons = 0;
    series.forEach(serie => totalSeasons += serie.seasons);
    return totalSeasons / series.length;
}
renderPromedioSeasons(series);
function renderPromedioSeasons(series) {
    const promedio = calcularPromedioSeasons(series);
    const promedioElement = document.getElementById("average-seasons");
    if (promedioElement) {
        promedioElement.textContent = `Promedio de temporadas: ${promedio.toFixed(2)}`;
    }
}
