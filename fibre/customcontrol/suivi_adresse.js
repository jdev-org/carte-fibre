const layerid = "suivi_adresse";
const cc = (function() {
    /*
     * Private
     */

    var _initialized = false;

    return {
        /*
         * Public
         */

        init: function() {
            
            if (!_initialized) {
                let lgdcustom = `
                    <div id="fibreLgdCustom">
                        <div class="lgdCustom__title">Avancement du déploiement de la fibre optique en Bretagne</div>
                        <div class="lgdCustom__list">
                            <div>
                                <span class="lgdCustom__symbol" style="color:#60C1C5">⬤</span>
                                <span>Disponible à la commercialisation</span>
                            </div>
                            <div>
                                <span class="lgdCustom__symbol" style="color:#164C7E">⬤</span>
                                <span>Travaux en cours d'achèvement</span>
                            </div>
                            <div>
                                <span class="lgdCustom__symbol" style="color:#F9C488">⬤</span>
                                <span>Travaux commencés</span>
                            </div>
                            <div>
                                <span class="lgdCustom__symbol" style="color:#FF9088">⬤</span>
                                <span>En cours d'étude</span>
                            </div>
                            <div>
                                <span class="lgdCustom__symbol" style="color:#A7A5A5">⬤</span>
                                <span>Déploiement suspendu</span>
                            </div>
                        </div>
                        <div><i><small>Mise à jour le 01/04/2025</small></i></div>
                    </div>
                `
                let lgdLayer = document.querySelector('.list-group-item[data-layerid="suivi_adresse"]');
                lgdLayer.insertAdjacentHTML("afterbegin", lgdcustom); 
                _initialized = true;
            };
                   
        },

        destroy: function() {
            // mandatory - code executed when layer panel is closed
            _initialized = false;
        }
    };

}());
new CustomControl(layerid, cc.init, cc.destroy);