import React, { useState } from "react";
import "./css/Formulario_module.css";

function Formulario() {

    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState(null);

    const buscaCep = async () => {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const data = await response.json();
        setEndereco(data);
    };

    const [whatsapp, setWhatsapp] = useState('');

    const apiWhatsapp = async () => {
    const link = "https://api.whatsapp.com/send?phone=000000000&text=sua%20mensagem"

    window.open(link);
    };

    return (
        <div className="wrapper__form">
            <div className="form-box">
                <form>
                    <div className="data-box">
                        <p>Nome Completo</p>
                        <input type="text" />
                    </div>
                    <div className="data-box">
                        <p>Telefone</p>
                        <input type="text" />
                    </div>
                    <div className="data-box">
                        <p>E-mail</p>
                        <input type="text" />
                    </div>
                    <div className="data-box">
                        <p>Endereço</p>
                        <div className="ender-button-box">
                            <button className="ender-button">Buscar</button>
                        </div>
                    </div>
                    <button className="send-button" onClick={apiWhatsapp}>Enviar</button>
                </form>
            </div>
        </div>
    );
};

export default Formulario;