import React from "react";
import "./css/Formulario_module.css";

function Formulario () {
    return (
        <form>
            <div className="data-box">
            <p>Nome Completo</p>
            <input type="text"/>
            </div>
            <div className="data-box">
            <p>Telefone</p>
            <input type="text"/>
            </div>
            <div className="data-box">
            <p>E-mail</p>
            <input type="text"/>
            </div>
            <div className="data-box">
            <p>Endereço</p>
            <input type="text"/>
            </div>
        </form>
    );
};

export default Formulario;