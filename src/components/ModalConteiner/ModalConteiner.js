 import React from 'react'


const ModalConteiner = () => {

    return (
        <div>
            {/* // <!-- Modal --> */}
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Mi carrito</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div id="contenedor-carrito">
                        </div>
                        <div>
                            <p class="precio-producto"><b> Precio Total:<span id="precio-total">0</span></b></p>
                        </div>
                        <div class="modal-footer">

                            <button type="button" class="btn-modal btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" id="btn-vaciar" class="btn-modal btn-primary">Vaciar</button>
                            <button type="button" id="btn-comprar" class="btn-modal btn-primary">Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalConteiner

