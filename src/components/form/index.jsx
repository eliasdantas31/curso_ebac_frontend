import { useState } from "react";
import style from "./Form.module.css";

const Form = ({ setImc }) => {
    const [altura, setAltura] = useState("");
    const [peso, setPeso] = useState("");

    const calcularIMC = () => {
        if (!altura || !peso) return;
        const resultado = peso / (altura * altura);
        setImc(resultado.toFixed(2)); // manda para o "pai"
    };

    const limpar = () => {
        setAltura("");
        setPeso("");
        setImc(null); // limpa no "pai" também
    };

    return (
        <div className={style.container}>
            <div className={style.text}>
                <h1>Calculadora IMC</h1>
                <h2>O que é IMC</h2>
                <p>
                    IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela
                    Organização Mundial de Saúde para calcular o peso ideal de cada
                    pessoa.
                    <br />
                    <br />
                    O índice é calculado da seguinte maneira: divide-se o peso do paciente
                    pela sua altura elevada ao quadrado. Diz-se que o indivíduo tem peso
                    normal quando o resultado do IMC está entre 18,5 e 24,9.
                    <br />
                    <br />
                    Quer descobrir seu IMC? Insira seu peso e sua altura nos campos abaixo
                    e compare com os índices da tabela. Importante: siga os exemplos e use
                    pontos como separadores.
                </p>
            </div>
            <form className={style.form} onSubmit={(e) => e.preventDefault()}>
                <div>
                    <div>
                        <h4>Altura (ex.: 1,70)</h4>
                        <input
                            required
                            type="number"
                            step="0.01"
                            placeholder="Metros"
                            value={altura}
                            onChange={(e) => setAltura(e.target.value)}
                        />
                    </div>
                    <div>
                        <h4>Peso (ex.: 69,2)</h4>
                        <input
                            required
                            type="number"
                            step="0.1"
                            placeholder="Quilos"
                            value={peso}
                            onChange={(e) => setPeso(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <button type="button" onClick={calcularIMC}>
                        Calcular
                    </button>
                    <button type="button" onClick={limpar}>
                        Limpar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;