import { series } from "./data.js";
let seriesTbody = document.getElementById("series-tbody");
let detailContainer = document.getElementById("serie-detail");
renderSeriesInTable(series);
function renderSeriesInTable(series) {
    series.forEach(serie => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td><b>${serie.id}</b></td>
                              <td>${serie.name}</td>
                              <td>${serie.channel}</td>
                              <td>${serie.seasons}</td>`;
        trElement.addEventListener("click", () => {
            highlightSelected(trElement);
            showSerieDetail(serie);
        });
        seriesTbody.appendChild(trElement);
    });
}
function showSerieDetail(serie) {
    detailContainer.innerHTML = `
        <div class="card">
            <img src="${serie.poster}" 
                 class="card-img-top" 
                 alt="${serie.name}"
                 style="max-height: 350px; object-fit: cover;">
            <div class="card-body">
                <h5 class="card-title">${serie.name}</h5>
                <p class="card-text">${serie.description}</p>
                <a href="${serie.webpage}" target="_blank" class="btn btn-primary">
                    Ver más
                </a>
            </div>
        </div>
    `;
}
function highlightSelected(selectedRow) {
    document.querySelectorAll("tbody tr").forEach(tr => {
        tr.classList.remove("table-primary");
    });
    selectedRow.classList.add("table-primary");
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
    promedioElement.textContent = `Promedio de temporadas: ${promedio.toFixed(2)}`;
}
